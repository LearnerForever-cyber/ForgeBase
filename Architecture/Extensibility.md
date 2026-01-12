# Extensibility

## Context

Forgebase is designed to grow without forcing rewrites or confusion. This document explains how the system evolves while maintaining clarity.

## When to Use This

- **Read if:** You're planning to extend or customize Forgebase
- **Reference if:** You're questioning whether something belongs in Forgebase
- **Skip if:** You're using Forgebase without customization

---

## 1. Extension Over Modification

New capabilities are added by:
- Extending existing systems
- Introducing new modules
- Preserving existing behavior

Core concepts are not casually altered.

---

## 2. Stable Mental Models

Once a concept is introduced:
- It remains consistent
- It is not repurposed
- Its meaning does not drift

This protects long-term understanding.

---

## 3. Clear Extension Points

Forgebase defines:
- Where customization is allowed
- Where it is restricted
- Why those limits exist

Unclear extension points are avoided.

---

## 4. Backward Understandability

Even when systems evolve:
- Older docs remain readable
- Past decisions stay explainable
- History is not erased

---

Extensibility exists to support growth, not complexity.

---

## Next Reads

1. [Design Decisions](Design%20Decisions.md) — See how extensibility aligns with core design
2. [Components](Components.md) — Understand component boundaries for extensions
3. [Guides Overview](../Guides/Overview.md) — See how to customize in practice