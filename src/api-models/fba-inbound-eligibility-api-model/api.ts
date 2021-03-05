// tslint:disable
/// <reference path="./custom.d.ts" />
/**
 * Selling Partner API for FBA Inbound Eligibilty
 * With the FBA Inbound Eligibility API, you can build applications that let sellers get eligibility previews for items before shipping them to Amazon\'s fulfillment centers. With this API you can find out if an item is eligible for inbound shipment to Amazon\'s fulfillment centers in a specific marketplace. You can also find out if an item is eligible for using the manufacturer barcode for FBA inventory tracking. Sellers can use this information to inform their decisions about which items to ship Amazon\'s fulfillment centers.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * The response schema for the getItemEligibilityPreview operation.
 * @export
 * @interface GetItemEligibilityPreviewResponse
 */
export interface GetItemEligibilityPreviewResponse {
    /**
     * 
     * @type {ItemEligibilityPreview}
     * @memberof GetItemEligibilityPreviewResponse
     */
    payload?: ItemEligibilityPreview;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetItemEligibilityPreviewResponse
     */
    errors?: Array<Error>;
}
/**
 * The response object which contains the ASIN, marketplaceId if required, eligibility program, the eligibility status (boolean), and a list of ineligibility reason codes.
 * @export
 * @interface ItemEligibilityPreview
 */
export interface ItemEligibilityPreview {
    /**
     * The ASIN for which eligibility was determined.
     * @type {string}
     * @memberof ItemEligibilityPreview
     */
    asin: string;
    /**
     * The marketplace for which eligibility was determined.
     * @type {string}
     * @memberof ItemEligibilityPreview
     */
    marketplaceId?: string;
    /**
     * The program for which eligibility was determined.
     * @type {string}
     * @memberof ItemEligibilityPreview
     */
    program: ItemEligibilityPreviewProgramEnum;
    /**
     * Indicates if the item is eligible for the program.
     * @type {boolean}
     * @memberof ItemEligibilityPreview
     */
    isEligibleForProgram: boolean;
    /**
     * Potential Ineligibility Reason Codes.
     * @type {Array<string>}
     * @memberof ItemEligibilityPreview
     */
    ineligibilityReasonList?: Array<ItemEligibilityPreviewIneligibilityReasonListEnum>;
}

/**
    * @export
    * @enum {string}
    */
export enum ItemEligibilityPreviewProgramEnum {
    INBOUND = 'INBOUND',
    COMMINGLING = 'COMMINGLING'
}
/**
    * @export
    * @enum {string}
    */
export enum ItemEligibilityPreviewIneligibilityReasonListEnum {
    FBAINB0004 = 'FBA_INB_0004',
    FBAINB0006 = 'FBA_INB_0006',
    FBAINB0007 = 'FBA_INB_0007',
    FBAINB0008 = 'FBA_INB_0008',
    FBAINB0009 = 'FBA_INB_0009',
    FBAINB0010 = 'FBA_INB_0010',
    FBAINB0011 = 'FBA_INB_0011',
    FBAINB0012 = 'FBA_INB_0012',
    FBAINB0013 = 'FBA_INB_0013',
    FBAINB0014 = 'FBA_INB_0014',
    FBAINB0015 = 'FBA_INB_0015',
    FBAINB0016 = 'FBA_INB_0016',
    FBAINB0017 = 'FBA_INB_0017',
    FBAINB0018 = 'FBA_INB_0018',
    FBAINB0019 = 'FBA_INB_0019',
    FBAINB0034 = 'FBA_INB_0034',
    FBAINB0035 = 'FBA_INB_0035',
    FBAINB0036 = 'FBA_INB_0036',
    FBAINB0037 = 'FBA_INB_0037',
    FBAINB0038 = 'FBA_INB_0038',
    FBAINB0050 = 'FBA_INB_0050',
    FBAINB0051 = 'FBA_INB_0051',
    FBAINB0053 = 'FBA_INB_0053',
    FBAINB0055 = 'FBA_INB_0055',
    FBAINB0056 = 'FBA_INB_0056',
    FBAINB0059 = 'FBA_INB_0059',
    FBAINB0065 = 'FBA_INB_0065',
    FBAINB0066 = 'FBA_INB_0066',
    FBAINB0067 = 'FBA_INB_0067',
    FBAINB0068 = 'FBA_INB_0068',
    FBAINB0095 = 'FBA_INB_0095',
    FBAINB0097 = 'FBA_INB_0097',
    FBAINB0098 = 'FBA_INB_0098',
    FBAINB0099 = 'FBA_INB_0099',
    FBAINB0100 = 'FBA_INB_0100',
    FBAINB0103 = 'FBA_INB_0103',
    FBAINB0104 = 'FBA_INB_0104',
    UNKNOWNINBERRORCODE = 'UNKNOWN_INB_ERROR_CODE'
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
    message?: string;
    /**
     * Additional information that can help the caller understand or fix the issue.
     * @type {string}
     * @memberof ModelError
     */
    details?: string;
}

/**
 * FbaInboundApi - axios parameter creator
 * @export
 */
export const FbaInboundApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This operation gets an eligibility preview for an item that you specify. You can specify the type of eligibility preview that you want (INBOUND or COMMINGLING). For INBOUND previews, you can specify the marketplace in which you want to determine the item\'s eligibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} asin The ASIN of the item for which you want an eligibility preview.
         * @param {'INBOUND' | 'COMMINGLING'} program The program that you want to check eligibility against.
         * @param {Array<string>} [marketplaceIds] The identifier for the marketplace in which you want to determine eligibility. Required only when program&#x3D;INBOUND.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemEligibilityPreview(asin: string, program: 'INBOUND' | 'COMMINGLING', marketplaceIds?: Array<string>, options: any = {}): RequestArgs {
            // verify required parameter 'asin' is not null or undefined
            if (asin === null || asin === undefined) {
                throw new RequiredError('asin','Required parameter asin was null or undefined when calling getItemEligibilityPreview.');
            }
            // verify required parameter 'program' is not null or undefined
            if (program === null || program === undefined) {
                throw new RequiredError('program','Required parameter program was null or undefined when calling getItemEligibilityPreview.');
            }
            const localVarPath = `/fba/inbound/v1/eligibility/itemPreview`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
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

            if (asin !== undefined) {
                localVarQueryParameter['asin'] = asin;
            }

            if (program !== undefined) {
                localVarQueryParameter['program'] = program;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FbaInboundApi - functional programming interface
 * @export
 */
export const FbaInboundApiFp = function(configuration?: Configuration) {
    return {
        /**
         * This operation gets an eligibility preview for an item that you specify. You can specify the type of eligibility preview that you want (INBOUND or COMMINGLING). For INBOUND previews, you can specify the marketplace in which you want to determine the item\'s eligibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} asin The ASIN of the item for which you want an eligibility preview.
         * @param {'INBOUND' | 'COMMINGLING'} program The program that you want to check eligibility against.
         * @param {Array<string>} [marketplaceIds] The identifier for the marketplace in which you want to determine eligibility. Required only when program&#x3D;INBOUND.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemEligibilityPreview(asin: string, program: 'INBOUND' | 'COMMINGLING', marketplaceIds?: Array<string>, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetItemEligibilityPreviewResponse> {
            const localVarAxiosArgs = FbaInboundApiAxiosParamCreator(configuration).getItemEligibilityPreview(asin, program, marketplaceIds, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * FbaInboundApi - factory interface
 * @export
 */
export const FbaInboundApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * This operation gets an eligibility preview for an item that you specify. You can specify the type of eligibility preview that you want (INBOUND or COMMINGLING). For INBOUND previews, you can specify the marketplace in which you want to determine the item\'s eligibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} asin The ASIN of the item for which you want an eligibility preview.
         * @param {'INBOUND' | 'COMMINGLING'} program The program that you want to check eligibility against.
         * @param {Array<string>} [marketplaceIds] The identifier for the marketplace in which you want to determine eligibility. Required only when program&#x3D;INBOUND.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemEligibilityPreview(asin: string, program: 'INBOUND' | 'COMMINGLING', marketplaceIds?: Array<string>, options?: any) {
            return FbaInboundApiFp(configuration).getItemEligibilityPreview(asin, program, marketplaceIds, options)(axios, basePath);
        },
    };
};

/**
 * FbaInboundApi - object-oriented interface
 * @export
 * @class FbaInboundApi
 * @extends {BaseAPI}
 */
export class FbaInboundApi extends BaseAPI {
    /**
     * This operation gets an eligibility preview for an item that you specify. You can specify the type of eligibility preview that you want (INBOUND or COMMINGLING). For INBOUND previews, you can specify the marketplace in which you want to determine the item\'s eligibility.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {string} asin The ASIN of the item for which you want an eligibility preview.
     * @param {'INBOUND' | 'COMMINGLING'} program The program that you want to check eligibility against.
     * @param {Array<string>} [marketplaceIds] The identifier for the marketplace in which you want to determine eligibility. Required only when program&#x3D;INBOUND.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FbaInboundApi
     */
    public getItemEligibilityPreview(asin: string, program: 'INBOUND' | 'COMMINGLING', marketplaceIds?: Array<string>, options?: any) {
        return FbaInboundApiFp(this.configuration).getItemEligibilityPreview(asin, program, marketplaceIds, options)(this.axios, this.basePath);
    }

}


