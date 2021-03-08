import { UploadsApiCreateUploadDestinationForResourceRequest } from '../../api-models/uploads-api-model'

export type UploadsApiClientCreateUploadDestinationForResourceRequest = Omit<
  UploadsApiCreateUploadDestinationForResourceRequest,
  'marketplaceIds'
>
