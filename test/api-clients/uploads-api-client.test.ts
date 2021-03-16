import {
  amazonMarketplaces,
  assertMarketplaceHasSellingPartner,
} from '@scaleleap/amazon-marketplaces'

import {
  APIConfigurationParameters,
  SellingPartnerForbiddenError,
  SellingPartnerGenericError,
  UploadsApiClient,
  UploadsApiModel, // eslint-disable-line import/named
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
      apiModelProperties: { region: CA.sellingPartner.region },
    }

    const client = new UploadsApiClient(configuration)
    const parameters: UploadsApiModel.UploadsApiCreateUploadDestinationForResourceRequest = {
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
})
