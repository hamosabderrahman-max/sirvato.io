'use strict';

/**
 * Entry point for the Sirvato.io server.
 * Starts the Express application on the configured port.
 *
 * Usage:
 *   node src/index.js          # production
 *   npm run dev                # development (auto-reload via nodemon)
 */

const app = require('./app');

/** Port the server listens on. Falls back to 3000 when PORT is not set. */
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Sirvato.io is running at http://localhost:${PORT}`);
});

module.exports = server;
