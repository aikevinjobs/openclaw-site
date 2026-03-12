// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://openclaw.cooking",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(),
    starlight({
      title: "OpenClaw",
      description: "让普通人也能用上 AI 智能体 — 一键安装，开箱即用",
      defaultLocale: "root",
      locales: {
        root: { label: "简体中文", lang: "zh-CN" },
        en: { label: "English", lang: "en" },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/openclaw/openclaw",
        },
      ],
      sidebar: [
        {
          label: "快速开始",
          translations: { en: "Getting Started" },
          items: [
            { label: "安装", slug: "install", translations: { en: "Installation" } },
            { label: "配置", slug: "config", translations: { en: "Configuration" } },
          ],
        },
        {
          label: "消息渠道",
          translations: { en: "Channels" },
          items: [
            { label: "微信", slug: "channels/wechat", translations: { en: "WeChat" } },
            { label: "企业微信", slug: "channels/wecom", translations: { en: "WeCom" } },
            { label: "飞书", slug: "channels/feishu", translations: { en: "Feishu / Lark" } },
            { label: "钉钉", slug: "channels/dingtalk", translations: { en: "DingTalk" } },
            { label: "Telegram", slug: "channels/telegram" },
            { label: "WhatsApp", slug: "channels/whatsapp" },
            { label: "Discord", slug: "channels/discord" },
          ],
        },
        {
          label: "AI 模型",
          translations: { en: "AI Models" },
          items: [
            { label: "模型配置", slug: "models/overview", translations: { en: "Model Setup" } },
          ],
        },
        {
          label: "进阶",
          translations: { en: "Advanced" },
          items: [
            { label: "智能体", slug: "advanced/agents", translations: { en: "Agents" } },
            { label: "工具与技能", slug: "advanced/tools", translations: { en: "Tools & Skills" } },
          ],
        },
      ],
      head: [
        {
          tag: "meta",
          attrs: { name: "baidu-site-verification", content: "codeva-XTvXhHvR1M" },
        },
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          content: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "OpenClaw",
            operatingSystem: "macOS, Linux, Windows, iOS, Android",
            applicationCategory: "DeveloperApplication",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        },
      ],
      customCss: ["./src/styles/global.css"],
    }),
  ],
});
