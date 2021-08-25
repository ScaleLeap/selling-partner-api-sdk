/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
 *
 * The version of the OpenAPI document: v0
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
 * The shipping address details of the shipment.
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * The name.
     * @type {string}
     * @memberof Address
     */
    Name?: string;
    /**
     * The street address.
     * @type {string}
     * @memberof Address
     */
    AddressLine1?: string;
    /**
     * Additional street address information, if required.
     * @type {string}
     * @memberof Address
     */
    AddressLine2?: string;
    /**
     * Additional street address information, if required.
     * @type {string}
     * @memberof Address
     */
    AddressLine3?: string;
    /**
     * The city.
     * @type {string}
     * @memberof Address
     */
    City?: string;
    /**
     * The county.
     * @type {string}
     * @memberof Address
     */
    County?: string;
    /**
     * The district.
     * @type {string}
     * @memberof Address
     */
    District?: string;
    /**
     * The state or region.
     * @type {string}
     * @memberof Address
     */
    StateOrRegion?: string;
    /**
     * The postal code.
     * @type {string}
     * @memberof Address
     */
    PostalCode?: string;
    /**
     * The country code.
     * @type {string}
     * @memberof Address
     */
    CountryCode?: string;
    /**
     * The phone number.
     * @type {string}
     * @memberof Address
     */
    Phone?: string;
    /**
     * 
     * @type {AddressTypeEnum}
     * @memberof Address
     */
    AddressType?: AddressTypeEnum | 'Residential' | 'Commercial';
}
/**
 * The shipping address type.
 * @export
 * @enum {string}
 */
export enum AddressTypeEnum {
    Residential = 'Residential',
    Commercial = 'Commercial'
}

/**
 * Tax information about the buyer.
 * @export
 * @interface BuyerTaxInfo
 */
export interface BuyerTaxInfo {
    /**
     * The legal name of the company.
     * @type {string}
     * @memberof BuyerTaxInfo
     */
    CompanyLegalName?: string;
    /**
     * The country or region imposing the tax.
     * @type {string}
     * @memberof BuyerTaxInfo
     */
    TaxingRegion?: string;
    /**
     * The list of tax classifications.
     * @type {Array<TaxClassification>}
     * @memberof BuyerTaxInfo
     */
    TaxClassifications?: Array<TaxClassification>;
}
/**
 * The response schema for the getInvoiceStatus operation.
 * @export
 * @interface GetInvoiceStatusResponse
 */
export interface GetInvoiceStatusResponse {
    /**
     * 
     * @type {ShipmentInvoiceStatusResponse}
     * @memberof GetInvoiceStatusResponse
     */
    payload?: ShipmentInvoiceStatusResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetInvoiceStatusResponse
     */
    errors?: Array<Error>;
}
/**
 * The response schema for the getShipmentDetails operation.
 * @export
 * @interface GetShipmentDetailsResponse
 */
export interface GetShipmentDetailsResponse {
    /**
     * 
     * @type {ShipmentDetail}
     * @memberof GetShipmentDetailsResponse
     */
    payload?: ShipmentDetail;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetShipmentDetailsResponse
     */
    errors?: Array<Error>;
}
/**
 * Tax information about the marketplace.
 * @export
 * @interface MarketplaceTaxInfo
 */
export interface MarketplaceTaxInfo {
    /**
     * The legal name of the company.
     * @type {string}
     * @memberof MarketplaceTaxInfo
     */
    CompanyLegalName?: string;
    /**
     * The country or region imposing the tax.
     * @type {string}
     * @memberof MarketplaceTaxInfo
     */
    TaxingRegion?: string;
    /**
     * The list of tax classifications.
     * @type {Array<TaxClassification>}
     * @memberof MarketplaceTaxInfo
     */
    TaxClassifications?: Array<TaxClassification>;
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
 * The currency type and amount.
 * @export
 * @interface Money
 */
export interface Money {
    /**
     * Three-digit currency code in ISO 4217 format.
     * @type {string}
     * @memberof Money
     */
    CurrencyCode?: string;
    /**
     * The currency amount.
     * @type {string}
     * @memberof Money
     */
    Amount?: string;
}
/**
 * The information required by a selling partner to issue a shipment invoice.
 * @export
 * @interface ShipmentDetail
 */
export interface ShipmentDetail {
    /**
     * The Amazon-defined identifier for the warehouse.
     * @type {string}
     * @memberof ShipmentDetail
     */
    WarehouseId?: string;
    /**
     * The Amazon-defined identifier for the order.
     * @type {string}
     * @memberof ShipmentDetail
     */
    AmazonOrderId?: string;
    /**
     * The Amazon-defined identifier for the shipment.
     * @type {string}
     * @memberof ShipmentDetail
     */
    AmazonShipmentId?: string;
    /**
     * The date and time when the order was created.
     * @type {string}
     * @memberof ShipmentDetail
     */
    PurchaseDate?: string;
    /**
     * 
     * @type {Address}
     * @memberof ShipmentDetail
     */
    ShippingAddress?: Address;
    /**
     * The list of payment method details.
     * @type {Array<string>}
     * @memberof ShipmentDetail
     */
    PaymentMethodDetails?: Array<string>;
    /**
     * The identifier for the marketplace where the order was placed.
     * @type {string}
     * @memberof ShipmentDetail
     */
    MarketplaceId?: string;
    /**
     * The seller identifier.
     * @type {string}
     * @memberof ShipmentDetail
     */
    SellerId?: string;
    /**
     * The name of the buyer.
     * @type {string}
     * @memberof ShipmentDetail
     */
    BuyerName?: string;
    /**
     * The county of the buyer.
     * @type {string}
     * @memberof ShipmentDetail
     */
    BuyerCounty?: string;
    /**
     * 
     * @type {BuyerTaxInfo}
     * @memberof ShipmentDetail
     */
    BuyerTaxInfo?: BuyerTaxInfo;
    /**
     * 
     * @type {MarketplaceTaxInfo}
     * @memberof ShipmentDetail
     */
    MarketplaceTaxInfo?: MarketplaceTaxInfo;
    /**
     * The seller’s friendly name registered in the marketplace.
     * @type {string}
     * @memberof ShipmentDetail
     */
    SellerDisplayName?: string;
    /**
     * A list of shipment items.
     * @type {Array<ShipmentItem>}
     * @memberof ShipmentDetail
     */
    ShipmentItems?: Array<ShipmentItem>;
}
/**
 * The shipment invoice status.
 * @export
 * @enum {string}
 */
export enum ShipmentInvoiceStatus {
    Processing = 'Processing',
    Accepted = 'Accepted',
    Errored = 'Errored',
    NotFound = 'NotFound'
}

/**
 * The shipment invoice status information.
 * @export
 * @interface ShipmentInvoiceStatusInfo
 */
export interface ShipmentInvoiceStatusInfo {
    /**
     * The Amazon-defined shipment identifier.
     * @type {string}
     * @memberof ShipmentInvoiceStatusInfo
     */
    AmazonShipmentId?: string;
    /**
     * 
     * @type {ShipmentInvoiceStatus}
     * @memberof ShipmentInvoiceStatusInfo
     */
    InvoiceStatus?: ShipmentInvoiceStatus | 'Processing' | 'Accepted' | 'Errored' | 'NotFound';
}
/**
 * The shipment invoice status response.
 * @export
 * @interface ShipmentInvoiceStatusResponse
 */
export interface ShipmentInvoiceStatusResponse {
    /**
     * 
     * @type {ShipmentInvoiceStatusInfo}
     * @memberof ShipmentInvoiceStatusResponse
     */
    Shipments?: ShipmentInvoiceStatusInfo;
}
/**
 * The shipment item information required by a seller to issue a shipment invoice.
 * @export
 * @interface ShipmentItem
 */
export interface ShipmentItem {
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @type {string}
     * @memberof ShipmentItem
     */
    ASIN?: string;
    /**
     * The seller SKU of the item.
     * @type {string}
     * @memberof ShipmentItem
     */
    SellerSKU?: string;
    /**
     * The Amazon-defined identifier for the order item.
     * @type {string}
     * @memberof ShipmentItem
     */
    OrderItemId?: string;
    /**
     * The name of the item.
     * @type {string}
     * @memberof ShipmentItem
     */
    Title?: string;
    /**
     * The number of items ordered.
     * @type {number}
     * @memberof ShipmentItem
     */
    QuantityOrdered?: number;
    /**
     * 
     * @type {Money}
     * @memberof ShipmentItem
     */
    ItemPrice?: Money;
    /**
     * 
     * @type {Money}
     * @memberof ShipmentItem
     */
    ShippingPrice?: Money;
    /**
     * 
     * @type {Money}
     * @memberof ShipmentItem
     */
    GiftWrapPrice?: Money;
    /**
     * 
     * @type {Money}
     * @memberof ShipmentItem
     */
    ShippingDiscount?: Money;
    /**
     * 
     * @type {Money}
     * @memberof ShipmentItem
     */
    PromotionDiscount?: Money;
    /**
     * The list of serial numbers.
     * @type {Array<string>}
     * @memberof ShipmentItem
     */
    SerialNumbers?: Array<string>;
}
/**
 * The request schema for the submitInvoice operation.
 * @export
 * @interface SubmitInvoiceRequest
 */
export interface SubmitInvoiceRequest {
    /**
     * Shipment invoice document content.
     * @type {string}
     * @memberof SubmitInvoiceRequest
     */
    InvoiceContent: string;
    /**
     * An Amazon marketplace identifier.
     * @type {string}
     * @memberof SubmitInvoiceRequest
     */
    MarketplaceId?: string;
    /**
     * MD5 sum for validating the invoice data. For more information about calculating this value, see [Working with Content-MD5 Checksums](https://docs.developer.amazonservices.com/en_US/dev_guide/DG_MD5.html).
     * @type {string}
     * @memberof SubmitInvoiceRequest
     */
    ContentMD5Value: string;
}
/**
 * The response schema for the submitInvoice operation.
 * @export
 * @interface SubmitInvoiceResponse
 */
export interface SubmitInvoiceResponse {
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof SubmitInvoiceResponse
     */
    errors?: Array<Error>;
}
/**
 * The tax classification for the entity.
 * @export
 * @interface TaxClassification
 */
export interface TaxClassification {
    /**
     * The type of tax.
     * @type {string}
     * @memberof TaxClassification
     */
    Name?: string;
    /**
     * The entity\'s tax identifier.
     * @type {string}
     * @memberof TaxClassification
     */
    Value?: string;
}

/**
 * ShipmentInvoiceApi - axios parameter creator
 * @export
 */
export const ShipmentInvoiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the invoice status for the shipment you specify.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 1.133 | 25 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} shipmentId The shipment identifier for the shipment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInvoiceStatus: async (shipmentId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'shipmentId' is not null or undefined
            assertParamExists('getInvoiceStatus', 'shipmentId', shipmentId)
            const localVarPath = `/fba/outbound/brazil/v0/shipments/{shipmentId}/invoice/status`
                .replace(`{${"shipmentId"}}`, encodeURIComponent(String(shipmentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the shipment details required to issue an invoice for the specified shipment.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 1.133 | 25 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} shipmentId The identifier for the shipment. Get this value from the FBAOutboundShipmentStatus notification. For information about subscribing to notifications, see the [Notifications API Use Case Guide](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/use-case-guides/notifications-api-use-case-guide/notifications-use-case-guide-v1.md).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getShipmentDetails: async (shipmentId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'shipmentId' is not null or undefined
            assertParamExists('getShipmentDetails', 'shipmentId', shipmentId)
            const localVarPath = `/fba/outbound/brazil/v0/shipments/{shipmentId}`
                .replace(`{${"shipmentId"}}`, encodeURIComponent(String(shipmentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Submits a shipment invoice document for a given shipment.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 1.133 | 25 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} shipmentId The identifier for the shipment.
         * @param {SubmitInvoiceRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitInvoice: async (shipmentId: string, body: SubmitInvoiceRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'shipmentId' is not null or undefined
            assertParamExists('submitInvoice', 'shipmentId', shipmentId)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('submitInvoice', 'body', body)
            const localVarPath = `/fba/outbound/brazil/v0/shipments/{shipmentId}/invoice`
                .replace(`{${"shipmentId"}}`, encodeURIComponent(String(shipmentId)));
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
    }
};

/**
 * ShipmentInvoiceApi - functional programming interface
 * @export
 */
export const ShipmentInvoiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ShipmentInvoiceApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the invoice status for the shipment you specify.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 1.133 | 25 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} shipmentId The shipment identifier for the shipment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInvoiceStatus(shipmentId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetInvoiceStatusResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInvoiceStatus(shipmentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the shipment details required to issue an invoice for the specified shipment.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 1.133 | 25 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} shipmentId The identifier for the shipment. Get this value from the FBAOutboundShipmentStatus notification. For information about subscribing to notifications, see the [Notifications API Use Case Guide](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/use-case-guides/notifications-api-use-case-guide/notifications-use-case-guide-v1.md).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getShipmentDetails(shipmentId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetShipmentDetailsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getShipmentDetails(shipmentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Submits a shipment invoice document for a given shipment.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 1.133 | 25 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} shipmentId The identifier for the shipment.
         * @param {SubmitInvoiceRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submitInvoice(shipmentId: string, body: SubmitInvoiceRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubmitInvoiceResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.submitInvoice(shipmentId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ShipmentInvoiceApi - factory interface
 * @export
 */
export const ShipmentInvoiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ShipmentInvoiceApiFp(configuration)
    return {
        /**
         * Returns the invoice status for the shipment you specify.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 1.133 | 25 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} shipmentId The shipment identifier for the shipment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInvoiceStatus(shipmentId: string, options?: any): AxiosPromise<GetInvoiceStatusResponse> {
            return localVarFp.getInvoiceStatus(shipmentId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the shipment details required to issue an invoice for the specified shipment.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 1.133 | 25 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} shipmentId The identifier for the shipment. Get this value from the FBAOutboundShipmentStatus notification. For information about subscribing to notifications, see the [Notifications API Use Case Guide](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/use-case-guides/notifications-api-use-case-guide/notifications-use-case-guide-v1.md).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getShipmentDetails(shipmentId: string, options?: any): AxiosPromise<GetShipmentDetailsResponse> {
            return localVarFp.getShipmentDetails(shipmentId, options).then((request) => request(axios, basePath));
        },
        /**
         * Submits a shipment invoice document for a given shipment.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 1.133 | 25 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} shipmentId The identifier for the shipment.
         * @param {SubmitInvoiceRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitInvoice(shipmentId: string, body: SubmitInvoiceRequest, options?: any): AxiosPromise<SubmitInvoiceResponse> {
            return localVarFp.submitInvoice(shipmentId, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getInvoiceStatus operation in ShipmentInvoiceApi.
 * @export
 * @interface ShipmentInvoiceApiGetInvoiceStatusRequest
 */
export interface ShipmentInvoiceApiGetInvoiceStatusRequest {
    /**
     * The shipment identifier for the shipment.
     * @type {string}
     * @memberof ShipmentInvoiceApiGetInvoiceStatus
     */
    readonly shipmentId: string
}

/**
 * Request parameters for getShipmentDetails operation in ShipmentInvoiceApi.
 * @export
 * @interface ShipmentInvoiceApiGetShipmentDetailsRequest
 */
export interface ShipmentInvoiceApiGetShipmentDetailsRequest {
    /**
     * The identifier for the shipment. Get this value from the FBAOutboundShipmentStatus notification. For information about subscribing to notifications, see the [Notifications API Use Case Guide](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/use-case-guides/notifications-api-use-case-guide/notifications-use-case-guide-v1.md).
     * @type {string}
     * @memberof ShipmentInvoiceApiGetShipmentDetails
     */
    readonly shipmentId: string
}

/**
 * Request parameters for submitInvoice operation in ShipmentInvoiceApi.
 * @export
 * @interface ShipmentInvoiceApiSubmitInvoiceRequest
 */
export interface ShipmentInvoiceApiSubmitInvoiceRequest {
    /**
     * The identifier for the shipment.
     * @type {string}
     * @memberof ShipmentInvoiceApiSubmitInvoice
     */
    readonly shipmentId: string

    /**
     * 
     * @type {SubmitInvoiceRequest}
     * @memberof ShipmentInvoiceApiSubmitInvoice
     */
    readonly body: SubmitInvoiceRequest
}

/**
 * ShipmentInvoiceApi - object-oriented interface
 * @export
 * @class ShipmentInvoiceApi
 * @extends {BaseAPI}
 */
export class ShipmentInvoiceApi extends BaseAPI {
    /**
     * Returns the invoice status for the shipment you specify.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 1.133 | 25 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {ShipmentInvoiceApiGetInvoiceStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShipmentInvoiceApi
     */
    public getInvoiceStatus(requestParameters: ShipmentInvoiceApiGetInvoiceStatusRequest, options?: any) {
        return ShipmentInvoiceApiFp(this.configuration).getInvoiceStatus(requestParameters.shipmentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the shipment details required to issue an invoice for the specified shipment.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 1.133 | 25 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {ShipmentInvoiceApiGetShipmentDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShipmentInvoiceApi
     */
    public getShipmentDetails(requestParameters: ShipmentInvoiceApiGetShipmentDetailsRequest, options?: any) {
        return ShipmentInvoiceApiFp(this.configuration).getShipmentDetails(requestParameters.shipmentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Submits a shipment invoice document for a given shipment.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 1.133 | 25 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {ShipmentInvoiceApiSubmitInvoiceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShipmentInvoiceApi
     */
    public submitInvoice(requestParameters: ShipmentInvoiceApiSubmitInvoiceRequest, options?: any) {
        return ShipmentInvoiceApiFp(this.configuration).submitInvoice(requestParameters.shipmentId, requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}


