import { AmazonMarketplace } from '@scaleleap/amazon-marketplaces'

import { UploadsApiCreateUploadDestinationForResourceRequest } from '../../api-models/uploads-api-model'

export interface UploadsApiClientCreateUploadDestinationForResourceRequest
  extends Omit<UploadsApiCreateUploadDestinationForResourceRequest, 'marketplaceIds'> {
  readonly marketplaces: AmazonMarketplace[]
}
