---
title: 安装指南
description: 一步步安装 OpenClaw AI 智能体
---

## 系统要求

- **Node.js** 22 或更高版本
- **操作系统**: macOS、Linux 或 Windows

## 快速安装

### 方式一：一键脚本（推荐）

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

### 方式二：npm 安装

```bash
npm install -g openclaw
```

### 方式三：Homebrew (macOS)

```bash
brew install --cask openclaw
```

### 方式四：Docker

```bash
docker run -d --name openclaw openclaw/openclaw
```

## 验证安装

```bash
openclaw --version
```

## 快速启动

安装完成后，运行以下命令启动网关：

```bash
openclaw gateway run
```

然后添加你的第一个聊天平台：

```bash
openclaw channels add telegram
```

按照提示输入 Bot Token，就可以开始使用了！

## 下一步

- [配置指南](/docs/config/) — 自定义你的 AI 智能体
- [消息渠道](/docs/channels/wechat/) — 连接微信、飞书等平台
- [AI 模型](/docs/models/overview/) — 选择和配置 AI 模型
