import { Octokit } from '@octokit/rest' // eslint-disable-line import/no-extraneous-dependencies
import { series } from 'gulp' // eslint-disable-line import/no-extraneous-dependencies
import { flatten } from 'lodash' // eslint-disable-line import/no-extraneous-dependencies
import path from 'path'
import { array, Codec, GetType, nullType, oneOf, string } from 'purify-ts/Codec'

import { Decoder } from './src/helpers/decoder'

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

function executeGeneratorCLI(model: APIModel): APIModel {
  // TODO: generate model from API model

  return model
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

  return flatten(await Promise.all(githubFilePromises))
    .map(generateAPIModel)
    .map(executeGeneratorCLI)
    .map(removeRedundantObjects)
    .map(exportAPIModel)
}

export default series(generateModels)
