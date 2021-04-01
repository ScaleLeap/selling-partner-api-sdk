import {
  amazonMarketplaces,
  assertMarketplaceHasSellingPartner,
} from '@scaleleap/amazon-marketplaces'

import {
  APIConfigurationParameters,
  SellingPartnerForbiddenError,
  SellingPartnerGenericError,
  SellingPartnerMismatchRegionError,
  SellingPartnerNotFoundRegionError,
  UploadsApiClient,
} from '../../src'

describe(`${UploadsApiClient.name}`, () => {
  const contentMD5 = 'MD5'
  const resource = 'resource'

  it('should return error objects', async () => {
    expect.assertions(2)

    const { CA } = amazonMarketplaces
    assertMarketplaceHasSellingPartner(CA)

    const configuration: APIConfigurationParameters = {
      accessToken: 'Atza|...',
      region: CA.sellingPartner.region.awsRegion,
    }

    const client = new UploadsApiClient(configuration)
    const parameters = {
      marketplaceIds: [CA.id],
      contentMD5,
      resource,
    }

    await client
      .createUploadDestinationForResource(parameters)
      .catch((error: SellingPartnerGenericError) => {
        expect(error.requestId).toBeDefined()
      })

    await expect(client.createUploadDestinationForResource(parameters)).rejects.toThrow(
      SellingPartnerForbiddenError,
    )
  })

  it('should throw an error if cannot extract region from base path', async () => {
    expect.assertions(1)

    const basePath = 'example.com'
    const { CA } = amazonMarketplaces

    const client = new Promise(() => {
      assertMarketplaceHasSellingPartner(CA)

      const configuration: APIConfigurationParameters = {
        accessToken: 'Atza|...',
        basePath,
      }
      return new UploadsApiClient(configuration)
    })

    await client.catch((error: SellingPartnerNotFoundRegionError) => {
      expect(error.basePath).toStrictEqual(basePath)
    })
  })

  it('should throw an error if mismatch between region in default base path and region parameter', async () => {
    expect.assertions(2)

    const region = 'us'
    const { CA } = amazonMarketplaces

    const client = new Promise(() => {
      assertMarketplaceHasSellingPartner(CA)

      const configuration: APIConfigurationParameters = {
        accessToken: 'Atza|...',
        region,
      }

      return new UploadsApiClient(configuration)
    })

    await client.catch((error: SellingPartnerMismatchRegionError) => {
      expect(error.defaultRegion).toStrictEqual('us-east-1')
      expect(error.region).toStrictEqual(region)
    })
  })
})
