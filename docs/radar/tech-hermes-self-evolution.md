# Hermes Agent Self-Evolution

> **分类**: Skill 优化 / Skill 评测 | **成熟度**: 🟢 成熟期 | **综合评分**: 0.70

---

## 基本信息

**一句话描述**: Nous Research 的 Skill 自动进化引擎 —— **GEPA 优化器**（ICLR 2026 接收，Oral 状态以官方录用为准）+ 严格约束门控 + PR 模式人工审核。

**来源**:
- 工业 + 学术 - Nous Research
- 独立仓库架构（操作 hermes-agent 而非嵌入其中）

**链接**:
- 自进化仓库：[hermes-agent-self-evolution](https://github.com/NousResearch/hermes-agent-self-evolution)
- 主 Agent 仓库：[hermes-agent](https://github.com/NousResearch/hermes-agent)（**145K+ ★**）
- 自进化仓库本身：**3.1K+ ★**
- [PLAN.md 设计文档](https://github.com/NousResearch/hermes-agent-self-evolution/blob/main/PLAN.md)

---

## 核心技术

### GEPA 优化器

不是简单试错 —— 读取执行轨迹**理解"为什么失败"**，然后提出针对性改进。

**例**：GitHub PR 代码审查 Skill 在大 PR 上经常遗漏安全问题 → GEPA 分析轨迹发现"Skill 没有指示 Agent 按文件类型分组审查" → 生成改进版本加上这个指示。

基于 DSPy 框架，**已被 ICLR 2026 接收**（Oral 状态请以官方录用通知为准）。

### 严格安全门控

- 每个进化变体**必须通过完整测试套件** —— 任何测试失败则变体被拒绝
- 严格的大小预算 —— 长度惩罚防止冗长漂移
- 最终以 **PR 形式**提交到 hermes-agent 仓库，带 diff 和 before/after 对比，由人类审核后合并

### 双数据源

- **synthetic** —— 合成评测数据
- **sessiondb** —— 真实会话历史（兼容 Claude Code / Copilot / Hermes）

无 GPU 依赖，一切通过 API 调用完成文本级优化。

---

## 技术细节

### 局限性

- 紧密绑定 Hermes Agent 生态
- 进化结果需人工审核（PR 模式），非全自动部署
- 跨领域迁移未验证 —— "从总结 GitHub PR 学到的 Skill 不能迁移到规划数据库迁移"
- 测试套件本身不包含安全检查（约束门控只能拦截功能性退化）

---

## 成熟度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 技术成熟度 | 0.65 | 已可工程使用，有完整 PLAN.md |
| 创新性 | 0.85 | GEPA 是 ICLR Oral 工作，方法论级突破 |
| 落地程度 | 0.55 | Hermes 生态内已实用，跨平台未普及 |
| 生态活跃度 | 0.80 | Nous 社区活跃，Hermes Agent 145K+ ★ |

**综合评分**: **0.70**

---

## 参考资料

- [hermes-agent-self-evolution GitHub](https://github.com/NousResearch/hermes-agent-self-evolution)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- 评测：[TokenMix Review](https://tokenmix.ai/blog/hermes-agent-review-self-improving-open-source-2026)
