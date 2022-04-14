import {
  Configuration,
  VendorDFSandboxApi,
  VendorDFSandboxtransactionstatusApi,
} from '../api-models/vendor-direct-fulfillment-sandbox-test-data-api-model'
import { ApiClientHelpers, applyMixins } from '../helpers'
import { DEFAULT_API_BASE_PATH } from '../types'
import { APIConfigurationParameters } from '../types/api-clients/api-configuration-parameters'

export class VendorDirectFulfillmentSandboxTestDataApiClient extends VendorDFSandboxApi {
  constructor(parameters: APIConfigurationParameters) {
    const axios = ApiClientHelpers.getAxiosInstance(parameters)

    const configuration = new Configuration(parameters)

    super(configuration, DEFAULT_API_BASE_PATH, axios)
  }
}

export interface VendorDirectFulfillmentSandboxTestDataApiClient
  extends VendorDFSandboxApi,
    VendorDFSandboxtransactionstatusApi {}
applyMixins(VendorDirectFulfillmentSandboxTestDataApiClient, [
  VendorDFSandboxApi,
  VendorDFSandboxtransactionstatusApi,
])
