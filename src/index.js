/**
 * src/index.js
 *
 * Application entry point.
 *
 * This file wires together the project's modules and demonstrates their usage.
 * Run it with:
 *   npm start
 *
 * For future expansion see docs/CONTRIBUTING.md.
 */

'use strict';

const { greet } = require('./modules/greet');
const { capitalize, clamp } = require('./utils/helpers');

// ── Demo: greeting module ─────────────────────────────────────────────────────
console.log(greet('World'));          // Hello, World!
console.log(greet('sirvato.io'));     // Hello, sirvato.io!

// ── Demo: utility helpers ─────────────────────────────────────────────────────
console.log(capitalize('node.js starter'));   // Node.js starter
console.log(clamp(150, 0, 100));              // 100  (value clamped to max)
console.log(clamp(-5, 0, 100));               // 0    (value clamped to min)
