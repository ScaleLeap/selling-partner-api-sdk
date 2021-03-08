import globalAxios, { AxiosInstance } from 'axios'

import {
  Configuration,
  UploadsApi,
  UploadsApiCreateUploadDestinationForResourceRequest,
} from '../api-models/uploads-api-model'
import { BASE_PATH } from '../api-models/uploads-api-model/base'
import { UploadsApiClientConfigurationParameters } from '../types/uploads-api-client/uploads-api-client-configuration-parameters'
import { UploadsApiClientCreateUploadDestinationForResourceRequest } from '../types/uploads-api-client/uploads-api-client-create-upload-destination-for-resource-request'

export class UploadsApiClient {
  private uploadsApi: UploadsApi

  constructor(
    protected configuration?: UploadsApiClientConfigurationParameters,
    protected axios: AxiosInstance = globalAxios,
  ) {
    // TODO: assert marketplace
    const basePath: string | undefined = configuration?.marketplace?.sellingPartner?.region.endpoint
    const uploadsApiConfiguration: Configuration = new Configuration({
      ...configuration,
      basePath,
    })
    this.uploadsApi = new UploadsApi(uploadsApiConfiguration, BASE_PATH, axios)
  }

  public createUploadDestinationForResource(
    apiClientParameters: UploadsApiClientCreateUploadDestinationForResourceRequest,
    options?: any,
  ) {
    const marketplaceId = this.configuration?.marketplace?.id
    let marketplaceIds: string[] = []
    if (marketplaceId) {
      marketplaceIds = [marketplaceId]
    }

    const apiParameters: UploadsApiCreateUploadDestinationForResourceRequest = {
      ...apiClientParameters,
      marketplaceIds,
    }

    // TODO: Handle errors
    return this.uploadsApi.createUploadDestinationForResource(apiParameters, options)
  }
}
