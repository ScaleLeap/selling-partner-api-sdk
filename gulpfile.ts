import { Octokit } from '@octokit/rest' // eslint-disable-line import/no-extraneous-dependencies
import { exec, ExecException } from 'child_process'
import { promises as fsPromises } from 'fs'
import { task } from 'gulp' // eslint-disable-line import/no-extraneous-dependencies
import path from 'path'
import { array, Codec, GetType, nullType, oneOf, string } from 'purify-ts/Codec' // eslint-disable-line import/no-extraneous-dependencies

import { Decoder } from './utils/decoder'

const GithubObject = Codec.interface({
  name: string,
  path: string,
  download_url: oneOf([string, nullType]),
})
type GithubObject = GetType<typeof GithubObject>

interface APIModel extends GithubObject {
  command: string
  outputPath: string
}

// Using authentication to increases Github API rate limit.
const octokit = new Octokit()
const owner = 'amzn'
const repo = 'selling-partner-api-models'
const redundantFiles: string[] = ['.gitignore', '.openapi-generator-ignore', 'git_push.sh']

const redundantDirectories: string[] = ['.openapi-generator']

async function fetchContentsByPath(repoPath = 'models'): Promise<GithubObject[]> {
  return octokit.repos
    .getContent({
      owner,
      repo,
      path: repoPath,
    })
    .then((response) =>
      Array.isArray(response.data)
        ? Decoder.decode(array(GithubObject), response.data)
        : [Decoder.decode(GithubObject, response.data)],
    )
}

function generateAPIModel(model: GithubObject): APIModel {
  const outputDirectory = path.basename(path.dirname(model.path))
  const outputPath = `src/api-models/${outputDirectory}`
  const command = `openapi-generator-cli generate -g typescript-axios --additional-properties=supportsES6=true,useSingleRequestParameter=true --type-mappings=set=Array --skip-validate-spec -o ${outputPath} -i ${model.download_url}`

  return {
    ...model,
    command,
    outputPath,
  }
}

async function executeGeneratorCLI(model: APIModel): Promise<APIModel> {
  return new Promise((resolve, reject) => {
    exec(model.command, (error: ExecException | null) => {
      if (error) reject(error)
      else resolve(model)
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

  return Promise.all([
    ...redundantFiles.map((object) => fsPromises.unlink(`${model.outputPath}/${object}`)),
    ...redundantDirectories.map((object) =>
      fsPromises.rmdir(`${model.outputPath}/${object}`, { recursive: true }),
    ),
  ]).then((_) => model) // eslint-disable-line @typescript-eslint/no-unused-vars
}

function exportAPIModel(model: APIModel): APIModel {
  // TODO: export models into src/index.ts and commit files

  return model
}

async function generateModels() {
  const githubDirectories = await fetchContentsByPath()
  const githubFilePromises = githubDirectories.map((directory) =>
    fetchContentsByPath(directory.path),
  )

  const githubFiles = await Promise.all(githubFilePromises)

  const apiModelGeneratorPromises = githubFiles
    .flat()
    .map(generateAPIModel)
    .map(executeGeneratorCLI)

  await Promise.all<APIModel>(apiModelGeneratorPromises)
    .then((apiModels) => Promise.all(apiModels.map(removeRedundantObjects)))
    .then((apiModels) => apiModels.map(exportAPIModel))
}

task(generateModels)
