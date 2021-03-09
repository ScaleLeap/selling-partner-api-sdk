import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'

import {
  SellingPartnerForbiddenError,
  SellingPartnerGenericError,
  UploadsApiClient,
  UploadsApiModel, // eslint-disable-line import/named
} from '../src'

describe(`${UploadsApiClient.name}`, () => {
  const contentMD5 = 'MD5'
  const resource = 'resource'

  it('should return error objects', async () => {
    expect.assertions(2)

    const client = new UploadsApiClient()
    const parameters: UploadsApiModel.UploadsApiCreateUploadDestinationForResourceRequest = {
      marketplaceIds: [
        amazonMarketplaces.CA.id,
        amazonMarketplaces.US.id,
        amazonMarketplaces.BR.id,
      ],
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
