export const apiClientTemplate = `import { <%= importApiModelClassName %>, Configuration } from '../api-models/<%= dirname %>'
import { <%= importHelpers %> } from '../helpers'
import { DEFAULT_API_BASE_PATH } from '../types'
import { APIConfigurationParameters } from '../types/api-clients/api-configuration-parameters'

export class <%= apiClientClassName %> extends <%= apiModelClassName %> {
  constructor(parameters: APIConfigurationParameters) {
    const axios = ApiClientHelpers.getAxiosInstance(parameters)

    const configuration = new Configuration(parameters)

    super(configuration, DEFAULT_API_BASE_PATH, axios)
  }
}
<%= extendable %>
`
