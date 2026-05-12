---
layout: home

hero:
  name: Skills Radar
  text: 业界 Agent Skill 技术真实视图
  tagline: 基于 skill-insight 全生命周期管理方法论 · 23 个公开可验证的产品 / 6 大生命周期
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
    details: Skill Creator · Skill Seekers · EvoSkill · EvoSkills · Claudeception · Trace2Skill · SkillForge · SkillX · SkillRL
  - icon: 🎯
    title: Skill 召回 · 0.65 🟢
    link: /radar/category-02-recall
    details: SkillRouter · AgentSkillOS · SkillNet · SkillRouter.org
  - icon: ⚙️
    title: Skill 执行 · 0.45 🟡
    link: /radar/category-03-execution
    details: OpenSpace · AgentSkillOS · Memento-Skills · SkCC
  - icon: 📏
    title: Skill 评测 · 0.47 🟡
    link: /radar/category-04-evaluation
    details: SkillsBench · SkillNet (5 维评分) · EvoSkills · SkillForge (Diagnostician) · SkillRet
  - icon: 🚀
    title: Skill 优化 · 0.59 🟡
    link: /radar/category-05-optimization
    details: OpenSpace · Hermes Self-Evolution · SkillClaw · MetaClaw · SkillReducer · EvoSkill · SkillForge · SkillRL
  - icon: 🛡️
    title: Skill 管理 · 0.40 🟡
    link: /radar/category-06-management
    details: Vercel skills.sh · SkillNet · AgentSkillOS · Agent Skills 标准
---

## 这是什么？

**Skills Radar** 是一份关于 **Agent Skill 业界真实方案**的技术地图，基于 **skill-insight 全生命周期管理方法论**。所有条目都满足三条之一：

- ✅ 有公开 **arXiv 论文**（含 ID + 摘要验证）
- ✅ 有公开 **GitHub 仓库**（含 Star 数验证）
- ✅ 有公开 **产品页 / 商业服务**

所有评分、数字、链接均经过两轮事实核查 —— 不收录占位概念、内部能力、未发表的 vision。

---

## 业界三大判断

::: tip 🟢 已成熟：召回
SkillRouter 在 80K 池上达 **74% Hit@1** 并工程化（1.2B 模型比 16B 基线少 13× 参数、快 5.8×）；SkillRet 17,810 Skill 检索 benchmark 上线。**全文检索是不可绕过的必要条件**已成共识。
:::

::: warning 🟡 拥挤但局限：生成 / 评测 / 执行
9 个生成方案密集涌现，但每条路径都局限于特定输入。**评测过程遵从度和多 Skill 归因仍是结构性空白**。SkCC（SkIR 强类型 IR）刚刚填补了"跨框架可移植性"这一历史空白。
:::

::: danger 🔴 攻防最不对称：管理
26.1% 社区 Skill 含漏洞（OWASP Top 10 已立项），防御工具几乎为零。即便有 skills.sh 90K+ Skill 分发标准、agentskills.io 开放规范，**安全扫描工具仍为零**。
:::

---

## 业界代表产品速览

| 产品 | 来源 | 主要阶段 | 关键数字 |
|---|---|---|---|
| [Skill Creator](/radar/tech-skill-creator) | Anthropic | 生成 / 评测 | 基线 34.1% |
| [Skill Seekers](/radar/tech-skill-seekers) | 社区开源 (13.4K+ ★) | 生成 / 管理 | 18 源 → 20 目标 |
| [SkillNet](/radar/tech-skillnet) | 浙大 NLP | 召回 / 评测 / 管理 | **200K+ Skill** |
| [EvoSkill](/radar/tech-evoskill) | Sentient AGI | 生成 / 优化 | +7.3% OfficeQA / +12.1% SealQA |
| [EvoSkills](/radar/tech-evoskills) | 学术 | 生成 / 评测 | 75% vs 34.1% |
| [SkillX](/radar/tech-skillx) | 学术 | 生成 | 三层粒度 |
| [SkillRL](/radar/tech-skillrl) ★ | aiming-lab | 生成 / 优化 | +15.3% (ALFWorld/WebShop) |
| [SkillRouter](/radar/tech-skillrouter) | 学术 | 召回 | 80K, **74% Hit@1, 13× fewer params** |
| [SkillRet](/radar/tech-skillret) ★ | 学术 | 评测 / 召回 | 17,810 Skill benchmark, NDCG@10 +13.1 |
| [SkillsBench](/radar/tech-skillsbench) | 学术 | 评测 | 7,308 轨迹 / 84 任务 |
| [SkillClaw](/radar/tech-skillclaw) | AMAP-ML | 优化 / 管理 | 多用户聚合 |
| [Memento-Skills](/radar/tech-memento-skills) | 学术 (1.4K+ ★) | 执行 / 召回 | GAIA +26.2% |
| [Claudeception](/radar/tech-claudeception) | 社区 (**2.3K+ ★**) | 生成 | 会话提取 |
| [OpenSpace](/radar/tech-openspace) | HKU (**6.1K+ ★**) | 执行 / 优化 | 40.8% → 70.8% |
| [SkillForge](/radar/tech-skillforge) | 工业研究 (SIGIR 2026) | 生成 / 优化 / 评测 | 1,883 工单 + 5 场景 |
| [Hermes Self-Evolution](/radar/tech-hermes-self-evolution) | Nous Research | 优化 / 评测 | ICLR 2026, parent **145K+ ★** |
| [Trace2Skill](/radar/tech-trace2skill) | 阿里 Qwen + ETH | 生成 | 35B +57.65pp |
| [SkillReducer](/radar/tech-skillreducer) | 港科大 | 优化 | 600 Skill 实证 +2.8% |
| [AgentSkillOS](/radar/tech-agentskillos) | 学术 | 召回 / 执行 / 管理 | DAG 编排 |
| [MetaClaw](/radar/tech-metaclaw) | OpenClaw (3.4K+ ★) | 优化 | 21.4% → 40.6% |
| [SkillRouter.org](/radar/tech-skillrouter-org) | 商业（早期） | 召回 | MCP 服务（落地页阶段）|
| [SkCC](/radar/tech-skcc) ★ | 学术 | 执行 | SkIR 跨框架 IR |
| [Vercel skills.sh](/radar/tech-skills-sh) ★ | Vercel | 管理 / 召回 | **90,000+ Skill / 19 Agent 框架** |

★ = 本次更新新增（基于 2026 Q1-Q2 调研，共 4 项）

---

## 技术全景图

```
       Skill 生成 ──→ Skill 召回 ──→ Skill 执行 ──→ Skill 评测 ──→ Skill 优化 ──→ Skill 管理
           │              │              │              │              │              │
           ▼              ▼              ▼              ▼              ▼              ▼
   Skill Creator     SkillRouter     OpenSpace      SkillsBench    OpenSpace      skills.sh
   Skill Seekers     AgentSkillOS    AgentSkillOS   SkillNet 5维   Hermes         SkillNet
   EvoSkill          SkillNet        Memento-Skills EvoSkills       SkillClaw      AgentSkillOS
   EvoSkills         SkillRouter.org SkCC ★         SkillForge      MetaClaw       Agent Skills 标准
   Claudeception                                    SkillRet ★      SkillReducer
   Trace2Skill                                                      EvoSkill
   SkillForge                                                       SkillForge
   SkillX                                                           SkillRL ★
   SkillRL ★

成熟度:   🟡 0.55        🟢 0.65        🟡 0.45        🟡 0.47        🟡 0.59        🟡 0.40
```

每个阶段的产品都在推动 Agent 能力边界扩展，共同构成完整的 Skill 生态系统。**召回赛道已成熟；生成 / 优化 / 评测 / 执行仍在成长期；管理因安全防御工具空白而面临攻防不对称。**

---

## 核心资源

- [技术成熟度雷达图](/radar/radar-chart) — 六大阶段的可视化对比
- [技术分类体系](/radar/01-taxonomy) — 六大生命周期阶段定义
- [代表项目调研](/radar/02-projects) — 按阶段聚合的产品索引
- [成熟度评估模型](/radar/03-maturity) — 评分维度与方法论
- [技术演进时间线](/radar/04-timeline) — 论文与产品的发布脉络

---

::: info 关于"我们的能力"
本雷达**只列业界产品**。本团队（基于 skill-insight 全生命周期管理方法论）自研的差异化能力（Agent 过程遵从性评测、多维度观测看板、Skill 多版本管理及趋势观测）**不在此页范围**。
:::
