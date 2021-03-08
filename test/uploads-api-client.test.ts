import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'

import {
  SellingPartnerForbiddenError,
  SellingPartnerGenericError,
  UploadsApiClient,
  UploadsApiClientConfigurationParameters,
  UploadsApiClientCreateUploadDestinationForResourceRequest,
} from '../src'

describe(`${UploadsApiClient.name}`, () => {
  const contentMD5 = 'MD5'
  const resource = 'resource'

  it('should return error objects', async () => {
    expect.assertions(2)

    const configuration: UploadsApiClientConfigurationParameters = {
      marketplace: amazonMarketplaces.JP,
      apiKey: '',
      username: '',
      password: '',
      accessToken: '',
      baseOptions: '',
    }

    const client = new UploadsApiClient(configuration)
    const parameters: UploadsApiClientCreateUploadDestinationForResourceRequest = {
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
