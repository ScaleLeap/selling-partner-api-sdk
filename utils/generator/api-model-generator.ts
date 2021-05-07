import SwaggerParser from '@apidevtools/swagger-parser'
import log from 'fancy-log'
import { camelCase, has, isEmpty, upperFirst } from 'lodash'

import { APIModel } from './api-model'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')

const REDUNDANTS: string[] = [
  '.gitignore',
  '.npmignore',
  '.openapi-generator-ignore',
  'git_push.sh',
  '.openapi-generator',
]
const EXCLUDE_EXPORTED_OBJECTS = new Set(['ErrorList', 'Error'])

export async function removeRedundantObjects(model: APIModel): Promise<APIModel> {
  /**
   * Clean up:
   *- .openapi-generator
   *- .gitignore
   *- .openapi-generator-ignore
   *- git_push.sh
   */
  log.info(`Starting cleaning up ${model.dirname}`)

  for (const object of REDUNDANTS) {
    fs.rmSync(`${model.outputPath}/${object}`, {
      maxRetries: 3,
      force: true,
      recursive: true,
    })
  }

  log.info(`Finished cleaning up ${model.dirname}`)
  return model
}

/**
 * Verify Data Models (Schemas) in OpenAPI definitions.
 * OpenAPI definitions have various data models. Such as: array, boolean, object.
 * We don't need to export all of them. Only export: concrete objects and enums.
 *
 * @param definitions Record<string, any>
 * @param key string
 * @returns boolean
 */
function verifyObjectDefinition(definitions: Record<string, any>, key: string): boolean {
  const definitionType = definitions[key].type

  return (
    (definitionType === 'object' &&
      !EXCLUDE_EXPORTED_OBJECTS.has(key) &&
      /**
       * The 'properties' keyword is used to define the object properties.
       * Docs: https://swagger.io/docs/specification/data-models/data-types/#ctxM:~:text=The%20properties%20keyword%20is%20used%20to%20define%20the%20object%20properties
       */
      has(definitions[key], 'properties') &&
      /**
       * 'additionalProperties' is used to define a free form object.
       * Docs: https://swagger.io/docs/specification/data-models/dictionaries/#free-form:~:text=Free%2DForm%20Objects
       */

      isEmpty(definitions[key].additionalProperties)) ||
    /**
     * Use to combine schemas
     * Docs: https://swagger.io/docs/specification/data-models/oneof-anyof-allof-not/
     */
    has(definitions[key], 'oneOf') ||
    has(definitions[key], 'allOf') ||
    has(definitions[key], 'oneOf') ||
    /**
     *
     */
    (definitionType === 'string' && has(definitions[key], 'enum'))
  )
}

export async function generateExportStatement(model: APIModel): Promise<string> {
  return SwaggerParser.parse(model.modelPath).then(({ definitions }) => {
    const exportings: string[] = []

    for (const key in definitions) {
      if (has(definitions, key) && verifyObjectDefinition(definitions, key)) {
        exportings.push(`${key} as ${upperFirst(camelCase(model.dirname))}${key}`)
      }
    }

    return `export { ${exportings.join(', ')} } from './${model.dirname}'`
  })
}

export function writeStatementsToFile(statements: string[]): void {
  const filePath = 'src/api-models/index.ts'
  log.info(`Starting writing statements into ${filePath}`)
  fs.writeFileSync(filePath, statements.join('\n'))
  log.info(`Finish writing statements into ${filePath}`)
}
