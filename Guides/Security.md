# Security Model

## Context

Forgebase assumes security is non-negotiable, even for early projects. This guide explains the core security model and principles.

## When to Use This

- **Read if:** You're building a backend and need to understand security requirements
- **Reference if:** You're making decisions about authentication or authorization
- **Skip if:** You need to implement specific security features (see Modules: Auth)

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

---

## Next Reads

1. [Guides: Architecture](Architecture.md) — See where security fits in the system design
2. [Modules: Auth](../Modules/Auth.md) — Learn authentication module details
3. [Architecture: Security](../Architecture/Security.md) — Understand security architecture
