# Selling Partner API for Node.js

[![NPM](https://img.shields.io/npm/v/@scaleleap/selling-partner-api-sdk)](https://npm.im/@scaleleap/selling-partner-api-sdk)
[![License](https://img.shields.io/npm/l/@scaleleap/selling-partner-api-sdk)](./LICENSE)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ScaleLeap/selling-partner-api-sdk/Release)](https://github.com/ScaleLeap/selling-partner-api-sdk/actions)
[![Codecov](https://img.shields.io/codecov/c/github/scaleleap/selling-partner-api-sdk)](https://codecov.io/gh/ScaleLeap/selling-partner-api-sdk)
[![Snyk](https://img.shields.io/snyk/vulnerabilities/github/scaleleap/selling-partner-api-sdk)](https://snyk.io/test/github/scaleleap/selling-partner-api-sdk)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

📦 @scaleleap/selling-partner-api-sdk

---

A fully typed TypeScript and Node.js SDK library for Amazon Selling Partner API

## Download & Installation

```sh
npm i -s @scaleleap/selling-partner-api-sdk
```

## Getting Started

### Prerequisites

A few things to get started:

* [Registering as a developer](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/developer-guide/SellingPartnerApiDeveloperGuide.md#registering-as-a-developer)

* [Registering your Selling Partner API application](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/developer-guide/SellingPartnerApiDeveloperGuide.md#registering-your-selling-partner-api-application)

* [Authorizing Selling Partner API applications](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/developer-guide/SellingPartnerApiDeveloperGuide.md#authorizing-selling-partner-api-applications)

### Basic Usage

The general format applies to any Selling Partner API request:

```ts
import {
  amazonMarketplaces,
  assertMarketplaceHasSellingPartner,
} from '@scaleleap/amazon-marketplaces'

import { 
  APIConfigurationParameters,
  SellingPartnerForbiddenError,
  SellingPartnerGenericError,
  UploadsApiClient,
 } from '@scaleleap/selling-partner-api-sdk'

const contentMD5 = 'MD5'
const resource = 'resource'

// We could use @scaleleap/amazon-marketplaces package to get aws region and marketplace id
const { CA } = amazonMarketplaces
assertMarketplaceHasSellingPartner(CA)

const configuration: APIConfigurationParameters = {
  accessToken: 'Atza|...',
  region: CA.sellingPartner.region,
}

const client = new UploadsApiClient(configuration)
const parameters = {
  marketplaceIds: [CA.id],
  contentMD5,
  resource,
}

const response = await client
  .createUploadDestinationForResource(parameters)
})
```

## Contributing

This repository uses [Conventional Commit](https://www.conventionalcommits.org/) style commit messages.

## Authors or Acknowledgments

* Roman Filippov ([Scale Leap](https://www.scaleleap.com))
* Toan Nguyen ([nguyentoanit](https://github.com/nguyentoanit))

## License

This project is licensed under the MIT License.
