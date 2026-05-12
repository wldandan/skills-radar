import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Skills Radar',
  description: '基于 skill-insight 全生命周期管理方法论 · Agent Skill 业界真实方案地图（23 个公开可验证的产品 / 6 大生命周期）',
  base: '/skills-radar/',
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#4ECDC4' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: false,  // 不再用 navbar 的 site title，避免与组件内 brand 重复

    nav: [
      { text: 'Landscape', link: '/' },
      { text: 'Stats', link: '/stats' },
      { text: 'GitHub', link: 'https://github.com/wldandan/skills-radar' },
    ],

    sidebar: false,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wldandan/skills-radar' }
    ],

    footer: {
      message: '基于 skill-insight 全生命周期管理方法论 · 数据来自公开论文、开源仓库与产品页',
      copyright: 'MIT License | Skills Radar'
    }
  }
})
