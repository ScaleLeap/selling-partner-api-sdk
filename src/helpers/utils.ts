export function sleep(secs: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, secs * 1000)
  })
}
