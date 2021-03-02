import { FOO } from '../test/constants'
import { helloWorld } from '.'

describe('should pass', () => {
  it('should pass', () => {
    expect.assertions(2)

    expect(helloWorld()).toBe('hello world')
    expect(FOO).toBe(true)
  })
})
