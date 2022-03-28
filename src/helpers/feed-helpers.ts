import axios from 'axios'

// eslint-disable-next-line import/no-cycle
import { FeedsApiClientV20210630 } from '../api-clients/feeds-api-client-v20210630'
import { AMAZON_US_MARKETPLACE_ID } from './constants'
import { sleep } from './utils'

export interface GetFeedHelperResult {
  hasErrors: boolean
  xmlResponse: string
}

export interface SubmitFeedOptions {
  amazonMarketplaceId: string
  contentType: string
}

export interface FeedResultOptions {
  sleepTime: number
  maxAttempts: number
}

export class FeedHelpers {
  /**
   * Submit a feed to Amazon Selling Partner
   */
  public static async SubmitFeed(
    feedsApiClient: FeedsApiClientV20210630,
    feedType: string,
    content: string,
    submitFeedOptions?: SubmitFeedOptions,
  ): Promise<string> {
    const { amazonMarketplaceId = AMAZON_US_MARKETPLACE_ID, contentType = 'application/xml' } =
      submitFeedOptions || {}

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
   */
  public static async GetFeedResult(
    feedsApiClient: FeedsApiClientV20210630,
    feedId: string,
    feedResultOptions?: FeedResultOptions,
  ): Promise<GetFeedHelperResult> {
    const { sleepTime = 4, maxAttempts = 15 } = feedResultOptions || {}

    let resultFeedDocumentId = ''
    let feedStatus = ''
    let attempts = 0
    while (feedStatus !== 'DONE') {
      // eslint-disable-next-line no-await-in-loop
      await sleep(sleepTime)
      // eslint-disable-next-line no-await-in-loop
      const feedResult = await feedsApiClient.getFeed({
        feedId,
      })
      feedStatus = feedResult.data.processingStatus
      // eslint-disable-next-line no-console
      console.debug(`Feed status for feedId ${feedId}: ${feedStatus}`)
      resultFeedDocumentId = feedResult.data?.resultFeedDocumentId || ''

      // prevent infinite while loop
      attempts += 1
      if (attempts > maxAttempts) {
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
}
