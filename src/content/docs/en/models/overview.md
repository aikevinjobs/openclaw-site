---
title: AI Models
description: Configure AI models for OpenClaw
---

## Supported Models

| Provider | Models | Highlights |
|----------|--------|-----------|
| Anthropic | Claude Opus, Sonnet, Haiku | Strong reasoning |
| OpenAI | GPT-4, GPT-5, o1 | Industry standard |
| Google | Gemini Pro, Ultra | Strong multimodal |
| DeepSeek | DeepSeek V3 | Great value |
| xAI | Grok | Real-time web access |
| Ollama | Llama, Mistral, etc. | Local, fully private |

## Quick Setup

### Anthropic Claude (Recommended)

```bash
openclaw config set ai.provider anthropic
openclaw config set ai.apiKey sk-ant-your-key
```

### OpenAI

```bash
openclaw config set ai.provider openai
openclaw config set ai.apiKey sk-your-key
```

### Local Models (Ollama)

```bash
curl -fsSL https://ollama.ai/install.sh | sh
ollama pull llama3
openclaw config set ai.provider ollama
openclaw config set ai.model llama3
```
