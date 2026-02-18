#!/usr/bin/env bash
# Founder Skill Pack — Universal Installer
# Supports: pi, Claude Code, Codex
# Usage: bash scripts/install.sh [agent] [phase]
#
# Examples:
#   bash scripts/install.sh pi          # Install all skills for pi
#   bash scripts/install.sh claude      # Install all skills for Claude Code (global)
#   bash scripts/install.sh claude .    # Install all skills for Claude Code (project)
#   bash scripts/install.sh codex       # Generate Codex AGENTS.md entry
#   bash scripts/install.sh pi strategy # Install only the strategy phase for pi

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SKILLS_DIR="$REPO_DIR/skills"

AGENT="${1:-}"
PHASE="${2:-all}"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

print_usage() {
  echo "Usage: bash scripts/install.sh [agent] [phase]"
  echo ""
  echo "Agents:  pi | claude | codex"
  echo "Phases:  all (default) | strategy | design | build | launch | compound | pmf | partner"
  echo ""
  echo "Examples:"
  echo "  bash scripts/install.sh pi              # All skills for pi"
  echo "  bash scripts/install.sh claude          # All skills for Claude Code (global ~/.claude/)"
  echo "  bash scripts/install.sh claude .        # All skills for Claude Code (project .claude/)"
  echo "  bash scripts/install.sh codex           # Generate skills/codex/AGENTS.md"
  echo "  bash scripts/install.sh pi strategy     # Only Strategy phase for pi"
}

if [ -z "$AGENT" ]; then
  print_usage
  exit 1
fi

# Collect skill directories to install
get_skill_dirs() {
  local phase="$1"
  if [ "$phase" = "all" ]; then
    find "$SKILLS_DIR" -name "SKILL.md" -exec dirname {} \;
  else
    find "$SKILLS_DIR/$phase" -name "SKILL.md" -exec dirname {} \; 2>/dev/null || {
      echo -e "${RED}Phase '$phase' not found. Available: strategy, design, build, launch, compound, pmf, partner${NC}"
      exit 1
    }
  fi
}

# ─── PI INSTALL ───────────────────────────────────────────────────────────────
install_pi() {
  local pi_skills_dir="$HOME/.pi/agent/skills"
  mkdir -p "$pi_skills_dir"

  echo -e "${BLUE}Installing for pi → $pi_skills_dir${NC}"
  echo ""

  local count=0
  while IFS= read -r skill_dir; do
    local skill_name
    skill_name=$(basename "$skill_dir")
    local dest="$pi_skills_dir/$skill_name"

    if [ -d "$dest" ]; then
      echo -e "  ${YELLOW}↺ updating${NC} $skill_name"
    else
      echo -e "  ${GREEN}+ installing${NC} $skill_name"
    fi

    mkdir -p "$dest"
    cp -r "$skill_dir"/. "$dest/"
    count=$((count + 1))
  done < <(get_skill_dirs "$PHASE")

  echo ""
  echo -e "${GREEN}✓ $count skills installed for pi${NC}"
  echo ""
  echo "To use a skill in pi, say:"
  echo "  /skill [skill-name]"
  echo "  or simply describe what you need — pi will route to the right skill"
}

# ─── CLAUDE CODE INSTALL ──────────────────────────────────────────────────────
install_claude() {
  local scope="${2:---global}"
  local claude_dir

  if [ "$scope" = "." ] || [ "$scope" = "--local" ]; then
    claude_dir="$(pwd)/.claude/skills"
    echo -e "${BLUE}Installing for Claude Code → .claude/skills/ (project scope)${NC}"
  else
    claude_dir="$HOME/.claude/skills"
    echo -e "${BLUE}Installing for Claude Code → ~/.claude/skills/ (global scope)${NC}"
  fi

  mkdir -p "$claude_dir"
  echo ""

  local count=0
  while IFS= read -r skill_dir; do
    local skill_name
    skill_name=$(basename "$skill_dir")
    local dest="$claude_dir/$skill_name"

    if [ -d "$dest" ]; then
      echo -e "  ${YELLOW}↺ updating${NC} $skill_name"
    else
      echo -e "  ${GREEN}+ installing${NC} $skill_name"
    fi

    mkdir -p "$dest"
    cp -r "$skill_dir"/. "$dest/"
    count=$((count + 1))
  done < <(get_skill_dirs "$PHASE")

  echo ""
  echo -e "${GREEN}✓ $count skills installed for Claude Code${NC}"
  echo ""
  echo "To use a skill, say: 'Use the [skill-name] skill'"
  echo "or describe what you need — Claude Code will reference the SKILL.md"
}

# ─── CODEX INSTALL ───────────────────────────────────────────────────────────
install_codex() {
  local codex_dir="$REPO_DIR/skills/codex"
  mkdir -p "$codex_dir"

  echo -e "${BLUE}Generating Codex AGENTS.md → $codex_dir/AGENTS.md${NC}"
  echo ""

  local agents_file="$codex_dir/AGENTS.md"
  cat > "$agents_file" <<'AGENTS_HEADER'
# Founder Skill Pack — Codex Integration

Add this file's contents to your project's `AGENTS.md` file,
or reference it via your Codex system prompt.

## Available Skills

Each skill below can be invoked by name. When invoking a skill:
1. Read the SKILL.md file for that skill from the skills/ directory
2. Follow the instructions in order (sequential — no parallel subagents)
3. Write only the output file(s) specified in the skill
4. Do not write any other files

---

AGENTS_HEADER

  while IFS= read -r skill_dir; do
    local skill_name
    skill_name=$(basename "$skill_dir")
    local phase
    phase=$(basename "$(dirname "$skill_dir")")
    local description
    description=$(grep "^description:" "$skill_dir/SKILL.md" | head -1 | sed 's/description: //')

    echo "### $skill_name" >> "$agents_file"
    echo "**Phase:** $phase" >> "$agents_file"
    echo "$description" >> "$agents_file"
    echo "**Invoke with:** \"Use the $skill_name skill\"" >> "$agents_file"
    echo "**SKILL.md path:** skills/$phase/$skill_name/SKILL.md" >> "$agents_file"
    echo "" >> "$agents_file"
  done < <(get_skill_dirs "$PHASE")

  local count
  count=$(get_skill_dirs "$PHASE" | wc -l | tr -d ' ')

  echo -e "${GREEN}✓ AGENTS.md generated with $count skills${NC}"
  echo ""
  echo "Add the contents of $agents_file to your project's AGENTS.md"
  echo "or reference it in your Codex system prompt."
}

# ─── ROUTER ──────────────────────────────────────────────────────────────────
case "$AGENT" in
  pi)
    install_pi
    ;;
  claude|claude-code)
    install_claude "$PHASE" "${2:-}"
    ;;
  codex|openai)
    install_codex
    ;;
  help|--help|-h)
    print_usage
    ;;
  *)
    echo -e "${RED}Unknown agent: $AGENT${NC}"
    echo ""
    print_usage
    exit 1
    ;;
esac
