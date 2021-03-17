import { Configuration, UploadsApi } from '../api-models/uploads-api-model'
import { ApiClientHelpers } from '../helpers'
import { DEFAULT_API_BASE_PATH } from '../types'
import { APIConfigurationParameters } from '../types/api-clients/api-configuration-parameters'

export class UploadsApiClient extends UploadsApi {
  constructor(parameters: APIConfigurationParameters) {
    const axios = ApiClientHelpers.getAxiosInstance(parameters)

    const configuration = new Configuration({
      ...parameters,
      basePath: ApiClientHelpers.getBasePath(parameters),
    })

    super(configuration, DEFAULT_API_BASE_PATH, axios)
  }
}
