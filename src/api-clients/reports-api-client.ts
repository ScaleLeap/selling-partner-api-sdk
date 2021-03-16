import { Configuration, ReportsApi } from '../api-models/reports-api-model'
import { ApiClientHelpers } from '../helpers'
import { APIConfigurationParameters } from '../types/api-clients/api-configuration-parameters'

export class ReportsApiClient extends ReportsApi {
  constructor(parameters: APIConfigurationParameters) {
    const axios = ApiClientHelpers.getAxiosInstance(parameters)
    const basePath = ApiClientHelpers.getDefaultBasePath()
    const configuration = new Configuration(parameters)

    super(configuration, basePath, axios)
  }
}
