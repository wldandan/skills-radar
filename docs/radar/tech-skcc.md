# SkCC

> **分类**: Skill 执行 | **成熟度**: 🟡 成长期 | **综合评分**: 0.49

---

## 基本信息

**一句话描述**: **跨框架 Skill 编译** —— 引入 **SkIR 强类型 IR** 把 Skill 语义与 Agent 框架格式解耦，让一份 Skill 在 Claude Code / Kimi CLI 等不同框架间可移植部署。

**来源**:
- 学术研究

**链接**:
- 论文：[arXiv 2605.03353](https://arxiv.org/abs/2605.03353)
- 标题：*SkCC: Portable and Secure Skill Compilation for Cross-Framework LLM Agents*
- 提交：2026-05-05；最新版：2026-05-09 (v2)

---

## 核心技术

### SkIR：强类型中间表示

借鉴传统编译器思路：
- Skill 用强类型 IR 表达（与具体 Agent 框架解耦）
- 通过 codegen 编译为各框架的原生格式（Claude Code / Kimi CLI / Cursor 等）

### 关键数字

| 框架 | 接入 SkCC 前 | 接入后 |
|---|:---:|:---:|
| **Claude Code** | 21.1% | **33.3%** |
| **Kimi CLI** | 35.1% | **48.7%** |

### 填补的空白

这是业界**第一个**直接解决"Skill 在不同 Agent 框架上行为不一致"问题的系统方案 —— Skill-insight 竞品分析中此项被标记为"完全空白"。

> 同一个 Skill 在 Claude Code 和 OpenCode 上即使格式兼容，执行行为也可能完全不同。SkCC 通过强类型 IR 解决这个问题。

---

## 技术细节

### 主要能力

- Skill IR 强类型抽象
- 跨框架自动 codegen
- 包含安全性考虑

### 局限性

- 学术阶段，未见生产部署
- 需要各框架开发对应 codegen target
- 不解决 Skill 内容本身的质量问题

---

## 成熟度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 技术成熟度 | 0.50 | 论文阶段 |
| 创新性 | 0.80 | "Skill 编译器"是开创性视角 |
| 落地程度 | 0.30 | 学术 |
| 生态活跃度 | 0.30 | 较新（2026-05） |

**综合评分**: **0.49**

---

## 参考资料

- [SkCC 论文](https://arxiv.org/abs/2605.03353)
