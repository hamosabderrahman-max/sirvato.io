/**
 * tests/greet.test.js
 *
 * Unit tests for src/modules/greet.js
 *
 * Run the full test suite with:
 *   npm test
 *
 * Run only these tests with:
 *   npx jest tests/greet.test.js
 */

'use strict';

const { greet } = require('../src/modules/greet');

describe('greet()', () => {
  // ── Happy-path tests ────────────────────────────────────────────────────────

  test('returns a greeting for a given name', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });

  test('uses "World" as the default name', () => {
    expect(greet()).toBe('Hello, World!');
  });

  test('trims leading and trailing whitespace from the name', () => {
    expect(greet('  Bob  ')).toBe('Hello, Bob!');
  });

  test('handles single-character names', () => {
    expect(greet('X')).toBe('Hello, X!');
  });

  // ── Edge-case / error tests ─────────────────────────────────────────────────

  test('throws TypeError when name is not a string', () => {
    expect(() => greet(42)).toThrow(TypeError);
    expect(() => greet(null)).toThrow(TypeError);
    expect(() => greet({})).toThrow(TypeError);
  });

  test('throws RangeError when name is an empty string', () => {
    expect(() => greet('')).toThrow(RangeError);
  });

  test('throws RangeError when name is whitespace only', () => {
    expect(() => greet('   ')).toThrow(RangeError);
  });
});
