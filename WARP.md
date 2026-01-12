# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**Forgebase** is a docs-first backend foundation designed for students, indie builders, and early-stage startups. It is not a framework or backend-as-a-service—it is a set of proven backend patterns, architectural decisions, and starter modules extracted from real production usage (EduBro platform).

### Core Philosophy
- **Documentation is the product**: Every system is explained before it is abstracted
- **Clarity over cleverness**: If it's hard to explain, it's poorly designed
- **Opinionated by design**: Strong defaults to reduce decision fatigue
- **Systems should teach**: Users should understand what they're building and why

## Repository Structure

```
Forgebase/
├── Philosophy/          # Core principles, opinionated decisions, tradeoffs
├── Architecture/        # System design, components, data flow, security
├── Core/               # Non-negotiable primitives (contracts, project shape)
├── Modules/            # Auth, Realtime, Offline modules
├── Guides/             # How-tos: setup, backend, deployment, operations
├── Examples/           # Reference implementations (Basic-Backend, Realtime, Offline-First)
└── Validation/         # Real-world validation via EduBro
```

### Key Architectural Concepts

**Four-Layer System:**
1. **Documentation Layer**: Primary interface, markdown-based, version-controlled
2. **Developer Interface Layer**: APIs, SDKs, CLI (planned/future)
3. **Core Services Layer**: Auth, project management, access control (planned/future)
4. **Infrastructure Layer**: Database, storage, compute (abstracted)

**Separation of Concerns:**
- **Knowledge flow** (docs, concepts) is independent of **execution flow** (APIs, services)
- Documentation remains accessible even if backend systems are unavailable
- Clear boundaries between layers prevent complexity leakage

## Core Contracts

Every Forgebase-based backend MUST support:
1. **Auth Identity**: Stable user ID, role-based access
2. **Data Ownership**: Every row has an owner
3. **Realtime Events**: INSERT/UPDATE/DELETE streams
4. **Offline Safety**: Deterministic conflict resolution
5. **Auditability**: Traceable changes

These are validated through EduBro (see Validation/Edubro.md).

## Development Approach

### Current State
Forgebase is currently a **documentation platform** with no build scripts, tests, or deployment tools. The repository contains only markdown documentation files and images.

### When Contributing
- Respect the docs-first philosophy: explain before implementing
- Structure reflects responsibility, not technology
- Keep changes small and focused
- Follow the architectural principles in Philosophy/ and Architecture/

### Naming Conventions
- Clear over clever
- Explicit over short
- Avoid abbreviations

### Git Practices
- Small commits with descriptive messages
- One logical change per commit
- Co-author line: `Co-Authored-By: Warp <agent@warp.dev>`

## Module Guidelines

### Auth Module (Modules/Auth.md)
- Entry point for all data access
- Role enforcement at database level
- No auth = no data
- Auth correctness is non-negotiable

### Realtime Module (Modules/Realtime.md)
- Mirrors database truth
- No business logic in streams
- Clients are reactive, not authoritative
- Events: INSERT, UPDATE, DELETE

### Offline Module (Modules/Offline.md)
- Deterministic conflict resolution
- Assumes networks are unreliable
- Graceful recovery is required

## Documentation Standards

### Structure Hierarchy
1. Philosophy (why)
2. Architecture (what and how systems connect)
3. Guides (step-by-step how-to)
4. Examples (reference implementations)
5. Modules (specific components)

### Writing Style
- Explain concepts before tools
- Use clear, explicit language
- Avoid jargon and abbreviations
- Include code snippets as first-class citizens
- Keep visual presentation minimal and focused

### File Organization
- Markdown-first (`.md` files)
- Dark theme optimized
- Code-first layout
- No feature bloat or premature abstraction

## Key Design Decisions

### Opinionated Choices (Philosophy/Opinionated Decisions.md)
1. **Backend is a system, not a script**: Structure > speed
2. **Auth and data ownership are foundational**: Explicit permissions enforced at DB level
3. **APIs are contracts**: Breaking changes avoided, errors predictable
4. **Offline and failure are first-class**: Networks fail, systems must recover gracefully
5. **Simple now, scalable later**: Clear monolith first, modularize when necessary

### What Forgebase Refuses
- Hide critical backend concepts
- Encourage copy-paste without understanding
- Optimize for trends over stability
- Pretend edge cases don't exist

## Examples Reference

Start with `Examples/Basic-Backend/` for the minimum correct backend structure:
- Authentication
- User ownership
- Core resource (Notes)
- Clear separation of concerns
- Ownership enforced at data layer

Then explore:
- `Examples/Realtime/`: Realtime patterns and flow
- `Examples/Offline-First/`: Sync strategies
- `Examples/Backend-Reference.md`: Real-world EduBro validation

## Evolution Path

Forgebase follows a staged evolution:
1. Docs-only platform (current state)
2. Docs + APIs
3. Docs + APIs + CLI
4. Full backend platform

Each stage builds on the same architectural foundation while maintaining clarity.

## Important Principles When Working Here

1. **Documentation changes are product changes**: Treat doc edits with the same care as code
2. **Explain before abstracting**: Mental models must be clear before systems are built
3. **Consistency reduces cognitive load**: Follow existing patterns strictly
4. **Boundaries are non-negotiable**: Respect layer separation (see Architecture/Design Decisions.md)
5. **Learning value is paramount**: If a change makes the system harder to understand, reconsider it
6. **Validated through production**: EduBro validates all Forgebase patterns—theoretical additions don't belong

## Related Reading

- `Philosophy/Core-Principles.md`: Why Forgebase exists
- `Architecture/Overview.md`: Big picture system design
- `Core/Contracts.md`: Non-negotiable requirements
- `Guides/Overview.md`: What Forgebase solves
- `Architecture/Data-Flow.md`: How information moves through the system
