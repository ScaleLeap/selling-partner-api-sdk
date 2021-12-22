# Selling Partner API for Node.js

[![NPM](https://img.shields.io/npm/v/@scaleleap/selling-partner-api-sdk)](https://npm.im/@scaleleap/selling-partner-api-sdk)
[![License](https://img.shields.io/npm/l/@scaleleap/selling-partner-api-sdk)](./LICENSE)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ScaleLeap/selling-partner-api-sdk/Release)](https://github.com/ScaleLeap/selling-partner-api-sdk/actions)
[![Codecov](https://img.shields.io/codecov/c/github/scaleleap/selling-partner-api-sdk)](https://codecov.io/gh/ScaleLeap/selling-partner-api-sdk)
[![Snyk](https://img.shields.io/snyk/vulnerabilities/github/scaleleap/selling-partner-api-sdk)](https://snyk.io/test/github/scaleleap/selling-partner-api-sdk)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FScaleLeap%2Fselling-partner-api-sdk.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FScaleLeap%2Fselling-partner-api-sdk?ref=badge_shield)

---

- A fully typed TypeScript and Node.js SDK package for Amazon Selling Partner API
- Uses models from [API model's repo](https://github.com/amzn/selling-partner-api-models) to generate classes automatically
- Picks up changes and releases daily when/if models have drifted
- Based on Axios and uses [aws4-axios](https://github.com/jamesmbourne/aws4-axios) interceptor to automatically sign the requests
- Can optionally assume roles via STS, and refresh STS credentials on schedule

## Download & Installation

```sh
npm i -s @scaleleap/selling-partner-api-sdk
```

## Getting Started

### Prerequisites

A few things to get started:

- [Registering as a developer](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/developer-guide/SellingPartnerApiDeveloperGuide.md#registering-as-a-developer)
- [Registering your Hybrid Selling Partner API applications](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/developer-guide/SellingPartnerApiDeveloperGuide.md#hybrid-selling-partner-api-applications)
- [Authorizing Selling Partner API applications](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/developer-guide/SellingPartnerApiDeveloperGuide.md#authorizing-selling-partner-api-applications)

### Authorizing Selling Partner API

Note that it is outside the responsibility of this package to handle the authorization process.

This package assumes you have already acquired the access and refresh tokens either by going through
the OAuth flow or by using a self-authorized set of credentials.

### Basic Usage

#### Using Existing AWS Credentials

This method is applicable if you want to assume the
[Selling Partner API role](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/developer-guide/SellingPartnerApiDeveloperGuide.md#step-4-create-an-iam-role)
yourself, or you are using a static set of user credentials (not recommended).

```ts
import { SellersApiClient } from '@scaleleap/selling-partner-api-sdk'

const stsClient = new STSClient({
  // Static set of credentials that have the permission to assume the role above
  credentials: {
    accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY',
  },
})

const { Credentials } = await stsClient.send(
  new AssumeRoleCommand({
    // This is the role you have set in your Selling Partner API application
    RoleArn: 'arn:aws:iam::123456789012:role/your-SP-API-role-name',
    RoleSessionName: 'selling-partner-api-axios',
  }),
)

const client = new SellersApiClient({
  accessToken: 'Atza|...',

  // Or use `amazonMarketplaces.CA.sellingPartner.region.endpoint`
  // from `@scaleleap/amazon-marketplaces` package
  basePath: 'https://sellingpartnerapi-na.amazon.com',

  // Or use `amazonMarketplaces.CA.sellingPartner.region.awsRegion`
  // from `@scaleleap/amazon-marketplaces` package
  region: 'us-east-1',

  credentials: {
    accessKeyId: Credentials?.AccessKeyId || '',
    secretAccessKey: Credentials?.SecretAccessKey || '',
    sessionToken: Credentials?.SessionToken || '',
  }
})

const marketplaceParticipations = await client.getMarketplaceParticipations()
```

#### Letting `@scaleleap/selling-partner-api-sdk` to Assume the Role

This package uses [aws4-axios](https://github.com/jamesmbourne/aws4-axios) under the hood, which
has the capability to make the STS call and get the credentials for you, and refresh the
temporary AWS credentials session.

```ts
import { SellersApiClient } from '@scaleleap/selling-partner-api-sdk'

const client = new SellersApiClient({
  accessToken: 'Atza|...',

  // Or use `amazonMarketplaces.CA.sellingPartner.region.endpoint`
  // from `@scaleleap/amazon-marketplaces` package
  basePath: 'https://sellingpartnerapi-na.amazon.com',

  // Or use `amazonMarketplaces.CA.sellingPartner.region.awsRegion`
  // from `@scaleleap/amazon-marketplaces` package
  region: 'us-east-1',

  // This is the role you have set in your Selling Partner API application
  roleArn: 'arn:aws:iam::123456789012:role/your-SP-API-role-name',

  // Static set of credentials that have the permission to assume the role above
  credentials: {
    accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY',
  },
})

const marketplaceParticipations = await client.getMarketplaceParticipations()
```

---

See the full list of exported classes and types:
[`src/api-models/index.ts`](src/api-models/index.ts).

See [@scaleleap/amazon-marketplaces](https://github.com/ScaleLeap/amazon-marketplaces)
docs for a database of constants about Amazon Marketplaces.

### Documentation

- [Automatically generated docs](https://selling-partner-api-sdk.scaleleap.org)

## Contributing

This repository uses [Conventional Commit](https://www.conventionalcommits.org/) style commit messages.

## Authors or Acknowledgments

- Roman Filippov ([Scale Leap](https://www.scaleleap.com))
- Toan Nguyen ([nguyentoanit](https://github.com/nguyentoanit))

## License

This project is licensed under the MIT License.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FScaleLeap%2Fselling-partner-api-sdk.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FScaleLeap%2Fselling-partner-api-sdk?ref=badge_large)
