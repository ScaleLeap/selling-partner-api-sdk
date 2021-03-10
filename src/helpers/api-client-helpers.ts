import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import { aws4Interceptor } from 'aws4-axios'
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

      axiosInstance.interceptors.request.use(
        aws4Interceptor(
          {
            region: parameters?.apiModelProperties.region,
            service: parameters?.apiModelProperties.service || 'execute-api',
          },
          parameters?.apiModelProperties.credentials,
        ),
      )

      axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => response.data,
        (error: AxiosError) => {
          throw apiErrorFactory(error)
        },
      )
    }

    return axiosInstance
  }

  static getDefaultBasePath(): string {
    const { sellingPartner } = amazonMarketplaces.US
    return sellingPartner ? sellingPartner.region.endpoint : ''
  }

  static isJsonMime(mime: string): boolean {
    /* eslint-disable-next-line no-control-regex */
    const jsonMime = new RegExp('^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i')
    return (
      mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json')
    )
  }
}
