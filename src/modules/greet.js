/**
 * src/modules/greet.js
 *
 * Example module — greeting functionality.
 *
 * This module is intentionally simple so it can serve as a template for
 * adding real business logic.  Replace or extend it as your project grows.
 *
 * Usage:
 *   const { greet } = require('./modules/greet');
 *   greet('Alice');  // → 'Hello, Alice!'
 */

'use strict';

/**
 * Returns a personalised greeting string.
 *
 * @param {string} name - The name to greet.  Defaults to 'World'.
 * @returns {string} A greeting message.
 * @throws {TypeError} When `name` is not a string.
 *
 * @example
 * greet();          // 'Hello, World!'
 * greet('Alice');   // 'Hello, Alice!'
 */
function greet(name = 'World') {
  if (typeof name !== 'string') {
    throw new TypeError(`greet() expects a string, received ${typeof name}`);
  }

  const trimmed = name.trim();

  if (trimmed.length === 0) {
    throw new RangeError('greet() requires a non-empty name');
  }

  return `Hello, ${trimmed}!`;
}

module.exports = { greet };
