import { AuthorizationApi } from '../api-models/authorization-api-model'
import { ApiClientHelpers } from '../helpers'
import { APIConfigurationParameters } from '../types/api-clients/api-configuration-parameters'

export class AuthorizationApiClient extends AuthorizationApi {
  constructor(parameters: APIConfigurationParameters) {
    const axios = ApiClientHelpers.getAxiosInstance(parameters)
    const basePath = ApiClientHelpers.getDefaultBasePath()

    super(
      {
        isJsonMime: ApiClientHelpers.isJsonMime,
        ...parameters,
      },
      basePath,
      axios,
    )
  }
}
