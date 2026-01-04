# Opinionated Decisions

Forgebase makes decisions so builders do not have to.

These opinions exist to prevent common failure modes seen in early-stage projects.

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
