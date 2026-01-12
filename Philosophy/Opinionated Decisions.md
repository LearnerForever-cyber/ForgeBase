# Opinionated Decisions

## Context

Forgebase makes deliberate design choices to prevent common failure modes in early-stage backend projects. This document lists core opinions and explains why they exist.

## When to Use This

- **Read if:** You want to understand the reasoning behind Forgebase's design constraints
- **Reference if:** You're considering deviating from Forgebase patterns and need to weigh tradeoffs
- **Skip if:** You've already accepted Forgebase's philosophy and want implementation details

---

## Why Opinions Matter

Unlimited choice increases complexity.

For early-stage builders, complexity leads to:
- Inconsistent architecture
- Fragile systems
- Rewrites under pressure

Forgebase limits choices intentionally.

---

## Core Opinions

### 1. Backend Is a System, Not a Script
- Clear boundaries matter
- Structure matters more than speed
- Consistency beats cleverness

---

### 2. Auth and Data Ownership Are Foundational
- Identity is central to every feature
- Permissions must be explicit
- Data access should be enforced at the database level

---

### 3. APIs Are Contracts
- Frontend and backend communicate through clear shapes
- Breaking changes are avoided
- Errors are predictable

---

### 4. Offline and Failure Are First-Class Concerns
- Networks are unreliable
- Devices go offline
- Systems must recover gracefully

---

### 5. Simple Now, Scalable Later
- Start with a clear monolith
- Modularize when necessary
- Scale only when usage demands it

---

## What Forgebase Refuses to Do

Forgebase does not:
- Hide critical backend concepts
- Encourage copy-paste without understanding
- Optimize for trends
- Pretend edge cases do not exist

---

## The Cost of These Opinions

These decisions mean:
- Less flexibility early
- Fewer shortcuts
- More thinking upfront

This is intentional.

Forgebase trades early convenience for long-term stability.

---

Opinions are not limitations.

They are guardrails.

---

## Next Reads

1. [Tradeoffs](Tradeoffs.md) — Understand what you gain and lose by adopting Forgebase
2. [Architecture Overview](../Architecture/Overview.md) — See how these opinions shape system design
3. [Guides Overview](../Guides/Overview.md) — See how these opinions translate to implementation
