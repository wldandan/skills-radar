# Skill 执行（Execution）

> **成熟度**: 🔴 探索期 · **综合评分**: **0.42**
>
> **业界判断**：EvoSkills 解决了人机认知失配（75% 通过率），但 SkillsBench 揭示的 **16/84 负增益 + 跨领域增益从 +4.5pp 到 +51.9pp 的差异**，核心痛点仍无方案。

---

## 业界代表产品

| 产品 | 来源 | 核心路径 | 关键数字 |
|---|---|---|---|
| [OpenSpace](tech-openspace) | HKU (4.7K+ ★) | MCP Server 即插即用 | 220 任务 40.8% → 70.8% |
| [AgentSkillOS](tech-agentskillos) | 学术 | DAG 并行 / 串行编排 | 30 任务 5 类基准 |
| [Memento-Skills](tech-memento-skills) | 学术 | Read→Execute→Reflect→Write | GAIA +26.2% / HLE +116.2% |

---

## 行业核心痛点

### 🔴 同一 Skill 跨场景效果差异 10×

同类 Skill 在不同领域增益**从 +4.5pp（软件工程）到 +51.9pp（医疗）不等**。使用者在安装一个 Skill 之前**完全无法预判**它在自己的场景上会是正增益还是负增益。

> **没有任何工具能做"Skill - 场景适配度预测"**。SkillNet 的 5 维评分评估的是 Skill 内在质量，不是场景适配度。

### 🔴 负增益（加 Skill 反而更差）

SkillsBench 84 个任务中 **16 个出现负增益** —— Skill 不仅无效反而有害。更糟的是只做 pass/fail 结果评测，**无法判断失败原因**：是 Agent 忽略了 Skill？是 Skill 本身有缺陷？是选错了 Skill？

### 🔴 跨 Agent 框架行为不一致

**完全空白**。同一个 Skill 在 Claude Code 和 OpenCode 上即使格式兼容，执行行为也可能完全不同。Agent Skills 标准只解决"格式兼容"而非"行为一致性"。

### 🟡 跨模型迁移效果不一致

EvoSkills 跨模型实验证明差异确实存在 —— 同一 Skill 在不同模型上效果差异 **+36pp 到 +44pp**。但这些研究都是"发现差异存在"，**没有产品提供持续的模型切换后效果监测**。

### ⚪ 多 Skill 组合执行的失败回滚

一个任务串联三个 Skill，中间某一步失败了整个任务就崩了，**不知道从哪恢复**。AgentSkillOS 的 DAG 定义了执行顺序，但不涉及失败后的回滚和恢复策略。**无专门研究**。
