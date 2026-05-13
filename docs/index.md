---
layout: home

hero:
  name: Skills Radar
  text: 技术收录与演进地图
  tagline: 追踪 Skill 技术，让 Agent 能力进化有迹可循
  image:
    src: /logo.svg
    alt: Skills Radar
  actions:
    - theme: brand
      text: 查看技术雷达 →
      link: /radar/01-taxonomy
    - theme: alt
      text: 提交技术
      link: /CONTRIBUTING
---

<div class="home-container">

## 技术收录统计

::: stats-bar
<span class="stat-item">📦 已收录 <strong>13</strong> 个技术</span>
<span class="stat-item">🟢 成熟期 <strong>2</strong></span>
<span class="stat-item">🟡 成长期 <strong>7</strong></span>
<span class="stat-item">🔴 探索期 <strong>4</strong></span>
:::

## 技术地图

### 🏗️ Skill 生成

> 综合评分 0.52 🟡 | 从执行轨迹和经验中自动提取、构建可复用的技能

| 技术 | 描述 | 成熟度 | 链接 |
|------|------|--------|------|
| **Trace2Skill** | 从轨迹中并行分析，归纳推理生成高质量技能 | 🟡 0.52 | [详解](/radar/tech-trace2skill) · [原文](https://zhuanlan.zhihu.com/p/2020916672396051215) · [论文](https://arxiv.org/pdf/2603.25158) |
| **D2Skill** | 双粒度动态技能库，策略-技能协同进化 | 🟡 0.52 | [详解](/radar/tech-d2skill) · [原文](https://zhuanlan.zhihu.com/p/2022678212954657726) · [代码](https://github.com/TU2021/D2Skill-AgenticRL) |
| **SkillX** | 三层分层架构，全自动构建可复用 Skill 库 | 🟡 0.45 | [详解](/radar/tech-skillx) · [代码](https://github.com/zjunlp/SkillX) |
| **Memento-Skills** | 读写反思闭环，让 Agent 自主设计 Skill | 🔴 0.40 | [详解](/radar/tech-memento-skills) · [原文](https://zhuanlan.zhihu.com/p/2027479618127405311) · [代码](https://github.com/Memento-Teams/Memento-Skills) |
| **SKILLRL** | 强化学习驱动，分层技能库自进化 | 🟡 0.45 | [详解](/radar/tech-skillrl) · [代码](https://github.com/aiming-lab/SkillRL) |

---

### 🎯 Skill 召回

> 综合评分 0.66 🟢 | 从海量技能库中精准匹配最适配的技能

| 技术 | 描述 | 成熟度 | 链接 |
|------|------|--------|------|
| **SkillRouter** | 两阶段检索-重排，74% Hit@1 | 🟢 0.66 | [详解](/radar/tech-skillrouter) · [原文](https://zhuanlan.zhihu.com/p/2020593144639562073) · [论文](https://arxiv.org/pdf/2603.22455) |
| **Graph of Skills** | 依赖图感知检索，成功率+43.6% | 🟡 0.70 | [详解](/radar/tech-graph-of-skills) · [原文](https://zhuanlan.zhihu.com/p/2028146364282880663) · [代码](https://github.com/davidliuk/graph-of-skills) |

---

### ⚙️ Skill 执行

> 综合评分 0.54 🟡 | 跨模型、跨框架的可移植执行与环境适配

| 技术 | 描述 | 成熟度 | 链接 |
|------|------|--------|------|
| **SkVM** | 编译器思维，一次编写到处运行 | 🔴 0.50 | [详解](/radar/tech-skvm) · [原文](https://zhuanlan.zhihu.com/p/2025167123694002595) · [论文](https://arxiv.org/pdf/2604.03088) |

---

### 📏 Skill 评测

> 综合评分 0.73 🟢 | 多维度量化评估，驱动持续优化

| 技术 | 描述 | 成熟度 | 链接 |
|------|------|--------|------|
| **skill-insight** | 多维评测、执行追溯、归因分析 | 🟢 0.73 | [详解](/radar/tech-skillinsight) · [官网](https://atomgit.com/openeuler/witty-skill-insight) · [原文](https://zhuanlan.zhihu.com/p/2004914907972401040) |
| **SkillsBench** | 基准测试，人工精选 Skills 提升 16.2% | 🟡 0.70 | [详解](/radar/tech-skillsbench) |
| **SkillProbe** | 安全审计，检测 26% 漏洞率 | 🟡 0.61 | [详解](/radar/tech-skillprobe) · [原文](https://zhuanlan.zhihu.com/p/2020165820400054775) · [论文](https://arxiv.org/pdf/2603.21019) |
| **agent-skills-eval** | with_skill vs without_skill对比评测框架 | 🟡 0.62 | [GitHub](https://github.com/darkrishabh/agent-skills-eval) |

---

### 🚀 Skill 优化

> 综合评分 0.53 🟡 | 基于评测结果的自动修复与迭代进化

| 技术 | 描述 | 成熟度 | 链接 |
|------|------|--------|------|
| **SkillForge** | 企业级端到端自进化闭环 | 🔴 0.55 | [详解](/radar/tech-skillforge) · [原文](https://zhuanlan.zhihu.com/p/2027332205161006631) · [论文](https://arxiv.org/pdf/2604.08618) |
| **SkillReducer** | Token 瘦身 40%，破解低效难题 | 🔴 0.50 | [详解](/radar/tech-skillreducer) · [原文](https://zhuanlan.zhihu.com/p/2023452876459053941) · [论文](https://arxiv.org/pdf/2603.29919) |

---

### 🛡️ Skill 管理

> 综合评分 0.39 🔴 | 版本控制、权限管控与生命周期管理

| 技术 | 描述 | 成熟度 | 链接 |
|------|------|--------|------|
| **AgentSkillOS** | 生态级技能组织与编排 | 🔴 待分析 | 待收录 |
| **SkillNet** | 创建、评估与连接 AI 技能 | 🔴 待分析 | 待收录 |

---

## 技术全景图

```
Skill 生成 ──→ Skill 召回 ──→ Skill 执行 ──→ Skill 评测 ──→ Skill 优化 ──→ Skill 管理
    │              │              │              │              │              │
    ▼              ▼              ▼              ▼              ▼              ▼
 Trace2Skill    SkillRouter       SkVM      skill-insight    SkillForge    AgentSkillOS
 D2Skill       Graph of Skills              SkillsBench     SkillReducer  SkillNet
 SkillX                                        SkillProbe
 Memento-Skills
 SKILLRL
```

## 图例

- 🟢 **成熟期** > 0.6
- 🟡 **成长期** 0.4 - 0.6
- 🔴 **探索期** < 0.4

链接类型：**详解**=站内技术详情页 | **原文**=知乎文章 | **论文**=arXiv | **代码**=GitHub | **官网**=官方项目

</div>

<style scoped>

.home-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.home-container h2 {
  font-size: 14px;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.home-container h3 {
  font-size: 18px;
  margin: 32px 0 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.home-container h3::before {
  content: '';
}

.home-container blockquote {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 12px 16px;
  margin: 8px 0 16px 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  border: none;
}

.home-container blockquote p {
  margin: 0;
}

.home-container table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 8px;
  font-size: 14px;
}

.home-container th {
  text-align: left;
  padding: 10px 12px;
  background: var(--vp-c-bg-soft);
  border-bottom: 2px solid var(--vp-c-divider);
  font-weight: 600;
  font-size: 13px;
}

.home-container td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  vertical-align: top;
}

.home-container tr:hover {
  background: var(--vp-c-bg-soft);
}

.home-container .tech-name {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.home-container .tech-desc {
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.home-container .tech-links {
  white-space: nowrap;
}

.home-container .tech-links a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-size: 13px;
}

.home-container .tech-links a:hover {
  text-decoration: underline;
}

.home-container .tech-links span {
  color: var(--vp-c-text-3);
  font-size: 12px;
  font-style: italic;
}

.home-container pre {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 16px;
  font-size: 13px;
  overflow-x: auto;
  color: var(--vp-c-text-2);
  margin: 24px 0;
}

.home-container .legend {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 16px 24px;
  margin-top: 32px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  text-align: center;
}

.home-container .legend strong {
  color: var(--vp-c-text-1);
}

</style>