import { Codec } from 'purify-ts/Codec'

import { SellingPartnerParsingError } from '../types/errors'

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
