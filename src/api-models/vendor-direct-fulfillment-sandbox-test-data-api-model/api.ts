/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data
 * The Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data provides programmatic access to vendor direct fulfillment sandbox test data.
 *
 * The version of the OpenAPI document: 2021-10-28
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
     * An array of individual error objects containing error details.
     * @type {Array<Error>}
     * @memberof ErrorList
     */
    errors: Array<Error>;
}
/**
 * The request body for the generateOrderScenarios operation.
 * @export
 * @interface GenerateOrderScenarioRequest
 */
export interface GenerateOrderScenarioRequest {
    /**
     * The list of test orders requested as indicated by party identifiers.
     * @type {Array<OrderScenarioRequest>}
     * @memberof GenerateOrderScenarioRequest
     */
    orders?: Array<OrderScenarioRequest>;
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
 * The party identifiers required to generate the test data.
 * @export
 * @interface OrderScenarioRequest
 */
export interface OrderScenarioRequest {
    /**
     * 
     * @type {PartyIdentification}
     * @memberof OrderScenarioRequest
     */
    sellingParty: PartyIdentification;
    /**
     * 
     * @type {PartyIdentification}
     * @memberof OrderScenarioRequest
     */
    shipFromParty: PartyIdentification;
}
/**
 * A generated string used to pass information to your next request. If NextToken is returned, pass the value of NextToken to the next request. If NextToken is not returned, there are no more order items to return.
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * A generated token to be passed in the next request to retrieve the next set of results.
     * @type {string}
     * @memberof Pagination
     */
    nextToken?: string;
}
/**
 * The identification object for the party information. For example, warehouse code or vendor code. Please refer to specific party for more details.
 * @export
 * @interface PartyIdentification
 */
export interface PartyIdentification {
    /**
     * Assigned identification for the party. For example, warehouse code or vendor code. Please refer to specific party for more details.
     * @type {string}
     * @memberof PartyIdentification
     */
    partyId: string;
}
/**
 * A scenario test case response returned when the request is successful.
 * @export
 * @interface Scenario
 */
export interface Scenario {
    /**
     * An identifier that identifies the type of scenario that user can use for testing.
     * @type {string}
     * @memberof Scenario
     */
    scenarioId: string;
    /**
     * A list of orders that can be used by the caller to test each life cycle or scenario.
     * @type {Array<TestOrder>}
     * @memberof Scenario
     */
    orders: Array<TestOrder>;
}
/**
 * The set of test case data returned in response to the test data request.
 * @export
 * @interface TestCaseData
 */
export interface TestCaseData {
    /**
     * Set of use cases that describes the possible test scenarios.
     * @type {Array<Scenario>}
     * @memberof TestCaseData
     */
    scenarios?: Array<Scenario>;
}
/**
 * Error response returned when the request is unsuccessful.
 * @export
 * @interface TestOrder
 */
export interface TestOrder {
    /**
     * An error code that identifies the type of error that occurred.
     * @type {string}
     * @memberof TestOrder
     */
    orderId: string;
}
/**
 * The transaction details including the status. If the transaction was successful, also includes the requested test order data.
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * The unique identifier returned in the response to the generateOrderScenarios request.
     * @type {string}
     * @memberof Transaction
     */
    transactionId: string;
    /**
     * The current processing status of the transaction.
     * @type {string}
     * @memberof Transaction
     */
    status: TransactionStatusEnum | 'FAILURE' | 'PROCESSING' | 'SUCCESS';
    /**
     * 
     * @type {TestCaseData}
     * @memberof Transaction
     */
    testCaseData?: TestCaseData;
}

/**
    * @export
    * @enum {string}
    */
export enum TransactionStatusEnum {
    Failure = 'FAILURE',
    Processing = 'PROCESSING',
    Success = 'SUCCESS'
}

/**
 * A GUID assigned by Amazon to identify this transaction.
 * @export
 * @interface TransactionReference
 */
export interface TransactionReference {
    /**
     * A GUID (Globally Unique Identifier) assigned by Amazon to uniquely identify the transaction.
     * @type {string}
     * @memberof TransactionReference
     */
    transactionId?: string;
}
/**
 * The payload for the getOrderScenarios operation.
 * @export
 * @interface TransactionStatus
 */
export interface TransactionStatus {
    /**
     * 
     * @type {Transaction}
     * @memberof TransactionStatus
     */
    transactionStatus?: Transaction;
}

/**
 * VendorDFSandboxApi - axios parameter creator
 * @export
 */
export const VendorDFSandboxApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Submits a request to generate test order data for Vendor Direct Fulfillment API entities.
         * @param {GenerateOrderScenarioRequest} body The request payload containing parameters for generating test order data scenarios.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateOrderScenarios: async (body: GenerateOrderScenarioRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('generateOrderScenarios', 'body', body)
            const localVarPath = `/vendor/directFulfillment/sandbox/2021-10-28/orders`;
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
 * VendorDFSandboxApi - functional programming interface
 * @export
 */
export const VendorDFSandboxApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VendorDFSandboxApiAxiosParamCreator(configuration)
    return {
        /**
         * Submits a request to generate test order data for Vendor Direct Fulfillment API entities.
         * @param {GenerateOrderScenarioRequest} body The request payload containing parameters for generating test order data scenarios.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateOrderScenarios(body: GenerateOrderScenarioRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionReference>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateOrderScenarios(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * VendorDFSandboxApi - factory interface
 * @export
 */
export const VendorDFSandboxApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VendorDFSandboxApiFp(configuration)
    return {
        /**
         * Submits a request to generate test order data for Vendor Direct Fulfillment API entities.
         * @param {GenerateOrderScenarioRequest} body The request payload containing parameters for generating test order data scenarios.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateOrderScenarios(body: GenerateOrderScenarioRequest, options?: any): AxiosPromise<TransactionReference> {
            return localVarFp.generateOrderScenarios(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for generateOrderScenarios operation in VendorDFSandboxApi.
 * @export
 * @interface VendorDFSandboxApiGenerateOrderScenariosRequest
 */
export interface VendorDFSandboxApiGenerateOrderScenariosRequest {
    /**
     * The request payload containing parameters for generating test order data scenarios.
     * @type {GenerateOrderScenarioRequest}
     * @memberof VendorDFSandboxApiGenerateOrderScenarios
     */
    readonly body: GenerateOrderScenarioRequest
}

/**
 * VendorDFSandboxApi - object-oriented interface
 * @export
 * @class VendorDFSandboxApi
 * @extends {BaseAPI}
 */
export class VendorDFSandboxApi extends BaseAPI {
    /**
     * Submits a request to generate test order data for Vendor Direct Fulfillment API entities.
     * @param {VendorDFSandboxApiGenerateOrderScenariosRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorDFSandboxApi
     */
    public generateOrderScenarios(requestParameters: VendorDFSandboxApiGenerateOrderScenariosRequest, options?: any) {
        return VendorDFSandboxApiFp(this.configuration).generateOrderScenarios(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * VendorDFSandboxtransactionstatusApi - axios parameter creator
 * @export
 */
export const VendorDFSandboxtransactionstatusApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the status of the transaction indicated by the specified transactionId. If the transaction was successful, also returns the requested test order data.
         * @param {string} transactionId The transaction identifier returned in the response to the generateOrderScenarios operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOrderScenarios: async (transactionId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('getOrderScenarios', 'transactionId', transactionId)
            const localVarPath = `/vendor/directFulfillment/sandbox/2021-10-28/transactions/{transactionId}`
                .replace(`{${"transactionId"}}`, encodeURIComponent(String(transactionId)));
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
    }
};

/**
 * VendorDFSandboxtransactionstatusApi - functional programming interface
 * @export
 */
export const VendorDFSandboxtransactionstatusApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VendorDFSandboxtransactionstatusApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the status of the transaction indicated by the specified transactionId. If the transaction was successful, also returns the requested test order data.
         * @param {string} transactionId The transaction identifier returned in the response to the generateOrderScenarios operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOrderScenarios(transactionId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionStatus>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOrderScenarios(transactionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * VendorDFSandboxtransactionstatusApi - factory interface
 * @export
 */
export const VendorDFSandboxtransactionstatusApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VendorDFSandboxtransactionstatusApiFp(configuration)
    return {
        /**
         * Returns the status of the transaction indicated by the specified transactionId. If the transaction was successful, also returns the requested test order data.
         * @param {string} transactionId The transaction identifier returned in the response to the generateOrderScenarios operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOrderScenarios(transactionId: string, options?: any): AxiosPromise<TransactionStatus> {
            return localVarFp.getOrderScenarios(transactionId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getOrderScenarios operation in VendorDFSandboxtransactionstatusApi.
 * @export
 * @interface VendorDFSandboxtransactionstatusApiGetOrderScenariosRequest
 */
export interface VendorDFSandboxtransactionstatusApiGetOrderScenariosRequest {
    /**
     * The transaction identifier returned in the response to the generateOrderScenarios operation.
     * @type {string}
     * @memberof VendorDFSandboxtransactionstatusApiGetOrderScenarios
     */
    readonly transactionId: string
}

/**
 * VendorDFSandboxtransactionstatusApi - object-oriented interface
 * @export
 * @class VendorDFSandboxtransactionstatusApi
 * @extends {BaseAPI}
 */
export class VendorDFSandboxtransactionstatusApi extends BaseAPI {
    /**
     * Returns the status of the transaction indicated by the specified transactionId. If the transaction was successful, also returns the requested test order data.
     * @param {VendorDFSandboxtransactionstatusApiGetOrderScenariosRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorDFSandboxtransactionstatusApi
     */
    public getOrderScenarios(requestParameters: VendorDFSandboxtransactionstatusApiGetOrderScenariosRequest, options?: any) {
        return VendorDFSandboxtransactionstatusApiFp(this.configuration).getOrderScenarios(requestParameters.transactionId, options).then((request) => request(this.axios, this.basePath));
    }
}


