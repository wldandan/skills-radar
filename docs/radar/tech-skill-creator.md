# Skill Creator

> **分类**: Skill 生成 | **成熟度**: 🟢 成熟期 | **综合评分**: 0.71

---

## 基本信息

**一句话描述**: Anthropic 官方的引导式 Skill 创建工具，把"写 Skill"变成"写代码 → 跑单元测试 → 看覆盖率 → 改 Bug"的工程循环。

**来源**:
- 工业实现 - Anthropic 官方课程
- 内置于 Claude Code 生态

**链接**:
- 项目链接：[anthropics/courses/skill-creator](https://github.com/anthropics/courses/tree/master/skill-creator)

---

## 核心技术

### 核心原理

把传统"凭感觉写 Skill"变成可量化的工程循环：

1. **引导式创建** — 通过结构化问答帮助作者拆解需求，而非面对空白 SKILL.md。
2. **测试 prompt + Eval 闭环** — 让作者写 10+ 个测试 prompt，批量运行可视化通过率。
3. **description 自动优化器** — 通过措辞调整提升 Skill 触发命中率，类似 SEO 标题优化。

### 核心创新

- 把 Skill 当作"可被测试的软件构件"而非自然语言文档
- 引入 description-as-trigger 的概念，让生成阶段就关注路由可见性

---

## 技术细节

### 主要能力

- 引导式 Skill 起草
- 批量 Eval 与通过率可视化
- description 自动 A/B 优化

### 适用场景

- Claude Code 用户从零创建 Skill
- 已有 Skill 的质量回归测试

### 局限性

- EvoSkills 对比显示 Skill Creator 基线通过率仅 **34.1%**，人工引导式创建存在天花板
- 不支持从执行失败中自动发现新 Skill —— 作者必须先"知道要创建什么 Skill"
- 紧密绑定 Claude Code / Anthropic 生态

---

## 成熟度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 技术成熟度 | 0.75 | 官方工具，已在大量真实 Skill 中使用 |
| 创新性 | 0.45 | Eval 闭环思路成熟，方法论本身渐进改进 |
| 落地程度 | 0.85 | 内置于官方课程与生态，广泛采用 |
| 生态活跃度 | 0.80 | Anthropic 官方维护，Claude Code 社区贡献活跃 |

**综合评分**: **0.71**

---

## 参考资料

- [anthropics/courses · skill-creator](https://github.com/anthropics/courses/tree/master/skill-creator)
- 对比基线：[EvoSkills 论文](https://arxiv.org/abs/2604.01687)（Skill Creator 34.1% vs EvoSkills 75%）
