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

- [Registering as a developer](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/developer-guide/SellingPartnerApiDeveloperGuide.md#registering-as-a-developer)
- [Registering your Selling Partner API application](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/developer-guide/SellingPartnerApiDeveloperGuide.md#registering-your-selling-partner-api-application)
- [Authorizing Selling Partner API applications](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/developer-guide/SellingPartnerApiDeveloperGuide.md#authorizing-selling-partner-api-applications)

### Basic Usage

The general format applies to any Selling Partner API request:

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
})

const marketplaceParticipations = await client.getMarketplaceParticipations()
```

See the full list of exported classes and types:
[`src/api-models/index.ts`](src/api-models/index.ts).

See [@scaleleap/amazon-marketplaces](https://github.com/ScaleLeap/amazon-marketplaces)
docs for a database of constants about Amazon Marketplaces.

### Helpers
Using the Amazon Reports and Amazon Feeds sections of the API can be a bit tedious. This library adds some useful helpers for feeds and reports.
#### Feed Helpers

submitFeedHelper will submit an XML feed and wait for the results. It will lightly parse the XML to let you know if there are errors or not. This way you can know whether you have to parse the XML or not.
```js
const { hasErrors, xmlResponse} = await FeedHelpers.SubmitFeed(feedsClient, 'SELLING_PARTNER_REPORT_TYPE', xmlString);
```

#### Report Helpers

getReportHelper will request a new report, wait on an interval until the report is finished, and then parse the tsv results into JSON. Parsing is optional. [See Amazon's ReportType Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values)
```js
await ReportHelpers.GetReport(reportsClient, 'SELLING_PARTNER_REPORT_TYPE', {
	startDate: '2022-03-07',
	endDate: '2022-03-08',
});
```

getLatestReportHelper will fetch the latest DONE version of a report and parse the tsv results into JSON. Parsing is optional.
```js
await ReportHelpers.GetLatestReport(reportsClient, 'SELLING_PARTNER_REPORT_TYPE');
```

You can use the tsv to json parser alone if you'd like to
```js
import parseAmazonReport from '@whitebox-co/selling-partner-api-sdk/lib/helpers';
```

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
