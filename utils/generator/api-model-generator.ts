import { execSync } from 'child_process'
import log from 'fancy-log'
import fs from 'fs'
import { camelCase, upperFirst } from 'lodash'
import path from 'path'
import { Project } from 'ts-morph'

import { APIModel } from './api-model'
import { API_MODEL_FILE_NAME, TS_CONFIG_FILE_PATH, TS_LIB_FOLDER_PATH } from './constants'
import { Parser } from './parser'

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

  const exports = [...sourceFile.getEnums(), ...sourceFile.getInterfaces()]
    .map(
      (declaration) =>
        `${declaration.getName()} as ${upperFirst(
          camelCase(model.dirname),
        )}${declaration.getName()}`,
    )
    .join(', ')

  return `export { ${exports} } from './${model.dirname}'`
}

export function writeStatementsToFile(statements: string[]): void {
  const filePath = 'src/api-models/index.ts'
  log.info(`Starting writing statements into ${filePath}`)
  fs.writeFileSync(filePath, statements.join('\n'))
  log.info(`Finish writing statements into ${filePath}`)
}

export function executeCommand(model: APIModel): APIModel {
  const command = `openapi-generator-cli generate -g typescript-axios --additional-properties=supportsES6=true,useSingleRequestParameter=true --type-mappings=set=Array --skip-validate-spec -o ${model.outputPath} -i ${model.modelPath}`
  log.info(`Starting generating ${model.dirname}`)
  // TODO: throw an error when command occurs error
  execSync(command)
  log.info(`Finished generating ${model.dirname}`)

  removeRedundantObjects(model)
  return model
}

export async function generateModelForPreviewVersions(
  rootPath: string,
  dirname: string,
  baseNames: string[],
): Promise<APIModel[]> {
  return Promise.all(
    baseNames.map(async (baseName) => {
      const modelPath = path.resolve(rootPath, dirname, baseName)
      const parser = new Parser(modelPath)
      const version = await parser.version
      const outputDirname = `${dirname}-v${version.replace(/-/g, '')}`
      const outputPath = `src/api-models/${outputDirname}`

      return {
        modelPath,
        dirname: outputDirname,
        outputPath,
      }
    }),
  )
}

export function generateModelForStableVersion(
  rootPath: string,
  dirname: string,
  baseName: string,
): APIModel {
  const modelPath = path.resolve(rootPath, dirname, baseName)
  const outputPath = `src/api-models/${dirname}`

  return {
    modelPath,
    dirname,
    outputPath,
  }
}
