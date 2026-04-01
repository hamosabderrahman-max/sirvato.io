/**
 * eslint.config.js  (flat config — ESLint 9+)
 *
 * Enforces consistent, readable JavaScript across the project.
 * Run with:  npm run lint
 */

'use strict';

const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    files: ['src/**/*.js', 'tests/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        // Node.js globals
        require: 'readonly',
        module:  'readonly',
        exports: 'readonly',
        __dirname:  'readonly',
        __filename: 'readonly',
        console: 'readonly',
        process: 'readonly',
        // Jest globals
        describe: 'readonly',
        test:     'readonly',
        expect:   'readonly',
        beforeEach: 'readonly',
        afterEach:  'readonly',
        beforeAll:  'readonly',
        afterAll:   'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console':     'off',
      'eqeqeq':         ['error', 'always'],
      'curly':          ['error', 'all'],
    },
  },
];
