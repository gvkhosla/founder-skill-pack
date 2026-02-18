# Agent Compatibility Guide

Skills in this pack are designed to be **agent-agnostic** — they work across pi, Claude Code, Codex, and OpenCode without modification. This document explains how, and what to do when edge cases arise.

---

## Compatibility Matrix

| Feature | pi | Claude Code | Codex | OpenCode |
|---------|-----|------------|-------|----------|
| SKILL.md format | ✅ Native | ✅ Native | ✅ Markdown read | ✅ Markdown read |
| Auto-discovery by description | ✅ | ✅ | ⚠️ Manual | ⚠️ Manual |
| File read (founder-context.md) | ✅ | ✅ | ✅ | ✅ |
| Subagent invocation | ✅ | ❌ | ❌ | ❌ |
| Background knowledge loading | ✅ | ✅ | ❌ | ❌ |
| `context: fork` | ✅ | ❌ | ❌ | ❌ |

**Key rule:** Skills in this pack use **none** of the features marked ❌ above. No subagent invocation. No `context: fork`. Standard markdown + file I/O only.

---

## Install Paths Per Agent

### pi

Skills go in `~/.pi/agent/skills/[skill-name]/`:
```bash
# Install mvp-scoper for pi
mkdir -p ~/.pi/agent/skills/mvp-scoper
curl -fsSL https://raw.githubusercontent.com/[org]/founder-skill-pack/main/skills/strategy/mvp-scoper/SKILL.md \
  -o ~/.pi/agent/skills/mvp-scoper/SKILL.md
```

Or use the one-line installer:
```bash
curl -fsSL https://founderskills.dev/install/mvp-scoper | bash
```

### Claude Code

Skills go in `.claude/skills/[skill-name]/` in your project root, or `~/.claude/skills/[skill-name]/` for global:
```bash
# Install mvp-scoper for Claude Code (project-level)
mkdir -p .claude/skills/mvp-scoper
curl -fsSL https://raw.githubusercontent.com/[org]/founder-skill-pack/main/skills/strategy/mvp-scoper/SKILL.md \
  -o .claude/skills/mvp-scoper/SKILL.md
```

### Codex / OpenCode

These agents don't have a native skills directory. Add the SKILL.md content to your system prompt or project context file:
```bash
# Copy SKILL.md content to your project context
cat skills/strategy/mvp-scoper/SKILL.md >> AGENTS.md
```

Or manually paste the SKILL.md into the agent's context at session start.

---

## `founder-context.md` — Cross-Agent Persistence

The `founder-partner` skill reads `founder-context.md` from the project root. This works in all agents — it's just a file read.

**Location:** `[your-project-root]/founder-context.md`

All agents that can read files will pick this up when the `founder-partner` skill is invoked. The skill updates the file at the end of each session.

---

## Testing a Skill for Compatibility

Before marking a skill as compatible, test it on both pi and Claude Code:

### Test Checklist (per agent)

- [ ] Skill auto-triggers on the described invocation phrase
- [ ] All process steps complete without agent-specific errors
- [ ] Output artifact (`[filename].md`) is created in the working directory
- [ ] `founder-context.md` is read correctly (for partner skills)
- [ ] `founder-context.md` is updated after session (for partner skills)
- [ ] Output quality is equivalent across agents (not agent-dependent)

### Test Scenarios (run all 3)

1. **Cold start:** Invoke with no context, no `founder-context.md`, no prior conversation
2. **Mid-journey:** Invoke with a `founder-context.md` that has prior context filled in
3. **Edge case:** Invoke with a founder who's at an unusual stage (e.g., already has users but no positioning)

### Reporting Issues

If a skill behaves differently across agents, open a GitHub issue with:
- Agent name and version
- Invocation phrase used
- Expected output
- Actual output
- Whether `founder-context.md` was present

---

## Known Agent-Specific Quirks

### pi
- Skills in `~/.pi/agent/skills/` are loaded globally across all projects
- Background knowledge skills (user-invocable: false) auto-load their description into context
- The `founder-partner` skill works best here due to global context loading

### Claude Code
- Skills in `~/.claude/skills/` are global; `.claude/skills/` is project-specific
- Project-level skills take precedence over global skills with the same name
- `founder-context.md` must be in the project root where Claude Code is running

### Codex
- No native skill format — use AGENTS.md or system prompt injection
- Skills work as detailed prompt templates when pasted into context
- Session memory is limited; re-inject `founder-context.md` content manually if needed

### OpenCode
- Similar to Codex — no native skill format
- Skills work well as structured prompts in the conversation context
- Recommend installing the full pack as a single context document for OpenCode users

---

## Versioning

Each skill has a `version` field in its frontmatter. When a skill is updated:
- Patch version (1.0.x): wording improvements, typo fixes — safe to auto-update
- Minor version (1.x.0): framework changes, new steps — review before updating
- Major version (x.0.0): breaking change in output format — update `founder-context.md` schema too

Check `CHANGELOG.md` in each skill directory for details.
