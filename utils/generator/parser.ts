import SwaggerParser from '@apidevtools/swagger-parser'
import { OpenAPI } from 'openapi-types'

export class Parser {
  private api: Promise<OpenAPI.Document>

  constructor(api: string | OpenAPI.Document) {
    this.api = SwaggerParser.parse(api)
  }

  get version(): Promise<string> {
    return this.api.then((document) => document.info.version)
  }
}
