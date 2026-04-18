# Canonical Skills Source

This directory is the source of truth for Founder Skills OS beta.

Each skill lives under:

`source/skills/[domain]/[skill-name]/`

Core files:
- `skill.yaml`
- `prompt.md`
- optional `outputs.schema.json`
- optional `reference.md`
- optional `evals/` and `examples/`

The legacy compatibility pack now lives in `legacy/skills/`, but all new OS routing, host generation, and sequence validation should point here first.
