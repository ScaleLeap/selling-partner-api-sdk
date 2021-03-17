import { Codec } from 'purify-ts/Codec' // eslint-disable-line import/no-extraneous-dependencies

import { SellingPartnerParsingError } from './types/errors/selling-partner-parsing-error'

export class Decoder {
  static decode<T>(decoder: Codec<T>, object: unknown): T {
    return decoder.decode(object).caseOf({
      Right: (x) => x,
      Left: (error) => {
        throw new SellingPartnerParsingError(error)
      },
    })
  }
}
