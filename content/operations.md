<span class="domain-badge">Domain 03 — OPERATIONS</span>

# OPERATIONS

Execution layer. OPERATIONS defines how SIRVATO acts, not what it thinks.

---

## Purpose

Every system must execute. OPERATIONS is the domain that turns principle into action.

It governs:
- How content is built
- How the site is generated
- How changes propagate
- How output is validated

## Build Protocol

1. Read `sirvato.config.json`
2. For each page entry, locate the Markdown source
3. Convert Markdown to clean HTML
4. Inject into `template.html` — replacing title and content placeholders
5. Write to `/site/{output}`
6. Validate links, structure, and coherence

## Rebuild Triggers

The site rebuilds automatically when any of the following change:

- A Markdown file in `/content/`
- `sirvato.config.json`
- `template.html`
- `style.css`

## Output Standards

| Standard | Requirement |
|----------|-------------|
| Determinism | Same input always produces same output |
| Cleanliness | No broken tags, no orphaned attributes |
| Consistency | All pages use the same template and stylesheet |
| Deployment | Output is immediately deployable via GitHub Pages |

## Operational Rules

- No external frameworks.
- No build-time dependencies beyond Node.js core.
- No silent failures. Errors are reported explicitly.

---

> OPERATIONS makes SIRVATO real. Without it, everything else is theory.
