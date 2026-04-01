# Contributing to sirvato.io

Thank you for your interest in contributing!  
This document outlines how to extend the project and the conventions to follow.

---

## Table of Contents

1. [Project structure](#project-structure)
2. [Adding a new module](#adding-a-new-module)
3. [Adding utility helpers](#adding-utility-helpers)
4. [Writing tests](#writing-tests)
5. [Coding style](#coding-style)
6. [Future expansion ideas](#future-expansion-ideas)

---

## Project structure

```
sirvato.io/
├── src/
│   ├── index.js          ← entry point — wire modules together here
│   ├── modules/          ← domain-specific business logic
│   │   └── greet.js      ← example: greeting module
│   └── utils/            ← pure, reusable helper functions
│       └── helpers.js    ← example: capitalize, clamp
├── tests/
│   ├── greet.test.js     ← unit tests for the greet module
│   └── helpers.test.js   ← unit tests for helper utilities
├── docs/
│   └── CONTRIBUTING.md   ← this file
├── .gitignore
├── eslint.config.js
├── package.json
└── README.md
```

---

## Adding a new module

1. Create a new file under `src/modules/`, e.g. `src/modules/user.js`.
2. Export only what callers need (`module.exports = { ... }`).
3. Document every exported function with a JSDoc comment.
4. Write corresponding tests in `tests/user.test.js`.
5. Import and exercise the new module in `src/index.js` so it is visible at a glance.

```js
// src/modules/user.js
'use strict';

/**
 * Returns a formatted display name for a user.
 *
 * @param {Object} user
 * @param {string} user.firstName
 * @param {string} user.lastName
 * @returns {string}
 */
function displayName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

module.exports = { displayName };
```

---

## Adding utility helpers

Add pure, side-effect-free functions to `src/utils/helpers.js` (or create a new file such as `src/utils/strings.js` for a focused set of helpers).

Rules for helpers:
- Must be **pure** (same input → same output, no side effects).
- Must include **JSDoc** with `@param`, `@returns`, and at least one `@example`.
- Must **validate input** and throw descriptive errors for invalid arguments.

---

## Writing tests

- Tests live in `tests/` and follow the naming convention `<module>.test.js`.
- Use Jest's `describe` / `test` structure to group related assertions.
- Cover at minimum: happy paths, edge cases, and expected error cases.
- Run tests with `npm test`; coverage reports are written to `coverage/`.

---

## Coding style

- **`'use strict'`** at the top of every file.
- **CommonJS** (`require` / `module.exports`) throughout.
- Two-space indentation, single quotes, trailing newline.
- Run `npm run lint` before committing.

---

## Future expansion ideas

| Idea | Where to start |
|------|----------------|
| REST API | Add `express` dependency; create `src/server.js` |
| Database integration | Add a `src/db/` folder with a connection module |
| Configuration management | Add a `src/config.js` that reads from `process.env` |
| CLI interface | Add a `src/cli.js` with `process.argv` parsing |
| TypeScript migration | Rename files to `.ts`, add `tsconfig.json` and `@types/*` packages |
| CI/CD pipeline | Add `.github/workflows/ci.yml` to run tests on every push |
| Docker support | Add a `Dockerfile` and `docker-compose.yml` |
