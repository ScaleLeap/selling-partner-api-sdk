import { AssumeRoleCommand, STSClient } from '@aws-sdk/client-sts'
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

const regions: [string, AmazonSellingPartnerApiBasePath][] = [
  ['eu-west-1', AmazonSellingPartnerApiBasePath.EU],
  // ['us-east-1', AmazonSellingPartnerApiBasePath.NA],
  // ['us-west-2', AmazonSellingPartnerApiBasePath.FE],
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
  describe.each(regions)('for region %s', (awsRegion, basePath) => {
    it('should return the list of marketplaces', async () => {
      expect.assertions(1)

      const tokens = await getTokens()

      const sts = new STSClient({
        region: awsRegion,
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
        basePath,
        accessToken: tokens.access_token,
        region: {
          awsRegion,
        },
        credentials: {
          accessKeyId: Credentials?.AccessKeyId || '',
          secretAccessKey: Credentials?.SecretAccessKey || '',
          sessionToken: Credentials?.SessionToken || '',
        },
      })

      const { data: marketplaceParticipations } = await client.getMarketplaceParticipations()

      expect(marketplaceParticipations.payload).toBeInstanceOf(Array)
    })

    it('should assume role and return the list of marketplaces', async () => {
      expect.assertions(1)

      const tokens = await getTokens()

      const client = new SellersApiClient({
        basePath: AmazonSellingPartnerApiBasePath.EU,
        accessToken: tokens.access_token,
        region: {
          awsRegion,
        },
        roleArn: environment.ROLE_ARN,
      })

      const { data: marketplaceParticipations } = await client.getMarketplaceParticipations()

      expect(marketplaceParticipations.payload).toBeInstanceOf(Array)
    })
  })
})
