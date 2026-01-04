# Security Model

Forgebase assumes security is **non-negotiable**, even for early projects.

---

## Core Rules

- Never trust the client
- Auth before access
- Explicit permission checks
- Fail closed, not open

---

## Auth Boundaries

- User identity is the root
- Permissions derive from identity
- Data access is scoped

---

## Real-World Validation

These principles are actively used and tested inside **EduBro**.
