# sirvato.io

A modern **Node.js starter project** — clean architecture, documented modules, and unit tests out of the box.

---

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Running the project](#running-the-project)
5. [Running tests](#running-tests)
6. [Linting](#linting)
7. [Project structure](#project-structure)
8. [Modules overview](#modules-overview)
9. [Extending the project](#extending-the-project)
10. [License](#license)

---

## Features

- ✅ Clean directory structure (`src/`, `tests/`, `docs/`)
- ✅ Example module (`greet`) with full JSDoc documentation
- ✅ Reusable utility helpers (`capitalize`, `clamp`)
- ✅ Unit tests written with [Jest](https://jestjs.io/) (happy paths + edge cases)
- ✅ Code coverage report generated automatically with `npm test`
- ✅ ESLint 9 flat-config for consistent code style
- ✅ `.gitignore` tailored for Node.js projects
- ✅ Detailed contribution guide in [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md)

---

## Prerequisites

| Tool | Minimum version |
|------|----------------|
| [Node.js](https://nodejs.org/) | 18 or later |
| npm | 9 or later (bundled with Node.js) |

---

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/hamosabderrahman-max/sirvato.io.git
cd sirvato.io

# 2. Install dependencies
npm install
```

---

## Running the project

```bash
npm start
```

Expected output:

```
Hello, World!
Hello, sirvato.io!
Node.js starter
100
0
```

---

## Running tests

```bash
# Run all tests once and generate a coverage report
npm test

# Run tests in interactive watch mode (re-runs on file changes)
npm run test:watch
```

Coverage output is saved to the `coverage/` directory.  
Open `coverage/lcov-report/index.html` in a browser for a detailed breakdown.

---

## Linting

```bash
npm run lint
```

ESLint is configured with the recommended rule set plus a few project-specific rules.  
See [`eslint.config.js`](eslint.config.js) to adjust rules.

---

## Project structure

```
sirvato.io/
├── src/
│   ├── index.js          ← entry point — wires modules together
│   ├── modules/
│   │   └── greet.js      ← example: greeting module
│   └── utils/
│       └── helpers.js    ← example: capitalize, clamp
├── tests/
│   ├── greet.test.js     ← unit tests for the greet module
│   └── helpers.test.js   ← unit tests for helper utilities
├── docs/
│   └── CONTRIBUTING.md   ← guide for extending the project
├── .gitignore
├── eslint.config.js
├── package.json
└── README.md             ← you are here
```

---

## Modules overview

### `src/modules/greet.js`

| Export | Signature | Description |
|--------|-----------|-------------|
| `greet` | `(name?: string) → string` | Returns `"Hello, <name>!"`. Throws `TypeError` for non-string input and `RangeError` for an empty name. |

### `src/utils/helpers.js`

| Export | Signature | Description |
|--------|-----------|-------------|
| `capitalize` | `(str: string) → string` | Uppercases the first character, lowercases the rest. |
| `clamp` | `(value: number, min: number, max: number) → number` | Constrains a number between `min` and `max` (inclusive). |

---

## Extending the project

See **[`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md)** for:

- How to add a new module
- How to add utility helpers
- Testing conventions
- Coding style guide
- Ideas for future expansion (REST API, database, CLI, TypeScript, Docker, CI/CD)

---

## License

[MIT](LICENSE)