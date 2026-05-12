---
layout: home

hero:
  name: Skills Radar
  text: 业界 Agent Skill 技术真实视图
  tagline: 19 个公开可验证的产品 / 6 大生命周期 / 数据来自论文与开源仓库
  image:
    src: /logo.svg
    alt: Skills Radar
  actions:
    - theme: brand
      text: 查看技术雷达 →
      link: /radar/radar-chart
    - theme: alt
      text: 技术分类
      link: /radar/01-taxonomy

features:
  - icon: 🏗️
    title: Skill 生成 · 0.55 🟡
    link: /radar/category-01-generation
    details: Skill Creator · Skill Seekers · EvoSkill · EvoSkills · Claudeception · Trace2Skill · SkillForge · SkillX
  - icon: 🎯
    title: Skill 召回 · 0.65 🟢
    link: /radar/category-02-recall
    details: SkillRouter · AgentSkillOS · SkillNet · SkillRouter.org
  - icon: ⚙️
    title: Skill 执行 · 0.42 🔴
    link: /radar/category-03-execution
    details: OpenSpace · AgentSkillOS · Memento-Skills
  - icon: 📏
    title: Skill 评测 · 0.45 🟡
    link: /radar/category-04-evaluation
    details: SkillsBench · SkillNet (5 维评分) · EvoSkills · SkillForge (Diagnostician)
  - icon: 🚀
    title: Skill 优化 · 0.58 🟡
    link: /radar/category-05-optimization
    details: OpenSpace · Hermes Self-Evolution · SkillClaw · MetaClaw · SkillReducer · EvoSkill · SkillForge
  - icon: 🛡️
    title: Skill 管理 · 0.32 🔴
    link: /radar/category-06-management
    details: SkillNet · AgentSkillOS · Agent Skills 标准
---

## 这是什么？

**Skills Radar** 是一份关于 **Agent Skill 业界真实方案**的技术地图。所有条目都满足三条之一：

- ✅ 有公开 **arXiv 论文**
- ✅ 有公开 **GitHub 仓库**
- ✅ 有公开 **产品页 / 商业服务**

不收录占位概念、内部能力、未发表的 vision。

---

## 业界三大判断

::: tip 🟢 已成熟：召回
SkillRouter 在 80K 池上达 **74% Hit@1** 并工程化，AgentSkillOS 提供 DAG 编排。**全文检索是不可绕过的必要条件**已成共识。
:::

::: warning 🟡 拥挤但局限：生成 / 优化
8+ 个生成方案、7 个进化框架密集涌现，但每条路径都局限于特定输入或场景。**没有任何进化框架在循环中加入安全扫描**。
:::

::: danger 🔴 攻防最不对称：管理 / 执行
26.1% 社区 Skill 含漏洞（OWASP Top 10 已立项），防御工具几乎为零。SkillsBench 揭示的 16/84 负增益、跨领域增益从 +4.5pp 到 +51.9pp 的差异，核心痛点仍无方案。
:::

---

## 业界代表产品速览

| 产品 | 来源 | 主要阶段 | 关键数字 |
|---|---|---|---|
| [Skill Creator](/radar/tech-skill-creator) | Anthropic | 生成 / 评测 | 基线 34.1% |
| [Skill Seekers](/radar/tech-skill-seekers) | 社区开源 | 生成 / 管理 | 18 → 20 |
| [SkillNet](/radar/tech-skillnet) | 浙大 NLP | 召回 / 评测 / 管理 | 40 万+ Skill |
| [EvoSkill](/radar/tech-evoskill) | Sentient AGI | 生成 / 优化 | Pareto + Git |
| [EvoSkills](/radar/tech-evoskills) | 学术 | 生成 / 评测 | 75% vs 34.1% |
| [SkillX](/radar/tech-skillx) | 学术 | 生成 | 三层粒度 |
| [SkillRouter](/radar/tech-skillrouter) | 学术 | 召回 | 80K, 74% Hit@1 |
| [SkillsBench](/radar/tech-skillsbench) | 学术 | 评测 | 7,308 轨迹 |
| [SkillClaw](/radar/tech-skillclaw) | AMAP-ML | 优化 / 管理 | 多用户聚合 |
| [Memento-Skills](/radar/tech-memento-skills) | 学术 | 执行 / 召回 | GAIA +26.2% |
| [Claudeception](/radar/tech-claudeception) | 社区 (506+ ★) | 生成 | 会话提取 |
| [OpenSpace](/radar/tech-openspace) | HKU (4.7K+ ★) | 执行 / 优化 | 40.8% → 70.8% |
| [SkillForge](/radar/tech-skillforge) | 阿里云 | 生成 / 优化 / 评测 | 阿里云 5 场景 |
| [Hermes Self-Evolution](/radar/tech-hermes-self-evolution) | Nous Research | 优化 / 评测 | ICLR 2026 Oral |
| [Trace2Skill](/radar/tech-trace2skill) | 阿里 Qwen + ETH | 生成 | 35B +57.65pp |
| [SkillReducer](/radar/tech-skillreducer) | 港科大 | 优化 | 55K Skill 实证 |
| [AgentSkillOS](/radar/tech-agentskillos) | 学术 | 召回 / 执行 / 管理 | DAG 编排 |
| [MetaClaw](/radar/tech-metaclaw) | OpenClaw (3.5K+ ★) | 优化 | 21.4% → 40.6% |
| [SkillRouter.org](/radar/tech-skillrouter-org) | 商业产品 | 召回 | MCP 服务 |

---

## 核心资源

- [技术成熟度雷达图](/radar/radar-chart) — 六大阶段的可视化对比
- [技术分类体系](/radar/01-taxonomy) — 六大生命周期阶段定义
- [代表项目调研](/radar/02-projects) — 按阶段聚合的产品索引
- [成熟度评估模型](/radar/03-maturity) — 评分维度与方法论
- [技术演进时间线](/radar/04-timeline) — 论文与产品的发布脉络
