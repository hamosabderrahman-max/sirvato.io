'use strict';

const { greet, farewell } = require('../src/modules/greeting');

describe('greeting module', () => {
  describe('greet()', () => {
    it('returns a personalised greeting', () => {
      expect(greet('Alice')).toBe('Hello, Alice! Welcome to Sirvato.io.');
    });

    it('trims surrounding whitespace from the name', () => {
      expect(greet('  Bob  ')).toBe('Hello, Bob! Welcome to Sirvato.io.');
    });

    it('throws TypeError when name is an empty string', () => {
      expect(() => greet('')).toThrow(TypeError);
      expect(() => greet('   ')).toThrow(TypeError);
    });

    it('throws TypeError when name is not a string', () => {
      expect(() => greet(42)).toThrow(TypeError);
      expect(() => greet(null)).toThrow(TypeError);
      expect(() => greet(undefined)).toThrow(TypeError);
    });
  });

  describe('farewell()', () => {
    it('returns a farewell message', () => {
      expect(farewell('Carol')).toBe('Goodbye, Carol! See you soon.');
    });

    it('trims surrounding whitespace from the name', () => {
      expect(farewell('  Dave  ')).toBe('Goodbye, Dave! See you soon.');
    });

    it('throws TypeError when name is an empty string', () => {
      expect(() => farewell('')).toThrow(TypeError);
    });

    it('throws TypeError when name is not a string', () => {
      expect(() => farewell(99)).toThrow(TypeError);
    });
  });
});
