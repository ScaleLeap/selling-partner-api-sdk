import {
  Configuration,
  FulfillmentInboundApi,
} from '../api-models/fulfillment-inbound-api-model-v20240320'
import { ApiClientHelpers } from '../helpers'
import { DEFAULT_API_BASE_PATH } from '../types'
import { APIConfigurationParameters } from '../types/api-clients/api-configuration-parameters'

export class FulfillmentInboundApiClientV20240320 extends FulfillmentInboundApi {
  constructor(parameters: APIConfigurationParameters) {
    const axios = ApiClientHelpers.getAxiosInstance(parameters)

    const configuration = new Configuration(parameters)

    super(configuration, DEFAULT_API_BASE_PATH, axios)
  }
}
