import { FbaInboundApi } from '../api-models/fba-inbound-eligibility-api-model'
import { ApiClientHelpers } from '../helpers'
import { APIConfigurationParameters } from '../types/api-clients/api-configuration-parameters'

export class FbaInboundApiClient extends FbaInboundApi {
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
