/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for FBA Small And Light
 * The Selling Partner API for FBA Small and Light lets you help sellers manage their listings in the Small and Light program. The program reduces the cost of fulfilling orders for small and lightweight FBA inventory. You can enroll or remove items from the program and check item eligibility and enrollment status. You can also preview the estimated program fees charged to a seller for items sold while enrolled in the program.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * A list of error responses returned when a request is unsuccessful.
 * @export
 * @interface ErrorList
 */
export interface ErrorList {
    /**
     * 
     * @type {Array<Error>}
     * @memberof ErrorList
     */
    errors?: Array<Error>;
}
/**
 * Fee details for a specific fee.
 * @export
 * @interface FeeLineItem
 */
export interface FeeLineItem {
    /**
     * The type of fee charged to the seller.
     * @type {string}
     * @memberof FeeLineItem
     */
    feeType: FeeLineItemFeeTypeEnum;
    /**
     * 
     * @type {MoneyType}
     * @memberof FeeLineItem
     */
    feeCharge: MoneyType;
}

/**
    * @export
    * @enum {string}
    */
export enum FeeLineItemFeeTypeEnum {
    FbaWeightBasedFee = 'FBAWeightBasedFee',
    FbaPerOrderFulfillmentFee = 'FBAPerOrderFulfillmentFee',
    FbaPerUnitFulfillmentFee = 'FBAPerUnitFulfillmentFee',
    Commission = 'Commission'
}

/**
 * The fee estimate for a specific item.
 * @export
 * @interface FeePreview
 */
export interface FeePreview {
    /**
     * The Amazon Standard Identification Number (ASIN) value used to identify the item.
     * @type {string}
     * @memberof FeePreview
     */
    asin?: string;
    /**
     * 
     * @type {MoneyType}
     * @memberof FeePreview
     */
    price?: MoneyType;
    /**
     * A list of the Small and Light fees for the item.
     * @type {Array<FeeLineItem>}
     * @memberof FeePreview
     */
    feeBreakdown?: Array<FeeLineItem>;
    /**
     * 
     * @type {MoneyType}
     * @memberof FeePreview
     */
    totalFees?: MoneyType;
    /**
     * One or more unexpected errors occurred during the getSmallAndLightFeePreview operation.
     * @type {Array<Error>}
     * @memberof FeePreview
     */
    errors?: Array<Error>;
}
/**
 * An item to be sold.
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * The Amazon Standard Identification Number (ASIN) value used to identify the item.
     * @type {string}
     * @memberof Item
     */
    asin: string;
    /**
     * 
     * @type {MoneyType}
     * @memberof Item
     */
    price: MoneyType;
}
/**
 * Error response returned when the request is unsuccessful.
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * An error code that identifies the type of error that occurred.
     * @type {string}
     * @memberof ModelError
     */
    code: string;
    /**
     * A message that describes the error condition in a human-readable form.
     * @type {string}
     * @memberof ModelError
     */
    message: string;
    /**
     * Additional information that can help the caller understand or fix the issue.
     * @type {string}
     * @memberof ModelError
     */
    details?: string;
}
/**
 * 
 * @export
 * @interface MoneyType
 */
export interface MoneyType {
    /**
     * The currency code in ISO 4217 format.
     * @type {string}
     * @memberof MoneyType
     */
    currencyCode?: string;
    /**
     * The monetary value.
     * @type {number}
     * @memberof MoneyType
     */
    amount?: number;
}
/**
 * The Small and Light eligibility status of the item indicated by the specified seller SKU.
 * @export
 * @interface SmallAndLightEligibility
 */
export interface SmallAndLightEligibility {
    /**
     * A marketplace identifier.
     * @type {string}
     * @memberof SmallAndLightEligibility
     */
    marketplaceId: string;
    /**
     * Identifies an item in the given marketplace. SellerSKU is qualified by the seller\'s SellerId, which is included with every operation that you submit.
     * @type {string}
     * @memberof SmallAndLightEligibility
     */
    sellerSKU: string;
    /**
     * 
     * @type {SmallAndLightEligibilityStatus}
     * @memberof SmallAndLightEligibility
     */
    status: SmallAndLightEligibilityStatus;
}
/**
 * The Small and Light eligibility status of the item.
 * @export
 * @enum {string}
 */
export enum SmallAndLightEligibilityStatus {
    Eligible = 'ELIGIBLE',
    NotEligible = 'NOT_ELIGIBLE'
}

/**
 * The Small and Light enrollment status of the item indicated by the specified seller SKU.
 * @export
 * @interface SmallAndLightEnrollment
 */
export interface SmallAndLightEnrollment {
    /**
     * A marketplace identifier.
     * @type {string}
     * @memberof SmallAndLightEnrollment
     */
    marketplaceId: string;
    /**
     * Identifies an item in the given marketplace. SellerSKU is qualified by the seller\'s SellerId, which is included with every operation that you submit.
     * @type {string}
     * @memberof SmallAndLightEnrollment
     */
    sellerSKU: string;
    /**
     * 
     * @type {SmallAndLightEnrollmentStatus}
     * @memberof SmallAndLightEnrollment
     */
    status: SmallAndLightEnrollmentStatus;
}
/**
 * The Small and Light enrollment status of the item.
 * @export
 * @enum {string}
 */
export enum SmallAndLightEnrollmentStatus {
    Enrolled = 'ENROLLED',
    NotEnrolled = 'NOT_ENROLLED'
}

/**
 * Request schema for submitting items for which to retrieve fee estimates.
 * @export
 * @interface SmallAndLightFeePreviewRequest
 */
export interface SmallAndLightFeePreviewRequest {
    /**
     * A marketplace identifier.
     * @type {string}
     * @memberof SmallAndLightFeePreviewRequest
     */
    marketplaceId: string;
    /**
     * A list of items for which to retrieve fee estimates (limit: 25).
     * @type {Array<Item>}
     * @memberof SmallAndLightFeePreviewRequest
     */
    items: Array<Item>;
}
/**
 * 
 * @export
 * @interface SmallAndLightFeePreviews
 */
export interface SmallAndLightFeePreviews {
    /**
     * A list of fee estimates for the requested items. The order of the fee estimates will follow the same order as the items in the request, with duplicates removed.
     * @type {Array<FeePreview>}
     * @memberof SmallAndLightFeePreviews
     */
    data?: Array<FeePreview>;
}

/**
 * SmallAndLightApi - axios parameter creator
 * @export
 */
export const SmallAndLightApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Removes the item indicated by the specified seller SKU from the Small and Light program in the specified marketplace. If the item is not eligible for disenrollment, the ineligibility reasons are returned.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerSKU The seller SKU that identifies the item.
         * @param {Array<string>} marketplaceIds The marketplace in which to remove the item from the Small and Light program. Note: Accepts a single marketplace only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSmallAndLightEnrollmentBySellerSKU: async (sellerSKU: string, marketplaceIds: Array<string>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sellerSKU' is not null or undefined
            assertParamExists('deleteSmallAndLightEnrollmentBySellerSKU', 'sellerSKU', sellerSKU)
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('deleteSmallAndLightEnrollmentBySellerSKU', 'marketplaceIds', marketplaceIds)
            const localVarPath = `/fba/smallAndLight/v1/enrollments/{sellerSKU}`
                .replace(`{${"sellerSKU"}}`, encodeURIComponent(String(sellerSKU)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the Small and Light program eligibility status of the item indicated by the specified seller SKU in the specified marketplace. If the item is not eligible, the ineligibility reasons are returned.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerSKU The seller SKU that identifies the item.
         * @param {Array<string>} marketplaceIds The marketplace for which the eligibility status is retrieved. NOTE: Accepts a single marketplace only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSmallAndLightEligibilityBySellerSKU: async (sellerSKU: string, marketplaceIds: Array<string>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sellerSKU' is not null or undefined
            assertParamExists('getSmallAndLightEligibilityBySellerSKU', 'sellerSKU', sellerSKU)
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('getSmallAndLightEligibilityBySellerSKU', 'marketplaceIds', marketplaceIds)
            const localVarPath = `/fba/smallAndLight/v1/eligibilities/{sellerSKU}`
                .replace(`{${"sellerSKU"}}`, encodeURIComponent(String(sellerSKU)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the Small and Light enrollment status for the item indicated by the specified seller SKU in the specified marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerSKU The seller SKU that identifies the item.
         * @param {Array<string>} marketplaceIds The marketplace for which the enrollment status is retrieved. Note: Accepts a single marketplace only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSmallAndLightEnrollmentBySellerSKU: async (sellerSKU: string, marketplaceIds: Array<string>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sellerSKU' is not null or undefined
            assertParamExists('getSmallAndLightEnrollmentBySellerSKU', 'sellerSKU', sellerSKU)
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('getSmallAndLightEnrollmentBySellerSKU', 'marketplaceIds', marketplaceIds)
            const localVarPath = `/fba/smallAndLight/v1/enrollments/{sellerSKU}`
                .replace(`{${"sellerSKU"}}`, encodeURIComponent(String(sellerSKU)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the Small and Light fee estimates for the specified items. You must include a marketplaceId parameter to retrieve the proper fee estimates for items to be sold in that marketplace. The ordering of items in the response will mirror the order of the items in the request. Duplicate ASIN/price combinations are removed.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 3 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {SmallAndLightFeePreviewRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSmallAndLightFeePreview: async (body: SmallAndLightFeePreviewRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('getSmallAndLightFeePreview', 'body', body)
            const localVarPath = `/fba/smallAndLight/v1/feePreviews`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Enrolls the item indicated by the specified seller SKU in the Small and Light program in the specified marketplace. If the item is not eligible, the ineligibility reasons are returned.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerSKU The seller SKU that identifies the item.
         * @param {Array<string>} marketplaceIds The marketplace in which to enroll the item. Note: Accepts a single marketplace only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putSmallAndLightEnrollmentBySellerSKU: async (sellerSKU: string, marketplaceIds: Array<string>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sellerSKU' is not null or undefined
            assertParamExists('putSmallAndLightEnrollmentBySellerSKU', 'sellerSKU', sellerSKU)
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('putSmallAndLightEnrollmentBySellerSKU', 'marketplaceIds', marketplaceIds)
            const localVarPath = `/fba/smallAndLight/v1/enrollments/{sellerSKU}`
                .replace(`{${"sellerSKU"}}`, encodeURIComponent(String(sellerSKU)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SmallAndLightApi - functional programming interface
 * @export
 */
export const SmallAndLightApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SmallAndLightApiAxiosParamCreator(configuration)
    return {
        /**
         * Removes the item indicated by the specified seller SKU from the Small and Light program in the specified marketplace. If the item is not eligible for disenrollment, the ineligibility reasons are returned.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerSKU The seller SKU that identifies the item.
         * @param {Array<string>} marketplaceIds The marketplace in which to remove the item from the Small and Light program. Note: Accepts a single marketplace only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSmallAndLightEnrollmentBySellerSKU(sellerSKU: string, marketplaceIds: Array<string>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSmallAndLightEnrollmentBySellerSKU(sellerSKU, marketplaceIds, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the Small and Light program eligibility status of the item indicated by the specified seller SKU in the specified marketplace. If the item is not eligible, the ineligibility reasons are returned.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerSKU The seller SKU that identifies the item.
         * @param {Array<string>} marketplaceIds The marketplace for which the eligibility status is retrieved. NOTE: Accepts a single marketplace only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSmallAndLightEligibilityBySellerSKU(sellerSKU: string, marketplaceIds: Array<string>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmallAndLightEligibility>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSmallAndLightEligibilityBySellerSKU(sellerSKU, marketplaceIds, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the Small and Light enrollment status for the item indicated by the specified seller SKU in the specified marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerSKU The seller SKU that identifies the item.
         * @param {Array<string>} marketplaceIds The marketplace for which the enrollment status is retrieved. Note: Accepts a single marketplace only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSmallAndLightEnrollmentBySellerSKU(sellerSKU: string, marketplaceIds: Array<string>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmallAndLightEnrollment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSmallAndLightEnrollmentBySellerSKU(sellerSKU, marketplaceIds, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the Small and Light fee estimates for the specified items. You must include a marketplaceId parameter to retrieve the proper fee estimates for items to be sold in that marketplace. The ordering of items in the response will mirror the order of the items in the request. Duplicate ASIN/price combinations are removed.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 3 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {SmallAndLightFeePreviewRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSmallAndLightFeePreview(body: SmallAndLightFeePreviewRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmallAndLightFeePreviews>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSmallAndLightFeePreview(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Enrolls the item indicated by the specified seller SKU in the Small and Light program in the specified marketplace. If the item is not eligible, the ineligibility reasons are returned.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerSKU The seller SKU that identifies the item.
         * @param {Array<string>} marketplaceIds The marketplace in which to enroll the item. Note: Accepts a single marketplace only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putSmallAndLightEnrollmentBySellerSKU(sellerSKU: string, marketplaceIds: Array<string>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SmallAndLightEnrollment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.putSmallAndLightEnrollmentBySellerSKU(sellerSKU, marketplaceIds, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SmallAndLightApi - factory interface
 * @export
 */
export const SmallAndLightApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SmallAndLightApiFp(configuration)
    return {
        /**
         * Removes the item indicated by the specified seller SKU from the Small and Light program in the specified marketplace. If the item is not eligible for disenrollment, the ineligibility reasons are returned.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerSKU The seller SKU that identifies the item.
         * @param {Array<string>} marketplaceIds The marketplace in which to remove the item from the Small and Light program. Note: Accepts a single marketplace only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSmallAndLightEnrollmentBySellerSKU(sellerSKU: string, marketplaceIds: Array<string>, options?: any): AxiosPromise<void> {
            return localVarFp.deleteSmallAndLightEnrollmentBySellerSKU(sellerSKU, marketplaceIds, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the Small and Light program eligibility status of the item indicated by the specified seller SKU in the specified marketplace. If the item is not eligible, the ineligibility reasons are returned.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerSKU The seller SKU that identifies the item.
         * @param {Array<string>} marketplaceIds The marketplace for which the eligibility status is retrieved. NOTE: Accepts a single marketplace only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSmallAndLightEligibilityBySellerSKU(sellerSKU: string, marketplaceIds: Array<string>, options?: any): AxiosPromise<SmallAndLightEligibility> {
            return localVarFp.getSmallAndLightEligibilityBySellerSKU(sellerSKU, marketplaceIds, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the Small and Light enrollment status for the item indicated by the specified seller SKU in the specified marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerSKU The seller SKU that identifies the item.
         * @param {Array<string>} marketplaceIds The marketplace for which the enrollment status is retrieved. Note: Accepts a single marketplace only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSmallAndLightEnrollmentBySellerSKU(sellerSKU: string, marketplaceIds: Array<string>, options?: any): AxiosPromise<SmallAndLightEnrollment> {
            return localVarFp.getSmallAndLightEnrollmentBySellerSKU(sellerSKU, marketplaceIds, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the Small and Light fee estimates for the specified items. You must include a marketplaceId parameter to retrieve the proper fee estimates for items to be sold in that marketplace. The ordering of items in the response will mirror the order of the items in the request. Duplicate ASIN/price combinations are removed.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 3 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {SmallAndLightFeePreviewRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSmallAndLightFeePreview(body: SmallAndLightFeePreviewRequest, options?: any): AxiosPromise<SmallAndLightFeePreviews> {
            return localVarFp.getSmallAndLightFeePreview(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Enrolls the item indicated by the specified seller SKU in the Small and Light program in the specified marketplace. If the item is not eligible, the ineligibility reasons are returned.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerSKU The seller SKU that identifies the item.
         * @param {Array<string>} marketplaceIds The marketplace in which to enroll the item. Note: Accepts a single marketplace only.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putSmallAndLightEnrollmentBySellerSKU(sellerSKU: string, marketplaceIds: Array<string>, options?: any): AxiosPromise<SmallAndLightEnrollment> {
            return localVarFp.putSmallAndLightEnrollmentBySellerSKU(sellerSKU, marketplaceIds, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteSmallAndLightEnrollmentBySellerSKU operation in SmallAndLightApi.
 * @export
 * @interface SmallAndLightApiDeleteSmallAndLightEnrollmentBySellerSKURequest
 */
export interface SmallAndLightApiDeleteSmallAndLightEnrollmentBySellerSKURequest {
    /**
     * The seller SKU that identifies the item.
     * @type {string}
     * @memberof SmallAndLightApiDeleteSmallAndLightEnrollmentBySellerSKU
     */
    readonly sellerSKU: string

    /**
     * The marketplace in which to remove the item from the Small and Light program. Note: Accepts a single marketplace only.
     * @type {Array<string>}
     * @memberof SmallAndLightApiDeleteSmallAndLightEnrollmentBySellerSKU
     */
    readonly marketplaceIds: Array<string>
}

/**
 * Request parameters for getSmallAndLightEligibilityBySellerSKU operation in SmallAndLightApi.
 * @export
 * @interface SmallAndLightApiGetSmallAndLightEligibilityBySellerSKURequest
 */
export interface SmallAndLightApiGetSmallAndLightEligibilityBySellerSKURequest {
    /**
     * The seller SKU that identifies the item.
     * @type {string}
     * @memberof SmallAndLightApiGetSmallAndLightEligibilityBySellerSKU
     */
    readonly sellerSKU: string

    /**
     * The marketplace for which the eligibility status is retrieved. NOTE: Accepts a single marketplace only.
     * @type {Array<string>}
     * @memberof SmallAndLightApiGetSmallAndLightEligibilityBySellerSKU
     */
    readonly marketplaceIds: Array<string>
}

/**
 * Request parameters for getSmallAndLightEnrollmentBySellerSKU operation in SmallAndLightApi.
 * @export
 * @interface SmallAndLightApiGetSmallAndLightEnrollmentBySellerSKURequest
 */
export interface SmallAndLightApiGetSmallAndLightEnrollmentBySellerSKURequest {
    /**
     * The seller SKU that identifies the item.
     * @type {string}
     * @memberof SmallAndLightApiGetSmallAndLightEnrollmentBySellerSKU
     */
    readonly sellerSKU: string

    /**
     * The marketplace for which the enrollment status is retrieved. Note: Accepts a single marketplace only.
     * @type {Array<string>}
     * @memberof SmallAndLightApiGetSmallAndLightEnrollmentBySellerSKU
     */
    readonly marketplaceIds: Array<string>
}

/**
 * Request parameters for getSmallAndLightFeePreview operation in SmallAndLightApi.
 * @export
 * @interface SmallAndLightApiGetSmallAndLightFeePreviewRequest
 */
export interface SmallAndLightApiGetSmallAndLightFeePreviewRequest {
    /**
     * 
     * @type {SmallAndLightFeePreviewRequest}
     * @memberof SmallAndLightApiGetSmallAndLightFeePreview
     */
    readonly body: SmallAndLightFeePreviewRequest
}

/**
 * Request parameters for putSmallAndLightEnrollmentBySellerSKU operation in SmallAndLightApi.
 * @export
 * @interface SmallAndLightApiPutSmallAndLightEnrollmentBySellerSKURequest
 */
export interface SmallAndLightApiPutSmallAndLightEnrollmentBySellerSKURequest {
    /**
     * The seller SKU that identifies the item.
     * @type {string}
     * @memberof SmallAndLightApiPutSmallAndLightEnrollmentBySellerSKU
     */
    readonly sellerSKU: string

    /**
     * The marketplace in which to enroll the item. Note: Accepts a single marketplace only.
     * @type {Array<string>}
     * @memberof SmallAndLightApiPutSmallAndLightEnrollmentBySellerSKU
     */
    readonly marketplaceIds: Array<string>
}

/**
 * SmallAndLightApi - object-oriented interface
 * @export
 * @class SmallAndLightApi
 * @extends {BaseAPI}
 */
export class SmallAndLightApi extends BaseAPI {
    /**
     * Removes the item indicated by the specified seller SKU from the Small and Light program in the specified marketplace. If the item is not eligible for disenrollment, the ineligibility reasons are returned.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {SmallAndLightApiDeleteSmallAndLightEnrollmentBySellerSKURequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmallAndLightApi
     */
    public deleteSmallAndLightEnrollmentBySellerSKU(requestParameters: SmallAndLightApiDeleteSmallAndLightEnrollmentBySellerSKURequest, options?: any) {
        return SmallAndLightApiFp(this.configuration).deleteSmallAndLightEnrollmentBySellerSKU(requestParameters.sellerSKU, requestParameters.marketplaceIds, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the Small and Light program eligibility status of the item indicated by the specified seller SKU in the specified marketplace. If the item is not eligible, the ineligibility reasons are returned.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {SmallAndLightApiGetSmallAndLightEligibilityBySellerSKURequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmallAndLightApi
     */
    public getSmallAndLightEligibilityBySellerSKU(requestParameters: SmallAndLightApiGetSmallAndLightEligibilityBySellerSKURequest, options?: any) {
        return SmallAndLightApiFp(this.configuration).getSmallAndLightEligibilityBySellerSKU(requestParameters.sellerSKU, requestParameters.marketplaceIds, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the Small and Light enrollment status for the item indicated by the specified seller SKU in the specified marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 10 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {SmallAndLightApiGetSmallAndLightEnrollmentBySellerSKURequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmallAndLightApi
     */
    public getSmallAndLightEnrollmentBySellerSKU(requestParameters: SmallAndLightApiGetSmallAndLightEnrollmentBySellerSKURequest, options?: any) {
        return SmallAndLightApiFp(this.configuration).getSmallAndLightEnrollmentBySellerSKU(requestParameters.sellerSKU, requestParameters.marketplaceIds, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the Small and Light fee estimates for the specified items. You must include a marketplaceId parameter to retrieve the proper fee estimates for items to be sold in that marketplace. The ordering of items in the response will mirror the order of the items in the request. Duplicate ASIN/price combinations are removed.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 3 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {SmallAndLightApiGetSmallAndLightFeePreviewRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmallAndLightApi
     */
    public getSmallAndLightFeePreview(requestParameters: SmallAndLightApiGetSmallAndLightFeePreviewRequest, options?: any) {
        return SmallAndLightApiFp(this.configuration).getSmallAndLightFeePreview(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Enrolls the item indicated by the specified seller SKU in the Small and Light program in the specified marketplace. If the item is not eligible, the ineligibility reasons are returned.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {SmallAndLightApiPutSmallAndLightEnrollmentBySellerSKURequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SmallAndLightApi
     */
    public putSmallAndLightEnrollmentBySellerSKU(requestParameters: SmallAndLightApiPutSmallAndLightEnrollmentBySellerSKURequest, options?: any) {
        return SmallAndLightApiFp(this.configuration).putSmallAndLightEnrollmentBySellerSKU(requestParameters.sellerSKU, requestParameters.marketplaceIds, options).then((request) => request(this.axios, this.basePath));
    }
}


