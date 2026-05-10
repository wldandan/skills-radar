# Skills Radar

> 追踪 Skills 技术，让 Agent 能力进化有迹可循

[![Deploy to GitHub Pages](https://github.com/leon-wang2021/skills-radar/actions/workflows/deploy.yml/badge.svg)](https://github.com/leon-wang2021/skills-radar/actions/workflows/deploy.yml)

## 在线访问

**https://leon-wang2021.github.io/skills-radar/**

## 项目目标

**Skills Radar** 是一个系统性追踪 Agent Skills 技术发展的平台，基于 [skill-insight](https://atomgit.com/openeuler/witty-skill-insight) 的 Skill 全生命周期管理方法论，建立 Skills 技术分类体系和可视化展示。

### 核心功能

1. **Skills 技术雷达**：按照 Skills 技术发展，收录最新技术，按生命周期分类
2. **技术成熟度评估**：多维度评估各技术领域的成熟度
3. **演进时间线**：展示技术从概念到成熟的演进历程

## 技术分类体系

基于 skill-insight 的 Skill 全生命周期管理方法论，Skills 技术分为六大阶段：

| 阶段 | 成熟度 | 说明 |
|------|--------|------|
| Skill 生成 | 🟡 成长期 | Trace2Skill、D2Skill、Skill Creator 2.0 |
| Skill 召回 | 🟢 成熟期 | SkillRouter、Graph of Skills |
| Skill 执行 | 🟡 成长期 | 渐进式披露、SkVM、执行流图 |
| Skill 评测 | 🟢 成熟期 | skill-insight、SkillsBench |
| Skill 优化 | 🟡 成长期 | SkillForge、Iterative Optimizer |
| Skill 管理 | 🔴 探索期 | AgentSkillOS、Skills 标准 |

## 本地开发

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建
npm run build

# 预览
npm run preview
```

## 项目结构

```
skills-radar/
├── docs/                      # VitePress 文档
│   ├── index.md               # 首页
│   ├── .vitepress/            # VitePress 配置
│   │   └── config.ts
│   ├── radar/                 # 技术雷达
│   │   ├── 01-taxonomy.md
│   │   ├── 02-projects.md
│   │   ├── 03-maturity.md
│   │   ├── 04-timeline.md
│   │   └── category-*.md
│   └── assets/                # 静态资源
│       └── radar-data.json
├── .github/workflows/         # GitHub Actions
│   └── deploy.yml
└── package.json
```

## 参考资料

- [Agent Skills洞察与实践 - tech-blog 专栏](https://zhuanlan.zhihu.com/p/2028505867184612884)
- [witty-skill-insight 项目](https://atomgit.com/openeuler/witty-skill-insight)
- [SKILLRL GitHub](https://github.com/aiming-lab/SkillRL)

## License

MIT
