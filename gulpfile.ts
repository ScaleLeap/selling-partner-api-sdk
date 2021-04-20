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
import { APIModel, fetchContentsByPath, hasNewCommits } from './utils/github/github-api'

async function generateModels() {
  if (await hasNewCommits()) {
    const githubDirectories = await fetchContentsByPath()
    const githubFilePromises = githubDirectories.map((directory) =>
      fetchContentsByPath(directory.path)
        // Only keep latest version
        .then((files) => files[files.length - 1]),
    )

    const githubFiles = await Promise.all(githubFilePromises)

    const apiModelGeneratorPromises = githubFiles.map(generateAPIModel).map(executeGeneratorCLI)

    const apiModels = await Promise.all<APIModel>(apiModelGeneratorPromises)
    await Promise.all(apiModels.map(removeRedundantObjects))
    const statements: string[] = await Promise.all(apiModels.map(generateExportStatement))
    writeStatementsToFile(statements)
    await Promise.all(mapEnums2UnionType())
    generateAPIClients(apiModels)
  }
}

task(generateModels)
