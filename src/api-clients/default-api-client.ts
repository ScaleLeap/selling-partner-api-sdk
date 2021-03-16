import { Configuration, DefaultApi } from '../api-models/finances-api-model'
import { ApiClientHelpers } from '../helpers'
import { APIConfigurationParameters } from '../types/api-clients/api-configuration-parameters'

export class DefaultApiClient extends DefaultApi {
  constructor(parameters: APIConfigurationParameters) {
    const axios = ApiClientHelpers.getAxiosInstance(parameters)
    const basePath = ApiClientHelpers.getDefaultBasePath()
    const configuration = new Configuration(parameters)

    super(configuration, basePath, axios)
  }
}
