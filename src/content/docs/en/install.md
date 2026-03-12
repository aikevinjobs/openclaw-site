---
title: Installation
description: Step-by-step guide to install OpenClaw AI agent
---

## Requirements

- **Node.js** 22 or higher
- **OS**: macOS, Linux, or Windows

## Quick Install

### Option 1: Install Script (Recommended)

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

### Option 2: npm

```bash
npm install -g openclaw
```

### Option 3: Homebrew (macOS)

```bash
brew install --cask openclaw
```

### Option 4: Docker

```bash
docker run -d --name openclaw openclaw/openclaw
```

## Verify

```bash
openclaw --version
```

## Quick Start

```bash
# Start the gateway
openclaw gateway run

# Add your first chat platform
openclaw channels add telegram --token YOUR_BOT_TOKEN
```

Start chatting with your bot!
