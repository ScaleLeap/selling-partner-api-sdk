import { task } from 'gulp'

import { generateAPIClients } from './utils/generator/api-client-generator'
import {
  executeGeneratorCLI,
  generateAPIModel,
  generateExportStatement,
  removeRedundantObjects,
  writeStatementsToFile,
} from './utils/generator/api-model-generator'
import { mapEnums2UnionType } from './utils/generator/enum-mapping'
import { fetchContentsByPath, hasNewCommits } from './utils/github/github-api'

async function generateModels() {
  if (await hasNewCommits()) {
    const githubDirectories = await fetchContentsByPath()
    const githubFilePromises = githubDirectories.map((directory) =>
      fetchContentsByPath(directory.path)
        /**
         * API model directory contains both preview and stable version.
         * Therefore, keep only available API version.
         *
         * Docs: https://github.com/amzn/selling-partner-api-docs/issues/646#issuecomment-825232385
         */
        .then((files) => files[0]),
    )

    const githubFiles = await Promise.all(githubFilePromises)

    const apiModels = githubFiles.map(generateAPIModel)

    for (const model of apiModels) {
      /**
       * TODO: Change to asynchronization.
       * Asynchronization might occur race condition?
       * Ref: https://github.com/ScaleLeap/selling-partner-api-sdk/pull/90#issuecomment-831170391
       */
      // eslint-disable-next-line no-await-in-loop
      await executeGeneratorCLI(model)
    }
    await Promise.all(apiModels.map(removeRedundantObjects))
    const statements: string[] = await Promise.all(apiModels.map(generateExportStatement))
    writeStatementsToFile(statements)
    await Promise.all(mapEnums2UnionType())
    generateAPIClients(apiModels)
  }
}

task(generateModels)
