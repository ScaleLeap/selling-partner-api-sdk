import { AxiosInstance, AxiosRequestConfig } from 'axios'

import { AmazonSellingPartnerAPICredentials } from './amazon-selling-partner-api-credentials'

export interface APIConfigurationParameters {
  /**
   * Axios Instance
   *
   * @type {AxiosInstance}
   * @memberof APIConfigurationParameters
   */
  axios?: AxiosInstance

  /**
   * parameter for oauth2 security
   *
   * @memberof APIConfigurationParameters
   */
  accessToken?: string

  /**
   * override base path
   *
   * @type {string}
   * @memberof APIConfigurationParameters
   */
  basePath?: string

  /**
   * base options for axios calls
   *
   * @type {AxiosRequestConfig}
   * @memberof APIConfigurationParameters
   */
  baseOptions?: AxiosRequestConfig

  /**
   * Selling partner API credentials
   *
   * @type {AmazonSellingPartnerAPICredentials}
   * @memberof APIConfigurationParameters
   */
  credentials?: AmazonSellingPartnerAPICredentials

  /**
   * Selling partner API region
   *
   * @type {string}
   * @memberof APIConfigurationParameters
   */
  region?: string

  /**
   * ARN of the IAM Role to be assumed to get the credentials from.
   *
   * @type {string}
   * @memberof APIConfigurationParameters
   */
  roleArn?: string
}
