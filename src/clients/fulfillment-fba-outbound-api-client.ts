import { FbaOutboundApi } from '../api-models/fulfillment-outbound-api-model'
import { ApiClientHelpers } from '../helpers'
import { APIConfigurationParameters } from '../types/api-configuration-parameters'

// TODO: duplicated API model with fba outbound
export class FulfillmentFbaOutboundApiClient extends FbaOutboundApi {
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
