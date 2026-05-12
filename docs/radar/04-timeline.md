# Skills 技术演进时间线

> **版本**: v2.0 · **更新日期**: 2026-05-12
>
> 本时间线只收录有公开论文 / 仓库 / 产品页可验证的事件。论文以 arXiv 编号年月为准（如 2603 = 2026 年 3 月）。

---

## 一、三个时代的过渡

```
2023               2024                    2025                          2026
 │                  │                       │                             │
 ├─ API 插件时代 ───┤                       │                             │
 │   ChatGPT        ├─ MCP 协议时代 ───────┤                             │
 │   Plugins        │   Anthropic MCP       ├─ Skills 时代 ──────────────┤
 │                  │                       │   生成 / 召回 / 评测密集涌现│
 │                  │                       │                             │
```

---

## 二、2026 年关键论文与产品

以 arXiv 编号为序（编号 2601 → 2604 对应 2026 年 1 - 4 月）：

### 2026 年 1 月

| 编号 | 项目 | 类型 |
|---|---|---|
| [2601.10338](https://arxiv.org/abs/2601.10338) | Liu et al. *Agent Skills in the Wild: Security Vulnerabilities at Scale* | 安全研究 — 揭示 26.1% 社区 Skill 含漏洞 |
| **2026-01-20** | **Vercel [skills.sh](tech-skills-sh) 上线** | 工业 marketplace — 90K+ Skill / 19 Agent 框架 |

### 2026 年 2 月

| 编号 | 项目 | 类型 |
|---|---|---|
| [2602.08234](https://arxiv.org/abs/2602.08234) | [SkillRL](tech-skillrl) | 生成 / 优化 — Skill 库与 RL 策略递归共进化 |
| [2602.12430](https://arxiv.org/abs/2602.12430) | Xu & Yan. *Agent Skills for LLMs: Architecture, Acquisition, Security* | 综述 — 76.3% 安全问题需跨模态检测 |
| [2602.12670](https://arxiv.org/abs/2602.12670) | [SkillsBench](tech-skillsbench) | 评测基准 — 7,308 轨迹 / 84 任务 / 11 领域 |
| [2602.20867](https://arxiv.org/abs/2602.20867) | Jiang et al. *SoK: Agentic Skills — Beyond Tool Use in LLM Agents* | 综述 — 该领域的 canonical SoK，定义 7 阶段生命周期 |

### 2026 年 3 月

| 编号 | 项目 | 类型 |
|---|---|---|
| [2603.02176](https://arxiv.org/abs/2603.02176) | [AgentSkillOS](tech-agentskillos) | 召回 / 执行 / 管理 — Capability Tree + DAG |
| [2603.02766](https://arxiv.org/abs/2603.02766) | [EvoSkill](tech-evoskill) | 生成 — 三 Agent 协作 + Pareto |
| [2603.04448](https://arxiv.org/abs/2603.04448) | [SkillNet](tech-skillnet) | 召回 / 评测 / 管理 — 200K+ Skill 仓库 |
| [2603.17187](https://arxiv.org/abs/2603.17187) | [MetaClaw](tech-metaclaw) | 优化 — 双环架构 |
| [2603.18743](https://arxiv.org/abs/2603.18743) | [Memento-Skills](tech-memento-skills) | 执行 / 召回 — 闭环 + 行为可训练 Router |
| [2603.22455](https://arxiv.org/abs/2603.22455) | [SkillRouter](tech-skillrouter) | 召回 — 80K 池 74% Hit@1 |
| [2603.25158](https://arxiv.org/abs/2603.25158) | [Trace2Skill](tech-trace2skill) | 生成 — 并行轨迹蒸馏 |
| [2603.29919](https://arxiv.org/abs/2603.29919) | [SkillReducer](tech-skillreducer) | 优化 — less-is-more 大规模实证 |

### 2026 年 4 月

| 编号 | 项目 | 类型 |
|---|---|---|
| [2604.01687](https://arxiv.org/abs/2604.01687) | [EvoSkills / CoEvoSkills](tech-evoskills) | 生成 / 评测 — Surrogate + Oracle 协同进化 |
| [2604.04804](https://arxiv.org/abs/2604.04804) | [SkillX](tech-skillx) | 生成 — 三层粒度蒸馏 |
| [2604.08377](https://arxiv.org/abs/2604.08377) | [SkillClaw](tech-skillclaw) | 优化 / 管理 — 多用户轨迹聚合 |
| [2604.08618](https://arxiv.org/abs/2604.08618) | [SkillForge](tech-skillforge) | 生成 / 优化 / 评测 — 工业研究（SIGIR 2026）|

### 2026 年 5 月

| 编号 | 项目 | 类型 |
|---|---|---|
| [2605.03353](https://arxiv.org/abs/2605.03353) | [SkCC](tech-skcc) | 执行 — SkIR 强类型 IR，跨框架可移植性 |
| [2605.05726](https://arxiv.org/abs/2605.05726) | [SkillRet](tech-skillret) | 召回 / 评测 — Skill 检索大规模 benchmark（17,810 Skill）|

---

## 三、非论文事件

| 节点 | 项目 | 内容 |
|---|---|---|
| 持续 | [Skill Creator](tech-skill-creator) | Anthropic 官方 Agent Skills 文档 + Claude Code 工作流 |
| 持续 | [Skill Seekers](tech-skill-seekers) | 社区 13.4K+ ★，18 数据源 → 20 目标 |
| 持续 | [OpenSpace](tech-openspace) | HKU HKUDS · **6.1K+ ★** · 社区云上线 |
| 持续 | [Hermes Self-Evolution](tech-hermes-self-evolution) | Nous Research · GEPA ICLR 2026 接收 · 父仓 145K+ ★ |
| 持续 | [Claudeception](tech-claudeception) | 社区开源 · **2.3K+ ★** |
| 持续 | [SkillRouter.org](tech-skillrouter-org) | 早期阶段 MCP 路由商业服务（落地页阶段）|
| 持续 | [agentskills.io](tech-skills-standard) | Anthropic 发起的跨平台 Skill 开放标准（~38+ 产品采用）|
| 持续 | [Vercel skills.sh](tech-skills-sh) | 工业级 Skill marketplace（90K+ Skill / 19 Agent 框架）|
| 持续 | [OWASP Agentic Skills Top 10](https://owasp.org/www-project-agentic-skills-top-10/) | 安全治理指南立项 |

---

## 四、技术演进规律

### 4.1 生成赛道：从手工到自动，从单源到多源

2025 年的 Skill Creator 把"手工写"做成"引导式 + Eval 闭环"；2026 年 Q1 EvoSkill / Trace2Skill / EvoSkills / SkillRL 把生成路径推到"从失败中自动发现"、"从执行轨迹蒸馏"和"与 RL 策略共进化"。**9 个生成方案密集出现在同一季度**，是六大阶段中最拥挤的赛道。

### 4.2 优化赛道：进化框架密集涌现

2026 年 Q1 一个季度内出现 8 个进化框架（OpenSpace / Hermes / SkillClaw / MetaClaw / EvoSkill / SkillForge / Trace2Skill / SkillRL），按"进化信号从哪来"分化为多条路径，但都在走向"执行 → 分析 → 进化 → 验证 → 部署"的闭环，**正在趋同**。

### 4.3 评测 / 管理赛道：被点名但无方案

2026 年 2 月 SkillsBench 量化了"16/84 负增益"等反共识结论、SoK 论文给出 canonical 生命周期定义；2026 年 1-2 月连续两篇安全研究揭示 26.1% 漏洞率。**问题已被充分研究，但防御和过程评测工具仍接近为零** —— 这是未来 6-12 个月最确定的工程机会。

### 4.4 执行赛道：跨框架可移植性破局

2026-05 SkCC 论文首次提出 **SkIR 强类型 IR**，把 Skill 语义与 Agent 框架格式解耦 —— 这填补了 Skill-insight 竞品分析中标为"完全空白"的"跨 Agent 框架行为不一致"问题。同月 SkillRet 给出 17,810 Skill 的检索 benchmark，补全了 SkillRouter 缺失的标准化评测套件。

---

## 五、参考资料

- [全部 23 个真实产品](02-projects)
- 每个产品的论文 / 仓库链接见各 [tech-*.md 详情页](../)
- 行业判断依据：Skill-insight 竞品分析文档（内部，2026-05）
