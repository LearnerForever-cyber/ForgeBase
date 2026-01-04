# Architecture Overview

Forgebase is designed as a **doc-first developer platform** that prioritizes clarity, modularity, and scalability.  
This document explains the *big picture* — what systems exist, how they interact, and the architectural principles behind them.

---

## 1. Architectural Philosophy

Forgebase follows three core principles:

### 1. Doc-First, System-Second
Documentation is not an afterthought.  
Every system, API, and workflow is designed **from documentation backward**, ensuring:
- Predictable developer experience
- Clear mental models
- Easier onboarding for students and solo builders

### 2. Modular by Default
Each part of Forgebase is:
- Independently understandable
- Loosely coupled
- Replaceable without breaking the whole system

This allows Forgebase to evolve without rewrites.

### 3. Simple Now, Scalable Later
Early architecture avoids premature complexity while leaving **clear upgrade paths** for:
- Performance
- Scale
- Security
- Multi-tenant usage

---

## 2. High-Level System View

At a high level, Forgebase consists of four layers:

┌-----------------------------------------------------| 
│ Documentation │ ← Website, MD content, code snippets
├─────────────────────────────-                      ┤   
│ Developer Interface │ ← CLI, SDKs, API references (future)
├─────────────────────────────┤
│ Core Services │ ← Auth, Projects, APIs, Logic
├─────────────────────────────┤
│ Infrastructure Layer │ ← Database, Storage, Hosting
└─────────────────────────────┘

yaml
Copy code

---

## 3. Core Components

### 3.1 Documentation Layer
- Markdown-based content (`.md`)
- Organized by philosophy, architecture, guides, and references
- Rendered on a minimal, dark-themed website
- Code snippets are first-class citizens

This layer is the **entry point** for most users.

---

### 3.2 Developer Interface Layer
*(Planned / evolving)*

- API references
- SDK usage examples
- CLI documentation
- Copy-paste friendly workflows

This layer translates Forgebase concepts into **actionable developer steps**.

---

### 3.3 Core Services Layer
Handles platform logic such as:
- Authentication & identity
- Project and resource management
- API orchestration
- Permissions and access control

Initially simple, designed to grow into a full backend platform.

---

### 3.4 Infrastructure Layer
Abstracted infrastructure that may include:
- Database (relational first)
- Object storage
- Server or serverless compute
- Realtime / event systems (future)

Infrastructure choices are intentionally **hidden from the docs user** unless relevant.

---

## 4. Data & Flow (Conceptual)

Typical interaction flow:

1. Developer reads documentation
2. Understands system conceptually
3. Uses API / SDK / CLI
4. Core services process request
5. Infrastructure executes and stores state
6. Response flows back to developer

Forgebase optimizes for **clarity at step 1**, not just performance at step 5.

---

## 5. Security & Boundaries (High Level)

- Clear separation between public docs and private services
- Auth handled centrally
- Principle of least privilege
- No direct infrastructure exposure to end users

Detailed security policies live in `/architecture/security.md`.

---

## 6. Evolution Path

Forgebase architecture is expected to evolve through stages:

1. **Docs-only platform**
2. Docs + APIs
3. Docs + APIs + CLI
4. Full backend platform

Each stage builds on the same architectural foundation.

---

## 7. What This Document Is (and Isn’t)

**This document is:**
- A mental model
- A reference for contributors
- A guide for future architectural decisions

**This document is not:**
- An implementation guide
- A deployment manual
- A low-level technical spec

Those live elsewhere.

---

## 8. Related Documents

- `/architecture/components.md`
- `/architecture/data-flow.md`
- `/architecture/security.md`
- `/philosophy/core-principles.md`

---

**Forgebase architecture exists to reduce confusion, not add abstraction.  
If a system cannot be explained simply, it does not belong here.**