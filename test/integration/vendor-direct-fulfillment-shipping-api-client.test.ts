import { APIConfigurationParameters, VendorDirectFulfillmentShippingApiClient } from '../../src'
import { generateAPIConfigurations, getTokens, TokenResponse } from '../authentication'

const regions: [string, string][] = [
  ['us-east-1', 'https://sandbox.sellingpartnerapi-na.amazon.com'],
]

jest.setTimeout(24 * 1000)

// TODO: need to check again when grant access to resource
// eslint-disable-next-line jest/no-disabled-tests
describe.skip(`${VendorDirectFulfillmentShippingApiClient.name}`, () => {
  describe.each(regions)('for region %s', (region, basePath) => {
    let tokens: TokenResponse
    let apiConfigurationParameters: APIConfigurationParameters

    beforeAll(async () => {
      tokens = await getTokens()
      apiConfigurationParameters = await generateAPIConfigurations(region, basePath, tokens)
    })

    it('should return the list of object', async () => {
      expect.assertions(1)

      const client = new VendorDirectFulfillmentShippingApiClient(apiConfigurationParameters)

      const parameters = {
        createdBefore: '2020-02-20T00:00:00-08:00',
        createdAfter: '2020-02-15T14:00:00-08:00',
        limit: 2,
      }

      const { data: labels } = await client.getShippingLabels(parameters)

      expect(labels.payload).toBeInstanceOf(Array)
    })
  })
})
