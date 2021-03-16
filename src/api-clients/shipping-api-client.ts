import { Configuration, ShippingApi } from '../api-models/shipping-api-model'
import { ApiClientHelpers } from '../helpers'
import { APIConfigurationParameters } from '../types/api-clients/api-configuration-parameters'

export class ShippingApiClient extends ShippingApi {
  constructor(parameters: APIConfigurationParameters) {
    const axios = ApiClientHelpers.getAxiosInstance(parameters)
    const basePath = ApiClientHelpers.getDefaultBasePath()
    const configuration = new Configuration(parameters)

    super(configuration, basePath, axios)
  }
}
