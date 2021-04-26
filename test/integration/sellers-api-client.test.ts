import { AssumeRoleCommand, STSClient } from '@aws-sdk/client-sts'
import axios from 'axios'

import { APIConfigurationParameters, ReportsApiClient } from '../../src'
import { SellersApiClient } from '../../src/api-clients/sellers-api-client'
import * as environment from '../environment'

interface TokenResponse {
  /* eslint-disable camelcase */
  access_token: string
  expires_in: number
  refresh_token: string
  /* eslint-enable camelcase */
}

const regions: [string, string][] = [
  ['us-east-1', 'https://sellingpartnerapi-na.amazon.com'],
  // ['eu-west-1', 'https://sandbox.sellingpartnerapi-eu.amazon.com'],
  // ['us-west-2', ''],
]

async function getTokens() {
  const { data: tokens } = await axios.post<TokenResponse>('https://api.amazon.com/auth/o2/token', {
    grant_type: 'refresh_token',
    client_id: environment.CLIENT_ID,
    client_secret: environment.CLIENT_SECRET,
    refresh_token: environment.REFRESH_TOKEN,
  })

  return tokens
}

jest.setTimeout(2 * 60 * 100)

describe(`${SellersApiClient.name}`, () => {
  describe.each(regions)('for region %s', (region, basePath) => {
    let tokens: TokenResponse
    let apiConfigurationParameters: APIConfigurationParameters

    beforeAll(async () => {
      tokens = await getTokens()
    })

    // eslint-disable-next-line jest/no-duplicate-hooks
    beforeAll(async () => {
      const sts = new STSClient({
        region,
        credentials: {
          accessKeyId: environment.AWS_ACCESS_KEY_ID,
          secretAccessKey: environment.AWS_SECRET_ACCESS_KEY,
        },
      })

      const { Credentials } = await sts.send(
        new AssumeRoleCommand({
          RoleArn: environment.ROLE_ARN,
          RoleSessionName: 'selling-partner-api-axios',
        }),
      )

      apiConfigurationParameters = {
        basePath,
        region,
        accessToken: tokens.access_token,
        credentials: {
          accessKeyId: Credentials?.AccessKeyId || '',
          secretAccessKey: Credentials?.SecretAccessKey || '',
          sessionToken: Credentials?.SessionToken || '',
        },
      }
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
