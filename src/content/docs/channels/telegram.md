---
title: Telegram
description: 将 OpenClaw 连接到 Telegram
---

## 概述

Telegram 是全球最受欢迎的开源聊天平台之一，也是 OpenClaw 最简单的接入方式。

## 快速接入

1. 在 Telegram 中找到 @BotFather
2. 发送 `/newbot` 创建一个新机器人
3. 获取 Bot Token

```bash
openclaw channels add telegram --token YOUR_BOT_TOKEN
```

就这么简单！现在给你的机器人发消息试试。

## 支持的功能

- 文字消息
- 图片和文件
- 语音消息
- 群组聊天
- 内联模式
- 命令处理
