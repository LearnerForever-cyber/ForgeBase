# Customization Guide

## Context

Forgebase is meant to be adapted. This guide explains what to customize and what to preserve when tailoring Forgebase to your product.

## When to Use This

- **Read if:** You're planning to diverge from Forgebase patterns
- **Reference if:** You're uncertain whether a change will break core assumptions
- **Skip if:** You're building without customization

---

## What You Should Customize

- Tech stack
- API structure
- Database schema
- Feature boundaries

---

## What You Should NOT Remove

- Security assumptions
- Separation of concerns
- Data ownership clarity

---

## Recommended Approach

1. Start with Forgebase patterns
2. Ship a small feature
3. Observe real usage
4. Evolve architecture gradually

Forgebase is a **starting point, not a cage**.

---

## Next Reads

1. [Philosophy: Opinionated Decisions](../Philosophy/Opinionated%20Decisions.md) — Understand why certain things shouldn't change
2. [Architecture: Extensibility](../Architecture/Extensibility.md) — See how the system grows
3. [Guides: Overview](Overview.md) — Understand what Forgebase is before customizing
