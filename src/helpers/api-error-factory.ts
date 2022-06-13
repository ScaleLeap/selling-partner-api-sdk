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
        return new SellingPartnerUnknownError({
          modelError: {
            code: code || 'UnknownError',
            message,
          },
          headers,
          cause: error,
        })
      }

      const errorParameters = { modelError, headers, cause: error }

      switch (status) {
        case StatusCodes.BAD_REQUEST:
          return new SellingPartnerBadRequestError(errorParameters)
        case StatusCodes.FORBIDDEN:
          return new SellingPartnerForbiddenError(errorParameters)
        case StatusCodes.NOT_FOUND:
          return new SellingPartnerNotFoundError(errorParameters)
        case StatusCodes.REQUEST_TOO_LONG:
          return new SellingPartnerRequestTooLongError(errorParameters)
        case StatusCodes.UNSUPPORTED_MEDIA_TYPE:
          return new SellingPartnerUnsupportedMediaTypeError(errorParameters)
        case StatusCodes.TOO_MANY_REQUESTS:
          return new SellingPartnerTooManyRequestsError(errorParameters)
        case StatusCodes.INTERNAL_SERVER_ERROR:
          return new SellingPartnerInternalServerError(errorParameters)
        case StatusCodes.SERVICE_UNAVAILABLE:
          return new SellingPartnerServiceUnavailableError(errorParameters)
        default:
          return new SellingPartnerGenericError(errorParameters)
      }
    }
  }

  return error
}
