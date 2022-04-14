import {
  Configuration,
  VendorTransactionApi,
} from '../api-models/vendor-direct-fulfillment-transactions-api-model-v20211228'
import { ApiClientHelpers } from '../helpers'
import { DEFAULT_API_BASE_PATH } from '../types'
import { APIConfigurationParameters } from '../types/api-clients/api-configuration-parameters'

export class VendorDirectFulfillmentTransactionsApiClientV20211228 extends VendorTransactionApi {
  constructor(parameters: APIConfigurationParameters) {
    const axios = ApiClientHelpers.getAxiosInstance(parameters)

    const configuration = new Configuration(parameters)

    super(configuration, DEFAULT_API_BASE_PATH, axios)
  }
}
