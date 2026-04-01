'use strict';

/**
 * Greeting module – provides simple greeting utilities.
 *
 * @module greeting
 */

/**
 * Returns a personalised greeting message.
 *
 * @param {string} name - The name of the person to greet.
 * @returns {string} A greeting string.
 * @throws {TypeError} If `name` is not a non-empty string.
 *
 * @example
 * greet('Alice'); // => 'Hello, Alice! Welcome to Sirvato.io.'
 */
function greet(name) {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new TypeError('name must be a non-empty string');
  }
  return `Hello, ${name.trim()}! Welcome to Sirvato.io.`;
}

/**
 * Returns a farewell message.
 *
 * @param {string} name - The name of the person to bid farewell.
 * @returns {string} A farewell string.
 * @throws {TypeError} If `name` is not a non-empty string.
 *
 * @example
 * farewell('Bob'); // => 'Goodbye, Bob! See you soon.'
 */
function farewell(name) {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new TypeError('name must be a non-empty string');
  }
  return `Goodbye, ${name.trim()}! See you soon.`;
}

module.exports = { greet, farewell };
