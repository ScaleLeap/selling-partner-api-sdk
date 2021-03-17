import { Configuration, NotificationsApi } from '../api-models/notifications-api-model'
import { ApiClientHelpers } from '../helpers'
import { DEFAULT_API_BASE_PATH } from '../types'
import { APIConfigurationParameters } from '../types/api-clients/api-configuration-parameters'

export class NotificationsApiClient extends NotificationsApi {
  constructor(parameters: APIConfigurationParameters) {
    const axios = ApiClientHelpers.getAxiosInstance(parameters)

    const configuration = new Configuration({
      ...parameters,
      basePath: ApiClientHelpers.getBasePath(parameters),
    })

    super(configuration, DEFAULT_API_BASE_PATH, axios)
  }
}
