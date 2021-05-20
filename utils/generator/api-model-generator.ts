import log from 'fancy-log'
import { camelCase, upperFirst } from 'lodash'
import { Project } from 'ts-morph'

import { APIModel } from './api-model'
import { API_MODEL_FILE_NAME, TS_CONFIG_FILE_PATH, TS_LIB_FOLDER_PATH } from './constants'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')

const REDUNDANTS: string[] = [
  '.gitignore',
  '.npmignore',
  '.openapi-generator-ignore',
  'git_push.sh',
  '.openapi-generator',
]

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

export async function generateExportStatement(model: APIModel): Promise<string> {
  // Export all enums and interfaces
  const sourceFile = new Project({
    tsConfigFilePath: TS_CONFIG_FILE_PATH,
    libFolderPath: TS_LIB_FOLDER_PATH,
  }).getSourceFileOrThrow(`${model.outputPath}/${API_MODEL_FILE_NAME}`)

  const exportings = [...sourceFile.getEnums(), ...sourceFile.getInterfaces()]
    .map(
      (declaration) =>
        `${declaration.getName()} as ${upperFirst(
          camelCase(model.dirname),
        )}${declaration.getName()}`,
    )
    .join(', ')

  return `export { ${exportings} } from './${model.dirname}'`
}

export function writeStatementsToFile(statements: string[]): void {
  const filePath = 'src/api-models/index.ts'
  log.info(`Starting writing statements into ${filePath}`)
  fs.writeFileSync(filePath, statements.join('\n'))
  log.info(`Finish writing statements into ${filePath}`)
}
