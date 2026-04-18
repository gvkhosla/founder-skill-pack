# Legacy compatibility layer

Founder Skills OS is the primary product in this repo.

This `legacy/` subtree keeps the original 27-skill pack available so older install flows still work while the OS continues to harden.

## What lives here

- `legacy/skills/` — the original skill-pack source
- `legacy/cli.js` — compatibility CLI used by `bin/founder-skills.js`
- `legacy/install.sh` — compatibility installer used by `scripts/install.sh`
- `legacy/validate-skill-pack.js` — legacy-pack validation used by `npm run validate`

## Compatibility entrypoints

These public commands stay the same:

```bash
npx --yes github:gvkhosla/founder-skills install --agent pi
bash scripts/install.sh pi
node scripts/validate-skill-pack.js
```

The repo-root files are now thin wrappers that forward into `legacy/`.

## Rule of thumb

- If you are building or extending Founder Skills OS, work in `source/`, `generated/`, `packages/`, and `scripts/*.ts`.
- If you are preserving backward compatibility for the old skill pack, work in `legacy/`.
