import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import { AxiosError } from 'axios'
import { URL } from 'url'

import {
  UploadsApiClient,
  UploadsApiClientConfigurationParameters,
  UploadsApiClientCreateUploadDestinationForResourceRequest,
} from '../src/clients/uploads-api-client'

describe(`${UploadsApiClient.name}`, () => {
  const contentMD5 = 'MD5'
  const resource = 'resource'

  it('should pass without api client options', async () => {
    expect.assertions(4)

    const client = new UploadsApiClient()
    const parameters: UploadsApiClientCreateUploadDestinationForResourceRequest = {
      contentMD5,
      resource,
    }

    await client.createUploadDestinationForResource(parameters).catch((error: AxiosError) => {
      const url = new URL(error.config.url || '')

      expect(url.origin).toStrictEqual(amazonMarketplaces.CA.sellingPartner?.region.endpoint)
      expect(url.searchParams.get('marketplaceIds') === '').toBeTruthy()
      expect(url.searchParams.get('contentMD5')).toStrictEqual(contentMD5)
      expect(url.pathname).toContain(resource)
    })
  })

  it('should pass with api client options', async () => {
    expect.assertions(4)

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

    await client.createUploadDestinationForResource(parameters).catch((error: AxiosError) => {
      const url = new URL(error.config.url || '')

      expect(url.origin).toStrictEqual(amazonMarketplaces.JP.sellingPartner?.region.endpoint)
      expect(url.searchParams.get('marketplaceIds')).toStrictEqual(amazonMarketplaces.JP.id)
      expect(url.searchParams.get('contentMD5')).toStrictEqual(contentMD5)
      expect(url.pathname).toContain(resource)
    })
  })
})
