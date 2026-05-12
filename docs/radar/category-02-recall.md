# Skill 召回（Recall / Routing）

> **成熟度**: 🟢 成熟期 · **综合评分**: **0.65**
>
> **业界判断**：SkillRouter 在 80K 池上达 74% Hit@1 并工程化，AgentSkillOS 提供 DAG 编排，基础问题已有可工程化方案。这是六个阶段中**最成熟**的赛道。

---

## 业界代表产品

| 产品 | 来源 | 核心路径 | 关键数字 |
|---|---|---|---|
| [SkillRouter](tech-skillrouter) | 学术 | 双编码器 + 重排，全文检索 | **80K 池 74% Hit@1**，1.2B 快 13× |
| [AgentSkillOS](tech-agentskillos) | 学术 | Capability Tree + DAG | 200–200K 规模逼近理想 |
| [SkillNet](tech-skillnet) | 浙大 NLP | Ontology 三层架构 | 40 万+ Skill 仓库 |
| [SkillRouter.org](tech-skillrouter-org) | 商业产品 | 即插即用 MCP 服务 | 技术细节不透明 |

---

## 行业关键发现

### 🟢 推翻"标题 + 简介够用"的设计共识

SkillRouter 在 ~80K Skill 池上**隐藏 Skill body 后路由准确率暴跌 31-44 个百分点**。

> 两本书封面都写"数据可视化指南"，但一本教 Python Matplotlib，另一本教 Excel 图表 —— 不翻开内容根本分不清。

**关键意义**不在 74% 这个数字本身，而在证明了**全文检索是不可绕过的必要条件** —— 改变了所有 Agent 框架的路由层设计。

### 🟡 多 Skill 编排：从单调用到 DAG

AgentSkillOS 把 Skill 依赖关系建模为有向无环图，能并行的并行、必须串行的串行。**DAG 执行显著优于简单逐个调用**，是首个系统方案。

但 DAG 假设**依赖关系可在执行前静态确定** —— 动态依赖场景（"第二步选择取决于第一步结果"）未覆盖。

---

## 行业痛点

### 🟢 大规模 Skill 池路由（基本已解）

SkillRouter 工程化方案可部署消费级硬件。

### 🔴 Skill 功能相似带来的混淆

社区仓库中**大量 Skill 名称和目的相似** —— 仅用 name+description 路由准确率下降 31-44pp。识别出"谁和谁相似"之后怎么办？**没有产品做自动合并相似 Skill**。

### ⚪ 用户不知道有 Skill 可用

所有路由研究都假设用户"知道应该去找 Skill"。但实际中用户可能压根没想到"这件事有 Skill 能帮我"。**完全空白**。

### 🟡 多 Skill 动态编排

复杂任务需要组合三个 Skill，但不知道**先用哪个、后用哪个、哪些可以同时用**。AgentSkillOS DAG 是初步方案，**动态依赖场景未覆盖**。
