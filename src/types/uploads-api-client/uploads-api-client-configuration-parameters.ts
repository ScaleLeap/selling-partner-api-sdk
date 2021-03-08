import { AmazonMarketplace } from '@scaleleap/amazon-marketplaces'

import { ConfigurationParameters } from '../../api-models/uploads-api-model'

export interface UploadsApiClientConfigurationParameters
  extends Omit<ConfigurationParameters, 'basePath'> {
  marketplace?: AmazonMarketplace
}
