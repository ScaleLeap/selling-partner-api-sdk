import globalAxios, { AxiosError, AxiosInstance } from 'axios'

import {
  Configuration,
  CreateUploadDestinationResponse,
  ModelError,
  UploadsApi,
  UploadsApiCreateUploadDestinationForResourceRequest,
} from '../api-models/uploads-api-model'
import { BASE_PATH } from '../api-models/uploads-api-model/base'
import { apiErrorFactory } from '../helpers'
import { UploadsApiClientConfigurationParameters } from '../types/uploads-api-client/uploads-api-client-configuration-parameters'
import { UploadsApiClientCreateUploadDestinationForResourceRequest } from '../types/uploads-api-client/uploads-api-client-create-upload-destination-for-resource-request'

export class UploadsApiClient {
  private uploadsApi: UploadsApi

  constructor(
    protected configuration?: UploadsApiClientConfigurationParameters,
    protected axios: AxiosInstance = globalAxios,
  ) {
    const basePath: string | undefined = configuration?.marketplace?.sellingPartner?.region.endpoint
    const uploadsApiConfiguration: Configuration = new Configuration({
      ...configuration,
      basePath,
    })
    this.uploadsApi = new UploadsApi(uploadsApiConfiguration, BASE_PATH, axios)
  }

  public async createUploadDestinationForResource(
    apiClientParameters: UploadsApiClientCreateUploadDestinationForResourceRequest,
    options?: unknown,
  ): Promise<CreateUploadDestinationResponse> {
    const { marketplaces, ...rest } = apiClientParameters

    const marketplaceIds: string[] = marketplaces.map((marketplace) => marketplace.id)

    const apiParameters: UploadsApiCreateUploadDestinationForResourceRequest = {
      ...rest,
      marketplaceIds,
    }

    return this.uploadsApi
      .createUploadDestinationForResource(apiParameters, options)
      .then((response) => response.data)
      .catch((error: AxiosError) => {
        throw apiErrorFactory<ModelError>(error)
      })
  }
}
