import axios from 'axios'

import { AmazonSellingPartnerApiBasePath } from '../../src'
import { SellersApiClient } from '../../src/api-clients/sellers-api-client'
import * as environment from '../environment'

interface TokenResponse {
  /* eslint-disable camelcase */
  access_token: string
  expires_in: number
  refresh_token: string
  /* eslint-enable camelcase */
}

describe(`${SellersApiClient.name}`, () => {
  it(
    'should return the list of marketplaces',
    async () => {
      expect.assertions(1)

      const { data: tokens } = await axios.post<TokenResponse>(
        'https://api.amazon.com/auth/o2/token',
        {
          grant_type: 'refresh_token',
          client_id: environment.CLIENT_ID,
          client_secret: environment.CLIENT_SECRET,
          refresh_token: environment.REFRESH_TOKEN,
        },
      )

      const client = new SellersApiClient({
        basePath: AmazonSellingPartnerApiBasePath.EU,
        accessToken: tokens.access_token,
        region: {
          awsRegion: environment.API_REGION,
        },
        roleArn: environment.ROLE_ARN,
        isSandbox: true,
      })

      const { data: marketplaceParticipations } = await client.getMarketplaceParticipations()

      expect(marketplaceParticipations.payload).toBeInstanceOf(Array)
    },
    30 * 1000,
  )
})
