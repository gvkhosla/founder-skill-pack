# Founder Skills CLI workspace

The published legacy CLI still lives at the repo root.

This workspace holds the OS-focused command modules that power:
- workspace bootstrap (`npm run os:init`)
- recommendation routing (`npm run os:recommend`)
- lifecycle sequence control (`npm run os:sequence`)
- host generation / install flows
- doctor, validation, and consistency checks

The OS CLI is opinionated around the Founder Skills operating model:
- read company state before suggesting work
- route uncertain requests through `founder-partner`
- continue the active sequence before ad hoc tasks
- leave behind artifacts and a clear next move

As the OS beta hardens, more of the repo-level CLI surface should move here.
