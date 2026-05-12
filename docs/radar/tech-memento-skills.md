# Memento-Skills

> **分类**: Skill 执行 / Skill 召回 | **成熟度**: 🟡 成长期 | **综合评分**: 0.53

---

## 基本信息

**一句话描述**: 让 Agent 拥有"长期记忆" —— **Read → Execute → Reflect → Write 闭环** + 行为可训练 Skill Router。GAIA +26.2%、HLE +116.2%。

**来源**:
- 学术研究

**链接**:
- 论文：[arXiv 2603.18743](https://arxiv.org/abs/2603.18743)
- GitHub：[Memento-Teams/Memento-Skills](https://github.com/Memento-Teams/Memento-Skills)

---

## 核心技术

### Read → Execute → Reflect → Write 闭环

| 阶段 | 行为 |
|---|---|
| **Read** | 从 Skill 库检索相关经验 |
| **Execute** | 执行任务 |
| **Reflect** | 反思"这次做得好不好，可以改进什么" |
| **Write** | 将反思结果更新回 Skill 库 |

> 像一个会写工作日志的员工 —— 每天下班前总结经验，第二天先翻日志再开始工作。

### 行为可训练 Skill Router

不只是关键词匹配，而是**根据当前上下文状态学习"什么情况下应该用什么 Skill"**。

### 关键数字

- **GAIA 基准 +26.2%**
- **HLE 基准 +116.2%**

---

## 技术细节

### 主要能力

- 长期记忆持久化
- 反思驱动 Skill 自更新
- 上下文敏感的 Skill 路由

### 局限性

- 学术研究导向，产品化和易用性不如 OpenSpace、Hermes 等工程项目
- 反思质量依赖 LLM 自身判断

---

## 成熟度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 技术成熟度 | 0.55 | 论文 + 开源 |
| 创新性 | 0.75 | 闭环设计 + 行为可训练 Router 是新颖组合 |
| 落地程度 | 0.35 | 学术 |
| 生态活跃度 | 0.45 | 仓库较活跃 |

**综合评分**: **0.53**

---

## 参考资料

- [Memento-Skills 论文](https://arxiv.org/abs/2603.18743)
- [GitHub](https://github.com/Memento-Teams/Memento-Skills)
