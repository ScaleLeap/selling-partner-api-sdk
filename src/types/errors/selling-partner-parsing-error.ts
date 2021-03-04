import ExtendableError from 'ts-error'

export class SellingPartnerParsingError extends ExtendableError {
  public constructor(message: string) {
    super(message)
  }
}
