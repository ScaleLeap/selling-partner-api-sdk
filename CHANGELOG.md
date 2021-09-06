# Changelog

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.0.1](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v5.0.0...v5.0.1) (2021-09-06)


### Bug Fixes

* **deps:** update dependency axios to v0.21.3 ([330308c](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/330308c85a734bb164c699b10ac2019975e38bc0))

# [5.0.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v4.1.3...v5.0.0) (2021-08-25)


### Bug Fixes

* update pricing model for product pricing fields ([8f29677](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/8f29677f8a0e38756699a235c8f6f05d1131f2a0))


### BREAKING CHANGES

* - change `availableDate` type from `number` to `string`.
- change `QuantityDiscountType` value from `QuantityDiscount` to `QUANTITY_DISCOUNT`.
- remove `VendorDirectFulfillmentShippingApiModelPackage` export.
- add `ProductPricingApiModelPrimeInformationType`.

## [4.1.3](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v4.1.2...v4.1.3) (2021-08-24)


### Bug Fixes

* remove unused objects and update error type when get small and light fee preview ([#213](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/213)) ([7a392f9](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/7a392f9ba1dd455c6c18553a9b96810840aa91c3))

## [4.1.2](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v4.1.1...v4.1.2) (2021-08-11)


### Bug Fixes

* update generator to add missing methods when generate api clients ([#203](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/203)) ([a20d48f](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/a20d48f05573a0eb8d89c661555e925e38d9d696))

## [4.1.1](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v4.1.0...v4.1.1) (2021-08-09)


### Bug Fixes

* **deps:** update dependency aws4-axios to v2.4.3 ([f6e0b0f](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/f6e0b0fe61e268f4e061eccd4c0523867ef9af2d))

# [4.1.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v4.0.0...v4.1.0) (2021-08-03)


### Features

* update orders and tokens api model ([#195](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/195)) ([bac11e7](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/bac11e76a6dab563d5844c911aecf2fa2635a729))

# [4.0.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.8.0...v4.0.0) (2021-07-27)


### Code Refactoring

* update granularity type in fba inventory api model's response ([#183](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/183)) ([ecc0006](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/ecc000613a197674b8243b564ae18250d3ead8f7))


### BREAKING CHANGES

* remove `FbaInventoryApiModelGranularityGranularityTypeEnum` enum export

# [3.8.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.7.0...v3.8.0) (2021-07-09)


### Features

* return marketplace info and seller display name in order api ([48cb19b](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/48cb19b3c918e2567dfc8680bd68b565f44e3676))

# [3.7.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.6.0...v3.7.0) (2021-07-08)


### Features

* add marketplace tax info and seller display name in shipment invoice ([f4d8f13](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/f4d8f13d6a2e24271442ab24b58ee868dc53fed1))

# [3.6.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.5.2...v3.6.0) (2021-06-24)


### Features

* support preview API versions ([#149](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/149)) ([5aa37d9](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/5aa37d9a2fb662e15468d36ea6fdafc3169bcde3))

## [3.5.2](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.5.1...v3.5.2) (2021-06-07)


### Bug Fixes

* error access error ([404a333](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/404a333990d35f9bdde02bdfb713855bdfaa8aa7))
* npm audit ([0b41a8a](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/0b41a8a5132050eec3b452272df597bd9bf9f3fb))

## [3.5.1](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.5.0...v3.5.1) (2021-06-03)


### Bug Fixes

* error code and message are no longer undefined ([#134](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/134)) ([55b64b5](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/55b64b53711eaf6f77bfac2da7479d157f32eb02))

# [3.5.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.4.3...v3.5.0) (2021-06-03)


### Features

* add shipment invoicing, product type definitions and listings items api model ([623872e](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/623872e97186f6b0e1ba7f17b9b079b3377f5cb4))

# Changelog

          All notable changes to this project will be documented in this file.
          See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.4.3](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.4.2...v3.4.3) (2021-05-26)


### Bug Fixes

* **deps:** update dependency aws4-axios to v2.3.4 ([61772f3](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/61772f35385ae6df18a4bd4b456ccab4d1b336a2))

## [3.4.2](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.4.1...v3.4.2) (2021-05-20)


### Bug Fixes

* export all enums from root ([19eb88c](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/19eb88cd5d9dc58376bf23aa2a072da2fe960ff1))

## [3.4.1](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.4.0...v3.4.1) (2021-05-19)


### Bug Fixes

* change rate limit value as a number ([c994ef4](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/c994ef45254facc27a4ce8801aa69f3de0a44869))

# [3.4.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.3.0...v3.4.0) (2021-05-19)


### Features

* attempt to get rate limit value ([234d12c](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/234d12cc1c5959e1ead6603eeabe722ff4016882))

# [3.3.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.2.0...v3.3.0) (2021-05-19)


### Features

* return a list of error responses in vendor direct fulfillment orders api ([493598b](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/493598bb23e7bc0ca1605cb3737b336dd52097a0))

# [3.2.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.1.0...v3.2.0) (2021-05-13)


### Features

* feat: update usage plan rates and rate tables in orders, product fees, product pricing ([1f9d563](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/1f9d5638837a73e3cdc1c705a5add2ea9c1ea49c))

# [3.1.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.0.0...v3.1.0) (2021-05-05)


### Features

* adds vendor models ([57ef4a6](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/57ef4a67e6606ede4ec9cd44d619a4022efaa422))

# [3.0.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v2.0.0...v3.0.0) (2021-04-27)


### Code Refactoring

* re-generate api client name using model directory name to prevent duplication ([05e5502](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/05e550208303760d7d7d167ee64e008919dce16a)), closes [#79](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/79)


### Reverts

* stable api versions ([461ec43](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/461ec43fa4442be2aee0018c8575ac7eb2d29315))


### BREAKING CHANGES

*

# [2.0.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v1.0.0...v2.0.0) (2021-04-19)


### Features

* update api models ([ad5fc5c](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/ad5fc5c8c025c173c65f2c77378019c62c88785b))


### BREAKING CHANGES

* * re-generate api models
* add token api client

# 1.0.0 (2021-03-25)


### Bug Fixes

* api configuration parameters's properties ([dc2da96](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/dc2da9659b3e7cccdc1221fcc74d46998501b913))
* export combine schemas ([374f532](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/374f532c3d30ea0e926bf00a9bb0689ea37edab3))
* remove decoder from src folder ([10f3b46](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/10f3b46d34e01419824cbe7b0e16bc3b1dc851cc))
* remove helpers exporting ([96d5c36](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/96d5c36e1c9600f29b0b71970fc591eae56892a0))
* remove unnecessary and private stuff exporting ([4362ddc](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/4362ddca9f32fb31b8dd4249b62c78f07a0ad32d))
* use generator v4.1.3 to fix build error ([c324f6a](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/c324f6ad3d9c279efb47d4e040ed4e98ac3f5481))
* use join method on set collection of api model code ([2d063d6](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/2d063d60db2643a0fef8693c3194769081d8ce22))
* using generator v5.0.1 with type mapping to resolve build issue ([a8c3463](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/a8c34639e620f349f63607b6f406eef1e51d275c))


### Features

* add isSandbox option ([644159c](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/644159c5d9a26e7c4ace21c6c0d4ae0c9ea29616))
* allow user set roleArn ([7159ec7](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/7159ec75295f301b341717dc2c0d31041789d4ed))
* automate client version number dumps ([e21d3d6](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/e21d3d6c19fa2303f2dea6386a7d0ec3396401c5))
* check new commits before re-generate models (GHORG-38) ([03c4ecb](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/03c4ecb2b69d48084fb469bb7c89f80be4d542ff))
* implement decoder and scripts to generate api model code commands ([0abe7ee](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/0abe7eecf557272e1e2d5a059b27b6bfd3d9c48a))
* init api models ([624eed9](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/624eed98b67b298ac512002ac8e34b45d6b391a4))
* Write glue code to link generated code (GHORG-15) ([#9](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/9)) ([994d0ea](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/994d0eac1c53c8676378e59053b9e6cac1eb8f4c))
