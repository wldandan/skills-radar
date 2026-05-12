---
title: 技术成熟度雷达
---

<script setup>
import RadarChart from '../.vitepress/components/RadarChart.vue'
</script>

# 技术成熟度雷达

::: info 说明
雷达图展示 6 大阶段的综合成熟度评分，4 维加权 = 技术成熟度 (30%) · 创新性 (25%) · 落地程度 (25%) · 生态活跃度 (20%)。
**categorySummary 不是机械平均**，而是综合产品数量、痛点解决程度与业界判断给出。
:::

<RadarChart />

---

## 评分标准

| 等级 | 评分区间 | 说明 |
|---|---|---|
| 🟢 成熟期 | ≥ 0.60 | 已有可工程化部署的方案 |
| 🟡 成长期 | 0.40 – 0.60 | 有原型实现，仍存在结构性缺口 |
| 🔴 探索期 | < 0.40 | 痛点已被研究但缺少有效方案 |

---

## 六大阶段评分

| 阶段 | 综合 | 等级 | 业界判断 |
|---|:---:|:---:|---|
| [Skill 召回](category-02-recall) | **0.65** | 🟢 | SkillRouter 工程化、AgentSkillOS DAG 编排，基础问题已解 |
| [Skill 优化](category-05-optimization) | **0.58** | 🟡 | 七个进化框架密集涌现，缺安全扫描 |
| [Skill 生成](category-01-generation) | **0.55** | 🟡 | 最拥挤赛道，路径多但各有局限 |
| [Skill 评测](category-04-evaluation) | **0.45** | 🟡 | **过程评测和多 Skill 归因完全空白** |
| [Skill 执行](category-03-execution) | **0.42** | 🔴 | 16/84 负增益、跨领域差异 10×，无方案 |
| [Skill 管理](category-06-management) | **0.32** | 🔴 | 26.1% 漏洞 vs 防御工具为零 |

---

## 单产品评分

每个产品的 4 维评分见各 [tech-*.md 详情页](01-taxonomy.html)。原始数据：[radar-data.json](../assets/radar-data.json)。
