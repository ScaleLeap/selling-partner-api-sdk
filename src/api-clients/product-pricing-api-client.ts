import { Configuration, ProductPricingApi } from '../api-models/product-pricing-api-model'
import { ApiClientHelpers } from '../helpers'
import { APIConfigurationParameters } from '../types/api-clients/api-configuration-parameters'

export class ProductPricingApiClient extends ProductPricingApi {
  constructor(parameters: APIConfigurationParameters) {
    const axios = ApiClientHelpers.getAxiosInstance(parameters)
    const basePath = ApiClientHelpers.getDefaultBasePath()
    const configuration = new Configuration(parameters)

    super(configuration, basePath, axios)
  }
}
