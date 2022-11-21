/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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
 * Additional information provided by the selling party for tax-related or any other purpose.
 * @export
 * @interface AdditionalDetails
 */
export interface AdditionalDetails {
    /**
     * The type of the additional information provided by the selling party.
     * @type {string}
     * @memberof AdditionalDetails
     */
    type: AdditionalDetailsTypeEnum;
    /**
     * The detail of the additional information provided by the selling party.
     * @type {string}
     * @memberof AdditionalDetails
     */
    detail: string;
    /**
     * The language code of the additional information detail.
     * @type {string}
     * @memberof AdditionalDetails
     */
    languageCode?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum AdditionalDetailsTypeEnum {
    Sur = 'SUR',
    Ocr = 'OCR',
    CartonCount = 'CartonCount'
}

/**
 * A physical address.
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * The name of the person, business or institution at that address.
     * @type {string}
     * @memberof Address
     */
    name: string;
    /**
     * First line of street address.
     * @type {string}
     * @memberof Address
     */
    addressLine1: string;
    /**
     * Additional address information, if required.
     * @type {string}
     * @memberof Address
     */
    addressLine2?: string;
    /**
     * Additional address information, if required.
     * @type {string}
     * @memberof Address
     */
    addressLine3?: string;
    /**
     * The city where the person, business or institution is located.
     * @type {string}
     * @memberof Address
     */
    city?: string;
    /**
     * The county where person, business or institution is located.
     * @type {string}
     * @memberof Address
     */
    county?: string;
    /**
     * The district where person, business or institution is located.
     * @type {string}
     * @memberof Address
     */
    district?: string;
    /**
     * The state or region where person, business or institution is located.
     * @type {string}
     * @memberof Address
     */
    stateOrRegion?: string;
    /**
     * The postal or zip code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation.
     * @type {string}
     * @memberof Address
     */
    postalOrZipCode?: string;
    /**
     * The two digit country code. In ISO 3166-1 alpha-2 format.
     * @type {string}
     * @memberof Address
     */
    countryCode: string;
    /**
     * The phone number of the person, business or institution located at that address.
     * @type {string}
     * @memberof Address
     */
    phone?: string;
}
/**
 * Monetary and tax details of the allowance.
 * @export
 * @interface AllowanceDetails
 */
export interface AllowanceDetails {
    /**
     * Type of the allowance applied.
     * @type {string}
     * @memberof AllowanceDetails
     */
    type: AllowanceDetailsTypeEnum;
    /**
     * Description of the allowance.
     * @type {string}
     * @memberof AllowanceDetails
     */
    description?: string;
    /**
     * 
     * @type {Money}
     * @memberof AllowanceDetails
     */
    allowanceAmount: Money;
    /**
     * Tax amount details applied on this allowance.
     * @type {Array<TaxDetails>}
     * @memberof AllowanceDetails
     */
    taxDetails?: Array<TaxDetails>;
}

/**
    * @export
    * @enum {string}
    */
export enum AllowanceDetailsTypeEnum {
    Discount = 'Discount',
    DiscountIncentive = 'DiscountIncentive',
    Defective = 'Defective',
    Promotional = 'Promotional',
    UnsaleableMerchandise = 'UnsaleableMerchandise',
    Special = 'Special'
}

/**
 * Monetary and tax details of the charge.
 * @export
 * @interface ChargeDetails
 */
export interface ChargeDetails {
    /**
     * Type of the charge applied.
     * @type {string}
     * @memberof ChargeDetails
     */
    type: ChargeDetailsTypeEnum;
    /**
     * Description of the charge.
     * @type {string}
     * @memberof ChargeDetails
     */
    description?: string;
    /**
     * 
     * @type {Money}
     * @memberof ChargeDetails
     */
    chargeAmount: Money;
    /**
     * Tax amount details applied on this charge.
     * @type {Array<TaxDetails>}
     * @memberof ChargeDetails
     */
    taxDetails?: Array<TaxDetails>;
}

/**
    * @export
    * @enum {string}
    */
export enum ChargeDetailsTypeEnum {
    Freight = 'Freight',
    Packing = 'Packing',
    Duty = 'Duty',
    Service = 'Service',
    SmallOrder = 'SmallOrder',
    InsurancePlacementCost = 'InsurancePlacementCost',
    InsuranceFee = 'InsuranceFee',
    SpecialHandlingService = 'SpecialHandlingService',
    CollectionAndRecyclingService = 'CollectionAndRecyclingService',
    EnvironmentalProtectionService = 'EnvironmentalProtectionService',
    TaxCollectedAtSource = 'TaxCollectedAtSource'
}

/**
 * References required in order to process a credit note. This information is required only if InvoiceType is CreditNote.
 * @export
 * @interface CreditNoteDetails
 */
export interface CreditNoteDetails {
    /**
     * Original Invoice Number when sending a credit note relating to an existing invoice. One Invoice only to be processed per Credit Note. This is mandatory for AP Credit Notes.
     * @type {string}
     * @memberof CreditNoteDetails
     */
    referenceInvoiceNumber?: string;
    /**
     * Debit Note Number as generated by Amazon. Recommended for Returns and COOP Credit Notes.
     * @type {string}
     * @memberof CreditNoteDetails
     */
    debitNoteNumber?: string;
    /**
     * Identifies the Returns Notice Number. Mandatory for all Returns Credit Notes.
     * @type {string}
     * @memberof CreditNoteDetails
     */
    returnsReferenceNumber?: string;
    /**
     * Defines a date and time according to ISO8601.
     * @type {string}
     * @memberof CreditNoteDetails
     */
    goodsReturnDate?: string;
    /**
     * Identifies the Returned Merchandise Authorization ID, if generated.
     * @type {string}
     * @memberof CreditNoteDetails
     */
    rmaId?: string;
    /**
     * Identifies the COOP reference used for COOP agreement. Failure to provide the COOP reference number or the Debit Note number may lead to a rejection of the Credit Note.
     * @type {string}
     * @memberof CreditNoteDetails
     */
    coopReferenceNumber?: string;
    /**
     * Identifies the consignor reference number (VRET number), if generated by Amazon.
     * @type {string}
     * @memberof CreditNoteDetails
     */
    consignorsReferenceNumber?: string;
}
/**
 * 
 * @export
 * @interface Invoice
 */
export interface Invoice {
    /**
     * Identifies the type of invoice.
     * @type {string}
     * @memberof Invoice
     */
    invoiceType: InvoiceInvoiceTypeEnum;
    /**
     * Unique number relating to the charges defined in this document. This will be invoice number if the document type is Invoice or CreditNote number if the document type is Credit Note. Failure to provide this reference will result in a rejection.
     * @type {string}
     * @memberof Invoice
     */
    id: string;
    /**
     * An additional unique reference number used for regulatory or other purposes.
     * @type {string}
     * @memberof Invoice
     */
    referenceNumber?: string;
    /**
     * Defines a date and time according to ISO8601.
     * @type {string}
     * @memberof Invoice
     */
    date: string;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof Invoice
     */
    remitToParty: PartyIdentification;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof Invoice
     */
    shipToParty?: PartyIdentification;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof Invoice
     */
    shipFromParty?: PartyIdentification;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof Invoice
     */
    billToParty?: PartyIdentification;
    /**
     * 
     * @type {PaymentTerms}
     * @memberof Invoice
     */
    paymentTerms?: PaymentTerms;
    /**
     * 
     * @type {Money}
     * @memberof Invoice
     */
    invoiceTotal: Money;
    /**
     * Total tax amount details for all line items.
     * @type {Array<TaxDetails>}
     * @memberof Invoice
     */
    taxDetails?: Array<TaxDetails>;
    /**
     * Additional details provided by the selling party, for tax related or other purposes.
     * @type {Array<AdditionalDetails>}
     * @memberof Invoice
     */
    additionalDetails?: Array<AdditionalDetails>;
    /**
     * Total charge amount details for all line items.
     * @type {Array<ChargeDetails>}
     * @memberof Invoice
     */
    chargeDetails?: Array<ChargeDetails>;
    /**
     * Total allowance amount details for all line items.
     * @type {Array<AllowanceDetails>}
     * @memberof Invoice
     */
    allowanceDetails?: Array<AllowanceDetails>;
    /**
     * The list of invoice items.
     * @type {Array<InvoiceItem>}
     * @memberof Invoice
     */
    items?: Array<InvoiceItem>;
}

/**
    * @export
    * @enum {string}
    */
export enum InvoiceInvoiceTypeEnum {
    Invoice = 'Invoice',
    CreditNote = 'CreditNote'
}

/**
 * Details of the item being invoiced.
 * @export
 * @interface InvoiceItem
 */
export interface InvoiceItem {
    /**
     * Unique number related to this line item.
     * @type {number}
     * @memberof InvoiceItem
     */
    itemSequenceNumber: number;
    /**
     * Amazon Standard Identification Number (ASIN) of an item.
     * @type {string}
     * @memberof InvoiceItem
     */
    amazonProductIdentifier?: string;
    /**
     * The vendor selected product identifier of the item. Should be the same as was provided in the purchase order.
     * @type {string}
     * @memberof InvoiceItem
     */
    vendorProductIdentifier?: string;
    /**
     * 
     * @type {ItemQuantity}
     * @memberof InvoiceItem
     */
    invoicedQuantity: ItemQuantity;
    /**
     * 
     * @type {Money}
     * @memberof InvoiceItem
     */
    netCost: Money;
    /**
     * The Amazon purchase order number for this invoiced line item. Formatting Notes: 8-character alpha-numeric code. This value is mandatory only when invoiceType is Invoice, and is not required when invoiceType is CreditNote.
     * @type {string}
     * @memberof InvoiceItem
     */
    purchaseOrderNumber?: string;
    /**
     * HSN Tax code. The HSN number cannot contain alphabets.
     * @type {string}
     * @memberof InvoiceItem
     */
    hsnCode?: string;
    /**
     * 
     * @type {CreditNoteDetails}
     * @memberof InvoiceItem
     */
    creditNoteDetails?: CreditNoteDetails;
    /**
     * Individual tax details per line item.
     * @type {Array<TaxDetails>}
     * @memberof InvoiceItem
     */
    taxDetails?: Array<TaxDetails>;
    /**
     * Individual charge details per line item.
     * @type {Array<ChargeDetails>}
     * @memberof InvoiceItem
     */
    chargeDetails?: Array<ChargeDetails>;
    /**
     * Individual allowance details per line item.
     * @type {Array<AllowanceDetails>}
     * @memberof InvoiceItem
     */
    allowanceDetails?: Array<AllowanceDetails>;
}
/**
 * Details of quantity.
 * @export
 * @interface ItemQuantity
 */
export interface ItemQuantity {
    /**
     * Quantity of an item. This value should not be zero.
     * @type {number}
     * @memberof ItemQuantity
     */
    amount: number;
    /**
     * Unit of measure for the quantity.
     * @type {string}
     * @memberof ItemQuantity
     */
    unitOfMeasure: ItemQuantityUnitOfMeasureEnum;
    /**
     * The case size, if the unit of measure value is Cases.
     * @type {number}
     * @memberof ItemQuantity
     */
    unitSize?: number;
}

/**
    * @export
    * @enum {string}
    */
export enum ItemQuantityUnitOfMeasureEnum {
    Cases = 'Cases',
    Eaches = 'Eaches'
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
 * An amount of money, including units in the form of currency.
 * @export
 * @interface Money
 */
export interface Money {
    /**
     * Three-digit currency code in ISO 4217 format.
     * @type {string}
     * @memberof Money
     */
    currencyCode?: string;
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     * @type {string}
     * @memberof Money
     */
    amount?: string;
}
/**
 * 
 * @export
 * @interface PartyIdentification
 */
export interface PartyIdentification {
    /**
     * Assigned identification for the party.
     * @type {string}
     * @memberof PartyIdentification
     */
    partyId: string;
    /**
     * 
     * @type {Address}
     * @memberof PartyIdentification
     */
    address?: Address;
    /**
     * Tax registration details of the party.
     * @type {Array<TaxRegistrationDetails>}
     * @memberof PartyIdentification
     */
    taxRegistrationDetails?: Array<TaxRegistrationDetails>;
}
/**
 * Terms of the payment for the invoice. The basis of the payment terms is the invoice date.
 * @export
 * @interface PaymentTerms
 */
export interface PaymentTerms {
    /**
     * The payment term type for the invoice.
     * @type {string}
     * @memberof PaymentTerms
     */
    type?: PaymentTermsTypeEnum;
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     * @type {string}
     * @memberof PaymentTerms
     */
    discountPercent?: string;
    /**
     * The number of calendar days from the Base date (Invoice date) until the discount is no longer valid.
     * @type {number}
     * @memberof PaymentTerms
     */
    discountDueDays?: number;
    /**
     * The number of calendar days from the base date (invoice date) until the total amount on the invoice is due.
     * @type {number}
     * @memberof PaymentTerms
     */
    netDueDays?: number;
}

/**
    * @export
    * @enum {string}
    */
export enum PaymentTermsTypeEnum {
    Basic = 'Basic',
    EndOfMonth = 'EndOfMonth',
    FixedDate = 'FixedDate',
    Proximo = 'Proximo',
    PaymentDueUponReceiptOfInvoice = 'PaymentDueUponReceiptOfInvoice',
    LetterofCredit = 'LetterofCredit'
}

/**
 * The request schema for the submitInvoices operation.
 * @export
 * @interface SubmitInvoicesRequest
 */
export interface SubmitInvoicesRequest {
    /**
     * 
     * @type {Array<Invoice>}
     * @memberof SubmitInvoicesRequest
     */
    invoices?: Array<Invoice>;
}
/**
 * The response schema for the submitInvoices operation.
 * @export
 * @interface SubmitInvoicesResponse
 */
export interface SubmitInvoicesResponse {
    /**
     * 
     * @type {TransactionId}
     * @memberof SubmitInvoicesResponse
     */
    payload?: TransactionId;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof SubmitInvoicesResponse
     */
    errors?: Array<Error>;
}
/**
 * Details of tax amount applied.
 * @export
 * @interface TaxDetails
 */
export interface TaxDetails {
    /**
     * Type of the tax applied.
     * @type {string}
     * @memberof TaxDetails
     */
    taxType: TaxDetailsTaxTypeEnum;
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     * @type {string}
     * @memberof TaxDetails
     */
    taxRate?: string;
    /**
     * 
     * @type {Money}
     * @memberof TaxDetails
     */
    taxAmount: Money;
    /**
     * 
     * @type {Money}
     * @memberof TaxDetails
     */
    taxableAmount?: Money;
}

/**
    * @export
    * @enum {string}
    */
export enum TaxDetailsTaxTypeEnum {
    Cgst = 'CGST',
    Sgst = 'SGST',
    Cess = 'CESS',
    Utgst = 'UTGST',
    Igst = 'IGST',
    MwSt = 'MwSt.',
    Pst = 'PST',
    Tva = 'TVA',
    Vat = 'VAT',
    Gst = 'GST',
    St = 'ST',
    Consumption = 'Consumption',
    MutuallyDefined = 'MutuallyDefined',
    DomesticVat = 'DomesticVAT'
}

/**
 * Tax registration details of the entity.
 * @export
 * @interface TaxRegistrationDetails
 */
export interface TaxRegistrationDetails {
    /**
     * The tax registration type for the entity.
     * @type {string}
     * @memberof TaxRegistrationDetails
     */
    taxRegistrationType: TaxRegistrationDetailsTaxRegistrationTypeEnum;
    /**
     * The tax registration number for the entity. For example, VAT ID.
     * @type {string}
     * @memberof TaxRegistrationDetails
     */
    taxRegistrationNumber: string;
}

/**
    * @export
    * @enum {string}
    */
export enum TaxRegistrationDetailsTaxRegistrationTypeEnum {
    Vat = 'VAT',
    Gst = 'GST'
}

/**
 * 
 * @export
 * @interface TransactionId
 */
export interface TransactionId {
    /**
     * GUID to identify this transaction. This value can be used with the Transaction Status API to return the status of this transaction.
     * @type {string}
     * @memberof TransactionId
     */
    transactionId?: string;
}

/**
 * VendorPaymentsApi - axios parameter creator
 * @export
 */
export const VendorPaymentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Submit new invoices to Amazon.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {SubmitInvoicesRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitInvoices: async (body: SubmitInvoicesRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('submitInvoices', 'body', body)
            const localVarPath = `/vendor/payments/v1/invoices`;
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
 * VendorPaymentsApi - functional programming interface
 * @export
 */
export const VendorPaymentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VendorPaymentsApiAxiosParamCreator(configuration)
    return {
        /**
         * Submit new invoices to Amazon.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {SubmitInvoicesRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async submitInvoices(body: SubmitInvoicesRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubmitInvoicesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.submitInvoices(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * VendorPaymentsApi - factory interface
 * @export
 */
export const VendorPaymentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VendorPaymentsApiFp(configuration)
    return {
        /**
         * Submit new invoices to Amazon.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {SubmitInvoicesRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        submitInvoices(body: SubmitInvoicesRequest, options?: any): AxiosPromise<SubmitInvoicesResponse> {
            return localVarFp.submitInvoices(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for submitInvoices operation in VendorPaymentsApi.
 * @export
 * @interface VendorPaymentsApiSubmitInvoicesRequest
 */
export interface VendorPaymentsApiSubmitInvoicesRequest {
    /**
     * 
     * @type {SubmitInvoicesRequest}
     * @memberof VendorPaymentsApiSubmitInvoices
     */
    readonly body: SubmitInvoicesRequest
}

/**
 * VendorPaymentsApi - object-oriented interface
 * @export
 * @class VendorPaymentsApi
 * @extends {BaseAPI}
 */
export class VendorPaymentsApi extends BaseAPI {
    /**
     * Submit new invoices to Amazon.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {VendorPaymentsApiSubmitInvoicesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorPaymentsApi
     */
    public submitInvoices(requestParameters: VendorPaymentsApiSubmitInvoicesRequest, options?: any) {
        return VendorPaymentsApiFp(this.configuration).submitInvoices(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}


