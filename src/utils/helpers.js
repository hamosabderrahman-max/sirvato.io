/**
 * src/utils/helpers.js
 *
 * General-purpose utility helpers.
 *
 * Keeping pure utility functions in a dedicated file makes them easy to
 * import, test, and reuse across the entire project.
 *
 * Usage:
 *   const { capitalize, clamp } = require('./utils/helpers');
 */

'use strict';

/**
 * Capitalises the first character of a string and lower-cases the rest.
 *
 * @param {string} str - The string to capitalise.
 * @returns {string} The capitalised string.
 * @throws {TypeError} When `str` is not a string.
 *
 * @example
 * capitalize('hello world');   // 'Hello world'
 * capitalize('NODE.JS');       // 'Node.js'
 */
function capitalize(str) {
  if (typeof str !== 'string') {
    throw new TypeError(`capitalize() expects a string, received ${typeof str}`);
  }

  if (str.length === 0) { return str; }

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Clamps a numeric value between an inclusive minimum and maximum.
 *
 * @param {number} value - The value to clamp.
 * @param {number} min   - The lower bound (inclusive).
 * @param {number} max   - The upper bound (inclusive).
 * @returns {number} The clamped value.
 * @throws {TypeError}  When any argument is not a finite number.
 * @throws {RangeError} When `min` is greater than `max`.
 *
 * @example
 * clamp(5, 0, 10);   //  5  (within range, unchanged)
 * clamp(-3, 0, 10);  //  0  (below min, clamped to min)
 * clamp(15, 0, 10);  // 10  (above max, clamped to max)
 */
function clamp(value, min, max) {
  if (
    typeof value !== 'number' || !isFinite(value) ||
    typeof min   !== 'number' || !isFinite(min)   ||
    typeof max   !== 'number' || !isFinite(max)
  ) {
    throw new TypeError('clamp() requires three finite numbers');
  }

  if (min > max) {
    throw new RangeError(`clamp() min (${min}) must not exceed max (${max})`);
  }

  return Math.min(Math.max(value, min), max);
}

module.exports = { capitalize, clamp };
