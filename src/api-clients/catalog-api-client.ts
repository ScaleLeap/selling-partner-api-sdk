import { CatalogApi } from '../api-models/catalog-items-api-model'
import { ApiClientHelpers } from '../helpers'
import { APIConfigurationParameters } from '../types/api-clients/api-configuration-parameters'

export class CatalogApiClient extends CatalogApi {
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
