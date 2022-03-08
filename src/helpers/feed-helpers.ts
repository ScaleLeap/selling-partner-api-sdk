import axios from 'axios'

// eslint-disable-next-line import/no-cycle
import { FeedsApiClientV20210630 } from '../api-clients/feeds-api-client-v20210630'

/**
 * Sleep helper
 * @param secs
 * @returns
 */
function sleep(secs: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, secs * 1000)
  })
}

/**
 * Submit a feed to Amazon Selling Partner
 * @param feedsApiClient
 * @param feedType
 * @param content
 * @param amazonMarketplaceId: 'ATVPDKIKX0DER' (US)
 * @param contentType: 'application/xml
 * @returns
 */
export async function submitFeedHelper(
  feedsApiClient: FeedsApiClientV20210630,
  feedType: string,
  content: string,
  amazonMarketplaceId = 'ATVPDKIKX0DER',
  contentType = 'application/xml',
): Promise<string> {
  // create the feed document
  const feedDocumentResult = await feedsApiClient.createFeedDocument({
    body: {
      contentType,
    },
  })

  // upload the file
  await axios.request({
    url: feedDocumentResult.data.url,
    method: 'PUT',
    headers: {
      'Content-Type': contentType,
    },
    data: content,
  })

  // submit feed
  const createFeedResponse = await feedsApiClient.createFeed({
    body: {
      feedType,
      marketplaceIds: [amazonMarketplaceId],
      inputFeedDocumentId: feedDocumentResult.data.feedDocumentId,
    },
  })

  return createFeedResponse.data.feedId
}

/**
 * Given a feedClient and feedId, will loop 15 times x4 seconds delay to fetch the feed results
 * We will parse the XML only to look for errors, which should help the user decide if they need to parse further
 * @param feedsApiClient
 * @param feedId
 * @returns { hasErrors: boolean, xmlResponse: string }
 */
export async function getFeedResult(
  feedsApiClient: FeedsApiClientV20210630,
  feedId: string,
): Promise<{ hasErrors: boolean; xmlResponse: string }> {
  let resultFeedDocumentId = ''
  let feedStatus = ''
  let attempts = 0
  while (feedStatus !== 'DONE') {
    // eslint-disable-next-line no-await-in-loop
    await sleep(4)
    // eslint-disable-next-line no-await-in-loop
    const feedResult = await feedsApiClient.getFeed({
      feedId,
    })
    feedStatus = feedResult.data.processingStatus
    // eslint-disable-next-line no-console
    console.debug(`Feed status for feedId ${feedId}: ${feedStatus}`)
    resultFeedDocumentId = feedResult.data?.resultFeedDocumentId || ''

    // prevent infinte while loop
    attempts += 1
    if (attempts > 15) {
      throw new Error(`Too many attempts to fetch a DONE response for feed ${feedId}`)
    }
  }

  // get the feed document url
  const feedDocumentResult = await feedsApiClient.getFeedDocument({
    feedDocumentId: resultFeedDocumentId,
  })

  // get the feed document itself
  const { data } = await axios.get(feedDocumentResult.data.url)

  const hasErrors = data.match(/ResultDescription>([^<]+)/)?.[1]

  return {
    hasErrors,
    xmlResponse: data,
  }
}
