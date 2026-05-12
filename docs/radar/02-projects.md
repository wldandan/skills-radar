# Skills 业界代表项目调研

> **版本**: v2.1 · **更新日期**: 2026-05-12
>
> 本表列出业界 **23 个**有公开论文 / 仓库 / 产品页可验证的真实方案。所有条目均不是占位，所有数字均经过两轮事实核查。
>
> ★ = 2026-05 调研新增条目（SkillRL / SkillRet / SkCC / Vercel skills.sh）

---

## 1. Skill 生成（Generation）

| 项目 / 论文 | 来源 | 核心技术 | 链接 |
|---|---|---|---|
| **Skill Creator** | Anthropic 官方 | 引导式 + Eval 闭环 + description 自动优化 | [Anthropic Docs](https://docs.claude.com/en/docs/agents-and-tools/agent-skills) · [详情](tech-skill-creator) |
| **Skill Seekers** | 社区 (13.4K+ ★) | 18 数据源 → 20 目标平台自动适配 | [GitHub](https://github.com/yusufkaraaslan/Skill_Seekers) · [详情](tech-skill-seekers) |
| **EvoSkill** | Sentient AGI (726 ★) | 三 Agent 协作从失败中自动发现 Skill；+7.3% OfficeQA / +12.1% SealQA | [论文](https://arxiv.org/abs/2603.02766) · [GitHub](https://github.com/sentient-agi/EvoSkill) · [详情](tech-evoskill) |
| **EvoSkills / CoEvoSkills** | 学术 | Surrogate Verifier + Oracle 协同进化（75% 通过率） | [论文](https://arxiv.org/abs/2604.01687) · [GitHub](https://github.com/Zhang-Henry/CoEvoSkills) · [详情](tech-evoskills) |
| **Claudeception** | 社区 (**2.3K+ ★**) | Claude Code 会话自动提取「可复用 + 非平凡 + 具体 + 已验证」Skill | [GitHub](https://github.com/blader/Claudeception) · [详情](tech-claudeception) |
| **Trace2Skill** | 阿里 Qwen + ETH | 并行多 sub-agent 编队从轨迹池蒸馏 Skill | [论文](https://arxiv.org/abs/2603.25158) · [详情](tech-trace2skill) |
| **SkillForge** | 工业研究 (SIGIR 2026) | 从历史工单挖掘工具 schema + 三阶段自优化 | [论文](https://arxiv.org/abs/2604.08618) · [详情](tech-skillforge) |
| **SkillX** | 学术 | 策略 / 功能 / 原子三层粒度蒸馏 | [论文](https://arxiv.org/abs/2604.04804) · [详情](tech-skillx) |
| **SkillRL** ★ | aiming-lab | 经验蒸馏 + 自适应检索 + Skill 库与 RL 策略递归共进化 | [论文](https://arxiv.org/abs/2602.08234) · [GitHub](https://github.com/aiming-lab/SkillRL) · [详情](tech-skillrl) |

---

## 2. Skill 召回（Recall / Routing）

| 项目 / 论文 | 来源 | 核心技术 | 链接 |
|---|---|---|---|
| **SkillRouter** | 学术 | 双编码器 + 重排，80K 池 74% Hit@1，1.2B 模型 13× 少参数、5.8× 更快 | [论文](https://arxiv.org/abs/2603.22455) · [GitHub](https://github.com/zhengyanzhao1997/SkillRouter) · [详情](tech-skillrouter) |
| **AgentSkillOS** | 学术 | Capability Tree 递归分类 + DAG 编排 | [论文](https://arxiv.org/abs/2603.02176) · [详情](tech-agentskillos) |
| **SkillNet** | 浙大 NLP (735 ★) | 200K+ Skill 仓库 + Ontology 三层架构 | [论文](https://arxiv.org/abs/2603.04448) · [GitHub](https://github.com/zjunlp/SkillNet) · [详情](tech-skillnet) |
| **SkillRouter.org** | 商业（早期） | MCP 路由服务（落地页阶段） | [官网](https://skillrouter.org/) · [详情](tech-skillrouter-org) |

---

## 3. Skill 执行（Execution）

| 项目 / 论文 | 来源 | 核心技术 | 链接 |
|---|---|---|---|
| **OpenSpace** | HKU (**6.1K+ ★**) | MCP Server 即插即用接入 Claude Code / Codex / Cursor | [GitHub](https://github.com/HKUDS/OpenSpace) · [社区云](https://open-space.cloud/) · [详情](tech-openspace) |
| **AgentSkillOS** | 学术 | DAG 编排，能并行的并行、必须串行的串行 | [论文](https://arxiv.org/abs/2603.02176) · [详情](tech-agentskillos) |
| **Memento-Skills** | 学术 (1.4K+ ★) | Read → Execute → Reflect → Write 闭环 | [论文](https://arxiv.org/abs/2603.18743) · [GitHub](https://github.com/Memento-Teams/Memento-Skills) · [详情](tech-memento-skills) |
| **SkCC** ★ | 学术 | SkIR 强类型 IR：跨 Agent 框架可移植部署（Claude Code +12.2pp / Kimi CLI +13.6pp） | [论文](https://arxiv.org/abs/2605.03353) · [详情](tech-skcc) |

---

## 4. Skill 评测（Evaluation）

| 项目 / 论文 | 来源 | 核心技术 | 链接 |
|---|---|---|---|
| **SkillsBench** | 学术 (1.2K+ ★) | 三条件对比，7,308 条轨迹 / 84 任务 / 11 领域 | [论文](https://arxiv.org/abs/2602.12670) · [GitHub](https://github.com/benchflow-ai/skillsbench) · [详情](tech-skillsbench) |
| **SkillNet 5 维评分** | 浙大 NLP | 安全 / 完整 / 可执行 / 可维护 / 成本 | [论文](https://arxiv.org/abs/2603.04448) · [详情](tech-skillnet) |
| **EvoSkills Surrogate Verifier** | 学术 | 主动生成测试断言 + 结构化失败诊断反馈 | [论文](https://arxiv.org/abs/2604.01687) · [详情](tech-evoskills) |
| **SkillForge Diagnostician** | 工业研究 (SIGIR 2026) | 将执行失败追溯回具体 Skill 缺陷 | [论文](https://arxiv.org/abs/2604.08618) · [详情](tech-skillforge) |
| **SkillRet** ★ | 学术 | Skill 检索大规模基准：17,810 Skill / 63K 训练 / 5K 评测，NDCG@10 +13.1 | [论文](https://arxiv.org/abs/2605.05726) · [详情](tech-skillret) |

---

## 5. Skill 优化（Optimization）

| 项目 / 论文 | 来源 | 核心技术 | 链接 |
|---|---|---|---|
| **OpenSpace** | HKU (**6.1K+ ★**) | FIX / DERIVED / CAPTURED 三模式实时进化 | [GitHub](https://github.com/HKUDS/OpenSpace) · [详情](tech-openspace) |
| **Hermes Self-Evolution** | Nous Research (3.1K+ ★) | GEPA 优化器（ICLR 2026 接收）+ PR 模式人工审核 | [GitHub](https://github.com/NousResearch/hermes-agent-self-evolution) · [详情](tech-hermes-self-evolution) |
| **SkillClaw** | AMAP-ML (1.3K+ ★) | 后台守护进程聚合多用户轨迹进化 Skill | [论文](https://arxiv.org/abs/2604.08377) · [GitHub](https://github.com/AMAP-ML/SkillClaw) · [详情](tech-skillclaw) |
| **MetaClaw** | OpenClaw (3.4K+ ★) | Fast Loop（秒级）+ Slow Loop（小时级）双环 | [论文](https://arxiv.org/abs/2603.17187) · [GitHub](https://github.com/aiming-lab/MetaClaw) · [详情](tech-metaclaw) |
| **SkillReducer** | 港科大 | 静态压缩 + 渐进披露，less-is-more 效应 +2.8% | [论文](https://arxiv.org/abs/2603.29919) · [详情](tech-skillreducer) |
| **EvoSkill (Pareto)** | Sentient AGI (726 ★) | Pareto 前沿选择 + Git 分支管理进化变体 | [论文](https://arxiv.org/abs/2603.02766) · [详情](tech-evoskill) |
| **SkillForge (Optimizer)** | 工业研究 (SIGIR 2026) | Failure Analyzer → Diagnostician → Optimizer | [论文](https://arxiv.org/abs/2604.08618) · [详情](tech-skillforge) |
| **SkillRL** ★ | aiming-lab | Skill 库与 RL 策略递归共进化 | [论文](https://arxiv.org/abs/2602.08234) · [详情](tech-skillrl) |

---

## 6. Skill 管理（Management）

| 项目 / 论文 | 来源 | 核心技术 | 链接 |
|---|---|---|---|
| **Vercel skills.sh** ★ | Vercel (2026-01) | 工业级 Skill 注册中心 + 排行榜 | [官网](https://skills.sh/) · [GitHub](https://github.com/vercel-labs/skills) · [详情](tech-skills-sh) |
| **SkillNet** | 浙大 NLP (735 ★) | 200K+ Skill 集中式知识库 | [论文](https://arxiv.org/abs/2603.04448) · [GitHub](https://github.com/zjunlp/SkillNet) · [详情](tech-skillnet) |
| **AgentSkillOS** | 学术 | 生态级生命周期管理 | [论文](https://arxiv.org/abs/2603.02176) · [详情](tech-agentskillos) |
| **Agent Skills 标准** | 社区开放标准（Anthropic 发起） | 跨平台 Skill 格式与协议，~38+ 产品采用 | [官网](https://agentskills.io/) · [详情](tech-skills-standard) |

---

## 关于"我们的能力"

本文档**只列业界产品**。本团队（基于 skill-insight 全生命周期管理方法论）自研的差异化能力（如 Agent 过程遵从性评测、多维度观测看板、Skill 多版本管理及趋势观测）**不在此页范围**。
