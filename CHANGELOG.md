# Changelog

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [8.0.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v7.0.0...v8.0.0) (2024-09-13)


### Bug Fixes

* **deps:** update dependency axios to v1.7.0 ([#1066](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/1066)) ([ab10adb](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/ab10adbc755bfd15ef0c2dee3b3c56953258b06e))
* **deps:** update dependency axios to v1.7.1 ([#1067](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/1067)) ([75c3417](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/75c341735bbeeacfa0e1ad675f3b8483aec77324))
* **deps:** update dependency axios to v1.7.2 ([#1070](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/1070)) ([71e0a5a](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/71e0a5af0b9c2ab81f0e15ce991c50ac19e06fba))
* **deps:** update dependency axios to v1.7.7 ([#1105](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/1105)) ([67ee3bc](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/67ee3bcbcbf192bc2d1b182a194969a4740ae003))


### Features

* Update API models ([#1072](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/1072)) ([f029e04](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/f029e0423aea8ead758c64bcff53ff2669c74eb2))
* Update API models ([#1111](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/1111)) ([9c6decd](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/9c6decdc23074dc1bbb02659a5c9092eef5fb20a))
* update order api v0 ([#1051](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/1051)) ([ac536be](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/ac536be91c5fcf5f6141f030bb32e79f57721e39))


### BREAKING CHANGES

* ** 
Updated the IsBuyerRequestedCancel, IsGift and NumberOfItems object
types from boolean/integer to string.

Co-authored-by: nguyentoanit <19872073+nguyentoanit@users.noreply.github.com>

# [7.0.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.13.8...v7.0.0) (2024-04-03)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.3.4 ([#1018](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/1018)) ([40f547d](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/40f547df48041b1bd96c08c8aa39c335640f2746))
* **deps:** update dependency axios to v1.6.8 ([#1023](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/1023)) ([ae0275e](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/ae0275e6c5f18a6a6a8d965c47704394b3771b71))
* installs @scaleleap/semantic-release-config ([dccfedb](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/dccfedb9f6552e6ec0bd6acb6c56d81397ea3664))
* remove singing requests ([#951](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/951)) ([4169903](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/41699034b5bc1a46cd763656d6b714c3576a2e5e))
* update @scaleleap/semantic-release-config ([03d1fe4](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/03d1fe472b1a83877b58e33aedfa1ee39f54421c))


### Features

* update API models ([#1031](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/1031)) ([3215b39](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/3215b394d04485c1fc415f9ecc539c972b218b3c)), closes [#1021](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/1021) [#1022](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/1022) [#564](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/564)


### BREAKING CHANGES

* - Removes authorization API client. Refer to the [SP-API
Deprecations](https://developer-docs.amazon.com/sp-api/docs/sp-api-deprecations)
table for more information.

Adds support for:

- Data Kiosk APi
- Fulfillment Inbound API (`v20240320`)
- Shipping API (`v2`)
- Supply Sources API

## [6.13.8](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.13.7...v6.13.8) (2024-01-25)


### Bug Fixes

* **deps:** update dependency axios to v1.6.7 ([ca93d20](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/ca93d20b70f3662a916719803e4ec8cee6d327bf))

## [6.13.7](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.13.6...v6.13.7) (2024-01-25)


### Bug Fixes

* **deps:** update dependency axios to v1.6.6 ([cf37511](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/cf37511b0de88b62043813499192b62717819aa0))

## [6.13.6](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.13.5...v6.13.6) (2024-01-06)


### Bug Fixes

* **deps:** update dependency axios to v1.6.5 ([792511c](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/792511c211d4b49e8fb139817aabe924d7ee3db5))

## [6.13.5](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.13.4...v6.13.5) (2024-01-04)


### Bug Fixes

* **deps:** update dependency axios to v1.6.4 ([abeb9ba](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/abeb9ba88770cf13dde033fb3a8b4eef9c2b5a53))

## [6.13.4](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.13.3...v6.13.4) (2023-12-27)


### Bug Fixes

* **deps:** update dependency axios to v1.6.3 ([9a60c08](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/9a60c08b78562c777b8cb4fbab5a1f55a60623fd))

## [6.13.3](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.13.2...v6.13.3) (2023-11-15)


### Bug Fixes

* **deps:** update dependency axios to v1.6.2 ([0418cd0](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/0418cd070d58fd12d5430c7e3e2c085162c99015))

## [6.13.2](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.13.1...v6.13.2) (2023-11-08)


### Bug Fixes

* **deps:** update dependency axios to v1.6.1 ([18bc3aa](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/18bc3aad689e88e3b42fa534782a8ecf03ffb2a1))

## [6.13.1](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.13.0...v6.13.1) (2023-10-27)


### Bug Fixes

* **deps:** update dependency axios to v1.6.0 ([06332b2](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/06332b2b7972bb76ec34b0bcec93fb896eb3a23e))

# [6.13.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.23...v6.13.0) (2023-10-16)


### Features

* add replenishment api client ([#815](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/815)) ([30e3a32](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/30e3a328ae90ff7e0b07a3c07ddb3e1171d67e47))

## [6.12.23](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.22...v6.12.23) (2023-09-26)


### Bug Fixes

* **deps:** update dependency axios to v1.5.1 ([d9a3ff5](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/d9a3ff5f3e2ec62c113c5b15a7e44faf223d7173))

## [6.12.22](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.21...v6.12.22) (2023-09-22)


### Bug Fixes

* **deps:** update dependency http-status-codes to v2.3.0 ([90d1c36](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/90d1c36b331726972c371ba7ae5470c00db2fa0d))

## [6.12.21](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.20...v6.12.21) (2023-08-28)


### Bug Fixes

* **deps:** update dependency axios to v1.5.0 ([a8f267b](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/a8f267baf26263fdee9f39a20ac5ba09e873f6a2))

## [6.12.20](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.19...v6.12.20) (2023-08-17)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.3.0 ([62db4b4](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/62db4b481cca17fe0609daae0657fa414d3214e5))

## [6.12.19](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.18...v6.12.19) (2023-06-15)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.2.24 ([1e16bbb](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/1e16bbb5ec5805f6620f4565dbeb616d057e95f1))

## [6.12.18](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.17...v6.12.18) (2023-06-14)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.2.23 ([9f46d4f](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/9f46d4faa0806213f361583fb4e296e48cbf11db))

## [6.12.17](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.16...v6.12.17) (2023-06-13)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.2.22 ([ed2e3ab](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/ed2e3aba1b8f336832efde986629984d597690fa))

## [6.12.16](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.15...v6.12.16) (2023-06-12)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.2.21 ([b27ff89](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/b27ff89dc6cf1d1390aaae5b15afc24ac182559b))

## [6.12.15](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.14...v6.12.15) (2023-06-09)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.2.20 ([ac39c2b](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/ac39c2b337450007cf0c18fe6819650d4e30a5e7))

## [6.12.14](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.13...v6.12.14) (2023-06-08)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.2.19 ([e87a6fb](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/e87a6fbf33963050ffc3380ba411cd4bd7e1d76e))

## [6.12.13](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.12...v6.12.13) (2023-06-08)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.2.18 ([fff0ffe](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/fff0ffe6d7faedd0f1edf0635b8429efd431d1b5))

## [6.12.12](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.11...v6.12.12) (2023-06-07)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.2.17 ([d110311](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/d1103111f19278c4b7e0ffe676f84f8e46b3b7ff))

## [6.12.11](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.10...v6.12.11) (2023-06-06)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.2.16 ([f05b918](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/f05b9186dba244a9433279a506547b1d40fbdbda))

## [6.12.10](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.9...v6.12.10) (2023-06-05)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.2.15 ([ba75861](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/ba758614f62679d0a59dc27e6e61530de43a22ac))

## [6.12.9](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.8...v6.12.9) (2023-06-02)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.2.12 ([9e58af2](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/9e58af29df6d68158431f3cdb42cfad13f86342e))

## [6.12.8](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.7...v6.12.8) (2023-06-02)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.2.11 ([3371996](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/3371996a69f21ab52277b530ef7495b39caaca4b))

## [6.12.7](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.6...v6.12.7) (2023-05-31)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.2.9 ([41d66ed](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/41d66ed8503bee5f4958d9b18c74fe5cee04ebca))

## [6.12.6](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.5...v6.12.6) (2023-05-30)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.2.7 ([b88a370](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/b88a3708e82347744a5771db0320911c27959b69))
* **deps:** update dependency aws4-axios to v3.2.8 ([b898e9a](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/b898e9ab851f50fb868bfe1ed07ade9084358d74))

## [6.12.5](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.4...v6.12.5) (2023-05-29)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.2.6 ([db2eabb](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/db2eabba236f1ce5539e5db487296059991ba5c0))

## [6.12.4](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.3...v6.12.4) (2023-05-26)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.2.4 ([f9a50ab](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/f9a50abaafd1af0bf7475da4eef52b165cabc82e))

## [6.12.3](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.2...v6.12.3) (2023-05-25)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.2.2 ([da0f3fe](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/da0f3fe826c46e70af9ff48358b5a9036d61eafd))

## [6.12.2](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.1...v6.12.2) (2023-05-22)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.2.1 ([b1e6781](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/b1e67814523c8db40b021f4528aa59298d58da70))

## [6.12.1](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.12.0...v6.12.1) (2023-05-19)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.1.14 ([fc35b89](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/fc35b8948c6805ce1cdb36fc5c2a978a28274319))

# [6.12.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.11.1...v6.12.0) (2023-05-18)


### Bug Fixes

* **deps:** update dependency aws4-axios to v3.1.10 ([c4f35a1](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/c4f35a1bbc4b7d92ce6a2aaa947b0f8eb1a8e796))
* **deps:** update dependency aws4-axios to v3.1.11 ([9873d85](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/9873d851a388e53bf533cbcc4a1c56e65a9b7e90))
* **deps:** update dependency aws4-axios to v3.1.12 ([8019875](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/8019875f3ef7cc65bc58c87bbc3f911dbd26a138))
* **deps:** update dependency aws4-axios to v3.1.13 ([7d6ba0e](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/7d6ba0e75ad500f94367ec30456e9dab8d1b81a5))
* **deps:** update dependency aws4-axios to v3.1.2 ([a8c868e](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/a8c868ef8914e92cb16d7e5933cc8fa24a33bc6d))
* **deps:** update dependency aws4-axios to v3.1.4 ([c29bf4c](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/c29bf4c0a359a85a3ab5e7898b56b422d7fecf3d))
* **deps:** update dependency aws4-axios to v3.1.6 ([72921f8](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/72921f80fe27aa41bcdc655efc60fefc6096abb1))
* **deps:** update dependency aws4-axios to v3.1.7 ([dc19176](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/dc19176550c65887e62e348e21f18422247fbd5b))


### Features

* add product pricing api client v20220501 ([#784](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/784)) ([e4e7ff5](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/e4e7ff524bfbe92298cb70372beb1f1e79c47145))

## [6.11.1](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.11.0...v6.11.1) (2023-05-08)


### Bug Fixes

* **deps:** update dependency axios to v1 ([#587](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/587)) ([b9ca17c](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/b9ca17c040be3d71e32f1bd6c517698a5bde1799))

# [6.11.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.10.3...v6.11.0) (2022-12-30)


### Features

* add events information in finances api model ([#668](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/668)) ([0325cbd](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/0325cbd2bdfc7cf0c4f31566ecf809db35ce7e13))

## [6.10.3](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.10.2...v6.10.3) (2022-12-07)


### Bug Fixes

* missing data in catalog items api v20220401 ([#650](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/650)) ([38abc00](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/38abc006f5fb7bee1632f2a733373eb1522c250d))

## [6.10.2](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.10.1...v6.10.2) (2022-12-06)


### Bug Fixes

* shipment in fulfillment inbound api v0 ([#649](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/649)) ([6170584](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/6170584de30fa2976f49acd6950afbced9359ab4)), closes [#648](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/648)

## [6.10.1](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.10.0...v6.10.1) (2022-11-21)


### Reverts

* Revert "chore(deps): update dependency ts-morph to v17 (#637)" (#639) ([692b81c](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/692b81ce40f12d7ed5d737a15bc9168414defe73)), closes [#637](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/637) [#639](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/639)

# [6.10.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.9.0...v6.10.0) (2022-09-29)


### Features

* add vendor shipping and customer invoice api ([#568](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/568)) ([bd284da](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/bd284daace7c162833d6e529fc76ab6704f20456))

# [6.9.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.8.0...v6.9.0) (2022-09-07)


### Features

* update catalog item api model v20220401 ([#548](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/548)) ([2f34861](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/2f34861d24867945a776c00ec850b23ac1fc0849))

# [6.8.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.7.0...v6.8.0) (2022-08-22)


### Features

* add bulk scheduled packages in easy ship model ([#527](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/527)) ([0d79fd2](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/0d79fd2ed176f23e7c2d1a824c99bc2058bcb54a))

# [6.7.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.6.0...v6.7.0) (2022-08-12)


### Features

* update service api model ([#519](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/519)) ([265490b](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/265490bf48baa435e38efbecb86147bbe15a11b5))

# [6.6.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.5.0...v6.6.0) (2022-08-10)


### Features

* Improvements to the Orders API in support of Easy Ship shipments ([#518](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/518)) ([0bf157c](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/0bf157c821d5b3b1778d069b2ad32a0431b43b7f))

# [6.5.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.4.0...v6.5.0) (2022-07-22)


### Features

* sends a message providing the buyer an invoice ([#508](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/508)) ([51f67b6](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/51f67b6a720e262f6577261dd777af83db158978))

# [6.4.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.3.1...v6.4.0) (2022-06-13)


### Features

* exposes original axios error object ([#479](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/479)) ([134781c](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/134781c67410ee2c1b24646db7f4fb98fb77ad22))

## [6.3.1](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.3.0...v6.3.1) (2022-05-21)


### Bug Fixes

* item dimension type in Catalog Item V20220401 ([#460](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/460)) ([cecdc3c](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/cecdc3ca08ad6c96f35b5410e15223e26ba98e00))

# [6.3.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.2.4...v6.3.0) (2022-05-19)


### Features

* update api models ([#458](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/458)) ([79fb225](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/79fb225d2534f78b164c5e21eb69b4b3638e1f65))

## [6.2.4](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.2.3...v6.2.4) (2022-05-18)


### Bug Fixes

* handle all unknown errors ([#454](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/454)) ([c9e1298](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/c9e12988b1603fbc697d372c121f4d0a7927cf88))

## [6.2.3](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.2.2...v6.2.3) (2022-04-27)


### Bug Fixes

* **deps:** update dependency axios to v0.27.2 ([ae635ca](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/ae635ca85bdee5bf7c131c46349ff80109037ce4))

## [6.2.2](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.2.1...v6.2.2) (2022-04-27)


### Bug Fixes

* **deps:** update dependency axios to v0.27.1 ([fbe65e2](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/fbe65e2b2246da920c1fa921f27466129305882c))

## [6.2.1](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.2.0...v6.2.1) (2022-04-27)


### Bug Fixes

* **deps:** update dependency axios to v0.27.0 ([#433](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/433)) ([4461da1](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/4461da1b4c08c64b6d2152e1cdcc35b172e818a2))

# [6.2.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.1.0...v6.2.0) (2022-04-14)


### Features

* add vendor direct fulfillment and easy ship model ([#424](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/424)) ([0069b77](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/0069b77df6f7b4fd2bddc6c34be62f52cd2ba747))

# [6.1.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.0.1...v6.1.0) (2022-03-24)


### Features

* Add buyerRequestedCancel parameter to Orders API ([#411](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/411)) ([6174ad6](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/6174ad6ae03fc385fc04bfa08d6d5aabe68abb1d))

## [6.0.1](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v6.0.0...v6.0.1) (2022-03-10)


### Bug Fixes

* **deps:** update dependency axios to v0.26.1 ([6eae899](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/6eae89998c24cafd0769cc1c5207e8061ee5846d))

# [6.0.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v5.5.4...v6.0.0) (2022-03-09)


### Features

* update api models ([#397](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/397)) ([e7fbcbb](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/e7fbcbb476ccdb6d656ce96120f8b44076eaaa8e))


### BREAKING CHANGES

* - See: https://github.com/ScaleLeap/selling-partner-api-sdk/pull/397

## [5.5.4](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v5.5.3...v5.5.4) (2022-02-14)


### Bug Fixes

* **deps:** update dependency axios to v0.26.0 ([5e4ce81](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/5e4ce81e02983d2b162e8121e06f313532f438e7))

## [5.5.3](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v5.5.2...v5.5.3) (2022-02-04)


### Bug Fixes

* **deps:** update dependency aws4-axios to v2.4.9 ([2042d02](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/2042d022d5d8fd5030799c0ec23583d49386791a))

## [5.5.2](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v5.5.1...v5.5.2) (2022-01-31)


### Bug Fixes

* **deps:** update dependency axios to v0.25.0 ([#360](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/360)) ([33a0e4a](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/33a0e4a024f7a8988cf726b6fd8d11bb1383fd9d))

## [5.5.1](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v5.5.0...v5.5.1) (2021-12-27)


### Bug Fixes

* **deps:** update dependency http-status-codes to v2.2.0 ([be66cbd](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/be66cbd6400cf6a4d209e61dc496a6665d527439))

# [5.5.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v5.4.0...v5.5.0) (2021-12-13)


### Features

* update Order v0 API ([#331](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/331)) ([f817194](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/f8171949ab9067478ff82baf17a84817ade13693))

# [5.4.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v5.3.1...v5.4.0) (2021-11-23)


### Features

* update vendor order item status ([#319](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/319)) ([c2bcc4c](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/c2bcc4c423c710ee6ecfb062a8615e2cfe862bb9))

## [5.3.1](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v5.3.0...v5.3.1) (2021-11-22)


### Bug Fixes

* **deps:** update dependency aws4-axios to v2.4.6 ([b3653a4](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/b3653a4fbb9d78086c7809ab7cb30781cb205ac8))

# [5.3.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v5.2.0...v5.3.0) (2021-11-16)


### Features

* add the PRODUCT_TYPE_DEFINITION_CHANGE notification type ([#309](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/309)) ([2aa8d43](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/2aa8d4366b535947d7128a05af182e0f992575a7))

# [5.2.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v5.1.2...v5.2.0) (2021-11-08)


### Features

* add Kilograms and Pounds to weight unit ([#299](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/299)) ([7bad0cf](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/7bad0cfa52545e6a65d7dca8327fbfe9c3f35109))

## [5.1.2](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v5.1.1...v5.1.2) (2021-10-28)


### Bug Fixes

* **deps:** update dependency axios to v0.24.0 ([#259](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/259)) ([40b6773](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/40b67739a486a0186930037a85d895206d058832))

## [5.1.1](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v5.1.0...v5.1.1) (2021-10-27)


### Bug Fixes

* **deps:** update node.js to v16 ([#286](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/286)) ([3827f14](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/3827f140860645e1ebaf79032520bce33529edbb))

# [5.1.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v5.0.2...v5.1.0) (2021-09-17)


### Features

* update for tds reimbursement ([#244](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/244)) ([95d3928](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/95d392896fd159d27092e0c34891980de3564e18))

## [5.0.2](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v5.0.1...v5.0.2) (2021-09-06)


### Bug Fixes

* **deps:** update dependency axios to v0.21.4 ([af77da3](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/af77da3b9bb7156278e2626cf6c635ff3acae824))

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
