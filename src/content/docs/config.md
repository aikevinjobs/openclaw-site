---
title: 配置指南
description: 配置 OpenClaw 的模型、渠道和行为
---

## 基本配置

OpenClaw 使用简单的命令行配置：

```bash
# 设置 AI 模型提供商
openclaw config set ai.provider anthropic
openclaw config set ai.apiKey sk-your-key

# 设置网关模式
openclaw config set gateway.mode local
```

## 配置文件

配置存储在 `~/.openclaw/config.json`，你也可以直接编辑：

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

## 常用配置项

| 配置项 | 说明 | 默认值 |
|--------|------|--------|
| `ai.provider` | AI 模型提供商 | `anthropic` |
| `ai.model` | 具体模型 | `claude-sonnet-4-20250514` |
| `gateway.mode` | 网关模式 | `local` |
| `gateway.port` | 网关端口 | `18789` |

## 环境变量

你也可以通过环境变量设置敏感信息：

```bash
export ANTHROPIC_API_KEY=sk-your-key
export OPENAI_API_KEY=sk-your-key
```

## 下一步

- [连接消息渠道](/docs/channels/wechat/)
- [配置 AI 模型](/docs/models/overview/)
