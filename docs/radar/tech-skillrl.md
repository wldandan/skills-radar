# SkillRL

> **分类**: Skill 生成 / Skill 优化 | **成熟度**: 🟡 成长期 | **综合评分**: 0.53

---

## 基本信息

**一句话描述**: 通过经验蒸馏 + 自适应检索 + 递归共进化，让分层 SkillBank 与 RL 策略**一起生长**。**+15.3% over baselines**（ALFWorld / WebShop / 7 搜索增强任务）。

**来源**:
- 学术研究 - aiming-lab（多家合作）
- 论文 + 开源

**链接**:
- 论文：[arXiv 2602.08234](https://arxiv.org/abs/2602.08234)
- GitHub：[aiming-lab/SkillRL](https://github.com/aiming-lab/SkillRL)
- 标题：*SkillRL: Evolving Agents via Recursive Skill-Augmented Reinforcement Learning*

---

## 核心技术

### 三个关键创新

1. **经验蒸馏机制** — 把 Agent 的成功 / 失败经验提炼为分层 SkillBank（策略层 / 操作层）
2. **自适应检索策略** — 同时支持通用启发式和任务特定的 Skill 召回
3. **递归共进化机制** — Skill 库**不是静态的**，而是随 RL 策略一起更新；新策略发现的新模式被回写为 Skill，新 Skill 又改进下次策略

### 关键数字

- 在 **ALFWorld、WebShop 和 7 个搜索增强任务**上 **outperforming strong baselines over +15.3%**

### 与 EvoSkill 的区别

- **EvoSkill**：纯 LLM-based，从失败中发现 Skill
- **SkillRL**：RL-based，Skill 库与 RL policy **同时**学习，强调"共进化"

---

## 技术细节

### 主要能力

- 分层 SkillBank 构建
- 自适应 Skill 检索
- 与 RL 策略的递归共进化

### 局限性

- 需要可定义 reward 的环境，开放式任务受限
- 13 位作者均为学术研究，未见生产部署
- RL 训练成本高于纯 LLM 路径

---

## 成熟度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 技术成熟度 | 0.55 | 论文 + 开源实现 |
| 创新性 | 0.70 | 共进化机制是独有设计 |
| 落地程度 | 0.40 | 学术验证 |
| 生态活跃度 | 0.45 | 在 aiming-lab 生态内活跃 |

**综合评分**: **0.53**

---

## 参考资料

- [SkillRL 论文](https://arxiv.org/abs/2602.08234)
- [GitHub - aiming-lab/SkillRL](https://github.com/aiming-lab/SkillRL)
