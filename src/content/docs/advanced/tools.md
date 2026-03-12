---
title: 工具与技能
description: 扩展 OpenClaw 智能体的能力
---

## 内置工具

OpenClaw 内置了多种实用工具：

| 工具 | 功能 |
|------|------|
| 命令执行 | 在服务器上安全执行命令 |
| 网络搜索 | 搜索实时信息 |
| 天气查询 | 获取天气预报 |
| 日历管理 | 查看和创建日程 |
| 邮件收发 | 读取和发送邮件 |
| 文件处理 | 读写和转换文件 |

## 自定义技能

你可以创建自己的技能来扩展智能体的能力：

```bash
openclaw skill create my-skill
```

技能是一段描述 + 工具的组合，告诉 AI 在什么情况下使用什么工具。

## Webhook

通过 Webhook 将 OpenClaw 与其他服务连接：

```bash
openclaw webhook create --url https://your-service.com/hook
```

## 示例：天气查询技能

```yaml
name: weather
description: 查询指定城市的天气
trigger: 当用户询问天气时
tools:
  - web_search
template: |
  请查询 {city} 的天气，返回温度、湿度和天气状况。
```
