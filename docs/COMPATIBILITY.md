# Agent Compatibility Guide

Skills in this pack are designed to work across **pi**, **Claude Code**, and **Codex** without modification. This document explains how, and what to expect from each agent.

---

## Compatibility Matrix

| Feature | pi | Claude Code | Codex |
|---------|-----|------------|-------|
| SKILL.md format | ✅ Native | ✅ Native | ✅ Markdown read |
| Auto-discovery by description | ✅ | ✅ | Manual |
| File read (`founder-context.md`) | ✅ | ✅ | ✅ |
| Spawn parallel subagents | ✅ | ✅ | ⚠️ Sequential |
| Background knowledge loading | ✅ | ✅ | ❌ |

**Key rule:** Skills describe their parallel intent. pi and Claude Code execute it natively. Codex runs the same steps sequentially — same output, longer time.

---

## Install Paths Per Agent

### pi

```bash
# Install all skills
bash scripts/install.sh pi

# Install one phase
bash scripts/install.sh pi strategy
```

Skills install to `~/.pi/agent/skills/[skill-name]/`. Global across all projects.

**To invoke:** Say the trigger phrase described in the skill's `description:` field, or `/skill [skill-name]`.

---

### Claude Code

```bash
# Install globally (all projects)
bash scripts/install.sh claude

# Install to current project only
bash scripts/install.sh claude .
```

Global skills: `~/.claude/skills/[skill-name]/`
Project skills: `.claude/skills/[skill-name]/` (takes precedence over global)

**To invoke:** Say "Use the [skill-name] skill" or describe what you need.

---

### Codex

```bash
# Generate AGENTS.md with all skill entries
bash scripts/install.sh codex
```

Generates `skills/codex/AGENTS.md`. Add its contents to your project's `AGENTS.md`.

**To invoke:** "Use the [skill-name] skill" — Codex will read the corresponding SKILL.md.

**Note:** Codex runs parallel phases sequentially. Same output, ~2–3× longer time.

---

## `founder-context.md` — Cross-Agent Persistence

The `founder-partner` skill reads `founder-context.md` from the project root. This works in all agents — it's just a file read.

**Location:** `[your-project-root]/founder-context.md`

Copy `skills/partner/founder-partner/context-template.md` to your project root as `founder-context.md` to start. The partner skill will update it at the end of every session.

---

## Parallel Execution Details

### pi and Claude Code

Skills that describe parallel subagent spawning will execute in parallel — multiple independent agents run simultaneously, then the orchestrator synthesizes. This is the intended experience.

### Codex

Codex agents read the "Sequential Fallback" section that every parallelized skill includes. Same steps, same output, run one at a time. The quality is identical; only the speed differs.

---

## Known Agent-Specific Quirks

### pi
- Skills in `~/.pi/agent/skills/` load globally across all projects
- `founder-partner` works best here — context loads automatically at session start

### Claude Code
- Project-level skills (`.claude/skills/`) take precedence over global (`~/.claude/skills/`) with the same name
- `founder-context.md` must be in the working directory where Claude Code is running

### Codex
- No native skill format — use AGENTS.md or system prompt injection
- Skills work as structured prompt templates when read at session start
- Re-inject `founder-context.md` content manually if context resets mid-session

---

## Versioning

Each skill has a `version` field in its frontmatter:
- **Patch (1.0.x):** Wording improvements — safe to auto-update
- **Minor (1.x.0):** Framework changes — review before updating
- **Major (x.0.0):** Output format changed — update `founder-context.md` schema too
