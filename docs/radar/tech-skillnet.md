# SkillNet

> **分类**: Skill 召回 / Skill 评测 / Skill 管理 | **成熟度**: 🟢 成熟期 | **综合评分**: 0.65

---

## 基本信息

**一句话描述**: 把 **200K+ Skill 生态**组织成「应用商店基础设施」—— Ontology 三层架构 + 5 维质量评分（GitHub 735 ★）。

**来源**:
- 学术 + 公开服务 - 浙大 NLP（KG 实验室）
- 论文 + 开源 + 在线知识库

**链接**:
- 论文：[arXiv 2603.04448](https://arxiv.org/abs/2603.04448)
- GitHub：[zjunlp/SkillNet](https://github.com/zjunlp/SkillNet)
- 在线知识库：[skillnet.openkg.cn](http://skillnet.openkg.cn/)
- HuggingFace 博客：[xzwnlp/skillnet](https://huggingface.co/blog/xzwnlp/skillnet)

---

## 核心技术

### 核心原理

把"Skill 生态"从无组织的 **200K+ 个孤岛**升级为可治理的知识图谱：

1. **Skill Ontology 三层架构** — 领域分类（如"数据处理""代码生成"）→ Skill 实体（200K+）→ 关系图谱（功能重叠 / 依赖 / 升级版）。
2. **5 维质量评分** — 安全 / 完整 / 可执行 / 可维护 / 成本，超越 Star 数。
3. **实证验证** — ALFWorld / WebShop / ScienceWorld 三环境 **+40% reward、-30% 执行步骤**。

### 核心创新

- 业界首个面向 Skill 生态的关系治理框架（而非孤立条目）
- 把"Skill 内在质量"标准化（从此可超越社区下载量做评价）

---

## 技术细节

### 主要能力

- Skill 自动分类、查重、关系建模
- 多维质量评分
- 在线开放知识库

### 局限性

- 5 维评分评估的是 **"Skill 写得好不好"**，不是 **"在你的场景有没有效"**（这是两个不同问题）
- 团队自述："动态组合和跨领域迁移仍具挑战性"
- 关系图谱能识别重叠但**不执行自动合并**

---

## 成熟度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 技术成熟度 | 0.70 | 论文 + 开源 + 在线服务三栖 |
| 创新性 | 0.70 | Ontology + 5 维评分是开创性贡献 |
| 落地程度 | 0.55 | 公共知识库，企业私有部署较少 |
| 生态活跃度 | 0.65 | 持续更新 |

**综合评分**: **0.65**

---

## 参考资料

- [SkillNet 论文](https://arxiv.org/abs/2603.04448)
- [GitHub](https://github.com/zjunlp/SkillNet)
- [HuggingFace 博客](https://huggingface.co/blog/xzwnlp/skillnet)
