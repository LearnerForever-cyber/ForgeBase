# Core Contracts

## Context

Forgebase is built on contracts, not abstractions. This document defines the minimum capabilities every Forgebase backend must support.

## When to Use This

- **Read if:** You're implementing a Forgebase backend
- **Reference if:** You need to verify your implementation meets core requirements
- **Skip if:** You're just learning Forgebase concepts

## Required Backend Capabilities

Every Forgebase backend MUST support:

1. **Auth Identity**
   - Stable user ID
   - Role-based access
2. **Data Ownership**
   - Every row has an owner
3. **Realtime Events**
   - Insert / update / delete streams
4. **Offline Safety**
   - Deterministic conflict resolution
5. **Auditability**
   - Traceable changes

These contracts are validated through EduBro.

---

## Next Reads

1. [Modules: Auth](../Modules/Auth.md) — See Auth Identity implementation
2. [Guides: Architecture](../Guides/Architecture.md) — Understand where contracts are enforced
3. [Examples: Basic Backend](../Examples/Basic-Backend/README.md) — See contracts in action
