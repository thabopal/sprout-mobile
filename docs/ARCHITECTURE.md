# Architecture

Sprout Mobile is Android-first and local-first.

## Boundaries

UI → application/use-cases → repository interfaces → SQLite. React components must not issue SQL directly. This keeps future Obsidian or sync adapters replaceable.

## Persistence

SQLite is the on-device source of truth. Schema changes are forward migrations using `PRAGMA user_version`. WAL and foreign keys are enabled at initialization.

## Timer

Focus timing is timestamp-derived. Persist start/end targets rather than relying on a JavaScript decrement loop so backgrounding and suspension cannot manufacture lost time.

## AI

AI is optional and provider-neutral. Features call capabilities such as task breakdown, session goal, and unblock. BYOK credentials use secure device storage and never SQLite, logs, analytics, or source control.
