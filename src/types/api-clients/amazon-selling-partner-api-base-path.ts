export const enum ProductionApiBasePath {
  NA = 'https://sellingpartnerapi-na.amazon.com',
  EU = 'https://sellingpartnerapi-eu.amazon.com',
  FE = 'https://sellingpartnerapi-fe.amazon.com',
}

export const enum SandboxApiBasePath {
  NA = 'https://sandbox.sellingpartnerapi-na.amazon.com',
  EU = 'https://sandbox.sellingpartnerapi-eu.amazon.com',
  FE = 'https://sandbox.sellingpartnerapi-fe.amazon.com',
}

export type ApiBasePath = ProductionApiBasePath | SandboxApiBasePath

export const DEFAULT_API_BASE_PATH = ProductionApiBasePath.NA
