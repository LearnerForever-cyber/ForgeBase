# Architecture Overview

## Context

This guide explains how Forgebase promotes a layered, responsibility-driven architecture. It focuses on structure and separation of concerns.

## When to Use This

- **Read if:** You need to understand how to structure a backend
- **Reference if:** You're deciding where a new piece of code belongs
- **Skip if:** You're implementing a specific feature (see Backend Patterns or Modules)

---

## Core Layers

1. **API Layer**
   - Handles requests & responses
   - Thin, predictable, stateless

2. **Business Logic Layer**
   - Rules, validations, workflows
   - Independent of transport

3. **Data Layer**
   - Database access
   - Clear ownership of data models

4. **Realtime / Sync Layer**
   - Events, subscriptions, sync logic

---

## Key Principles

- Separation of concerns
- Explicit data flow
- Fail-safe defaults
- Extensibility without tight coupling

---

## Why This Matters

Most early projects fail because architecture is:
- Implicit
- Coupled
- Hard to evolve

Forgebase makes architecture **visible and intentional**.

---

## Next Reads

1. [Guides: Backend Patterns](Backend.md) — Learn patterns for each layer
2. [Guides: Security](Security.md) — See how to secure this architecture
3. [Examples: Basic Backend](../Examples/Basic-Backend/README.md) — See working implementations