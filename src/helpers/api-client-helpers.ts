import { aws4Interceptor } from 'aws4-axios'
import globalAxios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

import { USER_AGENT } from '../constants'
import { APIConfigurationParameters } from '../types'
import { apiErrorFactory } from './api-error-factory'

export class ApiClientHelpers {
  static getAxiosInstance(parameters: APIConfigurationParameters): AxiosInstance {
    let axiosInstance: AxiosInstance
    const { axios } = parameters

    if (axios) {
      axiosInstance = axios
    } else {
      const { accessToken, credentials, region } = parameters

      axiosInstance = globalAxios.create({
        headers: {
          'user-agent': USER_AGENT,
          'x-amz-access-token': accessToken,
        },
      })

      axiosInstance.interceptors.request.use(
        aws4Interceptor(
          {
            region: region.awsRegion,
            service: 'execute-api',
          },
          credentials,
        ),
      )
    }

    axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        throw apiErrorFactory(error)
      },
    )

    return axiosInstance
  }

  static getBasePath(parameters: APIConfigurationParameters): string | undefined {
    if (parameters.basePath && parameters.isSandbox) {
      return parameters.basePath.replace('sellingpartnerapi', 'sandbox.sellingpartnerapi')
    }
    return parameters.basePath
  }
}
