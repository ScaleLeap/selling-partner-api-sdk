import {
  amazonMarketplaces,
  assertMarketplaceHasSellingPartner,
} from '@scaleleap/amazon-marketplaces'
import { jestPollyContext } from '@scaleleap/jest-polly'
import { AxiosError } from 'axios'
import { StatusCodes } from 'http-status-codes'
import { toNumber } from 'lodash'

import {
  APIConfigurationParameters,
  SellersApiClient,
  SellingPartnerForbiddenError,
  SellingPartnerMismatchRegionError,
  SellingPartnerNotFoundRegionError,
  SellingPartnerTooManyRequestsError,
  SellingPartnerUnknownError,
} from '../../../src'

describe(`client`, () => {
  const DEFAULT_INTERNAL_SERVER_ERROR_MESSAGE = 'Request failed with status code 500'

  it(`should throw ${SellingPartnerForbiddenError.name} when pass invalid token`, async () => {
    expect.assertions(2)

    const { CA } = amazonMarketplaces
    assertMarketplaceHasSellingPartner(CA)
    const requestId = 'ABC'

    const configuration: APIConfigurationParameters = {
      accessToken: 'Atza|...',
      region: CA.sellingPartner.region.awsRegion,
    }

    jestPollyContext.polly.server
      .any(`${CA.sellingPartner.region.endpoint}/sellers/v1/marketplaceParticipations`)
      .intercept((request, response) => {
        response.setHeader('x-amzn-requestid', requestId).sendStatus(StatusCodes.FORBIDDEN)
        response.send({
          errors: [
            {
              code: 'Forbidden',
              message: 'Forbidden',
            },
          ],
        })
      })

    const client = new SellersApiClient(configuration)

    await expect(client.getMarketplaceParticipations()).rejects.toBeInstanceOf(
      SellingPartnerForbiddenError,
    )
    await expect(client.getMarketplaceParticipations()).rejects.toHaveProperty(
      'requestId',
      requestId,
    )
  })

  it(`should throw ${SellingPartnerNotFoundRegionError.name} if cannot extract region from base path`, async () => {
    expect.assertions(2)

    const basePath = 'example.com'
    const { CA } = amazonMarketplaces

    const client = new Promise(() => {
      assertMarketplaceHasSellingPartner(CA)

      const configuration: APIConfigurationParameters = {
        accessToken: 'Atza|...',
        basePath,
      }
      return new SellersApiClient(configuration)
    })

    await expect(client).rejects.toBeInstanceOf(SellingPartnerNotFoundRegionError)
    await expect(client).rejects.toHaveProperty('basePath', basePath)
  })

  it(`should throw ${SellingPartnerMismatchRegionError.name} if mismatch between region in default base path and region parameter`, async () => {
    expect.assertions(3)

    const region = 'us'
    const { CA } = amazonMarketplaces

    const client = new Promise(() => {
      assertMarketplaceHasSellingPartner(CA)

      const configuration: APIConfigurationParameters = {
        accessToken: 'Atza|...',
        region,
      }

      return new SellersApiClient(configuration)
    })

    await expect(client).rejects.toBeInstanceOf(SellingPartnerMismatchRegionError)
    await expect(client).rejects.toHaveProperty('defaultRegion', 'us-east-1')
    await expect(client).rejects.toHaveProperty('region', region)
  })

  it(`should throw ${SellingPartnerTooManyRequestsError.name} if reach api limit`, async () => {
    expect.assertions(2)

    const { CA } = amazonMarketplaces
    assertMarketplaceHasSellingPartner(CA)
    const defaultRateLimit = '0.1'

    jestPollyContext.polly.server
      .any(`${CA.sellingPartner.region.endpoint}/sellers/v1/marketplaceParticipations`)
      .intercept((request, response) => {
        response
          .setHeader('x-amzn-RateLimit-Limit', defaultRateLimit)
          .sendStatus(StatusCodes.TOO_MANY_REQUESTS)
        response.send({
          errors: [
            {
              code: 'TooManyRequests',
              message: 'Too many requests',
            },
          ],
        })
      })

    const configuration: APIConfigurationParameters = {
      accessToken: 'Atza|...',
      region: CA.sellingPartner.region.awsRegion,
    }
    const client = new SellersApiClient(configuration)

    await expect(client.getMarketplaceParticipations()).rejects.toBeInstanceOf(
      SellingPartnerTooManyRequestsError,
    )
    await expect(client.getMarketplaceParticipations()).rejects.toHaveProperty(
      'rateLimit',
      toNumber(defaultRateLimit),
    )
  })

  it(`should handle unknown error`, async () => {
    expect.assertions(4)

    const { CA } = amazonMarketplaces
    assertMarketplaceHasSellingPartner(CA)

    const configuration: APIConfigurationParameters = {
      accessToken: 'Atza|...',
      region: CA.sellingPartner.region.awsRegion,
    }

    jestPollyContext.polly.server
      .any(`${CA.sellingPartner.region.endpoint}/sellers/v1/marketplaceParticipations`)
      .intercept((request, response) => {
        response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
        response.send({
          errors: [],
        })
      })

    const client = new SellersApiClient(configuration)

    await expect(client.getMarketplaceParticipations()).rejects.toThrow(SellingPartnerUnknownError)

    await expect(client.getMarketplaceParticipations()).rejects.toHaveProperty(
      'message',
      DEFAULT_INTERNAL_SERVER_ERROR_MESSAGE,
    )
    await expect(client.getMarketplaceParticipations()).rejects.toHaveProperty(
      'code',
      AxiosError.ERR_BAD_RESPONSE,
    )

    await expect(client.getMarketplaceParticipations()).rejects.toHaveProperty(
      'cause',
      new AxiosError(DEFAULT_INTERNAL_SERVER_ERROR_MESSAGE, AxiosError.ERR_BAD_RESPONSE),
    )
  })

  it(`should throw original error if cannot handle`, async () => {
    expect.assertions(3)

    const { CA } = amazonMarketplaces
    assertMarketplaceHasSellingPartner(CA)

    const configuration: APIConfigurationParameters = {
      accessToken: 'Atza|...',
      region: CA.sellingPartner.region.awsRegion,
    }

    jestPollyContext.polly.server
      .any(`${CA.sellingPartner.region.endpoint}/sellers/v1/marketplaceParticipations`)
      .intercept((request, response) => {
        response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      })

    const client = new SellersApiClient(configuration)

    await expect(client.getMarketplaceParticipations()).rejects.toThrow(AxiosError)

    await expect(client.getMarketplaceParticipations()).rejects.toHaveProperty(
      'message',
      DEFAULT_INTERNAL_SERVER_ERROR_MESSAGE,
    )
    await expect(client.getMarketplaceParticipations()).rejects.toHaveProperty(
      'code',
      AxiosError.ERR_BAD_RESPONSE,
    )
  })
})
