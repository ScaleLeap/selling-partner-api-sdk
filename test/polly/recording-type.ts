/**
 * Generated using http://json2ts.com/ from a random .har file.
 *
 * There might be things missing.
 */

import type { JsonObject } from 'type-fest'

interface NameValuePair extends JsonObject {
  name: string
  value: string
}

interface RequestHeader extends NameValuePair {
  _fromType: 'array' | string
}

interface PostData extends JsonObject {
  mimeType: string
  /**
   * This type is a guess, may not be right.
   */
  params: NameValuePair[]
  text: string | JsonObject
}

interface Request extends JsonObject {
  bodySize: number
  // not sure how it looks, all recordings have [] value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cookies: any[]
  headers: RequestHeader[]
  headersSize: number
  httpVersion: string
  method: string
  postData: PostData
  queryString: NameValuePair[]
  url: string
}

interface Content extends JsonObject {
  mimeType: string
  size: number
  text: string | JsonObject
}

interface Response extends JsonObject {
  bodySize: number
  content: Content
  // not sure how it looks, all recordings have [] value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cookies: any[]
  headers: NameValuePair[]
  headersSize: number
  httpVersion: string
  redirectURL: string
  status: number
  statusText: string
}

interface Timings extends JsonObject {
  blocked: number
  connect: number
  dns: number
  receive: number
  send: number
  ssl: number
  wait: number
}

export interface PollyRecording extends JsonObject {
  _id: string
  _order: number
  // not sure how it looks, all recordings have {} value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cache: any
  request: Request
  response: Response
  startedDateTime: string
  time: number
  timings: Timings
}
