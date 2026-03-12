---
title: Configuration
description: Configure OpenClaw models, channels, and behavior
---

## Basic Setup

```bash
openclaw config set ai.provider anthropic
openclaw config set ai.apiKey sk-your-key
openclaw config set gateway.mode local
```

## Config File

Stored at `~/.openclaw/config.json`:

```json
{
  "ai": {
    "provider": "anthropic",
    "model": "claude-sonnet-4-20250514"
  },
  "gateway": {
    "mode": "local",
    "port": 18789
  }
}
```

## Environment Variables

```bash
export ANTHROPIC_API_KEY=sk-your-key
export OPENAI_API_KEY=sk-your-key
```
