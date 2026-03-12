---
title: AI 模型配置
description: 配置 OpenClaw 使用的 AI 模型
---

## 支持的模型

OpenClaw 支持以下 AI 模型提供商：

| 提供商 | 模型 | 特点 |
|--------|------|------|
| Anthropic | Claude Opus, Sonnet, Haiku | 推理能力强，安全性高 |
| OpenAI | GPT-4, GPT-5, o1 | 业界标杆 |
| Google | Gemini Pro, Ultra | 多模态能力强 |
| DeepSeek | DeepSeek V3 | 性价比极高 |
| xAI | Grok | 实时联网 |
| 阿里云 | 通义千问 | 中文能力优秀 |
| Ollama | Llama, Mistral 等 | 本地运行，完全隐私 |

## 快速配置

### 使用 Anthropic Claude（推荐）

```bash
openclaw config set ai.provider anthropic
openclaw config set ai.apiKey sk-ant-your-key
openclaw config set ai.model claude-sonnet-4-20250514
```

### 使用 OpenAI

```bash
openclaw config set ai.provider openai
openclaw config set ai.apiKey sk-your-key
openclaw config set ai.model gpt-4
```

### 使用 DeepSeek

```bash
openclaw config set ai.provider deepseek
openclaw config set ai.apiKey your-key
```

### 使用本地模型 (Ollama)

```bash
# 先安装 Ollama
curl -fsSL https://ollama.ai/install.sh | sh
ollama pull llama3

# 配置 OpenClaw 使用 Ollama
openclaw config set ai.provider ollama
openclaw config set ai.model llama3
```

## 模型切换

随时切换模型，不需要重启：

```bash
openclaw config set ai.model claude-opus-4-20250514
```
