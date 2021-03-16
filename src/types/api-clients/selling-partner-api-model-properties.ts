import { AmazonSellingPartnerApiRegion } from './amazon-selling-partner-api-region'
import { SellingPartnerAPICredentials } from './selling-partner-api-credentials'

export interface SellingPartnerApiModelProperties {
  region: AmazonSellingPartnerApiRegion
  credentials?: SellingPartnerAPICredentials
}
