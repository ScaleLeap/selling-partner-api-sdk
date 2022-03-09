import fs from 'fs'
import path from 'path'

import { generateAPIClients } from './generator/api-client-generator'
import { APIModel } from './generator/api-model'
import {
  executeCommand,
  generateExportStatement,
  generateModelForPreviewVersions,
  generateModelForStableVersion,
  writeStatementsToFile,
} from './generator/api-model-generator'
import { mapEnums2UnionType } from './generator/enum-mapping'

async function generateAllModelsInDirectory(
  rootPath: string,
  dirname: string,
): Promise<APIModel[]> {
  const MODEL_FILE_EXTENSIONS = new Set(['.json', '.yml', '.yaml'])
  /**
   * API model directory contains both preview and stable version.
   *
   * Docs: https://github.com/amzn/selling-partner-api-docs/issues/646#issuecomment-825232385
   */
  const [defaultVersion, ...previewVersions] = fs
    .readdirSync(path.resolve(rootPath, dirname))
    .filter((model) => MODEL_FILE_EXTENSIONS.has(path.extname(model).toLowerCase()))

  const previewVersionAPIModels = await generateModelForPreviewVersions(
    rootPath,
    dirname,
    previewVersions,
  )

  return [
    generateModelForStableVersion(rootPath, dirname, defaultVersion),
    ...previewVersionAPIModels,
  ]
}

// TODO: Figure out a solution to show commits history in PR description
async function generateModels(rootPath: string) {
  const modelPromieses: Promise<APIModel[]>[] = fs
    .readdirSync(rootPath)
    .flatMap(async (dirname) => generateAllModelsInDirectory(rootPath, dirname))

  const models: APIModel[] = (await Promise.all(modelPromieses)).flat()

  models.map(executeCommand)

  const statements: string[] = await Promise.all(models.map(generateExportStatement))
  writeStatementsToFile(statements)

  await Promise.all(mapEnums2UnionType())
  generateAPIClients(models)
}

generateModels(process.argv[2])
