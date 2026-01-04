# Guides

Welcome to the **Guides** section of Forgebase.

This folder contains **practical, opinionated documentation** that explains how Forgebase is designed, how it should be used, and how decisions are made—beyond what code alone can show.

Forgebase is a **docs-first backend foundation**, and these guides act as its operational manual.

---

## Purpose

The guides exist to:

- Explain *how things work* beyond code
- Document architectural intent and tradeoffs
- Standardize backend and system patterns
- Reduce onboarding time for new developers
- Preserve long-term system clarity

---

## Who These Guides Are For

- **Developers using Forgebase**  
  To understand backend structure, customization, and intended usage

- **Contributors & maintainers**  
  To follow consistent architectural and operational standards

- **Operators**  
  To understand deployment, monitoring, and system behavior

---

## How to Read the Guides

- Start with the **overview** to understand Forgebase’s intent
- Follow guides sequentially when onboarding
- Use topic-specific guides (auth, realtime, offline) as references
- Guides are intentionally **concise, opinionated, and actionable**

> If something feels unclear, the guide—not the code—should be improved.

---

## Guide Structure

guides/
├── README.md # This file
├── 01-overview.md # What Forgebase is & how pieces connect
├── 02-setup.md # Local dev & environment setup
├── 03-architecture.md # High-level system design
├── 04-backend.md # APIs, DB, auth, realtime
├── 05-customization.md # Adapting Forgebase to your project
├── 06-security.md # Auth, RLS, and safety boundaries
├── 07-realtime.md # Subscriptions & sync logic
├── 08-offline.md # Offline-first strategy
├── 09-conventions.md # Naming, commits, structure
├── 10-deployment.md # Environments & releases
├── 11-operations.md # Monitoring, logs, analytics
└── 12-validation.md # Real-world usage & correctness (EduBro)

yaml
Copy code

Files are added **incrementally** to avoid unnecessary complexity.

---

## Writing Principles

- **Clarity > completeness**
- Explain *why* decisions were made
- Prefer diagrams or pseudocode over long prose
- Avoid duplication with code comments
- Update guides whenever architecture changes

---

## Source of Truth

- **Code** → implementation truth  
- **Guides** → conceptual & operational truth  

If they conflict, **fix one immediately**.

---

## Real-World Validation

Forgebase patterns are actively validated through **EduBro**, a real production platform built by the same founder.

Developers seeking proof of correctness, scalability, and security can explore EduBro as a reference implementation.

---

Treat this folder as a **living manual**, not static documentation.