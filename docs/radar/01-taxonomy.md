---
title: Skills 技术分类体系
---

# Skills 技术分类体系

> **版本**: v2.0 · **更新日期**: 2026-05-12 · **状态**: 业界真实产品视图

---

## 一、6 大生命周期阶段

| 阶段 | 英文 | 核心问题 |
|---|---|---|
| Skill 生成 | Generation | 如何高效构建高质量 Skill？ |
| Skill 召回 | Recall / Routing | 如何精准匹配用户意图与 Skill？ |
| Skill 执行 | Execution | 如何高效、稳定、可控地执行 Skill？ |
| Skill 评测 | Evaluation | 如何量化评估 Skill 的效果？ |
| Skill 优化 | Optimization | 如何基于数据持续改进 Skill？ |
| Skill 管理 | Management | 如何治理大规模 Skill 库？ |

---

## 二、业界成熟度总览

| 阶段 | 成熟度 | 综合评分 | 代表产品 |
|---|---|:---:|---|
| [Skill 召回](category-02-recall) | 🟢 成熟期 | **0.65** | SkillRouter · AgentSkillOS · SkillNet |
| [Skill 优化](category-05-optimization) | 🟢 成熟期（边界） | **0.60** | OpenSpace · **ACE** · Hermes · SkillClaw · MetaClaw |
| [Skill 生成](category-01-generation) | 🟡 成长期 | **0.55** | Skill Creator · Skill Seekers · EvoSkills · Trace2Skill · **SkillRL** |
| [Skill 评测](category-04-evaluation) | 🟡 成长期 | **0.47** | SkillsBench · SkillNet · EvoSkills · **SkillRet** · SkillForge |
| [Skill 执行](category-03-execution) | 🟡 成长期 | **0.45** | OpenSpace · AgentSkillOS · Memento-Skills · **SkCC** |
| [Skill 管理](category-06-management) | 🟡 成长期（边界） | **0.40** | **Vercel skills.sh** · SkillNet · AgentSkillOS · Agent Skills 标准 |

---

## 三、各阶段简介

### 3.1 Skill 生成

**定义**：从多源数据（文档 / 工单 / 轨迹 / 会话）中提取知识，转化为标准化的可复用 Skill。

**主流路径**：失败驱动 · 文档转化 · 会话提取 · 轨迹蒸馏 · 领域工单挖掘 · GEPA 进化

[查看完整技术文档 →](category-01-generation)

### 3.2 Skill 召回

**定义**：从 Skill 库中精准匹配最优 Skill（或多 Skill 组合）以满足用户意图。

**关键结论**：SkillRouter 实证证明**全文检索是不可绕过的必要条件**（隐藏 Skill body 后准确率暴跌 31-44pp）。

[查看完整技术文档 →](category-02-recall)

### 3.3 Skill 执行

**定义**：按 Skill 定义的逻辑完成全链路运行、状态管控与异常处理。

**核心痛点**：跨场景适配度无法预判（领域差异 10×）、负增益归因空白。**SkCC 已破局跨框架可移植性**（SkIR 强类型 IR）。

[查看完整技术文档 →](category-03-execution)

### 3.4 Skill 评测

**定义**：构建可量化、可复现的多维度指标，衡量 Skill 的效果、效率与安全性。

**最大缺口**：**过程遵从度评测**和**多 Skill 归因**完全空白 —— 所有评测都是 pass/fail 结果导向的黑盒。

[查看完整技术文档 →](category-04-evaluation)

### 3.5 Skill 优化

**定义**：基于执行数据、评测结果与用户反馈的持续迭代闭环。

**进化信号源分化**：失败轨迹 · 协同进化 · 并行轨迹池 · 多用户经验 · 双环架构 · DSPy + GEPA · 三模式实时进化。

[查看完整技术文档 →](category-05-optimization)

### 3.6 Skill 管理

**定义**：面向大规模 Skill 库的版本、安全、权限、治理体系。

**最大盲点**：26.1% 社区 Skill 含安全漏洞，但**没有任何自动化扫描工具**。即便 Vercel skills.sh 90K+ Skill 分发标准已成熟，**安全防御工具仍为零**。

[查看完整技术文档 →](category-06-management)

---

## 四、参考资料

- 每个产品的引用论文 / 仓库见 [tech-*.md 详情页](../)
- [代表项目调研](02-projects) — 按阶段聚合的产品索引
- [成熟度评估模型](03-maturity) — 评分维度与方法论
