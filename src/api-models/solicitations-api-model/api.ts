// tslint:disable
/// <reference path="./custom.d.ts" />
/**
 * Selling Partner API for Solicitations
 * With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient\'s Message Center. The Solicitations API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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
 * The response schema for the createProductReviewAndSellerFeedbackSolicitation operation.
 * @export
 * @interface CreateProductReviewAndSellerFeedbackSolicitationResponse
 */
export interface CreateProductReviewAndSellerFeedbackSolicitationResponse {
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof CreateProductReviewAndSellerFeedbackSolicitationResponse
     */
    errors?: Array<Error>;
}
/**
 * 
 * @export
 * @interface GetSchemaResponse
 */
export interface GetSchemaResponse {
    /**
     * 
     * @type {GetSchemaResponseLinks}
     * @memberof GetSchemaResponse
     */
    links?: GetSchemaResponseLinks;
    /**
     * A JSON schema document describing the expected payload of the action. This object can be validated against <a href=http://json-schema.org/draft-04/schema>http://json-schema.org/draft-04/schema</a>.
     * @type {object}
     * @memberof GetSchemaResponse
     */
    payload?: object;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetSchemaResponse
     */
    errors?: Array<Error>;
}
/**
 * 
 * @export
 * @interface GetSchemaResponseLinks
 */
export interface GetSchemaResponseLinks {
    /**
     * 
     * @type {LinkObject}
     * @memberof GetSchemaResponseLinks
     */
    self: LinkObject;
}
/**
 * Describes a solicitation action that can be taken for an order. Provides a JSON Hypertext Application Language (HAL) link to the JSON schema document that describes the expected input.
 * @export
 * @interface GetSolicitationActionResponse
 */
export interface GetSolicitationActionResponse {
    /**
     * 
     * @type {GetSolicitationActionResponseLinks}
     * @memberof GetSolicitationActionResponse
     */
    links?: GetSolicitationActionResponseLinks;
    /**
     * 
     * @type {GetSolicitationActionResponseEmbedded}
     * @memberof GetSolicitationActionResponse
     */
    embedded?: GetSolicitationActionResponseEmbedded;
    /**
     * 
     * @type {SolicitationsAction}
     * @memberof GetSolicitationActionResponse
     */
    payload?: SolicitationsAction;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetSolicitationActionResponse
     */
    errors?: Array<Error>;
}
/**
 * 
 * @export
 * @interface GetSolicitationActionResponseEmbedded
 */
export interface GetSolicitationActionResponseEmbedded {
    /**
     * 
     * @type {GetSchemaResponse}
     * @memberof GetSolicitationActionResponseEmbedded
     */
    schema?: GetSchemaResponse;
}
/**
 * 
 * @export
 * @interface GetSolicitationActionResponseLinks
 */
export interface GetSolicitationActionResponseLinks {
    /**
     * 
     * @type {LinkObject}
     * @memberof GetSolicitationActionResponseLinks
     */
    self: LinkObject;
    /**
     * 
     * @type {LinkObject}
     * @memberof GetSolicitationActionResponseLinks
     */
    schema: LinkObject;
}
/**
 * The response schema for the getSolicitationActionsForOrder operation.
 * @export
 * @interface GetSolicitationActionsForOrderResponse
 */
export interface GetSolicitationActionsForOrderResponse {
    /**
     * 
     * @type {GetSolicitationActionsForOrderResponseLinks}
     * @memberof GetSolicitationActionsForOrderResponse
     */
    links?: GetSolicitationActionsForOrderResponseLinks;
    /**
     * 
     * @type {GetSolicitationActionsForOrderResponseEmbedded}
     * @memberof GetSolicitationActionsForOrderResponse
     */
    embedded?: GetSolicitationActionsForOrderResponseEmbedded;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetSolicitationActionsForOrderResponse
     */
    errors?: Array<Error>;
}
/**
 * 
 * @export
 * @interface GetSolicitationActionsForOrderResponseEmbedded
 */
export interface GetSolicitationActionsForOrderResponseEmbedded {
    /**
     * 
     * @type {Array<GetSolicitationActionResponse>}
     * @memberof GetSolicitationActionsForOrderResponseEmbedded
     */
    actions: Array<GetSolicitationActionResponse>;
}
/**
 * 
 * @export
 * @interface GetSolicitationActionsForOrderResponseLinks
 */
export interface GetSolicitationActionsForOrderResponseLinks {
    /**
     * 
     * @type {LinkObject}
     * @memberof GetSolicitationActionsForOrderResponseLinks
     */
    self: LinkObject;
    /**
     * Eligible actions for the specified amazonOrderId.
     * @type {Array<LinkObject>}
     * @memberof GetSolicitationActionsForOrderResponseLinks
     */
    actions: Array<LinkObject>;
}
/**
 * A Link object.
 * @export
 * @interface LinkObject
 */
export interface LinkObject {
    /**
     * A URI for this object.
     * @type {string}
     * @memberof LinkObject
     */
    href: string;
    /**
     * An identifier for this object.
     * @type {string}
     * @memberof LinkObject
     */
    name?: string;
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
     * Additional details that can help the caller understand or fix the issue.
     * @type {string}
     * @memberof ModelError
     */
    details?: string;
}
/**
 * A simple object containing the name of the template.
 * @export
 * @interface SolicitationsAction
 */
export interface SolicitationsAction {
    /**
     * 
     * @type {string}
     * @memberof SolicitationsAction
     */
    name: string;
}

/**
 * SolicitationsApi - axios parameter creator
 * @export
 */
export const SolicitationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Sends a solicitation to a buyer asking for seller feedback and a product review for the specified order. Send only one productReviewAndSellerFeedback or free form proactive message per order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} amazonOrderId An Amazon order identifier. This specifies the order for which a solicitation is sent.
         * @param {Array<string>} marketplaceIds A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProductReviewAndSellerFeedbackSolicitation(amazonOrderId: string, marketplaceIds: Array<string>, options: any = {}): RequestArgs {
            // verify required parameter 'amazonOrderId' is not null or undefined
            if (amazonOrderId === null || amazonOrderId === undefined) {
                throw new RequiredError('amazonOrderId','Required parameter amazonOrderId was null or undefined when calling createProductReviewAndSellerFeedbackSolicitation.');
            }
            // verify required parameter 'marketplaceIds' is not null or undefined
            if (marketplaceIds === null || marketplaceIds === undefined) {
                throw new RequiredError('marketplaceIds','Required parameter marketplaceIds was null or undefined when calling createProductReviewAndSellerFeedbackSolicitation.');
            }
            const localVarPath = `/solicitations/v1/orders/{amazonOrderId}/solicitations/productReviewAndSellerFeedback`
                .replace(`{${"amazonOrderId"}}`, encodeURIComponent(String(amazonOrderId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
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
        /**
         * Returns a list of solicitation types that are available for an order that you specify. A solicitation type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a solicitation. Currently only the productReviewAndSellerFeedbackSolicitation solicitation type is available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} amazonOrderId An Amazon order identifier. This specifies the order for which you want a list of available solicitation types.
         * @param {Array<string>} marketplaceIds A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSolicitationActionsForOrder(amazonOrderId: string, marketplaceIds: Array<string>, options: any = {}): RequestArgs {
            // verify required parameter 'amazonOrderId' is not null or undefined
            if (amazonOrderId === null || amazonOrderId === undefined) {
                throw new RequiredError('amazonOrderId','Required parameter amazonOrderId was null or undefined when calling getSolicitationActionsForOrder.');
            }
            // verify required parameter 'marketplaceIds' is not null or undefined
            if (marketplaceIds === null || marketplaceIds === undefined) {
                throw new RequiredError('marketplaceIds','Required parameter marketplaceIds was null or undefined when calling getSolicitationActionsForOrder.');
            }
            const localVarPath = `/solicitations/v1/orders/{amazonOrderId}`
                .replace(`{${"amazonOrderId"}}`, encodeURIComponent(String(amazonOrderId)));
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
 * SolicitationsApi - functional programming interface
 * @export
 */
export const SolicitationsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Sends a solicitation to a buyer asking for seller feedback and a product review for the specified order. Send only one productReviewAndSellerFeedback or free form proactive message per order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} amazonOrderId An Amazon order identifier. This specifies the order for which a solicitation is sent.
         * @param {Array<string>} marketplaceIds A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProductReviewAndSellerFeedbackSolicitation(amazonOrderId: string, marketplaceIds: Array<string>, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateProductReviewAndSellerFeedbackSolicitationResponse> {
            const localVarAxiosArgs = SolicitationsApiAxiosParamCreator(configuration).createProductReviewAndSellerFeedbackSolicitation(amazonOrderId, marketplaceIds, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a list of solicitation types that are available for an order that you specify. A solicitation type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a solicitation. Currently only the productReviewAndSellerFeedbackSolicitation solicitation type is available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} amazonOrderId An Amazon order identifier. This specifies the order for which you want a list of available solicitation types.
         * @param {Array<string>} marketplaceIds A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSolicitationActionsForOrder(amazonOrderId: string, marketplaceIds: Array<string>, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSolicitationActionsForOrderResponse> {
            const localVarAxiosArgs = SolicitationsApiAxiosParamCreator(configuration).getSolicitationActionsForOrder(amazonOrderId, marketplaceIds, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SolicitationsApi - factory interface
 * @export
 */
export const SolicitationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Sends a solicitation to a buyer asking for seller feedback and a product review for the specified order. Send only one productReviewAndSellerFeedback or free form proactive message per order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} amazonOrderId An Amazon order identifier. This specifies the order for which a solicitation is sent.
         * @param {Array<string>} marketplaceIds A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProductReviewAndSellerFeedbackSolicitation(amazonOrderId: string, marketplaceIds: Array<string>, options?: any) {
            return SolicitationsApiFp(configuration).createProductReviewAndSellerFeedbackSolicitation(amazonOrderId, marketplaceIds, options)(axios, basePath);
        },
        /**
         * Returns a list of solicitation types that are available for an order that you specify. A solicitation type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a solicitation. Currently only the productReviewAndSellerFeedbackSolicitation solicitation type is available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} amazonOrderId An Amazon order identifier. This specifies the order for which you want a list of available solicitation types.
         * @param {Array<string>} marketplaceIds A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSolicitationActionsForOrder(amazonOrderId: string, marketplaceIds: Array<string>, options?: any) {
            return SolicitationsApiFp(configuration).getSolicitationActionsForOrder(amazonOrderId, marketplaceIds, options)(axios, basePath);
        },
    };
};

/**
 * SolicitationsApi - object-oriented interface
 * @export
 * @class SolicitationsApi
 * @extends {BaseAPI}
 */
export class SolicitationsApi extends BaseAPI {
    /**
     * Sends a solicitation to a buyer asking for seller feedback and a product review for the specified order. Send only one productReviewAndSellerFeedback or free form proactive message per order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {string} amazonOrderId An Amazon order identifier. This specifies the order for which a solicitation is sent.
     * @param {Array<string>} marketplaceIds A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SolicitationsApi
     */
    public createProductReviewAndSellerFeedbackSolicitation(amazonOrderId: string, marketplaceIds: Array<string>, options?: any) {
        return SolicitationsApiFp(this.configuration).createProductReviewAndSellerFeedbackSolicitation(amazonOrderId, marketplaceIds, options)(this.axios, this.basePath);
    }

    /**
     * Returns a list of solicitation types that are available for an order that you specify. A solicitation type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a solicitation. Currently only the productReviewAndSellerFeedbackSolicitation solicitation type is available.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {string} amazonOrderId An Amazon order identifier. This specifies the order for which you want a list of available solicitation types.
     * @param {Array<string>} marketplaceIds A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SolicitationsApi
     */
    public getSolicitationActionsForOrder(amazonOrderId: string, marketplaceIds: Array<string>, options?: any) {
        return SolicitationsApiFp(this.configuration).getSolicitationActionsForOrder(amazonOrderId, marketplaceIds, options)(this.axios, this.basePath);
    }

}


