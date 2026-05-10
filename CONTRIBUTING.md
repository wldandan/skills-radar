# 贡献指南

欢迎为 Skills Radar 贡献最新的 Skills 相关技术！本指南将帮助你了解如何贡献。

---

## 如何贡献

### 方式一：提交 Pull Request

1. **Fork 本仓库**
2. **克隆你的 Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/skills-radar.git
   cd skills-radar
   ```
3. **创建特性分支**
   ```bash
   git checkout -b add-new-skill-tech
   ```
4. **添加你的内容**（详见下文）
5. **提交并推送到你的 Fork**
   ```bash
   git commit -m "feat: 添加 [技术名称] 技术文档"
   git push origin add-new-skill-tech
   ```
6. **创建 Pull Request**

### 方式二：提交 Issue

如果你发现内容需要更新或有错误，请提交 [Issue](https://github.com/leon-wang2021/skills-radar/issues)。

---

## 添加新技术

### 1. 添加新技术到分类目录

在 `docs/radar/category-XX-*.md` 中添加新技术：

```markdown
### 新技术名称

**描述**：一句话描述

**核心能力**：
- 能力1
- 能力2

**适用场景**：适合哪些任务

**链接**：[项目链接](URL)
```

### 2. 更新 Radar 数据

编辑 `docs/assets/radar-data.json`，添加新技术评分：

```json
{
  "id": "new-tech",
  "name": "新技术名称",
  "description": "描述",
  "scores": [0.6, 0.7, 0.5, 0.5],
  "status": "active"
}
```

评分说明：`[技术成熟度, 创新性, 落地程度, 生态活跃度]`，取值 0.0-1.0

### 3. 更新技术时间线

编辑 `docs/radar/04-timeline.md`，在对应技术领域的演进中添加新里程碑。

---

## 技术分类参考

| 阶段 | 文件 | 说明 |
|------|------|------|
| Skill 生成 | `category-01-generation.md` | 文档解析、语义聚合、自生成等技术 |
| Skill 召回 | `category-02-recall.md` | 意图识别、路由策略、召回算法等技术 |
| Skill 执行 | `category-03-execution.md` | 渐进式披露、执行追踪、状态管控等技术 |
| Skill 评测 | `category-04-evaluation.md` | 多维评测、执行追溯、归因分析等技术 |
| Skill 优化 | `category-05-optimization.md` | 自优化、迭代优化、效果提升等技术 |
| Skill 管理 | `category-06-management.md` | 版本管理、生命周期管理、权限管控等技术 |

---

## 成熟度评分标准

| 等级 | 评分区间 | 说明 |
|------|---------|------|
| 探索期 | < 0.4 | 仅论文或概念，无实现 |
| 成长期 | 0.4 - 0.6 | 有原型，实验性使用 |
| 成熟期 | > 0.6 | 稳定版本、大规模应用 |

评分维度：
- **技术成熟度** (30%)：概念验证 → 原型 → 成熟产品
- **创新性** (25%)：技术的原创性和前沿程度
- **落地程度** (25%)：在实际产品中的应用广度
- **生态活跃度** (20%)：社区贡献者数量、更新频率

---

## 提交规范

### Commit Message 格式

```
<type>: <subject>

<可选的 body>
```

Type:
- `feat`: 新功能/新技术
- `fix`: 修复错误
- `docs`: 文档更新
- `style`: 格式调整
- `refactor`: 重构
- `data`: 数据更新

### 示例

```bash
feat: 添加 Skill 自进化技术文档
fix: 修正 Skill 生成技术的成熟度评分
docs: 更新技术时间线到 2026 年 5 月
data: 更新 radar-data.json 添加新技术评分
```

---

## 获取帮助

- 提交 [Issue](https://github.com/leon-wang2021/skills-radar/issues)
- 参与 [Discussions](https://github.com/leon-wang2021/skills-radar/discussions)

感谢你的贡献！
