import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import globalAxios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

import { UploadsApi } from '../api-models/uploads-api-model'
import { apiErrorFactory } from '../helpers'
import { isJsonMime } from '../helpers/is-json-mime'
import { APIConfigurationParameters } from '../types/api-configuration-parameters'

export class UploadsApiClient extends UploadsApi {
  constructor(parameters?: APIConfigurationParameters, axios?: AxiosInstance) {
    const { sellingPartner } = amazonMarketplaces.US
    const basePath: string = sellingPartner ? sellingPartner.region.endpoint : ''
    let axiosInstance: AxiosInstance

    if (axios) {
      axiosInstance = axios
    } else {
      axiosInstance = globalAxios.create()
      axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => response.data,
        (error: AxiosError) => {
          throw apiErrorFactory(error)
        },
      )
    }

    super(
      {
        isJsonMime,
        ...parameters,
      },
      basePath,
      axiosInstance,
    )
  }
}
