# CODEXSUN Framework

The shared runtime used to compose CODEXSUN applications into one API and one web platform.

## Package exports

`@codexsun/framework` provides stable framework and application contracts, with public subpath exports for API composition, configuration, database, environment, errors, events, health, HTTP, logging, modules, queues, and storage.

Business applications such as Core, Billing, Ecommerce, Sites, and Mail remain independently owned packages. The `codexsun` application repository composes them into Platform and does not place business behavior here.

## Development

```sh
npm install
npm run check
npm run build
```

Node.js 26 and npm 12 are the supported development baseline.

Read `assist/AGENT-GUIDE.md` before changing Framework. The local Assist pack defines the
infrastructure-only ownership boundary and repository release workflow.
