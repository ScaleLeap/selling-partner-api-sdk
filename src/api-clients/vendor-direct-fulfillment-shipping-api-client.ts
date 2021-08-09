import {
  Configuration,
  CustomerInvoicesApi,
  VendorShippingApi,
  VendorShippingLabelsApi,
} from '../api-models/vendor-direct-fulfillment-shipping-api-model'
import { ApiClientHelpers, applyMixins } from '../helpers'
import { DEFAULT_API_BASE_PATH } from '../types'
import { APIConfigurationParameters } from '../types/api-clients/api-configuration-parameters'

export class VendorDirectFulfillmentShippingApiClient extends CustomerInvoicesApi {
  constructor(parameters: APIConfigurationParameters) {
    const axios = ApiClientHelpers.getAxiosInstance(parameters)

    const configuration = new Configuration(parameters)

    super(configuration, DEFAULT_API_BASE_PATH, axios)
  }
}

export interface VendorDirectFulfillmentShippingApiClient
  extends CustomerInvoicesApi,
    VendorShippingApi,
    VendorShippingLabelsApi {}
applyMixins(VendorDirectFulfillmentShippingApiClient, [
  CustomerInvoicesApi,
  VendorShippingApi,
  VendorShippingLabelsApi,
])
