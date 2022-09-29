import {
  Configuration,
  CustomerInvoicesApi,
  VendorShippingApi,
  VendorShippingLabelsApi,
} from '../api-models/vendor-direct-fulfillment-shipping-api-model-v20211228'
import { ApiClientHelpers, applyMixins } from '../helpers'
import { DEFAULT_API_BASE_PATH } from '../types'
import { APIConfigurationParameters } from '../types/api-clients/api-configuration-parameters'

export class VendorDirectFulfillmentShippingApiClientV20211228 extends CustomerInvoicesApi {
  constructor(parameters: APIConfigurationParameters) {
    const axios = ApiClientHelpers.getAxiosInstance(parameters)

    const configuration = new Configuration(parameters)

    super(configuration, DEFAULT_API_BASE_PATH, axios)
  }
}

export interface VendorDirectFulfillmentShippingApiClientV20211228
  extends CustomerInvoicesApi,
    VendorShippingApi,
    VendorShippingLabelsApi {}
applyMixins(VendorDirectFulfillmentShippingApiClientV20211228, [
  CustomerInvoicesApi,
  VendorShippingApi,
  VendorShippingLabelsApi,
])
