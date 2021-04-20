import * as core from '@actions/core'
import { Octokit } from '@octokit/rest'
import env from 'env-var'
import log from 'fancy-log'
import { array, Codec, GetType, nullType, oneOf, string } from 'purify-ts/Codec'

import { Decoder } from '../decoder'

export const GithubObject = Codec.interface({
  name: string,
  path: string,
  download_url: oneOf([string, nullType]),
})
export type GithubObject = GetType<typeof GithubObject>

export interface APIModel extends GithubObject {
  command: string
  modelName: string
  outputPath: string
}

const GITHUB_TOKEN: string = env.get('GITHUB_TOKEN').required().asString()
const LOOKBACK_HOURS: number = env.get('LOOKBACK_HOURS').default(1).asIntPositive()

// Using authentication to increases Github API rate limit.
const octokit = new Octokit({ auth: GITHUB_TOKEN })
const OWNER = 'amzn'
const REPO = 'selling-partner-api-models'

export async function hasNewCommits(repoPath = 'models'): Promise<boolean> {
  log.info(`Starting checking API model updates`)
  const date = new Date()
  date.setHours(date.getHours() - LOOKBACK_HOURS)

  // TODO: process paging to get all commits (optional).
  const { data } = await octokit.repos.listCommits({
    owner: OWNER,
    repo: REPO,
    path: repoPath,
    since: date.toISOString(),
  })

  // generate and set Github pull request body.
  const prBody = data.map((d) => `- [${d.commit.message}](${d.html_url})`).join('\n')
  core.setOutput('pr-body', prBody)

  const updatedAmount = data.length

  log.info(
    [
      `Finished checking API model updates. Update: ${updatedAmount}`,
      ...data.map((d) => `- ${d.commit.message}`),
    ].join('\n'),
  )

  return updatedAmount > 0
}

export async function fetchContentsByPath(repoPath = 'models'): Promise<GithubObject[]> {
  log.info(`Starting fetching contents in ${repoPath} directory`)
  return octokit.repos
    .getContent({
      owner: OWNER,
      repo: REPO,
      path: repoPath,
    })
    .then((response) => {
      const data = Array.isArray(response.data)
        ? Decoder.decode(array(GithubObject), response.data)
        : [Decoder.decode(GithubObject, response.data)]

      log.info(
        [
          `Finished fetching contents in ${repoPath} directory:`,
          ...data.map((object) => `- ${object.name}`),
        ].join('\n'),
      )

      return data
    })
}
