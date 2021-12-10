import { Configuration, OrdersV0Api, ShipmentApi } from '../api-models/orders-api-model'
import { ApiClientHelpers, applyMixins } from '../helpers'
import { DEFAULT_API_BASE_PATH } from '../types'
import { APIConfigurationParameters } from '../types/api-clients/api-configuration-parameters'

export class OrdersApiClient extends OrdersV0Api {
  constructor(parameters: APIConfigurationParameters) {
    const axios = ApiClientHelpers.getAxiosInstance(parameters)

    const configuration = new Configuration(parameters)

    super(configuration, DEFAULT_API_BASE_PATH, axios)
  }
}

export interface OrdersApiClient extends OrdersV0Api, ShipmentApi {}
applyMixins(OrdersApiClient, [OrdersV0Api, ShipmentApi])
