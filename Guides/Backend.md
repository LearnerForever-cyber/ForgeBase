# Backend Patterns

## Context

This guide explains the fundamental backend patterns that Forgebase recommends. These patterns address APIs, databases, authentication, and realtime features.

## When to Use This

- **Read if:** You're designing a new backend or refactoring an existing one
- **Reference if:** You're deciding between implementation options
- **Skip if:** You need implementation details (see Examples or Modules)

---

## APIs

- REST-first
- Predictable routes
- Clear request/response contracts
- No hidden magic

---

## Database

- Schema-first thinking
- Explicit relationships
- Minimal tables early
- Avoid premature optimization

---

## Authentication

- Identity before permissions
- Auth is a boundary, not a feature
- Least-privilege access

---

## Realtime

- Event-driven, not chatty
- Subscriptions scoped to user context
- Realtime is optional, not mandatory

---

## Next Reads

1. [Guides: Architecture](Architecture.md) — Understand the layered system design
2. [Guides: Security](Security.md) — Learn how to secure these patterns
3. [Examples: Basic Backend](../Examples/Basic-Backend/README.md) — See working implementations
