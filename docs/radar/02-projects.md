# Skills 业界代表项目调研

> **版本**: v2.0 · **更新日期**: 2026-05-12
>
> 本表列出业界 19 个有公开论文 / 仓库 / 产品页可验证的真实方案。所有条目均不是占位。

---

## 1. Skill 生成（Generation）

| 项目 / 论文 | 来源 | 核心技术 | 链接 |
|---|---|---|---|
| **Skill Creator** | Anthropic 官方 | 引导式 + Eval 闭环 + description 自动优化 | [GitHub](https://github.com/anthropics/courses/tree/master/skill-creator) · [详情](tech-skill-creator) |
| **Skill Seekers** | 社区开源 | 18 数据源 → 20 平台格式自动适配 | [GitHub](https://github.com/yusufkaraaslan/Skill_Seekers) · [详情](tech-skill-seekers) |
| **EvoSkill** | Sentient AGI | 三 Agent 协作从失败中自动发现 Skill | [论文](https://arxiv.org/abs/2603.02766) · [GitHub](https://github.com/sentient-agi/EvoSkill) · [详情](tech-evoskill) |
| **EvoSkills / CoEvoSkills** | 学术 | Surrogate Verifier + Oracle 协同进化（75% 通过率） | [论文](https://arxiv.org/abs/2604.01687) · [GitHub](https://github.com/Zhang-Henry/CoEvoSkills) · [详情](tech-evoskills) |
| **Claudeception** | 社区 (506+ ★) | Claude Code 会话自动提取「可复用 + 非平凡 + 具体 + 已验证」Skill | [GitHub](https://github.com/blader/Claudeception) · [详情](tech-claudeception) |
| **Trace2Skill** | 阿里 Qwen + ETH | 并行多 sub-agent 编队从轨迹池蒸馏 Skill | [论文](https://arxiv.org/abs/2603.25158) · [详情](tech-trace2skill) |
| **SkillForge** | 阿里云 | 从历史工单挖掘工具 schema + 三阶段自优化 | [论文](https://arxiv.org/abs/2604.08618) · [详情](tech-skillforge) |
| **SkillX** | 学术 | 策略 / 功能 / 原子三层粒度蒸馏 | [论文](https://arxiv.org/abs/2604.04804) · [详情](tech-skillx) |

---

## 2. Skill 召回（Recall / Routing）

| 项目 / 论文 | 来源 | 核心技术 | 链接 |
|---|---|---|---|
| **SkillRouter** | 学术 | 双编码器 + 重排，80K 池 74% Hit@1 | [论文](https://arxiv.org/abs/2603.22455) · [GitHub](https://github.com/zhengyanzhao1997/SkillRouter) · [详情](tech-skillrouter) |
| **AgentSkillOS** | 学术 | Capability Tree 递归分类 + DAG 编排 | [论文](https://arxiv.org/abs/2603.02176) · [详情](tech-agentskillos) |
| **SkillNet** | 浙大 NLP | 40 万+ Skill 仓库 + Ontology 三层架构 | [论文](https://arxiv.org/abs/2603.04448) · [GitHub](https://github.com/zjunlp/SkillNet) · [详情](tech-skillnet) |
| **SkillRouter.org** | 社区产品 | 即插即用 MCP 路由商业服务 | [官网](https://skillrouter.org/) · [详情](tech-skillrouter-org) |

---

## 3. Skill 执行（Execution）

| 项目 / 论文 | 来源 | 核心技术 | 链接 |
|---|---|---|---|
| **OpenSpace** | HKU (4.7K+ ★) | MCP Server 即插即用接入 Claude Code / Codex / Cursor | [GitHub](https://github.com/HKUDS/OpenSpace) · [社区云](https://open-space.cloud/) · [详情](tech-openspace) |
| **AgentSkillOS** | 学术 | DAG 编排，能并行的并行、必须串行的串行 | [论文](https://arxiv.org/abs/2603.02176) · [详情](tech-agentskillos) |
| **Memento-Skills** | 学术 | Read → Execute → Reflect → Write 闭环 | [论文](https://arxiv.org/abs/2603.18743) · [GitHub](https://github.com/Memento-Teams/Memento-Skills) · [详情](tech-memento-skills) |

---

## 4. Skill 评测（Evaluation）

| 项目 / 论文 | 来源 | 核心技术 | 链接 |
|---|---|---|---|
| **SkillsBench** | 学术 | 三条件对比，7,308 条轨迹 / 84 任务 / 11 领域 | [论文](https://arxiv.org/abs/2602.12670) · [GitHub](https://github.com/benchflow-ai/skillsbench) · [详情](tech-skillsbench) |
| **SkillNet 5 维评分** | 浙大 NLP | 安全 / 完整 / 可执行 / 可维护 / 成本 | [论文](https://arxiv.org/abs/2603.04448) · [详情](tech-skillnet) |
| **EvoSkills Surrogate Verifier** | 学术 | 主动生成测试断言 + 结构化失败诊断反馈 | [论文](https://arxiv.org/abs/2604.01687) · [详情](tech-evoskills) |
| **SkillForge Diagnostician** | 阿里云 | 将执行失败追溯回具体 Skill 缺陷 | [论文](https://arxiv.org/abs/2604.08618) · [详情](tech-skillforge) |

---

## 5. Skill 优化（Optimization）

| 项目 / 论文 | 来源 | 核心技术 | 链接 |
|---|---|---|---|
| **OpenSpace** | HKU (4.7K+ ★) | FIX / DERIVED / CAPTURED 三模式实时进化 | [GitHub](https://github.com/HKUDS/OpenSpace) · [详情](tech-openspace) |
| **Hermes Self-Evolution** | Nous Research | GEPA 优化器（ICLR 2026 Oral）+ PR 模式人工审核 | [GitHub](https://github.com/NousResearch/hermes-agent-self-evolution) · [详情](tech-hermes-self-evolution) |
| **SkillClaw** | AMAP-ML | 后台守护进程聚合多用户轨迹进化 Skill | [论文](https://arxiv.org/abs/2604.08377) · [GitHub](https://github.com/AMAP-ML/SkillClaw) · [详情](tech-skillclaw) |
| **MetaClaw** | OpenClaw (3.5K+ ★) | Fast Loop（秒级）+ Slow Loop（小时级）双环 | [论文](https://arxiv.org/abs/2603.17187) · [GitHub](https://github.com/aiming-lab/MetaClaw) · [详情](tech-metaclaw) |
| **SkillReducer** | 港科大 | 静态压缩 + 渐进披露，less-is-more 效应 +2.8% | [论文](https://arxiv.org/abs/2603.29919) · [详情](tech-skillreducer) |
| **EvoSkill (Pareto)** | Sentient AGI | Pareto 前沿选择 + Git 分支管理进化变体 | [论文](https://arxiv.org/abs/2603.02766) · [详情](tech-evoskill) |
| **SkillForge (Optimizer)** | 阿里云 | Failure Analyzer → Diagnostician → Optimizer | [论文](https://arxiv.org/abs/2604.08618) · [详情](tech-skillforge) |

---

## 6. Skill 管理（Management）

| 项目 / 论文 | 来源 | 核心技术 | 链接 |
|---|---|---|---|
| **SkillNet** | 浙大 NLP | 40 万+ Skill 集中式知识库 | [论文](https://arxiv.org/abs/2603.04448) · [GitHub](https://github.com/zjunlp/SkillNet) · [详情](tech-skillnet) |
| **AgentSkillOS** | 学术 | 生态级生命周期管理 | [论文](https://arxiv.org/abs/2603.02176) · [详情](tech-agentskillos) |
| **Agent Skills 标准** | 社区开放标准 | 跨平台 Skill 格式与协议 | [官网](https://agentskills.io/) · [详情](tech-skills-standard) |

---

## 关于"我们的能力"

本文档**只列业界产品**。本团队自研的差异化能力（如 Agent 过程遵从性评测、多维度观测看板、Skill 多版本管理及趋势观测）不在此页范围。
