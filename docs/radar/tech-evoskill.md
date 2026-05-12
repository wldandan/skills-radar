# EvoSkill

> **分类**: Skill 生成 / Skill 优化 | **成熟度**: 🟡 成长期 | **综合评分**: 0.53

---

## 基本信息

**一句话描述**: **三 Agent 协作**（Executor / Proposer / Skill-Builder）从失败轨迹中自动诊断"卡在哪"并物化为 Skill。

**来源**:
- 工业 + 学术 - Sentient AGI
- 论文 + 开源

**链接**:
- 论文：[arXiv 2603.02766](https://arxiv.org/abs/2603.02766)
- GitHub：[sentient-agi/EvoSkill](https://github.com/sentient-agi/EvoSkill)

---

## 核心技术

### 核心原理

不依赖人类作者，从失败循环中自动生长 Skill：

1. **Executor** 执行任务并记录轨迹
2. **Proposer** 分析失败轨迹，诊断根因（如"Agent 不知道要等 DOM 稳定再抽取"）
3. **Skill-Builder** 将诊断结果物化为结构化 Skill 文件夹

### 关键机制

- **Pareto 前沿选择 + Git 管理** — 每个变体在验证集上跑分，只有在所有维度都不被超越的才保留。每个变体存为独立 Git 分支。
- **关键数字** — 在 **OfficeQA 上 +7.3%、SealQA 上 +12.1%**（验证 Skill 进化对实际任务的提升）。

---

## 技术细节

### 主要能力

- 自动失败归因
- Pareto 多维选择
- Skill 进化历史可追溯

### 局限性

- 依赖 **ground-truth 信号**（必须知道"对了还是错了"才能诊断）
- 在开放式任务（没有明确成功标准）上受限
- 主要在 OfficeQA / SealQA 基准上验证

---

## 成熟度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 技术成熟度 | 0.55 | 论文 + 开源实现 |
| 创新性 | 0.80 | 三 Agent 协作 + Pareto 选择是新颖设计 |
| 落地程度 | 0.35 | 学术验证阶段 |
| 生态活跃度 | 0.40 | Sentient AGI 维护 |

**综合评分**: **0.53**

---

## 参考资料

- [EvoSkill 论文](https://arxiv.org/abs/2603.02766)
- [GitHub](https://github.com/sentient-agi/EvoSkill)
