import { Octokit } from '@octokit/rest' // eslint-disable-line import/no-extraneous-dependencies
import { task } from 'gulp' // eslint-disable-line import/no-extraneous-dependencies
import path from 'path'
import { array, Codec, GetType, nullType, oneOf, string } from 'purify-ts/Codec' // eslint-disable-line import/no-extraneous-dependencies
import {exec, ExecException} from 'child_process'

import { Decoder } from './utils/decoder'

const GithubObject = Codec.interface({
  name: string,
  path: string,
  download_url: oneOf([string, nullType]),
})
type GithubObject = GetType<typeof GithubObject>

interface APIModel extends GithubObject {
  command: string
}

// Using authentication to increases Github API rate limit.
const octokit = new Octokit()
const owner = 'amzn'
const repo = 'selling-partner-api-models'

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
  const outputFolder = path.basename(path.dirname(model.path))
  const out = `src/api-models/${outputFolder}`
  const command = `openapi-generator-cli generate -g typescript-axios --additional-properties=supportsES6=true,useSingleRequestParameter=true --type-mappings=set=Array --skip-validate-spec -o ${out} -i ${model.download_url}`

  return {
    ...model,
    command,
  }
}

async function executeGeneratorCLI(model: APIModel): Promise<APIModel> {
  return new Promise((resolve, reject) => {
    exec(model.command, (error: ExecException) => {
      if (error) reject(error)
      else resolve(model)
    })
  })
}

function removeRedundantObjects(model: APIModel): APIModel {
  /**
   * TODO: clean up:
   *- .openapi-generator
   *- .gitignore
   *- .openapi-generator-ignore
   *- git_push.sh
   */

  return model
}

function exportAPIModel(model: APIModel): APIModel {
  // TODO: export models into src/index.ts and commit files

  return model
}

async function generateModels() {
  const githubFolders = await fetchContentsByPath()
  const githubFilePromises = githubFolders.map((folder) => fetchContentsByPath(folder.path))

  const githubFiles = await Promise.all(githubFilePromises)

  const apiModelGeneratorPromises = githubFiles
    .flat()
    .map(generateAPIModel)
    .map(executeGeneratorCLI)
    
  const apiModels: APIModel[] = await Promise.all(apiModelGeneratorPromises)
  apiModels
    .map(removeRedundantObjects)
    .map(exportAPIModel)
}

task(generateModels)
