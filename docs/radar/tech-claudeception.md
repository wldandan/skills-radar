# Claudeception

> **分类**: Skill 生成 / Skill 优化 | **成熟度**: 🟢 成熟期 | **综合评分**: 0.66

---

## 基本信息

**一句话描述**: 在 Claude Code 每次会话中，通过 Hook 机制**自动评估并提取**"值得记住"的 Skill —— 让 Agent 不再每天失忆。

**来源**:
- 社区开源（506+ ★ · MIT）
- 作者：blader

**链接**:
- GitHub：[blader/Claudeception](https://github.com/blader/Claudeception)

---

## 核心技术

### 核心原理：四条件 Skill 提取

不是什么都记 —— 只提取满足以下**四个条件**的知识：

1. **可复用** — 不只对当前项目有用
2. **非平凡** — 不是查文档就能知道的（间接过滤了模型已知知识）
3. **具体** — 能描述精确的触发条件
4. **已验证** — 实际生效过

每个会话通常只提取 1-3 个 Skill。

### 语义精准的 description

不写"帮助解决数据库问题"，而写 `Fix for PrismaClientKnownRequestError in serverless environment with connection pool exhaustion`。下次遇到同样的错误信息时 Skill 能被精准召回。

### 典型场景

调试 Next.js `getServerSideProps` 在 Edge Runtime 下不可用 → Claudeception 提取：
- 触发条件：使用 getServerSideProps + Edge Runtime
- 解法：改用 middleware 或 app router
- 验证状态：已在当前项目中验证

---

## 技术细节

### 局限性

- 仅面向 **Claude Code 平台**
- Skill 不跨用户共享（vs SkillClaw / OpenSpace 的集体学习模式）
- 提取质量依赖 LLM 自身判断，无外部验证
- 无公开的定量评测数据

---

## 成熟度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 技术成熟度 | 0.65 | 已稳定可用，506+ ★ |
| 创新性 | 0.55 | 四条件 + Hook 机制是巧妙工程化 |
| 落地程度 | 0.70 | Claude Code 用户广泛安装 |
| 生态活跃度 | 0.75 | 社区活跃，持续迭代 |

**综合评分**: **0.66**

---

## 参考资料

- [GitHub - Claudeception](https://github.com/blader/Claudeception)
