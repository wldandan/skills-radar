# MetaClaw

> **分类**: Skill 优化 | **成熟度**: 🟢 成熟期 | **综合评分**: 0.65

---

## 基本信息

**一句话描述**: **双环架构**（Fast Loop 秒级 Skill 进化 + Slow Loop 小时级 LoRA 微调）实现 7×24 生产 Agent 的**零停机持续进化**。

**来源**:
- 学术 + OpenClaw 生态（3.5K+ ★）

**链接**:
- 论文：[arXiv 2603.17187](https://arxiv.org/abs/2603.17187)
- GitHub：[aiming-lab/MetaClaw](https://github.com/aiming-lab/MetaClaw)

---

## 核心技术

### Fast Loop（秒级）

Agent 执行失败 → LLM Evolver 立即分析失败轨迹 → 诊断根因 → 合成新 Skill → 即时生效。**零停机**。

例：Agent 处理一种新格式日志失败 → 几秒内生成"新日志格式解析"Skill 并注入 → 下个同类任务立刻受益。

### Slow Loop（小时级）

在用户不活跃时段（凌晨 2-6 点等），通过 **LoRA 微调 + RL-PRM** 做梯度级模型更新。**OMLS 调度器**监控系统不活跃状态和日历数据来判断"什么时候可以安全跑训练"。

### 双环互增强

更好模型策略 → 更好执行轨迹 → 更高质量 Skill → 更丰富 Skill 提供更好训练数据 → 循环往复。

### 数据版本控制

分离 **support**（训练用）和 **query**（评测用）数据，防止"用考试题训练"的污染。

### 实证增益

- Kimi-K2.5 准确率：**21.4% → 40.6%**
- 复合鲁棒性 **+18.3%**

---

## 技术细节

### 局限性

- 紧密绑定 OpenClaw 平台
- **Slow Loop 需要模型权限** —— 闭源 API 模型无法使用
- Skill 合成质量依赖 LLM Evolver 自身判断

---

## 成熟度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 技术成熟度 | 0.60 | 论文 + 开源，已在 OpenClaw 平台部署 |
| 创新性 | 0.80 | 双环架构 + 数据版本控制是独有设计 |
| 落地程度 | 0.50 | 仅 OpenClaw 平台 |
| 生态活跃度 | 0.70 | 3.5K+ ★ |

**综合评分**: **0.65**

---

## 参考资料

- [MetaClaw 论文](https://arxiv.org/abs/2603.17187)
- [GitHub](https://github.com/aiming-lab/MetaClaw)
