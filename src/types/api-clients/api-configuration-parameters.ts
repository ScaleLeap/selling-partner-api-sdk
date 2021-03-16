import { AxiosInstance, AxiosRequestConfig } from 'axios'

import { ApiBasePath } from './amazon-selling-partner-api-base-path'
import { AmazonSellingPartnerAPICredentials } from './amazon-selling-partner-api-credentials'
import { AmazonSellingPartnerApiRegion } from './amazon-selling-partner-api-region'

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
   * @type {ApiBasePath}
   * @memberof APIConfigurationParameters
   */
  basePath?: ApiBasePath

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
   * @type {AmazonSellingPartnerApiRegion}
   * @memberof APIConfigurationParameters
   */
  region: AmazonSellingPartnerApiRegion
}
