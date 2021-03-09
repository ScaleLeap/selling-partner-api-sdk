import { AxiosError } from 'axios'
import { StatusCodes } from 'http-status-codes'
import { ExtendableError } from 'ts-error'

import {
  ModelError,
  SellingPartnerBadRequestError,
  SellingPartnerForbiddenError,
  SellingPartnerGenericError,
  SellingPartnerInternalServerError,
  SellingPartnerNotFoundError,
  SellingPartnerRequestTooLongError,
  SellingPartnerServiceUnavailableError,
  SellingPartnerTooManyRequestsError,
  SellingPartnerUnsupportedMediaTypeError,
} from '../types'

export function apiErrorFactory<T extends ModelError>(error: AxiosError<T>): ExtendableError {
  const { response } = error
  if (response) {
    const { headers, data } = response
    switch (response.status) {
      case StatusCodes.BAD_REQUEST:
        return new SellingPartnerBadRequestError(data, headers)
      case StatusCodes.FORBIDDEN:
        return new SellingPartnerForbiddenError(data, headers)
      case StatusCodes.NOT_FOUND:
        return new SellingPartnerNotFoundError(data, headers)
      case StatusCodes.REQUEST_TOO_LONG:
        return new SellingPartnerRequestTooLongError(data, headers)
      case StatusCodes.UNSUPPORTED_MEDIA_TYPE:
        return new SellingPartnerUnsupportedMediaTypeError(data, headers)
      case StatusCodes.TOO_MANY_REQUESTS:
        return new SellingPartnerTooManyRequestsError(data, headers)
      case StatusCodes.INTERNAL_SERVER_ERROR:
        return new SellingPartnerInternalServerError(data, headers)
      case StatusCodes.SERVICE_UNAVAILABLE:
        return new SellingPartnerServiceUnavailableError(data, headers)
      default:
        return new SellingPartnerGenericError(data, headers)
    }
  } else return error
}
