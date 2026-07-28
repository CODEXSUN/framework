# CODEXSUN Framework Changelog

## Version State

Current version: 1.0.47
Release tag: v-1.0.47
Changelog label: v 1.0.47

## v-1.0.47

### [v 1.0.47] 2026-07-29 12:16 am - Harden API runtime middleware

#### Database Changes

- Database update: No.

#### App Codebase Changes

- Preserved caller-provided Fastify request, reply, and error hooks while applying CXApp runtime
  middleware defaults, preventing composed applications from losing owner middleware.
- Bumped repository version to 1.0.47.

## v-1.0.46

### [v 1.0.46] 2026-07-26 3:08 pm - Refresh Framework tooling dependencies

#### Database Changes

- Database update: No.

#### App Codebase Changes

- Refreshed the repository lint toolchain and package metadata while preserving Framework's public
  runtime and contract exports.
- Bumped repository version to 1.0.46.

## v-1.0.45

### [v 1.0.45] 2026-07-25 9:17 am - Standardize repository LF line endings

#### Database Changes

- Database update: No.

#### App Codebase Changes

- Standardized detected repository text files on LF through a repository-owned `.gitattributes`
  policy, preventing Windows Git from repeatedly warning about LF-to-CRLF conversion.
- Bumped repository version to 1.0.45.

## v-1.0.44

### [v 1.0.44] 2026-07-23 9:25 am - Add queue V2 and package compatibility safeguards

#### Database Changes

- Database update: No.

#### App Codebase Changes

- Added backward-compatible Queue V2 contracts for backend health, durable receipts,
  idempotency, delivery status, cancellation, retry, and guarded database/Redis switching.
- Hardened HTTP response validation, health-check failure isolation, trimmed tenant context,
  and executable-owned environment guidance.
- Added runtime contract tests, public export checks, package-content checks, dependency-layout
  validation, and isolated tarball installation with compilation and import of every public entry.
- Added an explicit publish allowlist and prepack build so registry consumers receive all runtime
  entry points.
- Bumped repository version to 1.0.44.

## v-1.0.43

### [v 1.0.43] 2026-07-22 8:52 pm - Establish Framework repository release workflow

#### Database Changes

- Database update: No.

#### App Codebase Changes

- Added repository-local ownership, environment, dependency, version, and Git workflow documentation.
- Added standalone version validation, version bump, and `github:now` tooling and bumped the repository to 1.0.43.

## v-1.0.42

### [v 1.0.42] 2026-07-22 - Establish Framework repository documentation

#### Database Changes

- Database update: No.
- Documented the repository-owned migration and seed lifecycle without moving persistence behavior across repositories.

#### App Codebase Changes

- Added repository-local Assist discovery, ownership, structure, environment, version, and Git workflow guidance.
- Added standalone version validation, version bump, and `github:now` tooling.
