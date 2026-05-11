import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Skills Radar',
  description: '追踪 Skills 技术，让 Agent 能力进化有迹可循',
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
          text: '具体技术详解',
          items: [
            { text: 'skill-insight', link: '/radar/tech-skillinsight' },
            { text: 'SkillRouter', link: '/radar/tech-skillrouter' },
            { text: 'Graph of Skills', link: '/radar/tech-graph-of-skills' },
            { text: 'Trace2Skill', link: '/radar/tech-trace2skill' },
            { text: 'D2Skill', link: '/radar/tech-d2skill' },
            { text: 'SkillX', link: '/radar/tech-skillx' },
            { text: 'SkVM', link: '/radar/tech-skvm' },
            { text: 'SkillProbe', link: '/radar/tech-skillprobe' },
            { text: 'SkillForge', link: '/radar/tech-skillforge' },
            { text: 'SkillReducer', link: '/radar/tech-skillreducer' },
            { text: 'Memento-Skills', link: '/radar/tech-memento-skills' },
            { text: 'SkillsBench', link: '/radar/tech-skillsbench' },
            { text: 'SKILLRL', link: '/radar/tech-skillrl' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wldandan/skills-radar' }
    ],

    footer: {
      message: '基于 skill-insight 全生命周期管理方法论',
      copyright: 'MIT License | Skills Radar'
    }
  }
})
