---
title: 企业微信
description: 将 OpenClaw 连接到企业微信
---

## 概述

企业微信是企业内部通讯的首选，OpenClaw 可以作为企业微信群机器人为团队服务。

## 快速接入

1. 在企业微信管理后台创建应用
2. 获取 CorpID、AgentID 和 Secret
3. 配置回调地址

```bash
openclaw channels add wecom \
  --corp-id YOUR_CORP_ID \
  --agent-id YOUR_AGENT_ID \
  --secret YOUR_SECRET
```

## 支持的功能

- 单聊和群聊消息
- 群机器人 Webhook
- 事件回调（用户进群、退群等）
- 组织架构查询
- 消息卡片推送
