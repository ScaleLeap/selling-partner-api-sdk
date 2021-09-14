import { APIConfigurationParameters } from '../../src'
import { ShippingApiClientV2 } from '../../src/api-clients/shipping-api-client-v2'
import { generateAPIConfigurations, getTokens, TokenResponse } from '../authentication'

const regions: [string, string][] = [['us-east-1', 'https://sellingpartnerapi-na.amazon.com']]

jest.setTimeout(24 * 1000)

describe(`${ShippingApiClientV2.name}`, () => {
  describe.each(regions)('for region %s', (region, basePath) => {
    let tokens: TokenResponse
    let apiConfigurationParameters: APIConfigurationParameters

    beforeAll(async () => {
      tokens = await getTokens()
      apiConfigurationParameters = await generateAPIConfigurations(region, basePath, tokens)
    })

    it('should return the list of marketplaces', async () => {
      expect.assertions(2)

      const name = 'Josh Fisher'
      const email = 'jfisher@whitebox.com'

      const addressOne = {
        name,
        addressLine1: '1010 Swan Creek Dr',
        // addressLine2: '',
        // addressLine3: '',
        companyName: 'Whitebox',
        stateOrRegion: 'MD',
        city: 'Baltimore',
        countryCode: 'US',
        postalCode: '21226',
        email,
        phoneNumber: '4439329636',
      }

      const addressTwo = {
        name,
        addressLine1: '101 Russell St',
        // addressLine2: '',
        // addressLine3: '',
        companyName: 'Whitebox',
        stateOrRegion: 'MD',
        city: 'Baltimore',
        countryCode: 'US',
        postalCode: '21230',
        email,
        phoneNumber: '4439329636',
      }

      const client = new ShippingApiClientV2(apiConfigurationParameters)

      const ratesResponse = await client.getRates({
        body: {
          shipTo: addressTwo,
          shipFrom: addressOne,
          returnTo: addressOne,
          shipDate: '2021-09-15T12:00:00Z',
          packages: [
            {
              dimensions: {
                length: 10,
                width: 10,
                height: 10,
                unit: 'INCH',
              },
              weight: {
                unit: 'POUND',
                value: 1,
              },
              insuredValue: {
                value: 100,
                unit: 'USD',
              },
              isHazmat: false,
              packageClientReferenceId: 'abcd',
              items: [
                {
                  itemValue: {
                    value: 100,
                    unit: 'USD',
                  },
                  description: 'Shipping Api Client v2 Test Item',
                  itemIdentifier: 'efgh',
                  quantity: 1,
                  weight: {
                    unit: 'POUND',
                    value: 1,
                  },
                  isHazmat: false,
                  serialNumbers: ['1234'],
                  directFulfillmentItemIdentifiers: {
                    lineItemID: 'lineID',
                    pieceNumber: 'pieceNumber',
                  },
                },
              ],
            },
          ],
          channelDetails: {
            channelType: 'EXTERNAL',
            /*
            amazonOrderDetails: {
              orderId: '6789',
            },
            amazonShipmentDetails: {
              shipmentId: 'abcd',
            },
            */
          },
        },
      })

      expect(ratesResponse.data.payload).toBeDefined()
      expect(ratesResponse.data.payload.rates).toBeInstanceOf(Array)
    })
  })
})
