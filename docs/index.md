---
layout: home

hero:
  name: Skills Radar
  text: 追踪 Skills 技术，让 Agent 能力进化有迹可循
  tagline: 基于 skill-insight 全生命周期管理方法论
  image:
    src: /logo.svg
    alt: Skills Radar
  actions:
    - theme: brand
      text: 查看技术雷达 →
      link: /radar/01-taxonomy
    - theme: alt
      text: GitHub
      link: https://github.com/leon-wang2021/skills-radar

features:
  - icon: 🏗️
    title: Skill 生成
    link: /radar/category-01-generation
    details: Trace2Skill · D2Skill · SkillX · Memento-Skills · SKILLRL
  - icon: 🎯
    title: Skill 召回
    link: /radar/category-02-recall
    details: SkillRouter · Graph of Skills · SkillOrchestra · AgentSkillOS
  - icon: ⚙️
    title: Skill 执行
    link: /radar/category-03-execution
    details: SkVM · 渐进式披露 · 执行流图 · Permission Sandboxing
  - icon: 📏
    title: Skill 评测
    link: /radar/category-04-evaluation
    details: skill-insight · SkillsBench · SkillProbe · Cross-Evaluation
  - icon: 🚀
    title: Skill 优化
    link: /radar/category-05-optimization
    details: SkillForge · SkillReducer · skill-insight Optimizer · D2Skill
  - icon: 🛡️
    title: Skill 管理
    link: /radar/category-06-management
    details: AgentSkillOS · SkillNet · RBAC Permission · Git Versioning
---

## 技术地图

Skill 技术贯穿六大生命周期阶段，每个阶段都有代表性技术推动 Agent 能力进化。

### Skill 生成 🔧

从执行轨迹和经验中自动提取、构建可复用的技能。

| 技术 | 描述 | 成熟度 |
|------|------|--------|
| [Trace2Skill](/radar/tech-trace2skill) | 从轨迹中并行分析，归纳推理生成高质量技能 | 🟡 0.52 |
| [D2Skill](/radar/tech-d2skill) | 双粒度动态技能库，策略-技能协同进化 | 🟡 0.52 |
| [SkillX](/radar/tech-skillx) | 三层分层架构，全自动构建可复用 Skill 库 | 🟡 0.45 |
| [Memento-Skills](/radar/tech-memento-skills) | 读写反思闭环，让 Agent 自主设计 Skill | 🔴 0.40 |
| [SKILLRL](/radar/tech-skillrl) | 强化学习驱动，分层技能库自进化 | 🟡 0.45 |

---

### Skill 召回 🎯

从海量技能库中精准匹配最适配的技能。

| 技术 | 描述 | 成熟度 |
|------|------|--------|
| [SkillRouter](/radar/tech-skillrouter) | 两阶段检索-重排，74% Hit@1 | 🟢 0.66 |
| [Graph of Skills](/radar/tech-graph-of-skills) | 依赖图感知，成功率+43.6% | 🟡 0.70 |
| SkillOrchestra | 基于技能的 Agent 路由策略 | 🟢 |
| AgentSkillOS | 生态级规模技能组织与编排 | 🟡 |

---

### Skill 执行 ⚙️

跨模型、跨框架的可移植执行与环境适配。

| 技术 | 描述 | 成熟度 |
|------|------|--------|
| [SkVM](/radar/tech-skvm) | 编译器思维，一次编写到处运行 | 🔴 0.50 |
| 渐进式披露 | 分阶段加载，控制 Token 消耗 | 🟢 |
| 执行流图 | 可视化 Skill 执行路径追踪 | 🟡 |

---

### Skill 评测 📏

多维度量化评估，驱动持续优化。

| 技术 | 描述 | 成熟度 |
|------|------|--------|
| [skill-insight](/radar/tech-skillinsight) | 多维评测、执行追溯、归因分析 | 🟢 0.73 |
| [SkillsBench](/radar/tech-skillsbench) | 16.2% 提升背后的基准测试 | 🟡 0.70 |
| [SkillProbe](/radar/tech-skillprobe) | 安全审计，检测 26% 漏洞率 | 🟡 0.61 |

---

### Skill 优化 🚀

基于评测结果的自动修复与迭代进化。

| 技术 | 描述 | 成熟度 |
|------|------|--------|
| [SkillForge](/radar/tech-skillforge) | 企业级端到端自进化闭环 | 🔴 0.55 |
| [SkillReducer](/radar/tech-skillreducer) | 瘦身 40%，Token 效率优化 | 🔴 0.50 |

---

### Skill 管理 🛡️

版本控制、权限管控与生命周期管理。

| 技术 | 描述 | 成熟度 |
|------|------|--------|
| AgentSkillOS | 生态级技能组织与生命周期管理 | 🟡 |
| SkillNet | 创建、评估与连接 AI 技能 | 🟡 |
| Agent Skills 标准 | 跨平台 Skill 格式与协议标准 | 🟢 |
| Git-based Versioning | 基于 Git 的 Skill 版本控制 | 🟢 |

---

## 技术全景图

```
Skill 生成 ──→ Skill 召回 ──→ Skill 执行 ──→ Skill 评测 ──→ Skill 优化 ──→ Skill 管理
    │              │              │              │              │              │
    ▼              ▼              ▼              ▼              ▼              ▼
 Trace2Skill    SkillRouter       SkVM      skill-insight    SkillForge    AgentSkillOS
 D2Skill       Graph of Skills   渐进式披露  SkillsBench     SkillReducer  SkillNet
 SkillX                                        SkillProbe
 Memento-Skills
 SKILLRL
```

每个阶段的技术都在推动 Agent 能力边界的扩展，共同构建完整的 Skill 生态系统。

---

## 核心资源

- [技术雷达总览](/radar/radar-chart) - 多维成熟度可视化
- [技术分类体系](/radar/01-taxonomy) - 六大阶段详解
- [代表项目调研](/radar/02-projects) - 学术+开源+工业实现
- [技术演进时间线](/radar/04-timeline) - 从 API 插件到 Skill 时代
