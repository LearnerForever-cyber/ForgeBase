# Core Components

## Context

Forgebase is composed of well-defined components, each with clear responsibility. This document lists what exists and explains its role in the system.

## When to Use This

- **Read if:** You need to understand what components Forgebase consists of
- **Reference if:** You're deciding where a new responsibility belongs
- **Skip if:** You're not thinking about system architecture

---

## 1. Documentation System

**Purpose:**  
Serve as the primary interface between Forgebase and its users.

**Responsibilities:**
- Present concepts clearly
- Explain systems before tools
- Act as the source of truth

**Characteristics:**
- Markdown-first
- Version-controlled
- Structured by philosophy → architecture → guides → reference

This component exists **before** any backend system.

---

## 2. Content Rendering Layer

**Purpose:**  
Transform documentation into a readable, developer-friendly website.

**Responsibilities:**
- Render Markdown
- Display code snippets cleanly
- Maintain visual consistency

**Characteristics:**
- Dark theme
- Minimal UI
- Code-first layout

Rendering is intentionally simple to avoid distracting from content.

---

## 3. Developer Interface (Future)

**Purpose:**  
Allow developers to interact with Forgebase programmatically.

**Includes (planned):**
- API references
- SDK documentation
- CLI workflows

This component bridges **knowledge → execution**.

---

## 4. Core Service Layer (Future)

**Purpose:**  
Handle Forgebase platform logic.

**Potential responsibilities:**
- Authentication
- Project management
- Access control
- API orchestration

This layer remains invisible unless explicitly needed by the user.

---

## 5. Infrastructure Layer (Abstracted)

**Purpose:**  
Provide compute, storage, and networking foundations.

**Key principle:**  
Infrastructure details are hidden unless relevant to learning or debugging.

---

## 6. Component Boundaries

Each component:
- Owns its responsibility fully
- Avoids leaking internal complexity
- Can evolve independently

If a responsibility cannot be clearly assigned, the component design is reconsidered.

---

**Forgebase components exist to reduce mental load, not increase flexibility for its own sake.**

---

## Next Reads

1. [Architecture Overview](Overview.md) — See how these components fit together
2. [Data Flow](Data-Flow.md) — See how data moves between components
3. [Design Decisions](Design%20Decisions.md) — Understand why these components are organized this way
