import { ExtendableError } from 'ts-error'

export class SellingPartnerNotFoundRegionError extends ExtendableError {
  public constructor(public basePath: string) {
    super(`Region cannot be found in ${basePath}, needs to be added!`)
  }
}
