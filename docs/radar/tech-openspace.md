# OpenSpace

> **分类**: Skill 优化 / Skill 执行 | **成熟度**: 🟢 成熟期 | **综合评分**: 0.76

---

## 基本信息

**一句话描述**: 把 Skill 全生命周期管理整合到一个 MCP Server 里 —— **三模式自动进化**（FIX / DERIVED / CAPTURED）+ 4.7K+ ★ 生态。

**来源**:
- 学术 + 开源 - HKU HKUDS
- MCP Server 即插即用

**链接**:
- GitHub：[HKUDS/OpenSpace](https://github.com/HKUDS/OpenSpace)（4.7K+ ★）
- 社区云：[open-space.cloud](https://open-space.cloud/)

---

## 核心技术

### 三种进化模式

| 模式 | 触发 | 例子 |
|---|---|---|
| **FIX** | Skill 执行报错 | "数据清洗" Skill 遇 UTF-8 异常 → 自动诊断 + 生成修复补丁 + 验证 + 更新 |
| **DERIVED** | 发现用户模式重复 | "CSV 转 Excel" 后总跟着表头格式化 → 自动派生"CSV 转格式化 Excel" |
| **CAPTURED** | 检测可复用模式 | Agent 反复"先备份 → 修改 → 验证" → 提取为新 Skill |

### MCP Server 即插即用

接入 Claude Code / Codex / Cursor 不改 Agent 代码。暴露 4 个工具：
`execute_task` / `search_skills` / `fix_skill` / `upload_skill`

### 实证性能

- 220 个真实任务质量 **40.8% → 70.8%**
- Token **减少 46%**
- 零人工代码 Showcase：从 6 个初始 Skill 自动进化出 **60+ 个 Skill**

---

## 技术细节

### 局限性

- 安全审计和权限控制未详述
- 主要在 Qwen 3.5+ 上验证
- 长期进化稳定性未充分验证

---

## 成熟度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 技术成熟度 | 0.75 | 已有云服务部署 + 完整开源代码 |
| 创新性 | 0.75 | 三模式进化是工程化集大成 |
| 落地程度 | 0.70 | MCP 接入降低使用门槛 |
| 生态活跃度 | 0.85 | 4.7K+ ★ · 云社区 · 跨平台 |

**综合评分**: **0.76**

---

## 参考资料

- [GitHub](https://github.com/HKUDS/OpenSpace)
- [社区云](https://open-space.cloud/)
