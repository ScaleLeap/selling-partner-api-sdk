import { APIConfigurationParameters, ReportsApiClient } from '../../src'
import { SellersApiClient } from '../../src/api-clients/sellers-api-client'
import { generateAPIConfigurations, getTokens, TokenResponse } from '../authentication'

const regions: [string, string][] = [
  ['us-east-1', 'https://sellingpartnerapi-na.amazon.com'],
  // ['eu-west-1', 'https://sandbox.sellingpartnerapi-eu.amazon.com'],
  // ['us-west-2', ''],
]

jest.setTimeout(24 * 1000)

describe(`${SellersApiClient.name}`, () => {
  describe.each(regions)('for region %s', (region, basePath) => {
    let tokens: TokenResponse
    let apiConfigurationParameters: APIConfigurationParameters

    beforeAll(async () => {
      tokens = await getTokens()
      apiConfigurationParameters = await generateAPIConfigurations(region, basePath, tokens)
    })

    it('should return the list of marketplaces', async () => {
      expect.assertions(1)

      const client = new SellersApiClient(apiConfigurationParameters)

      const { data: marketplaceParticipations } = await client.getMarketplaceParticipations()

      expect(marketplaceParticipations.payload).toBeInstanceOf(Array)
    })

    it('should return an array of reports', async () => {
      expect.assertions(1)

      const client = new ReportsApiClient(apiConfigurationParameters)

      const { data: reports } = await client.getReports({
        reportTypes: ['GET_MERCHANT_LISTINGS_ALL_DATA'],
      })

      expect(reports.payload).toBeInstanceOf(Array)
    })
  })
})
