# OpenClaw Site

OpenClaw 官方网站，基于 Astro 框架构建，包含营销落地页和 Starlight 文档站。

## 技术栈

- **框架**: Astro 6 + TypeScript (strict)
- **文档**: @astrojs/starlight 0.38
- **样式**: Tailwind CSS 4 (通过 @tailwindcss/vite 插件)
- **SEO**: @astrojs/sitemap, 结构化数据 (JSON-LD), Open Graph, hreflang
- **图片处理**: sharp
- **站点域名**: https://openclaw.cc

## 项目结构

```
src/
├── assets/              # 静态资源 (图片等)
├── components/          # Astro 组件
│   ├── BaseLayout.astro # 落地页基础布局 (含 SEO meta、OG、hreflang)
│   ├── Navbar.astro     # 导航栏 (支持 lang 参数切换中英文)
│   └── Footer.astro     # 页脚 (支持 lang 参数切换中英文)
├── content/
│   └── docs/            # Starlight 文档 (Markdown)
│       ├── install.md, config.md          # 快速开始
│       ├── channels/                      # 消息渠道 (wechat, wecom, feishu, dingtalk, telegram, whatsapp, discord)
│       ├── models/                        # AI 模型配置
│       ├── advanced/                      # 进阶 (agents, tools)
│       └── en/                            # 英文文档 (镜像同结构)
├── pages/               # 落地页路由
│   ├── index.astro      # 中文首页
│   ├── download.astro   # 下载页
│   ├── integrations.astro # 集成页
│   ├── cases.astro      # 案例页
│   └── en/              # 英文版落地页 (镜像同结构)
├── styles/
│   └── global.css       # 全局样式
└── content.config.ts    # Starlight 内容集合配置
```

## 国际化 (i18n)

- 默认语言: 中文 (zh-CN)，路径为根路径 `/`
- 英文: 路径前缀 `/en/`
- 落地页: 中英文各有独立的 `.astro` 文件
- 文档: Starlight 内置 i18n，英文文档放在 `docs/en/` 目录下
- 组件通过 `lang` prop 切换中英文内容

## 常用命令

```bash
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本 (输出到 dist/)
npm run preview  # 预览构建结果
```

## 配置

- `astro.config.mjs` — Astro 主配置，包含 Starlight sidebar 定义、i18n 设置、SEO head 标签
- `tsconfig.json` — TypeScript 配置，继承 astro/tsconfigs/strict
