# Skill 优化（Optimization）

> **成熟度**: 🟢 成熟期（边界） · **综合评分**: **0.60**
>
> **业界判断**：**8 个进化框架 + ACE（ICLR 2026 接收的 Stanford context engineering）+ SkillReducer Token 优化**，**技术路径最丰富**，但各自为政缺标准。**没有任何进化框架在循环中加入安全扫描**。

---

## 业界代表产品

| 产品 | 来源 | 进化信号 | 关键数字 |
|---|---|---|---|
| [OpenSpace](tech-openspace) | HKU (**6.1K+ ★**) | FIX / DERIVED / CAPTURED 三模式 | 220 任务 40.8% → 70.8%, Token -46% |
| **[ACE](tech-ace)** ★ | Stanford 等 (ICLR 2026) | Generation / Reflection / Curation 三阶段 | **+10.6% 智能体 / +8.6% 金融** |
| [Hermes Self-Evolution](tech-hermes-self-evolution) | Nous Research (3.1K+ ★) | GEPA 优化器 + PR 审核 | ICLR 2026 接收 |
| [SkillClaw](tech-skillclaw) | AMAP-ML (1.3K+ ★) | 多用户轨迹聚合 | Qwen3-Max 验证 |
| [MetaClaw](tech-metaclaw) | OpenClaw (3.4K+ ★) | Fast Loop + Slow Loop 双环 | Kimi-K2.5 21.4% → 40.6% |
| [SkillReducer](tech-skillreducer) | 港科大 | 静态压缩 + 渐进披露 | **600 Skill + SkillsBench，压缩后 +2.8%** |
| [EvoSkill (Pareto)](tech-evoskill) | Sentient AGI (726 ★) | Pareto 前沿 + Git 分支 | +7.3% OfficeQA / +12.1% SealQA |
| [SkillForge (Optimizer)](tech-skillforge) | 工业研究 (SIGIR 2026) | 三阶段失败归因 | 1,883 工单 + 5 场景 |
| **[SkillRL](tech-skillrl)** ★ | aiming-lab | Skill 库随 RL 策略递归共进化 | +15.3% ALFWorld / WebShop |

---

## 进化信号源对比

| 信号源 | 代表产品 | 优势 | 局限 |
|---|---|---|---|
| 失败轨迹分析 | EvoSkill / SkillForge | 直接针对痛点改进 | 依赖 ground-truth |
| 协同进化验证 | EvoSkills | 不完全依赖 ground-truth | 仍需 oracle 最终裁决 |
| 并行轨迹池蒸馏 | Trace2Skill | 整体分析避免过拟合 | 需要大量并行轨迹 |
| 多用户集体经验 | SkillClaw | 一人发现全员受益 | 隐私和冲突解决未详述 |
| 双环架构（Skill + 权重） | MetaClaw | 零停机 + 同时进化 | 绑定 OpenClaw + 需模型权限 |
| DSPy + GEPA 优化 | Hermes | 理解"为什么失败" | 绑定 Hermes + PR 需人审 |
| 三模式实时进化 | OpenSpace | 覆盖最广 | 长期稳定性未验证 |
| **Context as Playbook** ★ | ACE (ICLR 2026) | 生成 / 反思 / 策展，无需标注 | 需类比迁移到 Skill 场景 |
| **RL 共进化** ★ | SkillRL | Skill 库与策略一起学习 | 需要可定义 reward |

---

## 行业核心痛点

### 🟡 三方归因纠缠

知道 Skill 效果不好，但**不知道该改 Skill 内容、换底层模型还是修路由逻辑** —— 像网站加载慢可能是服务器、网络或前端代码，但没有工具帮你定位。

所有方案都只回答"是否 Skill 的问题"，**不区分模型能力和路由错误的贡献**。

### 🟡 跷跷板效应

改好了一个 Skill 结果另一个场景变差。EvoSkill Pareto 前沿是最接近的缓解机制，但**没有论文在 Skill 场景下系统量化跷跷板效应**。

### 🟡 用户间经验不传播

A 项目踩的坑，B 项目同事又踩一遍。SkillClaw / OpenSpace / MetaClaw 解决了一部分，但**隐私 / 冲突 / 跨生态**问题未根本解决。

### 🟡 Token 浪费 + 注意力稀释（less-is-more 效应）

SkillReducer 实证（600 Skill + SkillsBench）：**26.4% Skill 没写 description、60%+ body 是非可操作内容**。压缩后质量反升 2.8% —— 干扰 Agent 注意力的噪音少了。但仅静态压缩，**未做动态按需加载**。

### 🚨 进化 + 安全的交叉空白

> 8 个进化框架都在自动生成新 Skill，**没有一个在进化循环中检查"进化出来的 Skill 是否安全"**。进化可能无意中引入漏洞 —— 比如"更高效"的 Skill 通过跳过权限检查实现高效。

Hermes 约束门控能拦截功能退化，但**测试套件不包含安全检查**。

---

## 一句话总结

> 这些框架正在**趋同** —— 都在走向"执行 → 分析 → 进化 → 验证 → 部署"的闭环。差异化空间不在"是否做进化"（everyone does），而在三个维度：
> 1. **进化信号的质量**（粗粒度 pass/fail vs 精细过程反馈）
> 2. **安全门控**（约束门控 vs 自动修复，哪种更可靠？）
> 3. **跨平台可移植性**（Agent-agnostic vs 平台绑定）
