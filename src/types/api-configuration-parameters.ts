import { AxiosInstance, AxiosRequestConfig } from 'axios'

export interface APIConfigurationParameters {
  /**
   * parameter for apiKey security
   * @param name security name
   * @memberof APIConfigurationParameters
   */
  apiKey?:
    | string
    | Promise<string>
    | ((name: string) => string)
    | ((name: string) => Promise<string>)

  /**
   * Axios Instance
   *
   * @type {AxiosInstance}
   * @memberof APIConfigurationParameters
   */
  axios?: AxiosInstance

  /**
   * parameter for oauth2 security
   * @param name security name
   * @param scopes oauth2 scope
   * @memberof APIConfigurationParameters
   */
  accessToken?:
    | string
    | Promise<string>
    | ((name?: string, scopes?: string[]) => string)
    | ((name?: string, scopes?: string[]) => Promise<string>)
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
   * The FormData constructor that will be used to create multipart form data
   * requests. You can inject this here so that execution environments that
   * do not support the FormData class can still run the generated client.
   *
   * @type {new () => FormData}
   */
  formDataCtor?: new () => FormData
}
