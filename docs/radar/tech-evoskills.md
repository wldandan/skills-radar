# EvoSkills / CoEvoSkills

> **分类**: Skill 生成 / Skill 评测 | **成熟度**: 🟡 成长期 | **综合评分**: 0.53

---

## 基本信息

**一句话描述**: **协同进化 + 两层验证**架构（Surrogate Verifier + Ground-truth Oracle），自生成 Skill 通过率 **75% vs Skill Creator 基线 34.1%**。

**来源**:
- 学术研究
- 论文 + 官网

**链接**:
- 论文：[arXiv 2604.01687](https://arxiv.org/abs/2604.01687)
- GitHub：[Zhang-Henry/CoEvoSkills](https://github.com/Zhang-Henry/CoEvoSkills)
- 官网：[evoskills.net](https://evoskills.net/)

---

## 核心技术

### 核心原理：两层验证

| 层 | 角色 | 反馈类型 |
|---|---|---|
| **Surrogate Verifier** | 信息隔离的独立 LLM 会话，主动生成测试断言 + 结构化失败诊断 | 密集但可能不准确 |
| **Ground-truth Oracle** | 全新环境中重新执行 Skill | 稀疏但准确（不透明 pass/fail） |

消融实验：去掉 Surrogate Verifier，通过率从 71.1% 暴跌至 41.1% —— oracle 的 pass/fail 信号远远不够。

### 协同进化的典型轨迹

系外行星公转周期检测任务中，Generator 最初用 BLS 算法 → Surrogate 反馈精度不足 → 调参两轮无效 → Generator 切换到 TLS + 两阶段搜索 → 100% 通过率。**驱动了方法论级创新**，而非仅调参。

### 跨模型迁移

Claude Opus 4.6 上进化的 Skill 迁移到另外 6 个模型，均获得 +36-44pp 提升 —— Skill 编码的是任务结构，而非模型偏好。

---

## 技术细节

### 局限性

- **并未真正去掉 ground-truth** —— Surrogate 降低了对人工验证的依赖，但 oracle 层仍需正确性判断
- **Surrogate 的判断力上限 = LLM 自身领域知识** —— 对运维、医疗、法律等深度领域可能无法生成有效断言
- 仍有 25% 失败
- 计算成本较高（多轮迭代 × 多次验证）

---

## 成熟度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 技术成熟度 | 0.55 | 论文 + 开源 + 官网 |
| 创新性 | 0.85 | 两层验证 + 协同进化是范式级突破 |
| 落地程度 | 0.30 | 研究阶段 |
| 生态活跃度 | 0.40 | 学术社区关注度高 |

**综合评分**: **0.53**

---

## 参考资料

- [EvoSkills 论文](https://arxiv.org/abs/2604.01687)
- [GitHub - CoEvoSkills](https://github.com/Zhang-Henry/CoEvoSkills)
- [官网](https://evoskills.net/)
