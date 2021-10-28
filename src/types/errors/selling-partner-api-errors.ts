/* eslint-disable max-classes-per-file */
import { AxiosResponseHeaders } from 'axios'
import { ExtendableError } from 'ts-error'

export interface ModelErrorContainer {
  errors: ModelError[]
}

export interface ModelError {
  /**
   * An error code that identifies the type of error that occurred.
   * @type {string}
   * @memberof ModelError
   */
  code: string
  /**
   * A message that describes the error condition in a human-readable form.
   * @type {string}
   * @memberof ModelError
   */
  message: string
  /**
   * Additional details that can help the caller understand or fix the issue.
   * @type {string}
   * @memberof ModelError
   */
  details?: string
}

export class SellingPartnerGenericError extends ExtendableError {
  public code: string

  public message: string

  public details?: string

  public requestId: string

  public constructor(error: ModelError, headers: AxiosResponseHeaders) {
    super(error.details)

    this.code = error.code
    this.message = error.message
    this.details = error.details
    this.requestId = headers['x-amzn-RequestId'] || headers['x-amzn-requestid'] || ''
  }
}

export class SellingPartnerBadRequestError extends SellingPartnerGenericError {}
export class SellingPartnerForbiddenError extends SellingPartnerGenericError {}
export class SellingPartnerNotFoundError extends SellingPartnerGenericError {}
export class SellingPartnerRequestTooLongError extends SellingPartnerGenericError {}
export class SellingPartnerUnsupportedMediaTypeError extends SellingPartnerGenericError {}
export class SellingPartnerTooManyRequestsError extends SellingPartnerGenericError {
  public rateLimit?: number

  public constructor(error: ModelError, headers: AxiosResponseHeaders) {
    super(error, headers)
    this.rateLimit =
      Number(headers['x-amzn-RateLimit-Limit']) ||
      Number(headers['x-amzn-ratelimit-limit']) ||
      undefined
  }
}
export class SellingPartnerInternalServerError extends SellingPartnerGenericError {}
export class SellingPartnerServiceUnavailableError extends SellingPartnerGenericError {}
export class SellingPartnerUnknownError extends SellingPartnerGenericError {}

/* eslint-enable max-classes-per-file */
