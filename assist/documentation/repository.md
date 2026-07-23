# CODEXSUN Framework Repository Contract

## Nature

Database-agnostic shared runtime and stable contracts for composing CODEXSUN applications.

## Ownership

API bootstrap, configuration/environment loading, database abstractions, errors, events, health, HTTP contracts, logging, module contracts, queues, and storage contracts.

Excluded ownership: Business tables, business migrations, business seeds, entity fields, business routes, forms, lists, and workflows.

Queue contracts include backward-compatible V1 adapters plus V2 backend health, durable receipts,
idempotency, delivery status, and backend switching contracts. Executable applications own concrete
database/BullMQ adapters, backend-setting persistence, worker registration, and operator controls.

## Current Structure

- `src/api/`
- `src/config/`
- `src/db/`
- `src/env/`
- `src/errors/`
- `src/events/`
- `src/health/`
- `src/http/`
- `src/logger/`
- `src/modules/`
- `src/queue/`
- `src/storage/`

## Migration Contract

No business migrations are allowed. Database utilities may expose stable infrastructure contracts but may not own application tables.

## Seed Contract

No business seeders are allowed.

## Environment Contract

Framework owns the environment loader, not product variables. `loadEnv()` resolves the nearest executable repository `.env` and validates a caller-provided Zod schema.

## Composition Contract

This repository exposes intentional public package contracts. The `codexsun` repository is the executable composition root. It may install, register, order, build, and invoke exported lifecycle functions; it must not copy this repository's business implementation.

## Package Contract

Every declared package subpath must remain importable from the built package. The publish allowlist
contains the compiled `dist` runtime, TypeScript contract sources, root runtime entry points, README,
and license. `prepack` builds the package, while package and export checks prevent a release that
omits runtime files.

## Required Checks

- `npm run check`
- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run test:exports`
- `npm run package:check`
- `npm run dependencies:check`
- `npm run build`
- `npm run check:versions`
- `npm run github:now -- --dry-run`

Run composed boundary, database, and E2E checks from the sibling `codexsun` repository when the change affects runtime integration.
