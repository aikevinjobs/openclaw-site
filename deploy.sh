#!/bin/bash
set -e

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use 22 > /dev/null 2>&1

# Check for changes
if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
  echo "No changes to deploy."
  exit 0
fi

# Get commit message from argument or prompt
MSG="${1:-}"
if [ -z "$MSG" ]; then
  echo "Changes:"
  git status --short
  echo ""
  read -p "Commit message: " MSG
  if [ -z "$MSG" ]; then
    echo "Aborted: no commit message."
    exit 1
  fi
fi

# Stage, commit, push
git add -A
git commit -m "$MSG"
git push origin main

echo ""
echo "Pushed to GitHub. Cloudflare Pages will auto-deploy."
echo "Check status: https://dash.cloudflare.com"
