import { describe, it, expect } from '@jest/globals'

function add(a, b) {
  return a + b
}

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
})
