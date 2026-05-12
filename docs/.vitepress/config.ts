import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Skills Radar',
  description: 'Agent Skill 业界真实方案地图 · 19 个公开可验证的产品 / 6 大生命周期',
  base: '/skills-radar/',
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#4ECDC4' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Skills Radar',

    nav: [
      { text: '首页', link: '/' },
      { text: '技术雷达', link: '/radar/' },
      { text: '技术分类', link: '/radar/category-01-generation' },
      { text: 'GitHub', link: 'https://github.com/wldandan/skills-radar' },
    ],

    sidebar: {
      '/radar/': [
        {
          text: '技术雷达',
          items: [
            { text: '技术分类体系', link: '/radar/01-taxonomy' },
            { text: '成熟度雷达图', link: '/radar/radar-chart' },
            { text: '代表项目调研', link: '/radar/02-projects' },
            { text: '成熟度评估模型', link: '/radar/03-maturity' },
            { text: '技术演进时间线', link: '/radar/04-timeline' },
          ]
        },
        {
          text: '技术分类目录',
          items: [
            { text: 'Skill 生成', link: '/radar/category-01-generation' },
            { text: 'Skill 召回', link: '/radar/category-02-recall' },
            { text: 'Skill 执行', link: '/radar/category-03-execution' },
            { text: 'Skill 评测', link: '/radar/category-04-evaluation' },
            { text: 'Skill 优化', link: '/radar/category-05-optimization' },
            { text: 'Skill 管理', link: '/radar/category-06-management' },
          ]
        },
        {
          text: '业界产品详解 · 生成',
          collapsed: true,
          items: [
            { text: 'Skill Creator (Anthropic)', link: '/radar/tech-skill-creator' },
            { text: 'Skill Seekers', link: '/radar/tech-skill-seekers' },
            { text: 'EvoSkill', link: '/radar/tech-evoskill' },
            { text: 'EvoSkills / CoEvoSkills', link: '/radar/tech-evoskills' },
            { text: 'Claudeception', link: '/radar/tech-claudeception' },
            { text: 'Trace2Skill', link: '/radar/tech-trace2skill' },
            { text: 'SkillX', link: '/radar/tech-skillx' },
          ]
        },
        {
          text: '业界产品详解 · 召回',
          collapsed: true,
          items: [
            { text: 'SkillRouter', link: '/radar/tech-skillrouter' },
            { text: 'AgentSkillOS', link: '/radar/tech-agentskillos' },
            { text: 'SkillNet', link: '/radar/tech-skillnet' },
            { text: 'SkillRouter.org', link: '/radar/tech-skillrouter-org' },
          ]
        },
        {
          text: '业界产品详解 · 执行',
          collapsed: true,
          items: [
            { text: 'OpenSpace', link: '/radar/tech-openspace' },
            { text: 'Memento-Skills', link: '/radar/tech-memento-skills' },
          ]
        },
        {
          text: '业界产品详解 · 评测 / 优化',
          collapsed: true,
          items: [
            { text: 'SkillsBench', link: '/radar/tech-skillsbench' },
            { text: 'Hermes Self-Evolution', link: '/radar/tech-hermes-self-evolution' },
            { text: 'SkillClaw', link: '/radar/tech-skillclaw' },
            { text: 'MetaClaw', link: '/radar/tech-metaclaw' },
            { text: 'SkillReducer', link: '/radar/tech-skillreducer' },
            { text: 'SkillForge', link: '/radar/tech-skillforge' },
          ]
        },
        {
          text: '业界产品详解 · 管理',
          collapsed: true,
          items: [
            { text: 'Agent Skills 标准', link: '/radar/tech-skills-standard' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wldandan/skills-radar' }
    ],

    footer: {
      message: 'Agent Skill 业界真实方案地图 · 数据来自公开论文、开源仓库与产品页',
      copyright: 'MIT License | Skills Radar'
    }
  }
})
