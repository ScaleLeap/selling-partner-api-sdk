import { AssumeRoleCommand, STSClient } from '@aws-sdk/client-sts'
import axios from 'axios'

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

      const sts = new STSClient({
        region: environment.API_REGION,
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

      const client = new SellersApiClient({
        basePath: environment.API_URL,
        accessToken: tokens.access_token,
        apiModelProperties: {
          region: environment.API_REGION,
          credentials: {
            // TODO: fix these warnings
            accessKeyId: Credentials!.AccessKeyId || '',
            secretAccessKey: Credentials!.SecretAccessKey || '',
            sessionToken: Credentials!.SessionToken || '',
          },
        },
      })

      /**
       * TODO: response does not match types.
       */

      const response = await client.getMarketplaceParticipations()

      // TODO: remove this and add canary tests
      console.log(JSON.stringify(response, undefined, 2))

      // expect(data.payload).toBeInstanceOf(Array)
      expect(response).toBeDefined() // TODO: remove this test when we have actual tests
    },
    30 * 1000,
  )
})
