<script setup>
import { computed } from 'vue'
import radarData from '../../assets/radar-data.json'

// Build unique product list (one per detail key)
// We use the FIRST occurrence of each product across categories as the primary.
const uniqueProducts = computed(() => {
  const seen = new Set()
  const products = []
  for (const cat of radarData.categories) {
    for (const tech of cat.technologies) {
      // key by tagline (more stable than id since same product has different ids per stage)
      const key = tech.detail?.tagline || tech.name
      if (seen.has(key)) continue
      seen.add(key)
      products.push({ ...tech, _primaryCategory: cat })
    }
  }
  return products
})

const byStage = computed(() => {
  const counts = {}
  for (const p of uniqueProducts.value) {
    const id = p._primaryCategory.id
    counts[id] = (counts[id] || 0) + 1
  }
  const max = Math.max(...Object.values(counts), 1)
  return radarData.categories.map(c => ({
    label: c.label,
    color: c.color,
    value: counts[c.id] || 0,
    pct: ((counts[c.id] || 0) / max) * 100,
  }))
})

const starsTop = computed(() => {
  return uniqueProducts.value
    .filter(p => p.metrics?.stars != null)
    .sort((a, b) => b.metrics.stars - a.metrics.stars)
    .slice(0, 10)
    .map(p => ({
      name: p.name,
      stars: p.metrics.stars,
      repo: p.metrics.repo,
      color: p._primaryCategory.color,
    }))
})

const maxStars = computed(() => starsTop.value[0]?.stars || 1)

// Source categorization (objective, based on string matching)
const sourceType = computed(() => {
  const types = {
    '学术研究': { color: '#6366f1', count: 0 },
    '工业研究': { color: '#0ea5e9', count: 0 },
    '社区开源': { color: '#10b981', count: 0 },
    '官方 / 商业产品': { color: '#f59e0b', count: 0 },
    '开放标准': { color: '#a855f7', count: 0 },
  }
  for (const p of uniqueProducts.value) {
    const s = (p.source || '') + ' ' + (p.detail?.tagline || '')
    if (s.includes('Anthropic') || s.includes('Vercel') || s.includes('阿里云') || s.includes('AMAP') || s.includes('Qwen') || s.includes('OpenClaw') || s.includes('商业产品')) {
      types['官方 / 商业产品'].count++
    } else if (s.includes('开放标准')) {
      types['开放标准'].count++
    } else if (s.includes('SIGIR') || s.includes('工业研究')) {
      types['工业研究'].count++
    } else if (s.includes('社区') || s.includes('开源')) {
      types['社区开源'].count++
    } else {
      types['学术研究'].count++
    }
  }
  return Object.entries(types).filter(([, v]) => v.count > 0)
    .map(([label, v]) => ({ label, count: v.count, color: v.color }))
})

// By organization (extract clean name from source)
function extractOrg(source) {
  if (!source) return '未分类'
  return source
    .replace(/\s*\(\s*\d[\d.,]*K?\+?\s*★\s*\)\s*/g, '')
    .replace(/\s*\([^)]*★[^)]*\)\s*/g, '')
    .replace(/\s*\(\s*SIGIR[^)]*\)\s*/g, '')
    .replace(/\s*\(\s*ICLR[^)]*\)\s*/g, '')
    .replace(/\s*\(\s*2026-\d+[^)]*\)\s*/g, '')
    .replace(/\s*\(早期\)/g, '')
    .replace(/\s*\(.+?\)\s*/g, ' ')
    .trim()
}

const byOrg = computed(() => {
  const counts = {}
  for (const p of uniqueProducts.value) {
    const org = extractOrg(p.source)
    counts[org] = (counts[org] || 0) + 1
  }
  const max = Math.max(...Object.values(counts), 1)
  return Object.entries(counts)
    .map(([org, count]) => ({ org, count, pct: (count / max) * 100 }))
    .sort((a, b) => b.count - a.count)
})

const byMonth = computed(() => {
  const counts = {}
  for (const p of uniqueProducts.value) {
    let month = p.metrics?.paperDate
    if (!month && p.metrics?.createdAt) month = p.metrics.createdAt.slice(0, 7)
    if (!month) continue
    counts[month] = (counts[month] || 0) + 1
  }
  const sorted = Object.entries(counts).sort()
  const max = Math.max(...Object.values(counts), 1)
  return sorted.map(([m, c]) => ({ month: m, count: c, pct: (c / max) * 100 }))
})

const totalProducts = computed(() => uniqueProducts.value.length)
const totalStars = computed(() => uniqueProducts.value.reduce((s, p) => s + (p.metrics?.stars || 0), 0))
const totalCitations = computed(() => uniqueProducts.value.reduce((s, p) => s + (p.metrics?.forks || 0), 0))

function fmtNum(n) {
  if (n < 1000) return String(n)
  if (n < 10000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  return Math.round(n / 1000) + 'K'
}

const updatedAt = radarData.metadata?.metricsUpdatedAt || '2026-05-12'
</script>

<template>
  <div class="stats-root">
    <header class="stats-header">
      <h1 class="brand-title">STATS</h1>
      <p class="brand-sub">
        基于 {{ totalProducts }} 个去重业界产品的客观指标聚合 · 数据快照：{{ updatedAt }}
        <a href="/skills-radar/" class="back-link">← 返回 Landscape</a>
      </p>
    </header>

    <div class="kpis">
      <div class="kpi">
        <div class="kpi-num">{{ totalProducts }}</div>
        <div class="kpi-label">业界产品总数</div>
      </div>
      <div class="kpi">
        <div class="kpi-num">{{ fmtNum(totalStars) }}</div>
        <div class="kpi-label">GitHub Stars 总和（14 仓库）</div>
      </div>
      <div class="kpi">
        <div class="kpi-num">{{ fmtNum(totalCitations) }}</div>
        <div class="kpi-label">GitHub Forks 总和</div>
      </div>
      <div class="kpi">
        <div class="kpi-num">6</div>
        <div class="kpi-label">生命周期阶段</div>
      </div>
    </div>

    <div class="charts-grid">
      <!-- 按阶段分布 -->
      <section class="chart-card">
        <h3>按生命周期阶段分布</h3>
        <div class="bars">
          <div v-for="b in byStage" :key="b.label" class="bar-row">
            <div class="bar-label">{{ b.label }}</div>
            <div class="bar-track">
              <div
                class="bar-fill"
                :style="{ width: b.pct + '%', background: b.color }"
              />
            </div>
            <div class="bar-value">{{ b.value }}</div>
          </div>
        </div>
      </section>

      <!-- Stars Top 10 -->
      <section class="chart-card">
        <h3>GitHub Stars Top 10</h3>
        <div class="bars">
          <div v-for="(s, i) in starsTop" :key="s.name" class="bar-row">
            <div class="bar-label" :title="s.repo">
              <span class="rank">{{ i + 1 }}.</span> {{ s.name }}
            </div>
            <div class="bar-track">
              <div
                class="bar-fill"
                :style="{ width: (s.stars / maxStars * 100) + '%', background: s.color }"
              />
            </div>
            <div class="bar-value">⭐ {{ fmtNum(s.stars) }}</div>
          </div>
        </div>
      </section>

      <!-- 按来源类型 -->
      <section class="chart-card">
        <h3>按来源类型</h3>
        <div class="bars">
          <div v-for="t in sourceType" :key="t.label" class="bar-row">
            <div class="bar-label">{{ t.label }}</div>
            <div class="bar-track">
              <div
                class="bar-fill"
                :style="{ width: (t.count / totalProducts * 100) + '%', background: t.color }"
              />
            </div>
            <div class="bar-value">{{ t.count }}</div>
          </div>
        </div>
      </section>

      <!-- 按发布月份 -->
      <section class="chart-card">
        <h3>按发布时间（arXiv 发布月 / 仓库创建月）</h3>
        <div class="timeline-bars">
          <div v-for="m in byMonth" :key="m.month" class="tb-col" :title="m.month + ' · ' + m.count + ' 个产品'">
            <div class="tb-value">{{ m.count }}</div>
            <div class="tb-bar" :style="{ height: m.pct + '%' }" />
            <div class="tb-label">{{ m.month.slice(2) }}</div>
          </div>
        </div>
      </section>

      <!-- 按组织 (wide) -->
      <section class="chart-card wide">
        <h3>按组织 / 机构 ({{ byOrg.length }} 个不同来源)</h3>
        <div class="bars dense">
          <div v-for="o in byOrg" :key="o.org" class="bar-row">
            <div class="bar-label">{{ o.org }}</div>
            <div class="bar-track">
              <div class="bar-fill" :style="{ width: o.pct + '%', background: '#6b7280' }" />
            </div>
            <div class="bar-value">{{ o.count }}</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.stats-root {
  font-size: 14px;
  margin: 24px 32px 60px;
}

.stats-header {
  margin-bottom: 28px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.brand-title {
  margin: 0;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 0.3px;
  color: var(--vp-c-text-1);
}

.brand-sub {
  margin: 6px 0 0;
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.back-link {
  color: var(--vp-c-brand);
  text-decoration: none;
  margin-left: 12px;
}

.kpis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
  margin-bottom: 28px;
}

.kpi {
  padding: 18px 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
}

.kpi-num {
  font-size: 28px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  line-height: 1;
}

.kpi-label {
  font-size: 12px;
  color: var(--vp-c-text-2);
  margin-top: 8px;
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 16px;
}

.chart-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 20px;
}

.chart-card.wide {
  grid-column: 1 / -1;
}

.chart-card h3 {
  margin: 0 0 14px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: var(--vp-c-text-1);
}

.bars {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.bars.dense {
  gap: 5px;
}

.bar-row {
  display: grid;
  grid-template-columns: 150px 1fr 60px;
  align-items: center;
  gap: 12px;
  font-size: 13px;
}

.bar-label {
  color: var(--vp-c-text-1);
  font-size: 12.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rank {
  color: var(--vp-c-text-2);
  margin-right: 4px;
}

.bar-track {
  height: 12px;
  background: var(--vp-c-bg);
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
}

.bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.6s ease-out;
}

.bar-value {
  text-align: right;
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 600;
}

/* Timeline bars (vertical) */
.timeline-bars {
  display: flex;
  gap: 8px;
  height: 160px;
  align-items: flex-end;
  padding-bottom: 30px;
  position: relative;
}

.tb-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  position: relative;
}

.tb-value {
  font-size: 11px;
  color: var(--vp-c-text-1);
  font-weight: 600;
  margin-bottom: 2px;
}

.tb-bar {
  width: 100%;
  max-width: 32px;
  background: #4ECDC4;
  border-radius: 3px 3px 0 0;
  min-height: 2px;
  transition: height 0.6s ease-out;
}

.tb-label {
  position: absolute;
  bottom: -22px;
  font-size: 10.5px;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}
</style>
