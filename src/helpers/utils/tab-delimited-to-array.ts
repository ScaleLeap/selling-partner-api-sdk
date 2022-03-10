import { camelCase } from 'lodash'

export function tabDelimitedToArray(text: string): Record<string, unknown>[] {
  // Parse the tab-delimited response to an array of values
  const lines = text.split('\n')
  const headers = lines[0].split('\t').map((c) => camelCase(c))

  return lines.slice(1).map((l) => {
    const out = {}
    const values = l.split('\t')

    for (const [index, c] of values.entries()) {
      // Remove the return character from the last column
      out[headers[index]] = index === values.length - 1 ? c.replace('\r', '') : c
    }

    return out
  })
}
