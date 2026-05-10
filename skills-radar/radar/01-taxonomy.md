# Skills 技术分类体系

> **版本**: v1.0.0
> **创建日期**: 2026-05-10
> **状态**: 初稿

---

## 一、概述

Skills 技术分类体系基于 [skill-insight](https://atomgit.com/openeuler/witty-skill-insight) 提出的 Skill 全生命周期管理方法论，将围绕 Agent Skills 的技术分为六大阶段：

| 阶段 | 英文 | 核心问题 |
|------|------|---------|
| Skill 生成 | Generation | 如何高效构建高质量 Skill？ |
| Skill 召回 | Recall/Routing | 如何精准匹配用户意图与 Skill？ |
| Skill 执行 | Execution | 如何高效、稳定、可控地执行 Skill？ |
| Skill 评测 | Evaluation | 如何量化评估 Skill 的效果？ |
| Skill 优化 | Optimization | 如何基于数据持续改进 Skill？ |
| Skill 管理 | Management | 如何治理大规模 Skill 库？ |

---

## 二、技术分类详解

### 2.1 Skill 生成（Generation）

**定义**：基于用户/场景的确定性任务需求，完成从需求拆解到标准化封装的全流程工程化开发。

**核心技术领域**：

| 技术方向 | 描述 | 代表技术/项目 |
|---------|------|--------------|
| 文档解析 | 从 PDF、Markdown、URL 等多源文档中提取结构化知识 | Trace2Skill、D2Skill |
| 语义聚合 | 去冗余、合相似、抽模式，减少 Skill 膨胀 | Semantic Clustering |
| 渐进式生成 | 从自然语言描述逐步生成结构化 Skill | Skill Creator、SkillX |
| 批量去重 | 识别并合并高度相似的 Skills | Skill-insight 去冗余引擎 |
| 自生成 | Agent 基于执行经验自主生成新 Skill | Memento-Skills |

**技术成熟度**：🟡 成长期（2025-2026 快速发展）

---

### 2.2 Skill 召回（Recall/Routing）

**定义**：智能体基于用户意图、上下文与场景特征，从 Skill 库中精准匹配最优 Skill/Skill 组合。

**核心技术领域**：

| 技术方向 | 描述 | 代表技术/项目 |
|---------|------|--------------|
| 意图识别 | 将用户自然语言映射为 Skill 需求 | Intent Classification |
| 召回算法 | 多路召回、混合检索、提升召回率 | Graph of Skills、SkillOrchestra |
| 路由策略 | 大规模 Skill 库下的选择策略 | SkillRouter、SkillOrchestra |
| 语义匹配 | 基于 Embedding 的相似度匹配 | Vector Retrieval |
| 结构感知检索 | 利用 Skill 元数据提升检索精度 | Graph of Skills |

**技术成熟度**：🟢 成熟期（已有成熟产品，如 SkillRouter）

---

### 2.3 Skill 执行（Execution）

**定义**：智能体按 Skill 定义的逻辑、规则、调度方案，完成全链路运行、状态管控与异常处理。

**核心技术领域**：

| 技术方向 | 描述 | 代表技术/项目 |
|---------|------|--------------|
| 渐进式披露 | 分阶段加载 Skill 内容，控制 Token 消耗 | Progressive Disclosure、SkVM |
| 执行流图 | 可视化 Skill 执行路径，与预期对比 | Skill-insight 执行追踪 |
| 状态管控 | 执行过程中的状态保持与恢复 | Checkpoint/Restore |
| 并行执行 | 多 Skill 协同的并行调度 | Skill Pipeline |
| 权限隔离 | Skill 执行时的安全沙箱 | Permission Sandboxing |

**技术成熟度**：🟡 成长期（2025 年后快速发展）

---

### 2.4 Skill 评测（Evaluation）

**定义**：构建可量化、可复现的多维度指标，以客观数据衡量 Skill 的效果、效率与安全性。

**核心技术领域**：

| 技术方向 | 描述 | 代表技术/项目 |
|---------|------|--------------|
| 多维评测 | 准确率、召回率、Token、时延等指标 | SkillsBench、Skill-insight |
| 执行追溯 | 记录每步操作，支持回溯分析 | Execution Trace |
| 归因分析 | 区分 Skill 设计问题与模型能力问题 | SkillProbe |
| 安全审计 | 检测 Skill 中的安全漏洞 | SkillProbe |
| 对比分析 | 多 Skill、多模型、多任务横向对比 | Cross-Evaluation |

**技术成熟度**：🟢 成熟期（skill-insight 已实现完整评测体系）

---

### 2.5 Skill 优化（Optimization）

**定义**：基于执行数据、评测结果与用户反馈的持续迭代优化闭环。

**核心技术领域**：

| 技术方向 | 描述 | 代表技术/项目 |
|---------|------|--------------|
| 自优化 | 基于归因结果自动定位并修复缺陷 | Skill-insight Optimizer、SkillForge |
| 迭代优化 | 多次评测-优化-再评测的闭环 | Iterative Optimizer |
| 效果提升 | 针对性优化缺失步骤、冗余流程 | SkillReducer |
| 经验压缩 | 将成功执行经验固化到 Skill | Trace2Skill |
| 动态适配 | 根据模型能力动态调整 Skill 策略 | D2Skill |

**技术成熟度**：🟡 成长期（自优化是前沿方向）

---

### 2.6 Skill 管理（Management）

**定义**：面向大规模 Skill 库的全维度、标准化管控与运营体系。

**核心技术领域**：

| 技术方向 | 描述 | 代表技术/项目 |
|---------|------|--------------|
| 版本管理 | Skill 的版本控制与回滚 | Git-based Versioning |
| 生命周期管理 | Skill 的上线、迭代、下线全流程 | SkillNet |
| 权限管控 | Skill 的访问权限与操作权限 | RBAC Permission |
| 生态治理 | 解决版本混乱、重复开发问题 | AgentSkillOS |
| 标准化 | 跨平台的 Skill 格式与协议标准 | Agent Skills 标准 |

**技术成熟度**：🔴 探索期（标准化进程加速中）

---

## 三、技术演进时间线（概览）

```
2023        2024          2025           2026
 │           │             │              │
 ├─ API插件 ─┤             │              │
 │           ├─ MCP协议 ───┤              │
 │           │             ├─ Skills标准 ──┤
 │           │             │              │
 │           │    ┌────────┴────────┐     │
 │           │    │  Skill 生成     │🟡   │
 │           │    │  Skill 召回     │🟢   │
 │           │    │  Skill 执行     │🟡   │
 │           │    │  Skill 评测     │🟢   │
 │           │    │  Skill 优化     │🟡   │
 │           │    │  Skill 管理     │🔴   │
 │           │    └─────────────────┘     │
```

---

## 四、技术成熟度总结

| 阶段 | 成熟度 | 说明 |
|------|--------|------|
| Skill 生成 | 🟡 成长期 | Trace2Skill、D2Skill 等已有成果，自生成是前沿 |
| Skill 召回 | 🟢 成熟期 | SkillRouter、Graph of Skills 等成熟方案落地 |
| Skill 执行 | 🟡 成长期 | 渐进式披露广泛采用，执行追踪正在完善 |
| Skill 评测 | 🟢 成熟期 | skill-insight 已实现完整评测体系 |
| Skill 优化 | 🟡 成长期 | 迭代优化成熟，自优化是前沿方向 |
| Skill 管理 | 🔴 探索期 | 标准化进程加速，治理体系待完善 |

---

## 五、参考资料

- [Agent Skills洞察与实践 - tech-blog 专栏](https://zhuanlan.zhihu.com/p/2028505867184612884)
- [witty-skill-insight 项目](https://atomgit.com/openeuler/witty-skill-insight)
- [Skill-insight 指标详解](../witty-skill-insight/docs/metrics.md)
