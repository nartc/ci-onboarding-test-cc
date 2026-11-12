# ci-onboarding-test-cc

A plain pnpm workspace with a large, deep task graph. There is no Nx here yet. Task ordering
comes only from `pnpm -r`, which runs a script in each package in dependency order.

- **52 projects**: 43 libraries, 6 apps and 3 e2e suites
- **215 dependency edges**, with a longest path of **16 projects** (`@ci/types` up to the e2e suites)
- Every project has `build`, `typecheck`, `lint` and `test` scripts. That is about 208 tasks in total.

## Getting started

```sh
pnpm install
pnpm run check   # lint, build, typecheck, test
```

## How the tasks depend on each other

Packages resolve each other through `exports` that point at `dist/`. So most tasks need the
dependencies to be built first:

| Task        | Needs first                                                |
| ----------- | ---------------------------------------------------------- |
| `build`     | `build` of every dependency (+ `codegen` for `@ci/schema`) |
| `typecheck` | `build` of every dependency (+ `codegen` for `@ci/schema`) |
| `test`      | `build` of every dependency (+ `codegen` for `@ci/schema`) |
| `lint`      | nothing (lint is not type-aware)                           |

`@ci/schema` has a `codegen` step. It turns `schemas/*.json` into `src/generated/`, which is
not committed. Its `build`, `typecheck` and `test` scripts run `codegen` first.

Without a task runner these needs are not modelled. For example, `pnpm run test` on a fresh
clone fails, because nothing has been built yet. `pnpm run check` works around this by
building everything first. That is slow, and nothing is cached.

## Layout

| Folder              | What is in it                                                      |
| ------------------- | ------------------------------------------------------------------ |
| `packages/shared`   | Base libraries: types, utils, errors, validation, config and so on |
| `packages/platform` | Infrastructure: db, cache, http, auth, queue, events, metrics      |
| `packages/features` | Domain features: users, billing, orders, shipping, reports         |
| `packages/ui`       | UI building blocks                                                 |
| `packages/client`   | The SDK and its mocks                                              |
| `apps`              | api, worker, scheduler, web, admin, cli and their e2e suites       |

Each library exports a `ModuleInfo` that lists its dependencies at runtime. Each test
checks the direct dependencies, the depth and the full set of transitive dependencies. So
if the package graph and the imports drift apart, the tests fail.

## Projects

| Project               | Path                                | Depth | Direct deps | Transitive deps |
| --------------------- | ----------------------------------- | ----: | ----------: | --------------: |
| `@ci/types`           | `packages/shared/types`             |     0 |           0 |               0 |
| `@ci/constants`       | `packages/shared/constants`         |     1 |           1 |               1 |
| `@ci/utils`           | `packages/shared/utils`             |     1 |           1 |               1 |
| `@ci/date`            | `packages/shared/date`              |     2 |           2 |               3 |
| `@ci/errors`          | `packages/shared/errors`            |     2 |           2 |               3 |
| `@ci/logger`          | `packages/shared/logger`            |     2 |           2 |               3 |
| `@ci/ui-tokens`       | `packages/ui/ui-tokens`             |     2 |           2 |               3 |
| `@ci/crypto`          | `packages/shared/crypto`            |     3 |           2 |               4 |
| `@ci/i18n`            | `packages/shared/i18n`              |     3 |           3 |               4 |
| `@ci/result`          | `packages/shared/result`            |     3 |           2 |               4 |
| `@ci/ui-primitives`   | `packages/ui/ui-primitives`         |     3 |           2 |               4 |
| `@ci/ui-components`   | `packages/ui/ui-components`         |     4 |           4 |               7 |
| `@ci/ui-layout`       | `packages/ui/ui-layout`             |     4 |           3 |               7 |
| `@ci/validation`      | `packages/shared/validation`        |     4 |           3 |               5 |
| `@ci/config`          | `packages/shared/config`            |     5 |           4 |               7 |
| `@ci/serializer`      | `packages/shared/serializer`        |     5 |           3 |               6 |
| `@ci/ui-charts`       | `packages/ui/ui-charts`             |     5 |           3 |               9 |
| `@ci/cache`           | `packages/platform/cache`           |     6 |           4 |               9 |
| `@ci/events`          | `packages/platform/events`          |     6 |           3 |               8 |
| `@ci/http`            | `packages/platform/http`            |     6 |           5 |               9 |
| `@ci/schema`          | `packages/shared/schema`            |     6 |           3 |               7 |
| `@ci/db`              | `packages/platform/db`              |     7 |           6 |              10 |
| `@ci/metrics`         | `packages/platform/metrics`         |     7 |           4 |              10 |
| `@ci/ui-forms`        | `packages/ui/ui-forms`              |     7 |           4 |              13 |
| `@ci/auth`            | `packages/platform/auth`            |     8 |           5 |              14 |
| `@ci/feature-flags`   | `packages/platform/feature-flags`   |     8 |           4 |              13 |
| `@ci/inventory`       | `packages/features/inventory`       |     8 |           5 |              13 |
| `@ci/storage`         | `packages/platform/storage`         |     8 |           4 |              13 |
| `@ci/tracing`         | `packages/platform/tracing`         |     8 |           3 |              13 |
| `@ci/queue`           | `packages/platform/queue`           |     9 |           5 |              16 |
| `@ci/sdk`             | `packages/client/sdk`               |     9 |           5 |              15 |
| `@ci/users`           | `packages/features/users`           |     9 |           6 |              16 |
| `@ci/audit`           | `packages/features/audit`           |    10 |           5 |              21 |
| `@ci/billing`         | `packages/features/billing`         |    10 |           6 |              18 |
| `@ci/cli`             | `apps/cli`                          |    10 |           5 |              16 |
| `@ci/notifications`   | `packages/features/notifications`   |    10 |           5 |              23 |
| `@ci/sdk-mocks`       | `packages/client/sdk-mocks`         |    10 |           3 |              16 |
| `@ci/web`             | `apps/web`                          |    10 |           6 |              23 |
| `@ci/orders`          | `packages/features/orders`          |    11 |           6 |              23 |
| `@ci/payments`        | `packages/features/payments`        |    11 |           5 |              21 |
| `@ci/web-e2e`         | `apps/web-e2e`                      |    11 |           2 |              25 |
| `@ci/analytics`       | `packages/features/analytics`       |    12 |           5 |              24 |
| `@ci/search`          | `packages/features/search`          |    12 |           4 |              24 |
| `@ci/shipping`        | `packages/features/shipping`        |    12 |           5 |              24 |
| `@ci/recommendations` | `packages/features/recommendations` |    13 |           5 |              27 |
| `@ci/reports`         | `packages/features/reports`         |    13 |           6 |              27 |
| `@ci/admin`           | `apps/admin`                        |    14 |           7 |              35 |
| `@ci/api`             | `apps/api`                          |    14 |          17 |              34 |
| `@ci/scheduler`       | `apps/scheduler`                    |    14 |           6 |              28 |
| `@ci/worker`          | `apps/worker`                       |    14 |           8 |              31 |
| `@ci/admin-e2e`       | `apps/admin-e2e`                    |    15 |           2 |              37 |
| `@ci/api-e2e`         | `apps/api-e2e`                      |    15 |           2 |              37 |

## Graph

```mermaid
flowchart BT
  subgraph shared
    types["types"]
    constants["constants"]
    utils["utils"]
    errors["errors"]
    result["result"]
    logger["logger"]
    validation["validation"]
    config["config"]
    crypto["crypto"]
    serializer["serializer"]
    date["date"]
    i18n["i18n"]
    schema["schema"]
  end
  subgraph platform
    events["events"]
    cache["cache"]
    db["db"]
    http["http"]
    metrics["metrics"]
    tracing["tracing"]
    auth["auth"]
    queue["queue"]
    storage["storage"]
    featureFlags["feature-flags"]
  end
  subgraph features
    users["users"]
    billing["billing"]
    payments["payments"]
    inventory["inventory"]
    orders["orders"]
    shipping["shipping"]
    notifications["notifications"]
    search["search"]
    analytics["analytics"]
    recommendations["recommendations"]
    reports["reports"]
    audit["audit"]
  end
  subgraph ui
    uiTokens["ui-tokens"]
    uiPrimitives["ui-primitives"]
    uiLayout["ui-layout"]
    uiComponents["ui-components"]
    uiForms["ui-forms"]
    uiCharts["ui-charts"]
  end
  subgraph client
    sdk["sdk"]
    sdkMocks["sdk-mocks"]
  end
  subgraph apps
    api["api"]
    worker["worker"]
    scheduler["scheduler"]
    web["web"]
    admin["admin"]
    cli["cli"]
    apiE2e["api-e2e"]
    webE2e["web-e2e"]
    adminE2e["admin-e2e"]
  end
  constants --> types
  utils --> types
  errors --> utils
  errors --> constants
  result --> utils
  result --> errors
  logger --> utils
  logger --> constants
  validation --> utils
  validation --> result
  validation --> errors
  config --> utils
  config --> validation
  config --> constants
  config --> logger
  crypto --> utils
  crypto --> errors
  serializer --> utils
  serializer --> validation
  serializer --> result
  date --> utils
  date --> constants
  i18n --> utils
  i18n --> constants
  i18n --> date
  schema --> utils
  schema --> validation
  schema --> serializer
  events --> utils
  events --> logger
  events --> serializer
  cache --> utils
  cache --> logger
  cache --> serializer
  cache --> config
  db --> utils
  db --> config
  db --> logger
  db --> errors
  db --> validation
  db --> schema
  http --> utils
  http --> logger
  http --> config
  http --> serializer
  http --> errors
  metrics --> utils
  metrics --> events
  metrics --> logger
  metrics --> date
  tracing --> utils
  tracing --> metrics
  tracing --> http
  auth --> utils
  auth --> crypto
  auth --> db
  auth --> cache
  auth --> http
  queue --> utils
  queue --> events
  queue --> db
  queue --> serializer
  queue --> tracing
  storage --> utils
  storage --> db
  storage --> cache
  storage --> crypto
  featureFlags --> utils
  featureFlags --> config
  featureFlags --> cache
  featureFlags --> metrics
  users --> utils
  users --> auth
  users --> db
  users --> validation
  users --> events
  users --> schema
  billing --> utils
  billing --> users
  billing --> db
  billing --> events
  billing --> date
  billing --> schema
  payments --> utils
  payments --> billing
  payments --> crypto
  payments --> http
  payments --> featureFlags
  inventory --> utils
  inventory --> db
  inventory --> cache
  inventory --> events
  inventory --> schema
  orders --> utils
  orders --> users
  orders --> inventory
  orders --> billing
  orders --> queue
  orders --> schema
  shipping --> utils
  shipping --> orders
  shipping --> inventory
  shipping --> date
  shipping --> queue
  notifications --> utils
  notifications --> users
  notifications --> queue
  notifications --> i18n
  notifications --> featureFlags
  search --> utils
  search --> inventory
  search --> orders
  search --> cache
  analytics --> utils
  analytics --> metrics
  analytics --> orders
  analytics --> users
  analytics --> date
  recommendations --> utils
  recommendations --> search
  recommendations --> analytics
  recommendations --> users
  recommendations --> featureFlags
  reports --> utils
  reports --> analytics
  reports --> billing
  reports --> date
  reports --> i18n
  reports --> storage
  audit --> utils
  audit --> events
  audit --> users
  audit --> storage
  audit --> tracing
  uiTokens --> utils
  uiTokens --> constants
  uiPrimitives --> utils
  uiPrimitives --> uiTokens
  uiLayout --> utils
  uiLayout --> uiPrimitives
  uiLayout --> i18n
  uiComponents --> utils
  uiComponents --> uiPrimitives
  uiComponents --> i18n
  uiComponents --> date
  uiForms --> utils
  uiForms --> uiComponents
  uiForms --> validation
  uiForms --> schema
  uiCharts --> utils
  uiCharts --> uiComponents
  uiCharts --> uiLayout
  sdk --> utils
  sdk --> http
  sdk --> auth
  sdk --> schema
  sdk --> result
  sdkMocks --> utils
  sdkMocks --> sdk
  sdkMocks --> schema
  api --> utils
  api --> http
  api --> config
  api --> auth
  api --> users
  api --> billing
  api --> payments
  api --> orders
  api --> shipping
  api --> inventory
  api --> notifications
  api --> search
  api --> recommendations
  api --> audit
  api --> metrics
  api --> tracing
  api --> featureFlags
  worker --> utils
  worker --> config
  worker --> queue
  worker --> notifications
  worker --> reports
  worker --> analytics
  worker --> shipping
  worker --> tracing
  scheduler --> utils
  scheduler --> config
  scheduler --> logger
  scheduler --> queue
  scheduler --> reports
  scheduler --> date
  web --> utils
  web --> uiComponents
  web --> uiForms
  web --> uiLayout
  web --> sdk
  web --> i18n
  admin --> utils
  admin --> uiCharts
  admin --> uiForms
  admin --> uiLayout
  admin --> sdk
  admin --> reports
  admin --> analytics
  cli --> utils
  cli --> sdk
  cli --> config
  cli --> logger
  cli --> serializer
  apiE2e --> api
  apiE2e --> sdkMocks
  webE2e --> web
  webE2e --> sdkMocks
  adminE2e --> admin
  adminE2e --> sdkMocks
```
