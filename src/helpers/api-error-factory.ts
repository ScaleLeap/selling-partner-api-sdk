import { AxiosError } from 'axios'
import { StatusCodes } from 'http-status-codes'
import { ExtendableError } from 'ts-error'

import {
  ModelErrorContainer,
  SellingPartnerBadRequestError,
  SellingPartnerForbiddenError,
  SellingPartnerGenericError,
  SellingPartnerInternalServerError,
  SellingPartnerNotFoundError,
  SellingPartnerRequestTooLongError,
  SellingPartnerServiceUnavailableError,
  SellingPartnerTooManyRequestsError,
  SellingPartnerUnknownError,
  SellingPartnerUnsupportedMediaTypeError,
} from '../types'

function isAPIModelError(data: unknown): data is ModelErrorContainer {
  return (data as ModelErrorContainer).errors?.every(
    (element) => 'code' in element && 'message' in element,
  )
}

export function apiErrorFactory(error: AxiosError): ExtendableError {
  const { response, code, message } = error

  if (response) {
    const { headers, data, status } = response

    if (isAPIModelError(data)) {
      const modelError = data.errors.shift()
      if (modelError === undefined) {
        return new SellingPartnerUnknownError(
          {
            code: code || 'UnknownError',
            message,
          },
          headers,
        )
      }

      switch (status) {
        case StatusCodes.BAD_REQUEST:
          return new SellingPartnerBadRequestError(modelError, headers)
        case StatusCodes.FORBIDDEN:
          return new SellingPartnerForbiddenError(modelError, headers)
        case StatusCodes.NOT_FOUND:
          return new SellingPartnerNotFoundError(modelError, headers)
        case StatusCodes.REQUEST_TOO_LONG:
          return new SellingPartnerRequestTooLongError(modelError, headers)
        case StatusCodes.UNSUPPORTED_MEDIA_TYPE:
          return new SellingPartnerUnsupportedMediaTypeError(modelError, headers)
        case StatusCodes.TOO_MANY_REQUESTS:
          return new SellingPartnerTooManyRequestsError(modelError, headers)
        case StatusCodes.INTERNAL_SERVER_ERROR:
          return new SellingPartnerInternalServerError(modelError, headers)
        case StatusCodes.SERVICE_UNAVAILABLE:
          return new SellingPartnerServiceUnavailableError(modelError, headers)
        default:
          return new SellingPartnerGenericError(modelError, headers)
      }
    }
  }

  return error
}
