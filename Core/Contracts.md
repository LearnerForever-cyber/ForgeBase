# Core Contracts

Forgebase is built on **contracts**, not abstractions.

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
