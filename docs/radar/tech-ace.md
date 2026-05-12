# ACE (Agentic Context Engineering)

> **分类**: Skill 优化 / Skill 生成 | **成熟度**: 🟢 成熟期 | **综合评分**: 0.66

---

## 基本信息

**一句话描述**: 把 LLM 的 context 当作**演化的 playbook** —— 生成 / 反思 / 策展三阶段防止 context 崩溃 + 保留细节知识。**+10.6% 智能体任务 / +8.6% 金融任务**。

**来源**:
- 学术研究（Stanford + 多家合作）
- ICLR 2026 接收

**链接**:
- 论文：[arXiv 2510.04618](https://arxiv.org/abs/2510.04618)
- 标题：*Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models*
- 作者：Qizheng Zhang, Changran Hu, Shubhangi Upasani, ... James Zou, Kunle Olukotun（共 13 人）
- 提交：2025-10-06；最新版：2026-03-29（v3）

---

## 核心技术

### 三阶段模块化流水线

1. **Generation（生成）** — 基于当前 context 产出 trajectory
2. **Reflection（反思）** — 提取该次执行中的可复用经验
3. **Curation（策展）** — 把经验增量地写回 context（不覆盖也不爆炸）

### 关键洞察

不是无脑追加（会爆炸），也不是覆写（会丢细节），而是**结构化、增量更新**的 context 演化。Context 被视为持续生长的 **playbook**。

### 实证结果

| 任务 | 提升 |
|---|---|
| **智能体任务** | **+10.6%** |
| **金融任务** | **+8.6%** |

无需标注数据，纯靠 reflection 自监督。

---

## 技术细节

### 为什么对 Skills 重要

ACE 提出的方法直接适用于 Skill 演化：把 Skill body 当作 playbook，用生成 / 反思 / 策展循环演化它。这是 2026 Q1 大量 Skill 优化论文的方法论基础。

### 局限性

- 论文未直接使用 "Skill" 一词，需要类比迁移到 Skill 场景
- Reflection 质量依赖 LLM 自身能力上限
- 与传统的 GEPA / DSPy 相比偏向 context engineering 而非 prompt optimization

---

## 成熟度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 技术成熟度 | 0.65 | ICLR 2026 接收 + 3 个版本迭代 |
| 创新性 | 0.85 | "context as playbook"是范式级抽象 |
| 落地程度 | 0.50 | 学术 + 部分商业实现（kayba.ai 等） |
| 生态活跃度 | 0.65 | 被 2026 Q1 工作大量引用 |

**综合评分**: **0.66**

---

## 参考资料

- [ACE 论文 (arXiv 2510.04618)](https://arxiv.org/abs/2510.04618)
