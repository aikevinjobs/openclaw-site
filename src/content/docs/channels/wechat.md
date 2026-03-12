---
title: 微信
description: 将 OpenClaw 连接到微信
---

## 概述

OpenClaw 支持通过微信公众号和小程序接入微信生态，让你的 AI 智能体直接在微信中工作。

## 接入方式

### 微信公众号

1. 注册微信公众号（服务号推荐）
2. 在公众号后台获取 AppID 和 AppSecret
3. 配置服务器地址指向你的 OpenClaw 网关

```bash
openclaw channels add wechat \
  --app-id YOUR_APP_ID \
  --app-secret YOUR_APP_SECRET
```

### 微信小程序

小程序接入提供轻量的对话入口：

```bash
openclaw channels add wechat-mini
```

## 支持的功能

- 文字消息收发
- 图片消息（AI 可以识别图片内容）
- 语音消息（自动转文字）
- 客服消息接口
- 模板消息推送

## 注意事项

- 微信公众号需要经过认证才能使用高级接口
- 小程序需要在微信开放平台注册
- 确保你的服务器可以被微信服务器访问（需要公网 IP 或内网穿透）
