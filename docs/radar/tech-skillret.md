# SkillRet

> **分类**: Skill 评测 / Skill 召回 | **成熟度**: 🟡 成长期 | **综合评分**: 0.47

---

## 基本信息

**一句话描述**: **Skill 检索的大规模 benchmark** —— 17,810 公共 Skill + 63K 训练 + 5K 评测查询。比最强基线 **NDCG@10 +13.1**，比最强 off-the-shelf 检索器 +16.9。

**来源**:
- 学术研究
- 论文 + benchmark 数据集

**链接**:
- 论文：[arXiv 2605.05726](https://arxiv.org/abs/2605.05726)
- 标题：*SkillRet: A Large-Scale Benchmark for Skill Retrieval in LLM Agents*
- 提交：2026-05-07

---

## 核心技术

### 数据规模

| 项 | 数量 |
|---|---|
| 公共 Skill | **17,810** |
| 训练样本 | **63,259** |
| 评测查询 | **4,997** |

是 Skill 检索领域**当前最大规模**的 benchmark。

### 关键数字

| 对比项 | 提升 |
|---|---|
| 比最强 prior retriever | **NDCG@10 +13.1** |
| 比最强 off-the-shelf retriever | **NDCG@10 +16.9** |

### 与 SkillRouter 的关系

- **SkillRouter** 提供路由方法论与轻量模型架构
- **SkillRet** 提供 SkillRouter 缺失的**标准化评测套件**

两者搭配使用，业界首次有了完整的"召回方法 + 召回评测"组合。

---

## 技术细节

### 主要能力

- 标准化 Skill 检索评测
- 17,810 Skill 的公共数据集
- NDCG@10 等多种检索指标

### 适用场景

- 召回算法的迭代评测
- 不同检索器的横向对比

### 局限性

- 数据集质量取决于 17K Skill 的来源覆盖
- 学术阶段，未见工业 retriever 提交
- 不评测路由后的 task success rate（只评测检索本身）

---

## 成熟度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 技术成熟度 | 0.55 | 论文 + 数据集发布 |
| 创新性 | 0.55 | 填补 Skill 检索 benchmark 的空白 |
| 落地程度 | 0.40 | 学术阶段 |
| 生态活跃度 | 0.35 | 较新（2026-05） |

**综合评分**: **0.47**

---

## 参考资料

- [SkillRet 论文](https://arxiv.org/abs/2605.05726)
