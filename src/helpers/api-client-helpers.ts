import { aws4Interceptor } from 'aws4-axios'
import globalAxios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

import { USER_AGENT } from '../constants'
import {
  APIConfigurationParameters,
  DEFAULT_API_BASE_PATH,
  SellingPartnerMismatchRegionError,
  SellingPartnerNotFoundRegionError,
} from '../types'
import { apiErrorFactory } from './api-error-factory'

const regions = new Map<string, string[]>(
  Object.entries({
    'us-east-1': [
      'https://sellingpartnerapi-na.amazon.com',
      'https://sandbox.sellingpartnerapi-na.amazon.com',
    ],
    'eu-west-1': [
      'https://sellingpartnerapi-eu.amazon.com',
      'https://sandbox.sellingpartnerapi-eu.amazon.com',
    ],
    'us-west-2': [
      'https://sellingpartnerapi-fe.amazon.com',
      'https://sandbox.sellingpartnerapi-fe.amazon.com',
    ],
  }),
)
export const ApiClientHelpers = {
  getAxiosInstance(parameters: APIConfigurationParameters): AxiosInstance {
    let axiosInstance: AxiosInstance
    const { axios } = parameters

    if (axios) {
      axiosInstance = axios
    } else {
      const { accessToken, credentials, region, roleArn } =
        ApiClientHelpers.validateRegion(parameters)

      axiosInstance = globalAxios.create({
        headers: {
          'user-agent': USER_AGENT,
          'x-amz-access-token': accessToken ?? '',
        },
      })

      axiosInstance.interceptors.request.use(
        aws4Interceptor(
          {
            region,
            service: 'execute-api',
            assumeRoleArn: roleArn,
          },
          credentials,
        ),
      )
    }

    axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        throw apiErrorFactory(error)
      },
    )

    return axiosInstance
  },

  extractRegion(basePath: string): string {
    for (const [region, basePaths] of regions) {
      if (basePaths.includes(basePath)) {
        return region
      }
    }

    throw new SellingPartnerNotFoundRegionError(basePath)
  },

  validateRegion(parameters: APIConfigurationParameters): APIConfigurationParameters {
    if (parameters.basePath && !parameters.region) {
      return {
        ...parameters,
        region: ApiClientHelpers.extractRegion(parameters.basePath),
      }
    }
    if (!parameters.basePath && !parameters.region) {
      return {
        ...parameters,
        region: ApiClientHelpers.extractRegion(DEFAULT_API_BASE_PATH),
      }
    }
    if (!parameters.basePath && parameters.region) {
      const defaultRegion = ApiClientHelpers.extractRegion(DEFAULT_API_BASE_PATH)
      if (defaultRegion !== parameters.region) {
        throw new SellingPartnerMismatchRegionError(defaultRegion, parameters.region)
      }
    }

    return parameters
  },
}
