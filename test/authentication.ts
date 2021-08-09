import { AssumeRoleCommand, STSClient } from '@aws-sdk/client-sts'
import axios from 'axios'

import { APIConfigurationParameters } from '../src'
import * as environment from './environment'

export interface TokenResponse {
  /* eslint-disable camelcase */
  access_token: string
  expires_in: number
  refresh_token: string
  /* eslint-enable camelcase */
}

export async function getTokens(): Promise<TokenResponse> {
  const { data: tokens } = await axios.post<TokenResponse>('https://api.amazon.com/auth/o2/token', {
    grant_type: 'refresh_token',
    client_id: environment.CLIENT_ID,
    client_secret: environment.CLIENT_SECRET,
    refresh_token: environment.REFRESH_TOKEN,
  })

  return tokens
}

export async function generateAPIConfigurations(
  region: string,
  basePath: string,
  tokens: TokenResponse,
): Promise<APIConfigurationParameters> {
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

  return {
    basePath,
    region,
    accessToken: tokens.access_token,
    credentials: {
      accessKeyId: Credentials?.AccessKeyId || '',
      secretAccessKey: Credentials?.SecretAccessKey || '',
      sessionToken: Credentials?.SessionToken || '',
    },
  }
}
