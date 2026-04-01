# sirvato.io

A modern, clean Node.js + Express starter project — ready to extend with new features.

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Running Tests](#running-tests)
- [Linting & Formatting](#linting--formatting)
- [Contributing](#contributing)

---

## Overview

**Sirvato.io** is a minimal but production-ready Express web-server starter.  
It ships with:

- A clean folder structure separating application code from tests.
- An example **greeting module** demonstrating how to organise reusable business logic.
- A full unit + integration test suite powered by **Jest** and **Supertest**.
- **ESLint** (code quality) and **Prettier** (formatting) already configured.
- **Nodemon** for a smooth development experience with live-reload.

---

## Project Structure

```
sirvato.io/
├── src/
│   ├── index.js          # Server entry point – starts Express
│   ├── app.js            # Express application (routes & middleware)
│   └── modules/
│       └── greeting.js   # Example module with greeting utilities
├── tests/
│   ├── app.test.js       # Integration tests for HTTP routes
│   └── greeting.test.js  # Unit tests for the greeting module
├── .eslintrc.json        # ESLint configuration
├── .gitignore
├── .prettierrc           # Prettier configuration
├── package.json
└── README.md
```

---

## Installation

**Prerequisites:** Node.js ≥ 18 and npm ≥ 9.

```bash
# 1. Clone the repository
git clone https://github.com/hamosabderrahman-max/sirvato.io.git
cd sirvato.io

# 2. Install dependencies
npm install
```

---

## Running the Project

### Development (auto-reload)

```bash
npm run dev
```

The server will start at <http://localhost:3000> and restart automatically on file changes.

### Production

```bash
npm start
```

### Available endpoints

| Method | Path           | Description                      |
|--------|----------------|----------------------------------|
| GET    | `/`            | Health check / welcome message   |
| GET    | `/greet/:name` | Returns a greeting for `:name`   |

You can override the default port by setting the `PORT` environment variable:

```bash
PORT=8080 npm start
```

---

## Running Tests

```bash
npm test
```

Jest will run all test files in the `tests/` directory and print a coverage report.

---

## Linting & Formatting

```bash
# Check for lint errors
npm run lint

# Auto-fix lint errors where possible
npm run lint:fix

# Format all source and test files with Prettier
npm run format
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository and create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. **Make your changes** – keep commits small and focused.
3. **Add or update tests** for any new or changed behaviour.
4. **Run the full quality suite** before opening a PR:
   ```bash
   npm run lint && npm test
   ```
5. **Open a Pull Request** describing what changed and why.

Please follow the existing code style (ESLint + Prettier rules are enforced) and write clear commit messages.
