# Founder Skills CLI workspace

The published repo-root CLI is now just a thin compatibility wrapper around `legacy/`.

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

As the OS hardens, more of the repo-level CLI surface should move here and the legacy wrapper should shrink further.
