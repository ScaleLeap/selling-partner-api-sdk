import { execSync } from 'child_process'
import log from 'fancy-log'
import fs from 'fs'
import path from 'path'

import { generateAPIClients } from './generator/api-client-generator'
import { APIModel } from './generator/api-model'
import {
  generateExportStatement,
  removeRedundantObjects,
  writeStatementsToFile,
} from './generator/api-model-generator'
import { mapEnums2UnionType } from './generator/enum-mapping'

// TODO: Figure out a solution to show commits history in PR description
async function generateModels(rootPaths: string[]) {
  for (const rootPath of rootPaths) {
    const models: APIModel[] = fs.readdirSync(rootPath).map((dirname) => {
      /**
       * API model directory contains both preview and stable version.
       * Therefore, keep only available API version.
       *
       * Docs: https://github.com/amzn/selling-partner-api-docs/issues/646#issuecomment-825232385
       */
      const [modelBaseName] = fs.readdirSync(path.resolve(rootPath, dirname))
      const modelPath = path.resolve(rootPath, dirname, modelBaseName)
      const outputPath = `src/api-models/${dirname}`
      const command = `openapi-generator-cli generate -g typescript-axios --additional-properties=supportsES6=true,useSingleRequestParameter=true --type-mappings=set=Array --skip-validate-spec -o ${outputPath} -i ${modelPath}`
      const model = {
        modelPath,
        dirname,
        outputPath,
      }

      log.info(`Starting generating ${dirname}`)
      // TODO: throw an error when command occurs error
      execSync(command)
      log.info(`Finished generating ${dirname}`)

      removeRedundantObjects(model)

      return model
    })

    // eslint-disable-next-line no-await-in-loop
    const statements: string[] = await Promise.all(models.map(generateExportStatement))
    writeStatementsToFile(statements)

    // eslint-disable-next-line no-await-in-loop
    await Promise.all(mapEnums2UnionType())
    generateAPIClients(models)
  }
}

generateModels(process.argv.slice(2))
