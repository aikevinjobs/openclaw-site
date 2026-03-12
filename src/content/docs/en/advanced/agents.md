---
title: Agents
description: Understanding OpenClaw agent architecture
---

## What are Agents

OpenClaw agents go beyond chatbots:

- Understand context and intent
- Call tools to complete real tasks
- Remember conversation history
- Coordinate across multiple platforms

## Multi-Agent

Run multiple agents with different roles:

```bash
openclaw agent create --name support \
  --prompt "You are a helpful customer support agent"

openclaw agent create --name translator \
  --prompt "You translate messages between English and Chinese"
```
