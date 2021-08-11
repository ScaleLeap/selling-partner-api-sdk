// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export function applyMixins(derivedCtor: any, baseCtors: any[]): void {
  for (const baseCtor of baseCtors) {
    for (const name of Object.getOwnPropertyNames(baseCtor.prototype)) {
      const baseCtorName = Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
      if (baseCtorName) {
        Object.defineProperty(derivedCtor.prototype, name, baseCtorName)
      }
    }
  }
}
