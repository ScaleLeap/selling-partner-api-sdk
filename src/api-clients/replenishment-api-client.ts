import { Configuration, OffersApi, SellingpartnersApi } from '../api-models/replenishment-api-model'
import { ApiClientHelpers, applyMixins } from '../helpers'
import { DEFAULT_API_BASE_PATH } from '../types'
import { APIConfigurationParameters } from '../types/api-clients/api-configuration-parameters'

export class ReplenishmentApiClient extends OffersApi {
  constructor(parameters: APIConfigurationParameters) {
    const axios = ApiClientHelpers.getAxiosInstance(parameters)

    const configuration = new Configuration(parameters)

    super(configuration, DEFAULT_API_BASE_PATH, axios)
  }
}

export interface ReplenishmentApiClient extends OffersApi, SellingpartnersApi {}
applyMixins(ReplenishmentApiClient, [OffersApi, SellingpartnersApi])
