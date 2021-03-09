import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import globalAxios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

import { APIConfigurationParameters } from '../types'
import { apiErrorFactory } from './api-error-factory'

export class ApiClientHelpers {
  static assertAxiosInstance(parameters?: APIConfigurationParameters): AxiosInstance {
    let axiosInstance: AxiosInstance

    if (parameters && parameters.axios) {
      axiosInstance = parameters.axios
    } else {
      axiosInstance = globalAxios.create()
      axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => response.data,
        (error: AxiosError) => {
          throw apiErrorFactory(error)
        },
      )
    }

    return axiosInstance
  }

  static assertBasePath(): string {
    const { sellingPartner } = amazonMarketplaces.US
    return sellingPartner ? sellingPartner.region.endpoint : ''
  }
}
