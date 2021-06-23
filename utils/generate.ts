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

// TODO: Figure out a solution to show commits history in PR description
async function generateModels(rootPaths: string[]) {
  for (const rootPath of rootPaths) {
    const models: APIModel[] = []
    const dirnames = fs.readdirSync(rootPath)

    for (const dirname of dirnames) {
      /**
       * API model directory contains both preview and stable version.
       *
       * Docs: https://github.com/amzn/selling-partner-api-docs/issues/646#issuecomment-825232385
       */
      const [defaultVersion, ...previewVersions] = fs.readdirSync(path.resolve(rootPath, dirname))

      const stableVersionAPIModel = generateModelForStableVersion(rootPath, dirname, defaultVersion)
      // eslint-disable-next-line no-await-in-loop
      const previewVersionAPIModels = await generateModelForPreviewVersions(
        rootPath,
        dirname,
        previewVersions,
      )

      models.push(stableVersionAPIModel, ...previewVersionAPIModels)
    }

    models.map(executeCommand)

    // eslint-disable-next-line no-await-in-loop
    const statements: string[] = await Promise.all(models.map(generateExportStatement))
    writeStatementsToFile(statements)

    // eslint-disable-next-line no-await-in-loop
    await Promise.all(mapEnums2UnionType())
    generateAPIClients(models)
  }
}

generateModels(process.argv.slice(2))
