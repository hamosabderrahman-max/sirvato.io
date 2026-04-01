'use strict';

/**
 * Express application setup.
 * Registers middleware and routes, then exports the configured app
 * so that it can be imported by the server entry point and by tests.
 *
 * @module app
 */

const express = require('express');
const { greet } = require('./modules/greeting');

const app = express();

// ── Middleware ──────────────────────────────────────────────────────────────

/** Parse incoming JSON request bodies. */
app.use(express.json());

// ── Routes ──────────────────────────────────────────────────────────────────

/**
 * GET /
 * Health-check / welcome endpoint.
 *
 * @returns {{ message: string }} A welcome JSON object.
 */
app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to Sirvato.io!' });
});

/**
 * GET /greet/:name
 * Returns a personalised greeting for the given name.
 *
 * @param {string} req.params.name - The name to greet.
 * @returns {{ greeting: string }} The greeting JSON object.
 */
app.get('/greet/:name', (req, res) => {
  try {
    const greeting = greet(req.params.name);
    res.json({ greeting });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = app;
