import SwaggerParser from '@apidevtools/swagger-parser'
import { Octokit } from '@octokit/rest'
import { exec, ExecException } from 'child_process'
import dotenv from 'dotenv'
import env from 'env-var'
import fs, { promises as fsPromises } from 'fs'
import { task } from 'gulp'
import { camelCase, has, isEmpty, upperFirst } from 'lodash'
import path from 'path'
import { array, Codec, GetType, nullType, oneOf, string } from 'purify-ts/Codec'

import { Decoder } from './utils/decoder'

const GithubObject = Codec.interface({
  name: string,
  path: string,
  download_url: oneOf([string, nullType]),
})
type GithubObject = GetType<typeof GithubObject>

interface APIModel extends GithubObject {
  command: string
  modelName: string
  outputPath: string
}

// configure dotenv and get github token
dotenv.config()
const GITHUB_TOKEN = env.get('GITHUB_TOKEN').required().asString()

// Using authentication to increases Github API rate limit.
const octokit = new Octokit({ auth: GITHUB_TOKEN })
const OWNER = 'amzn'
const REPO = 'selling-partner-api-models'
const REDUNDANT_FILES: string[] = ['.gitignore', '.openapi-generator-ignore', 'git_push.sh']
const REDUNDANT_DIRECTORIES: string[] = ['.openapi-generator']
const EXCLUDE_EXPORTED_OBJECTS = new Set(['ErrorList', 'Error'])

async function hasNewCommitsSinceYesterday(repoPath = 'models'): Promise<boolean> {
  const date = new Date(new Date().toISOString())
  date.setUTCHours(-24, 0, 0, 0)

  const { data } = await octokit.repos.listCommits({
    owner: OWNER,
    repo: REPO,
    path: repoPath,
    since: date.toISOString(),
    per_page: 1,
  })

  return data.length > 0
}

async function fetchContentsByPath(repoPath = 'models'): Promise<GithubObject[]> {
  return octokit.repos
    .getContent({
      owner: OWNER,
      repo: REPO,
      path: repoPath,
    })
    .then((response) =>
      Array.isArray(response.data)
        ? Decoder.decode(array(GithubObject), response.data)
        : [Decoder.decode(GithubObject, response.data)],
    )
}

function generateAPIModel(model: GithubObject): APIModel {
  const modelName = path.basename(path.dirname(model.path))
  const outputPath = `src/api-models/${modelName}`
  const command = `openapi-generator-cli generate -g typescript-axios --additional-properties=supportsES6=true,useSingleRequestParameter=true --type-mappings=set=Array --skip-validate-spec -o ${outputPath} -i ${model.download_url}`

  return {
    ...model,
    command,
    outputPath,
    modelName,
  }
}

async function executeGeneratorCLI(model: APIModel): Promise<APIModel> {
  return new Promise((resolve, reject) => {
    exec(model.command, (error: ExecException | null) => {
      if (error) {
        reject(error)
      } else {
        resolve(model)
      }
    })
  })
}

async function removeRedundantObjects(model: APIModel): Promise<APIModel> {
  /**
   * Clean up:
   *- .openapi-generator
   *- .gitignore
   *- .openapi-generator-ignore
   *- git_push.sh
   */

  await Promise.all([
    ...REDUNDANT_FILES.map((object) => fsPromises.unlink(`${model.outputPath}/${object}`)),
    ...REDUNDANT_DIRECTORIES.map((object) =>
      fsPromises.rmdir(`${model.outputPath}/${object}`, { recursive: true }),
    ),
  ])

  return model
}

/**
 * Verify Data Models (Schemas) in OpenAPI definitions.
 * OpenAPI definitions have various data models. Such as: array, boolean, object.
 * We don't need to export all of them. Only export: concrete objects and enums.
 *
 * @param definitions Record<string, any>
 * @param key string
 * @returns boolean
 */
function verifyObjectDefinition(definitions: Record<string, any>, key: string): boolean {
  const definitionType = definitions[key].type

  return (
    (definitionType === 'object' &&
      !EXCLUDE_EXPORTED_OBJECTS.has(key) &&
      /**
       * The 'properties' keyword is used to define the object properties.
       * Docs: https://swagger.io/docs/specification/data-models/data-types/#ctxM:~:text=The%20properties%20keyword%20is%20used%20to%20define%20the%20object%20properties
       */
      has(definitions[key], 'properties') &&
      /**
       * 'additionalProperties' is used to define a free form object.
       * Docs: https://swagger.io/docs/specification/data-models/dictionaries/#free-form:~:text=Free%2DForm%20Objects
       */

      isEmpty(definitions[key].additionalProperties)) ||
    /**
     * Use to combine schemas
     * Docs: https://swagger.io/docs/specification/data-models/oneof-anyof-allof-not/
     */
    has(definitions[key], 'oneOf') ||
    has(definitions[key], 'allOf') ||
    has(definitions[key], 'oneOf') ||
    /**
     *
     */
    (definitionType === 'string' && has(definitions[key], 'enum'))
  )
}

async function generateExportStatement(model: APIModel): Promise<string> {
  return SwaggerParser.parse(model.download_url).then(({ definitions }) => {
    const exportings: string[] = []

    for (const key in definitions) {
      if (has(definitions, key) && verifyObjectDefinition(definitions, key)) {
        exportings.push(`${key} as ${upperFirst(camelCase(model.modelName))}${key}`)
      }
    }

    return `export { ${exportings.join(', ')} } from './${model.modelName}'`
  })
}

function writeStatementsToFile(statements: string[]): void {
  return fs.writeFileSync('src/api-models/index.ts', statements.join('\n'))
}

async function generateModels() {
  const hasNewCommits = await hasNewCommitsSinceYesterday()

  if (hasNewCommits) {
    const githubDirectories = await fetchContentsByPath()
    const githubFilePromises = githubDirectories.map((directory) =>
      fetchContentsByPath(directory.path),
    )

    const githubFiles = await Promise.all(githubFilePromises)

    const apiModelGeneratorPromises = githubFiles
      .flat()
      .map(generateAPIModel)
      .map(executeGeneratorCLI)

    const apiModels = await Promise.all<APIModel>(apiModelGeneratorPromises)
    await Promise.all(apiModels.map(removeRedundantObjects))
    const statements: string[] = await Promise.all(apiModels.map(generateExportStatement))
    writeStatementsToFile(statements)
  }
}

task(generateModels)
