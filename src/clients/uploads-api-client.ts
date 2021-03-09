import { UploadsApi } from '../api-models/uploads-api-model'
import { ApiClientHelpers } from '../helpers'
import { isJsonMime } from '../helpers/is-json-mime'
import { APIConfigurationParameters } from '../types/api-configuration-parameters'

export class UploadsApiClient extends UploadsApi {
  constructor(parameters?: APIConfigurationParameters) {
    const axios = ApiClientHelpers.assertAxiosInstance(parameters)
    const basePath = ApiClientHelpers.assertBasePath()

    super(
      {
        isJsonMime,
        ...parameters,
      },
      basePath,
      axios,
    )
  }
}
