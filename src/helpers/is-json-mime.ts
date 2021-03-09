export function isJsonMime(mime: string): boolean {
  /* eslint-disable-next-line no-control-regex */
  const jsonMime = new RegExp('^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i')
  return (
    mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json')
  )
}
