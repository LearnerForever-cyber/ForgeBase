# Auth Module

## Context

Authentication is the entry point for all user interactions. The Auth module handles identity resolution, role enforcement, and session validation.

## When to Use This

- **Read if:** You're implementing user authentication
- **Reference if:** You need to understand auth boundaries
- **Skip if:** You don't have user accounts yet

---

## Responsibilities

- Identity resolution
- Role enforcement
- Session validation

---

## Rules

- Auth is the **entry point**
- No auth = no data
- Roles are enforced at DB level

---

## Key Principle

Auth correctness is non-negotiable.

---

## Next Reads

1. [Guides: Security](../Guides/Security.md) — Understand security model
2. [Architecture: Security](../Architecture/Security.md) — See auth architecture
3. [Examples: Basic Backend](../Examples/Basic-Backend/README.md) — See implementation
