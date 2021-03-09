import { FeesApi } from '../api-models/product-fees-api-model'
import { ApiClientHelpers } from '../helpers'
import { APIConfigurationParameters } from '../types/api-configuration-parameters'

export class FeesApiClient extends FeesApi {
  constructor(parameters?: APIConfigurationParameters) {
    const axios = ApiClientHelpers.assertAxiosInstance(parameters)
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
