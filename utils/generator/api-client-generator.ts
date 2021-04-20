import log from 'fancy-log'
import { camelCase, template, TemplateExecutor, upperFirst } from 'lodash'
import { Project } from 'ts-morph'

import { APIModel } from '../github/github-api'
import { apiClientTemplate } from './api-client-template'
import { API_MODEL_FILE_NAME, TS_CONFIG_FILE_PATH } from './constants'

const generateAPIClientFileName = (apiModel: APIModel): string =>
  apiModel.modelName.replace('model', 'client')
const generateAPIClientClassname = (apiClientFileName: string): string =>
  upperFirst(camelCase(apiClientFileName))

function generateAPIClient(
  project: Project,
  executor: TemplateExecutor,
  apiModel: APIModel,
  apiClientFileName: string,
  apiClientClassName: string,
) {
  log.info(`Starting generating ${apiClientClassName} client`)

  // Find main class inside api.ts file of api models
  const sourceFile = project.getSourceFileOrThrow(`${apiModel.outputPath}/${API_MODEL_FILE_NAME}`)
  const apiClass = sourceFile.getClassOrThrow((c) => c.getNameOrThrow().includes('Api'))

  const compiledFile = executor({
    modelName: apiModel.modelName,
    apiModelClassName: apiClass.getNameOrThrow(),
    apiClientClassName,
  })

  project.createSourceFile(`src/api-clients/${apiClientFileName}.ts`, compiledFile, {
    overwrite: true,
  })

  log.info(`Finished generating ${apiClientClassName} client:
    - File name: ${apiClientFileName}.ts
    - Class name: ${apiClientClassName}
    - Model: ${apiModel.modelName}
  `)
}

function generateExportStatements(project: Project, apiModels: APIModel[]) {
  log.info(`Starting exporting api clients`)

  const compileExportStatement = template(`export * from './<%= apiClientFileName %>'`)
  const exportStatements = apiModels.map((apiModel) =>
    compileExportStatement({
      apiClientFileName: generateAPIClientFileName(apiModel),
    }),
  )
  project.createSourceFile('src/api-clients/index.ts', exportStatements.join('\n'), {
    overwrite: true,
  })
  log.info(`Finished exporting api clients`)
}

export function generateAPIClients(apiModels: APIModel[]): void {
  const compileAPIClient = template(apiClientTemplate)
  const project = new Project({
    tsConfigFilePath: TS_CONFIG_FILE_PATH,
  })
  for (const apiModel of apiModels) {
    const apiClientFileName = generateAPIClientFileName(apiModel)
    generateAPIClient(
      project,
      compileAPIClient,
      apiModel,
      apiClientFileName,
      generateAPIClientClassname(apiClientFileName),
    )
  }

  generateExportStatements(project, apiModels)
  project.saveSync()
}
