import { AxiosInstance, AxiosRequestConfig } from 'axios'

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
   * Selling partner API region
   *
   * @type {string}
   * @memberof APIConfigurationParameters
   */
  region?: string
}
