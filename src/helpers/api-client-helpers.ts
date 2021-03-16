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
      const { apiModelProperties, accessToken } = parameters

      axiosInstance = globalAxios.create({
        headers: {
          'user-agent': USER_AGENT,
          'x-amz-access-token': accessToken,
        },
      })

      axiosInstance.interceptors.request.use(
        aws4Interceptor(
          {
            region: apiModelProperties.region.awsRegion,
            service: 'execute-api',
          },
          apiModelProperties.credentials,
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
}
