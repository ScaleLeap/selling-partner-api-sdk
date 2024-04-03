import { ExtendableError } from 'ts-error'

export class SellingPartnerMismatchRegionError extends ExtendableError {
  public constructor(
    public defaultRegion: string,
    public region: string,
  ) {
    super(`There is a mismatch between region parameter and region in default base path!
      Default Region: ${defaultRegion}
      Region: ${region}
    `)
  }
}
