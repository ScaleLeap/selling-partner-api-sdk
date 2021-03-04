import { Octokit } from '@octokit/rest' // eslint-disable-line import/no-extraneous-dependencies
import { series } from 'gulp' // eslint-disable-line import/no-extraneous-dependencies
import path from 'path'
import { array, Codec, GetType, nullType, oneOf, string } from 'purify-ts/Codec'

import { Decoder } from './src/helpers/decoder'

const GithubObject = Codec.interface({
  name: string,
  path: string,
  download_url: oneOf([string, nullType]),
})
type GithubObject = GetType<typeof GithubObject>

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

function generateModel(model: GithubObject) {
  const outputFolder = path.basename(path.dirname(model.path))
  const out = `src/api-models/${outputFolder}`
  return `openapi-generator-cli generate -g typescript-axios -o ${out} -i ${model.download_url}`
  // TODO: run scripts to generate models
}

async function generateModels() {
  const modelFolders = await fetchContentsByPath()
  const modelPromises = modelFolders.map((modelFolder) =>
    fetchContentsByPath(modelFolder.path).then((models) =>
      models.map((model) => generateModel(model)),
    ),
  )
  await Promise.all(modelPromises)

  // TODO: export models into src/index.ts and commit files
}

export default series(generateModels)
