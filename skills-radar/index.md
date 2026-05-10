# Skills Radar

> 追踪 Skills 技术，让 Agent 能力进化有迹可循

---

## 项目目标

**Skills Radar** 是一个系统性追踪 Agent Skills 技术发展的平台，基于 [skill-insight](https://atomgit.com/openeuler/witty-skill-insight) 的 Skill 全生命周期管理方法论，建立 Skills 技术分类体系和可视化展示。

### 核心功能

1. **Skills 技术雷达**：按照 Skills 技术发展，收录最新技术，按生命周期分类
2. **技术成熟度评估**：多维度评估各技术领域的成熟度
3. **演进时间线**：展示技术从概念到成熟的演进历程

---

## 技术分类体系

基于 skill-insight 的 Skill 全生命周期管理方法论，Skills 技术分为六大阶段：

| 阶段 | 成熟度 | 说明 |
|------|--------|------|
| [Skill 生成](./radar/category-01-generation.md) | 🟡 成长期 | Trace2Skill、D2Skill、Skill Creator 2.0 |
| [Skill 召回](./radar/category-02-recall.md) | 🟢 成熟期 | SkillRouter、Graph of Skills |
| [Skill 执行](./radar/category-03-execution.md) | 🟡 成长期 | 渐进式披露、SkVM、执行流图 |
| [Skill 评测](./radar/category-04-evaluation.md) | 🟢 成熟期 | skill-insight、SkillsBench |
| [Skill 优化](./radar/category-05-optimization.md) | 🟡 成长期 | SkillForge、Iterative Optimizer |
| [Skill 管理](./radar/category-06-management.md) | 🔴 探索期 | AgentSkillOS、Skills 标准 |

---

## 技术成熟度总览

| 技术领域 | 综合评分 | 状态 |
|---------|---------|------|
| Skill 评测 | 0.73 | 🟢 成熟期 |
| Skill 召回 | 0.66 | 🟢 成熟期 |
| Skill 执行 | 0.54 | 🟡 成长期 |
| Skill 优化 | 0.53 | 🟡 成长期 |
| Skill 生成 | 0.52 | 🟡 成长期 |
| Skill 管理 | 0.39 | 🔴 探索期 |

---

## 技术演进时间线

```
2023        2024          2025           2026
 │           │             │              │
 ├─ API插件 ─┤             │              │
 │           ├─ MCP协议 ───┤              │
 │           │             ├─ Skills标准 ──┤
 │           │             │              │
 │           │    Skill 评测  Skill 召回  │🟢
 │           │    Skill 执行  Skill 优化   │🟡
 │           │    Skill 生成              │🟡
 │           │    Skill 管理             │🔴
```

---

## 快速导航

### 技术分类
- [Skill 生成技术](./radar/category-01-generation.md)
- [Skill 召回技术](./radar/category-02-recall.md)
- [Skill 执行技术](./radar/category-03-execution.md)
- [Skill 评测技术](./radar/category-04-evaluation.md)
- [Skill 优化技术](./radar/category-05-optimization.md)
- [Skill 管理技术](./radar/category-06-management.md)

### 技术文档
- [技术分类体系](./radar/01-taxonomy.md)
- [代表项目调研](./radar/02-projects.md)
- [成熟度评估模型](./radar/03-maturity.md)
- [技术演进时间线](./radar/04-timeline.md)

### Radar 数据
- [Radar 图 JSON 数据](./assets/radar-data.json)

---

## 参考资料

- [Agent Skills洞察与实践 - tech-blog 专栏](https://zhuanlan.zhihu.com/p/2028505867184612884)
- [witty-skill-insight 项目](https://atomgit.com/openeuler/witty-skill-insight)
- [SKILLRL GitHub](https://github.com/aiming-lab/SkillRL)
