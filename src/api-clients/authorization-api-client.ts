import { AuthorizationApi, Configuration } from '../api-models/authorization-api-model'
import { ApiClientHelpers } from '../helpers'
import { APIConfigurationParameters } from '../types/api-clients/api-configuration-parameters'

export class AuthorizationApiClient extends AuthorizationApi {
  constructor(parameters: APIConfigurationParameters) {
    const axios = ApiClientHelpers.getAxiosInstance(parameters)
    const basePath = ApiClientHelpers.getDefaultBasePath()
    const configuration = new Configuration(parameters)

    super(configuration, basePath, axios)
  }
}
