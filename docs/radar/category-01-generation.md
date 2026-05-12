# Skill 生成（Generation）

> **成熟度**: 🟡 成长期 · **综合评分**: **0.55**
>
> **业界判断**：9 个产品占据**最拥挤**的赛道（失败驱动 / 文档转化 / 会话提取 / 轨迹蒸馏 / 领域工单 / RL 共进化 / GEPA 进化），每条路径都局限于特定输入类型，差异化空间正在缩小。

---

## 业界代表产品

| 产品 | 来源 | 核心路径 | 关键数字 |
|---|---|---|---|
| [Skill Creator](tech-skill-creator) | Anthropic 官方 | 引导式 + Eval 闭环 | 基线通过率 34.1% |
| [Skill Seekers](tech-skill-seekers) | 社区 (13.4K+ ★) | 18 源 → 20 目标 | AI 增强 3/10 → 9/10 |
| [EvoSkill](tech-evoskill) | Sentient AGI (726 ★) | 三 Agent 失败驱动 | **+7.3% OfficeQA / +12.1% SealQA** |
| [EvoSkills / CoEvoSkills](tech-evoskills) | 学术 | Surrogate + Oracle 协同进化 | **75% vs 人工 34.1%** |
| [Claudeception](tech-claudeception) | 社区 (**2.3K+ ★**) | Claude Code 会话提取 | 4 条件提取标准 |
| [Trace2Skill](tech-trace2skill) | 阿里 Qwen + ETH | 并行轨迹蒸馏 | 35B +57.65pp 超 122B |
| [SkillForge](tech-skillforge) | 工业研究 (SIGIR 2026) | 历史工单挖掘 | **1,883 工单 + 5 真实场景** |
| [SkillX](tech-skillx) | 学术 | 三层粒度蒸馏 | 强模型 → 弱模型 |
| **[SkillRL](tech-skillrl)** ★ | aiming-lab | 经验蒸馏 + RL 共进化 | **+15.3% ALFWorld / WebShop** |

---

## 七大数据源覆盖

| 数据源 | 业界覆盖 | 代表产品 |
|---|:---:|---|
| 问题单 / 工单 | ✅ | SkillForge |
| 网页链接 / 在线文档 | ✅ | Skill Seekers |
| 代码仓 / 项目文档 | ✅ | Skill Seekers / OpenSpace |
| Agent 执行轨迹 | ✅ | Trace2Skill / EvoSkill / OpenSpace |
| 会话历史 | ✅ | Claudeception / Hermes |
| 已有的其他 Skill | ✅ | SkillX / OpenSpace（DERIVED） |
| 内部文档（含工具引用） | ✅ | SkillForge |
| 内部文档（含图片 / 流程图） | ❌ | — |
| 代码检视记录 / PR / Issue | ❌ | — |
| 测试用例 / 测试日志 | ❌ | — |
| 零碎代码片段 / 脚本 | ❌ | — |

---

## 行业痛点

### 🟡 自动化生产规模化

每写一个 Skill 要数小时，团队覆盖几十个场景忙不过来。当前 7+ 条自动化路径**各有侧重但都局限于特定输入类型**。

### 🟡 经验跨会话丢失

上周 Agent 解决了一个棘手 Bug，这周遇到类似问题又从零开始 —— Agent 每天"失忆"。Claudeception / SkillNet / OpenSpace / SkillClaw / Hermes 都在解决，但**跨项目、跨团队、跨 Agent 平台的迁移仍受限**。

### 🟡 Skill 关系管理空白

Skill 库里 30 个 Skill 做类似的事，不知道用哪个，也不敢删。SkillNet Ontology 是初步方案，但**动态组合和跨领域迁移仍具挑战性**。

### 🟡 单次生成质量不稳

让 Agent 自己写 Skill 质量时好时坏。EvoSkills 迭代 5 轮通过率 75% —— 仍有 25% 失败。

### 🟡 人机认知失配

人写给 LLM 的 Skill 很大一部分**不是在"帮"LLM 而是在"绊"LLM**。EvoSkills 让 LLM 自己进化 Skill (75% vs 人工 34.1%)，但**自进化 Skill 可解释性较差**。

---

## 主流方法对比

| 方法 | 信号源 | 优势 | 局限 |
|---|---|---|---|
| 失败轨迹分析 | EvoSkill / SkillForge 的执行失败 | 直接针对痛点 | 依赖 ground-truth |
| 协同进化验证 | EvoSkills 的 Surrogate Verifier | 不完全依赖 ground-truth | LLM 自身知识有上限 |
| 并行轨迹池蒸馏 | Trace2Skill | 整体分析避免过拟合 | 冷启动受限 |
| 会话提取 | Claudeception | 隐性知识自动捕获 | 提取质量依赖 LLM 判断 |
| 文档转化 | Skill Seekers | 多源多平台 | 仅处理已有文档 |
| 领域工单挖掘 | SkillForge | 工业场景验证 | 仅限工单数据 |
| RL 共进化 ★ | SkillRL | Skill 库随策略一起学习 | 需要可定义 reward |
