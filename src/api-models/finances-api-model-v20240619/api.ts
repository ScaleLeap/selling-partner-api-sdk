/* tslint:disable */
/* eslint-disable */
/**
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information relevant to a seller\'s business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * The version of the OpenAPI document: 2024-06-19
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
 * Additional information related to Amazon Pay.
 * @export
 * @interface AmazonPayContext
 */
export interface AmazonPayContext {
    /**
     * The name of the store that is related to the transaction.
     * @type {string}
     * @memberof AmazonPayContext
     */
    storeName?: string;
    /**
     * The transaction\'s order type.
     * @type {string}
     * @memberof AmazonPayContext
     */
    orderType?: string;
    /**
     * Channel details of related transaction.
     * @type {string}
     * @memberof AmazonPayContext
     */
    channel?: string;
}
/**
 * Details about the movement of money in the financial transaction. Breakdowns are further categorized into breakdown types, breakdown amounts, and further breakdowns.
 * @export
 * @interface Breakdown
 */
export interface Breakdown {
    /**
     * The type of charge.
     * @type {string}
     * @memberof Breakdown
     */
    breakdownType?: string;
    /**
     * 
     * @type {Currency}
     * @memberof Breakdown
     */
    breakdownAmount?: Currency;
    /**
     * 
     * @type {Breakdown}
     * @memberof Breakdown
     */
    breakdowns?: Breakdown;
}
/**
 * Additional Information about the item.
 * @export
 * @interface Context
 */
export interface Context {
    /**
     * 
     * @type {string}
     * @memberof Context
     */
    contextType: string;
    /**
     * The name of the store that is related to the transaction.
     * @type {string}
     * @memberof Context
     */
    storeName?: string;
    /**
     * The transaction\'s order type.
     * @type {string}
     * @memberof Context
     */
    orderType?: string;
    /**
     * Channel details of related transaction.
     * @type {string}
     * @memberof Context
     */
    channel?: string;
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof Context
     */
    asin?: string;
    /**
     * The Stock Keeping Unit (SKU) of the item.
     * @type {string}
     * @memberof Context
     */
    sku?: string;
    /**
     * The quantity of the item shipped.
     * @type {number}
     * @memberof Context
     */
    quantityShipped?: number;
    /**
     * The fulfillment network of the item.
     * @type {string}
     * @memberof Context
     */
    fulfillmentNetwork?: string;
    /**
     * The type of payment.
     * @type {string}
     * @memberof Context
     */
    paymentType?: string;
    /**
     * The method of payment.
     * @type {string}
     * @memberof Context
     */
    paymentMethod?: string;
    /**
     * The reference number of the payment.
     * @type {string}
     * @memberof Context
     */
    paymentReference?: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @type {string}
     * @memberof Context
     */
    paymentDate?: string;
    /**
     * Deferral policy applied on the transaction.  **Examples:** `B2B`,`DD7`
     * @type {string}
     * @memberof Context
     */
    deferralReason?: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @type {string}
     * @memberof Context
     */
    maturityDate?: string;
    /**
     * The status of the transaction. For example, `HOLD`,`RELEASE`.
     * @type {string}
     * @memberof Context
     */
    deferralStatus?: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @type {string}
     * @memberof Context
     */
    startTime?: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @type {string}
     * @memberof Context
     */
    endTime?: string;
}
/**
 * 
 * @export
 * @interface ContextAllOf
 */
export interface ContextAllOf {
    /**
     * 
     * @type {string}
     * @memberof ContextAllOf
     */
    contextType: string;
}
/**
 * A currency type and amount.
 * @export
 * @interface Currency
 */
export interface Currency {
    /**
     * The three-digit currency code in ISO 4217 format.
     * @type {string}
     * @memberof Currency
     */
    currencyCode?: string;
    /**
     * A signed decimal number.
     * @type {number}
     * @memberof Currency
     */
    currencyAmount?: number;
}
/**
 * Additional information related to deferred transactions.
 * @export
 * @interface DeferredContext
 */
export interface DeferredContext {
    /**
     * Deferral policy applied on the transaction.  **Examples:** `B2B`,`DD7`
     * @type {string}
     * @memberof DeferredContext
     */
    deferralReason?: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @type {string}
     * @memberof DeferredContext
     */
    maturityDate?: string;
    /**
     * The status of the transaction. For example, `HOLD`,`RELEASE`.
     * @type {string}
     * @memberof DeferredContext
     */
    deferralStatus?: string;
}
/**
 * A list of error responses returned when a request is unsuccessful.
 * @export
 * @interface ErrorList
 */
export interface ErrorList {
    /**
     * The error responses that are returned when the request is unsuccessful.
     * @type {Array<Error>}
     * @memberof ErrorList
     */
    errors: Array<Error>;
}
/**
 * Additional information about the items in a transaction.
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * A description of the items in a transaction.
     * @type {string}
     * @memberof Item
     */
    description?: string;
    /**
     * Related business identifiers of the item in the transaction.
     * @type {Array<ItemRelatedIdentifier>}
     * @memberof Item
     */
    relatedIdentifiers?: Array<ItemRelatedIdentifier>;
    /**
     * 
     * @type {Currency}
     * @memberof Item
     */
    totalAmount?: Currency;
    /**
     * A list of breakdowns that provide details on how the total amount is calculated for the transaction.
     * @type {Array<Breakdown>}
     * @memberof Item
     */
    breakdowns?: Array<Breakdown>;
    /**
     * A list of additional information about the item.
     * @type {Array<Context>}
     * @memberof Item
     */
    contexts?: Array<Context>;
}
/**
 * Related business identifiers of the item.
 * @export
 * @interface ItemRelatedIdentifier
 */
export interface ItemRelatedIdentifier {
    /**
     * Enumerated set of related item identifier names for the item.
     * @type {string}
     * @memberof ItemRelatedIdentifier
     */
    itemRelatedIdentifierName?: ItemRelatedIdentifierItemRelatedIdentifierNameEnum | 'ORDER_ADJUSTMENT_ITEM_ID' | 'COUPON_ID' | 'REMOVAL_SHIPMENT_ITEM_ID' | 'TRANSACTION_ID';
    /**
     * Corresponding value to `ItemRelatedIdentifierName`.
     * @type {string}
     * @memberof ItemRelatedIdentifier
     */
    itemRelatedIdentifierValue?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ItemRelatedIdentifierItemRelatedIdentifierNameEnum {
    OrderAdjustmentItemId = 'ORDER_ADJUSTMENT_ITEM_ID',
    CouponId = 'COUPON_ID',
    RemovalShipmentItemId = 'REMOVAL_SHIPMENT_ITEM_ID',
    TransactionId = 'TRANSACTION_ID'
}

/**
 * The response schema for the `listTransactions` operation.
 * @export
 * @interface ListTransactionsResponse
 */
export interface ListTransactionsResponse {
    /**
     * The response includes `nextToken` when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
     * @type {string}
     * @memberof ListTransactionsResponse
     */
    nextToken?: string;
    /**
     * A list of transactions within the specified time period.
     * @type {Array<Transaction>}
     * @memberof ListTransactionsResponse
     */
    transactions?: Array<Transaction>;
}
/**
 * Information about the marketplace where the transaction occurred.
 * @export
 * @interface MarketplaceDetails
 */
export interface MarketplaceDetails {
    /**
     * The identifier of the marketplace where the transaction occured.
     * @type {string}
     * @memberof MarketplaceDetails
     */
    marketplaceId?: string;
    /**
     * The name of the marketplace where the transaction occurred. For example: `Amazon.com`,`Amazon.in`
     * @type {string}
     * @memberof MarketplaceDetails
     */
    marketplaceName?: string;
}
/**
 * An error response returned when the request is unsuccessful.
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
     * A message that describes the error condition.
     * @type {string}
     * @memberof ModelError
     */
    message: string;
    /**
     * Additional details that can help the caller understand or fix the issue.
     * @type {string}
     * @memberof ModelError
     */
    details?: string;
}
/**
 * Additional information related to payments-related transactions.
 * @export
 * @interface PaymentsContext
 */
export interface PaymentsContext {
    /**
     * The type of payment.
     * @type {string}
     * @memberof PaymentsContext
     */
    paymentType?: string;
    /**
     * The method of payment.
     * @type {string}
     * @memberof PaymentsContext
     */
    paymentMethod?: string;
    /**
     * The reference number of the payment.
     * @type {string}
     * @memberof PaymentsContext
     */
    paymentReference?: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @type {string}
     * @memberof PaymentsContext
     */
    paymentDate?: string;
}
/**
 * Additional information related to the product.
 * @export
 * @interface ProductContext
 */
export interface ProductContext {
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof ProductContext
     */
    asin?: string;
    /**
     * The Stock Keeping Unit (SKU) of the item.
     * @type {string}
     * @memberof ProductContext
     */
    sku?: string;
    /**
     * The quantity of the item shipped.
     * @type {number}
     * @memberof ProductContext
     */
    quantityShipped?: number;
    /**
     * The fulfillment network of the item.
     * @type {string}
     * @memberof ProductContext
     */
    fulfillmentNetwork?: string;
}
/**
 * Related business identifier of the transaction.
 * @export
 * @interface RelatedIdentifier
 */
export interface RelatedIdentifier {
    /**
     * An enumerated set of related business identifier names.
     * @type {string}
     * @memberof RelatedIdentifier
     */
    relatedIdentifierName?: RelatedIdentifierRelatedIdentifierNameEnum | 'ORDER_ID' | 'SHIPMENT_ID' | 'EVENT_GROUP_ID' | 'REFUND_ID' | 'INVOICE_ID' | 'DISBURSEMENT_ID' | 'TRANSFER_ID' | 'DEFERRED_TRANSACTION_ID';
    /**
     * Corresponding value of `RelatedIdentifierName`.
     * @type {string}
     * @memberof RelatedIdentifier
     */
    relatedIdentifierValue?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum RelatedIdentifierRelatedIdentifierNameEnum {
    OrderId = 'ORDER_ID',
    ShipmentId = 'SHIPMENT_ID',
    EventGroupId = 'EVENT_GROUP_ID',
    RefundId = 'REFUND_ID',
    InvoiceId = 'INVOICE_ID',
    DisbursementId = 'DISBURSEMENT_ID',
    TransferId = 'TRANSFER_ID',
    DeferredTransactionId = 'DEFERRED_TRANSACTION_ID'
}

/**
 * Metadata that describes the seller.
 * @export
 * @interface SellingPartnerMetadata
 */
export interface SellingPartnerMetadata {
    /**
     * A unique seller identifier.
     * @type {string}
     * @memberof SellingPartnerMetadata
     */
    sellingPartnerId?: string;
    /**
     * The type of account in the transaction.
     * @type {string}
     * @memberof SellingPartnerMetadata
     */
    accountType?: string;
    /**
     * The identifier of the marketplace where the transaction occurred.
     * @type {string}
     * @memberof SellingPartnerMetadata
     */
    marketplaceId?: string;
}
/**
 * Additional information that is related to the time range of the transaction.
 * @export
 * @interface TimeRangeContext
 */
export interface TimeRangeContext {
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @type {string}
     * @memberof TimeRangeContext
     */
    startTime?: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @type {string}
     * @memberof TimeRangeContext
     */
    endTime?: string;
}
/**
 * All the information related to a transaction.
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * 
     * @type {SellingPartnerMetadata}
     * @memberof Transaction
     */
    sellingPartnerMetadata?: SellingPartnerMetadata;
    /**
     * Related business identifiers of the transaction.
     * @type {Array<RelatedIdentifier>}
     * @memberof Transaction
     */
    relatedIdentifiers?: Array<RelatedIdentifier>;
    /**
     * The type of transaction.  **Possible value:** `Shipment`
     * @type {string}
     * @memberof Transaction
     */
    transactionType?: string;
    /**
     * The unique identifier of the transaction.
     * @type {string}
     * @memberof Transaction
     */
    transactionId?: string;
    /**
     * The status of the transaction.   **Possible values:**  * `Deferred` * `Released`
     * @type {string}
     * @memberof Transaction
     */
    transactionStatus?: string;
    /**
     * Describes the reasons for the transaction.  **Example:** \'Order Payment\', \'Refund Order\'
     * @type {string}
     * @memberof Transaction
     */
    description?: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @type {string}
     * @memberof Transaction
     */
    postedDate?: string;
    /**
     * 
     * @type {Currency}
     * @memberof Transaction
     */
    totalAmount?: Currency;
    /**
     * 
     * @type {MarketplaceDetails}
     * @memberof Transaction
     */
    marketplaceDetails?: MarketplaceDetails;
    /**
     * A list of items in the transaction.
     * @type {Array<Item>}
     * @memberof Transaction
     */
    items?: Array<Item>;
    /**
     * A list of additional information about the item.
     * @type {Array<Context>}
     * @memberof Transaction
     */
    contexts?: Array<Context>;
    /**
     * A list of breakdowns that provide details on how the total amount is calculated for the transaction.
     * @type {Array<Breakdown>}
     * @memberof Transaction
     */
    breakdowns?: Array<Breakdown>;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns transactions for the given parameters. Orders from the last 48 hours might not be included in financial events.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
         * @param {string} postedAfter The response includes financial events posted after (or on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request.
         * @param {string} [postedBefore] The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than &#x60;PostedAfter&#x60; and more than two minutes before the request was submitted. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, the response is empty.  **Default:** Two minutes before the time of the request.
         * @param {string} [marketplaceId] The ID of the marketplace from which you want to retrieve transactions.
         * @param {string} [nextToken] The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTransactions: async (postedAfter: string, postedBefore?: string, marketplaceId?: string, nextToken?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'postedAfter' is not null or undefined
            assertParamExists('listTransactions', 'postedAfter', postedAfter)
            const localVarPath = `/finances/2024-06-19/transactions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (postedAfter !== undefined) {
                localVarQueryParameter['postedAfter'] = (postedAfter as any instanceof Date) ?
                    (postedAfter as any).toISOString() :
                    postedAfter;
            }

            if (postedBefore !== undefined) {
                localVarQueryParameter['postedBefore'] = (postedBefore as any instanceof Date) ?
                    (postedBefore as any).toISOString() :
                    postedBefore;
            }

            if (marketplaceId !== undefined) {
                localVarQueryParameter['marketplaceId'] = marketplaceId;
            }

            if (nextToken !== undefined) {
                localVarQueryParameter['nextToken'] = nextToken;
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
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns transactions for the given parameters. Orders from the last 48 hours might not be included in financial events.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
         * @param {string} postedAfter The response includes financial events posted after (or on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request.
         * @param {string} [postedBefore] The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than &#x60;PostedAfter&#x60; and more than two minutes before the request was submitted. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, the response is empty.  **Default:** Two minutes before the time of the request.
         * @param {string} [marketplaceId] The ID of the marketplace from which you want to retrieve transactions.
         * @param {string} [nextToken] The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listTransactions(postedAfter: string, postedBefore?: string, marketplaceId?: string, nextToken?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListTransactionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listTransactions(postedAfter, postedBefore, marketplaceId, nextToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * Returns transactions for the given parameters. Orders from the last 48 hours might not be included in financial events.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
         * @param {string} postedAfter The response includes financial events posted after (or on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request.
         * @param {string} [postedBefore] The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than &#x60;PostedAfter&#x60; and more than two minutes before the request was submitted. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, the response is empty.  **Default:** Two minutes before the time of the request.
         * @param {string} [marketplaceId] The ID of the marketplace from which you want to retrieve transactions.
         * @param {string} [nextToken] The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTransactions(postedAfter: string, postedBefore?: string, marketplaceId?: string, nextToken?: string, options?: any): AxiosPromise<ListTransactionsResponse> {
            return localVarFp.listTransactions(postedAfter, postedBefore, marketplaceId, nextToken, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for listTransactions operation in DefaultApi.
 * @export
 * @interface DefaultApiListTransactionsRequest
 */
export interface DefaultApiListTransactionsRequest {
    /**
     * The response includes financial events posted after (or on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request.
     * @type {string}
     * @memberof DefaultApiListTransactions
     */
    readonly postedAfter: string

    /**
     * The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than &#x60;PostedAfter&#x60; and more than two minutes before the request was submitted. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, the response is empty.  **Default:** Two minutes before the time of the request.
     * @type {string}
     * @memberof DefaultApiListTransactions
     */
    readonly postedBefore?: string

    /**
     * The ID of the marketplace from which you want to retrieve transactions.
     * @type {string}
     * @memberof DefaultApiListTransactions
     */
    readonly marketplaceId?: string

    /**
     * The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
     * @type {string}
     * @memberof DefaultApiListTransactions
     */
    readonly nextToken?: string
}

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * Returns transactions for the given parameters. Orders from the last 48 hours might not be included in financial events.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
     * @param {DefaultApiListTransactionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public listTransactions(requestParameters: DefaultApiListTransactionsRequest, options?: any) {
        return DefaultApiFp(this.configuration).listTransactions(requestParameters.postedAfter, requestParameters.postedBefore, requestParameters.marketplaceId, requestParameters.nextToken, options).then((request) => request(this.axios, this.basePath));
    }
}


