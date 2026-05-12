# Skill 评测（Evaluation）

> **成熟度**: 🟡 成长期 · **综合评分**: **0.47**
>
> **业界判断**：SkillsBench 提供事实标准、SkillNet 5 维评分有效、**SkillRet 17,810 Skill 检索 benchmark 上线**，但全部仍是**结果评测** —— **过程评测和多 Skill 归因仍是结构性缺口**。

---

## 业界代表产品

| 产品 | 来源 | 核心路径 | 关键数字 |
|---|---|---|---|
| [SkillsBench](tech-skillsbench) | 学术 (1.2K+ ★) | 三条件对比（无 / 编写 / 自生成） | **7,308 轨迹 / 84 任务 / 11 领域，+16.2pp** |
| [SkillNet (5 维评分)](tech-skillnet) | 浙大 NLP (735 ★) | 5 维内在质量评估 | ALFWorld +40% reward, -30% 步骤 |
| [EvoSkills (Surrogate Verifier)](tech-evoskills) | 学术 | 主动生成测试断言 + 失败诊断 | 去掉 Surrogate 通过率从 71.1% 跌至 41.1% |
| [SkillForge (Diagnostician)](tech-skillforge) | 工业研究 (SIGIR 2026) | 失败追溯回 Skill 缺陷 | 1,883 工单 + 5 场景 |
| [SkillRet](tech-skillret) | 学术 | Skill 检索大规模 benchmark | **17,810 Skill / 63K 训练 / 5K 评测，NDCG@10 +13.1** |

---

## SkillsBench 揭示的反共识结论

| 发现 | 数据 |
|---|---|
| 精心编写的 Skill 显著有效 | 平均 +16.2pp |
| **但领域差异 10×** | 软件工程 +4.5pp / 医疗 +51.9pp |
| **自生成 Skill 平均无增益** | 学生自己写复习笔记帮不了自己 |
| **16/84 出现负增益** | 加 Skill 反而更差 |
| **聚焦优于全面** | 2-3 模块精简 > 长篇文档 |

---

## 行业核心痛点

### 🔴 领域 Skill 评测数据集构建困难

SkillsBench 的 84 个确定性验证器都是**手工编写的**，覆盖 11 个领域。但 SkillNet 上有 **200K+ Skill 横跨数百个领域** —— 绝大多数没有评测基础设施。EvoSkills 的 Surrogate Verifier 是替代方案，但**判断能力上限 = LLM 自身的领域知识**（对运维、医疗、法律等专业场景不够）。SkillRet 给召回评测提供了 17,810 Skill 的标准化套件，但**针对路由本身，不评测 task success rate**。

### 🔴 过程遵从度评测完全空白

Agent 把任务做对了，但**完全没按 Skill 说的来** —— 到底是 Skill 有用还是模型自己就能做？所有评测都是**结果导向的黑盒**，只看 pass/fail，**不看 Agent 是否遵从了 Skill 定义的流程**。

这直接导致三个下游问题无法解决：
- 无法区分"Skill 有效"和"模型本身就能做"
- 无法定位 16/84 负增益的根因
- 多 Skill 场景下无法归因单个 Skill 的贡献

### 🔴 自生成 Skill 几乎没用

策划 Skill +16.2pp，自生成 ≈ 0pp —— 模型能消费高质量 Skill 但**无法一次性自创等质量内容**。EvoSkill / EvoSkills / Trace2Skill 用迭代生成缓解，但 SkillsBench 揭示的"单次自生成的根本限制"仍成立。

### 🟢 Skill 内在质量评估（基本已解）

SkillNet 5 维评分（安全 / 完整 / 可执行 / 可维护 / 成本）在三个环境验证有效。**但评估的是"写得好不好"而非"在特定场景有没有效"** —— 后者仍开放。

### ⚪ 多 Skill 协同归因

任务同时用了三个 Skill，效果差，**不知道该改哪个** —— 只能逐个禁用手动排查。**无消融实验设计方法论**，但机器学习领域的 SHAP/Shapley 值可以作为迁移的理论基础。
