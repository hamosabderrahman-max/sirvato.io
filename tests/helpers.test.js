/**
 * tests/helpers.test.js
 *
 * Unit tests for src/utils/helpers.js
 *
 * Run the full test suite with:
 *   npm test
 *
 * Run only these tests with:
 *   npx jest tests/helpers.test.js
 */

'use strict';

const { capitalize, clamp } = require('../src/utils/helpers');

// ── capitalize() ──────────────────────────────────────────────────────────────

describe('capitalize()', () => {
  test('capitalises the first letter and lowercases the rest', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('lowercases an all-uppercase string', () => {
    expect(capitalize('NODE.JS')).toBe('Node.js');
  });

  test('returns an empty string unchanged', () => {
    expect(capitalize('')).toBe('');
  });

  test('works with a single character', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('works when the first character is already uppercase', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  test('throws TypeError when the argument is not a string', () => {
    expect(() => capitalize(123)).toThrow(TypeError);
    expect(() => capitalize(null)).toThrow(TypeError);
    expect(() => capitalize([])).toThrow(TypeError);
  });
});

// ── clamp() ───────────────────────────────────────────────────────────────────

describe('clamp()', () => {
  test('returns the value unchanged when it is within range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  test('clamps to min when value is below the lower bound', () => {
    expect(clamp(-3, 0, 10)).toBe(0);
  });

  test('clamps to max when value is above the upper bound', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  test('returns min when value equals min', () => {
    expect(clamp(0, 0, 10)).toBe(0);
  });

  test('returns max when value equals max', () => {
    expect(clamp(10, 0, 10)).toBe(10);
  });

  test('works with negative bounds', () => {
    expect(clamp(-5, -10, -1)).toBe(-5);
    expect(clamp(-15, -10, -1)).toBe(-10);
    expect(clamp(0, -10, -1)).toBe(-1);
  });

  test('works with floating-point numbers', () => {
    expect(clamp(0.5, 0.0, 1.0)).toBeCloseTo(0.5);
    expect(clamp(1.5, 0.0, 1.0)).toBeCloseTo(1.0);
  });

  test('throws TypeError when a non-finite number is supplied', () => {
    expect(() => clamp(NaN, 0, 10)).toThrow(TypeError);
    expect(() => clamp(Infinity, 0, 10)).toThrow(TypeError);
    expect(() => clamp(5, '0', 10)).toThrow(TypeError);
  });

  test('throws RangeError when min exceeds max', () => {
    expect(() => clamp(5, 10, 0)).toThrow(RangeError);
  });
});
