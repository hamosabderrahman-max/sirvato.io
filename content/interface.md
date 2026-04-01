<span class="domain-badge">Domain 04 — INTERFACE</span>

# INTERFACE

The boundary layer. INTERFACE is where SIRVATO meets the outside world.

---

## Role

INTERFACE governs everything that a user sees, reads, and interacts with. It is the contract between the system and the person.

It operates at two levels:

1. **Visual** — layout, color, typography, spacing
2. **Semantic** — what every element communicates

## Design System

SIRVATO's aesthetic is intentional and non-negotiable:

| Token | Value |
|-------|-------|
| Background | `#0a0a12` — deep void |
| Surface | `#111120` — elevated layer |
| Violet | `#7c3aed` — primary signal |
| Accent | `#a78bfa` — light violet |
| Text | `#e2e2f0` — near white |
| Muted | `#7070a0` — secondary text |

## Typography

- **Body** — Inter, system sans-serif
- **Headings** — Space Grotesk

## Interaction Rules

- No animation that distracts.
- Motion only serves orientation (fade in, subtle lift on hover).
- Every state (default, hover, active) is visually distinct.
- Mobile-first. Content reads on any screen.

## Interface Integrity

INTERFACE is only valid when:
- Every page loads `style.css` from the canonical location
- No inline styles override the design system
- No component breaks the visual rhythm

---

> A clean interface is not decoration. It is a signal that the system works.
