import log from 'fancy-log'
import { EnumMember, Project, SourceFile, ts, TypeElementTypes } from 'ts-morph'

import { API_MODEL_FILE_NAME, TS_CONFIG_FILE_PATH } from './constants'

function getEnumValues(enumMembers: EnumMember[]): (string | number | undefined)[] {
  return enumMembers
    .map((member) => member.getValue())
    .map((memberValue) => {
      if (typeof memberValue === 'string') {
        return `'${memberValue}'`
      }

      return memberValue
    })
}

function processEnumNodes(sourceFile: SourceFile, nodes: TypeElementTypes[]): void {
  for (const node of nodes) {
    // TODO: implement for a node has union and intersection of enum type. Such as: Enum1 | Enum2, Enum1 & Enum2.
    const typeReference = node.getFirstChildByKind(ts.SyntaxKind.TypeReference)
    const enumNode = typeReference && sourceFile.getEnum(typeReference.getText())
    const enumMembers = enumNode && enumNode.getMembers()

    if (typeReference && enumMembers) {
      const filePath = `${sourceFile.getDirectory().getBaseName()}/${sourceFile.getBaseName()}`
      const typeName = typeReference.getText()
      log.info(`Starting mapping ${typeName} in ${filePath}`)

      // TODO: remove duplicate elements if a node has union and intersection of enum type.
      typeReference.replaceWithText([typeName, ...getEnumValues(enumMembers)].join(' | '))

      log.info(`Finished mapping ${typeName} in ${filePath}`)
    }
  }
}

function processArrayNodes(sourceFile: SourceFile, nodes: TypeElementTypes[]): void {
  for (const node of nodes) {
    /**
     * Check both Array<T> and T[] syntax.
     *
     * Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
     * TODO: implement for a node has union and intersection of enum type. Such as: Enum1 | Enum2, Enum1 & Enum2.
     */
    const child =
      node.getFirstChildByKind(ts.SyntaxKind.TypeReference) ||
      node.getFirstChildByKind(ts.SyntaxKind.ArrayType)
    const typeReference = child?.getFirstChildByKind(ts.SyntaxKind.TypeReference)
    const enumMembers = typeReference && sourceFile.getEnum(typeReference.getText())?.getMembers()

    if (child && typeReference && enumMembers) {
      const filePath = `${sourceFile.getDirectory().getBaseName()}/${sourceFile.getBaseName()}`
      const typeName = child.getText()
      log.info(`Starting mapping ${typeName} in ${filePath}`)

      /**
       * Wrap inside a block for all array syntax.
       * TODO: remove duplicate elements if a node has union and intersection of enum type.
       */
      typeReference.replaceWithText(
        `(${[typeReference.getText(), ...getEnumValues(enumMembers)].join(' | ')})`,
      )

      log.info(`Finished mapping ${typeName} in ${filePath}`)
    }
  }
}

export function mapEnums2UnionType(): Promise<void>[] {
  const project = new Project({
    tsConfigFilePath: TS_CONFIG_FILE_PATH,
  })

  return project.getSourceFiles(`src/api-models/**/${API_MODEL_FILE_NAME}`).map((sourceFile) => {
    const filePath = `${sourceFile.getDirectory().getBaseName()}/${sourceFile.getBaseName()}`
    log.info(`Starting mapping ${filePath}`)

    const interfaceMembers: TypeElementTypes[] = sourceFile
      .getInterfaces()
      ?.map((itf) => itf.getMembers())
      .flat()
    const enumsOrUnion = interfaceMembers?.filter((member) => {
      const memberType = member.getType()
      // TODO: filter both union and intersection type.
      return memberType.isUnion() || memberType.isEnum() || memberType.isEnumLiteral()
    })
    const arrayOrUnion = interfaceMembers?.filter((member) => {
      const memberType = member.getType()
      // TODO: filter both union and intersection type.
      return memberType.isUnion() || memberType.isArray()
    })

    if (enumsOrUnion) {
      processEnumNodes(sourceFile, enumsOrUnion)
    }

    if (arrayOrUnion) {
      processArrayNodes(sourceFile, arrayOrUnion)
    }

    log.info(`Finished mapping ${filePath}`)
    return project.save()
  })
}
