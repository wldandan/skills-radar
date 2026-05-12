<script setup>
import { ref, computed, reactive } from 'vue'
import radarData from '../../assets/radar-data.json'

const selected = ref(null)
const filterText = ref('')
const failedLogos = reactive({}) // id -> true if logo failed to load

const stageIcons = {
  generation: '🏗️',
  recall: '🎯',
  execution: '⚙️',
  evaluation: '📏',
  optimization: '🚀',
  management: '🛡️',
}

const summaryById = Object.fromEntries(
  radarData.categorySummary.map(s => [s.id, s])
)

const dimensions = radarData.dimensions

const filtered = computed(() => {
  const q = filterText.value.trim().toLowerCase()
  if (!q) return radarData.categories
  return radarData.categories.map(cat => ({
    ...cat,
    technologies: cat.technologies.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      (t.source || '').toLowerCase().includes(q)
    )
  }))
})

const totalCount = computed(() =>
  filtered.value.reduce((sum, c) => sum + c.technologies.length, 0)
)

function pickColor(name) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) | 0
  const hue = Math.abs(hash) % 360
  return `hsl(${hue}, 55%, 48%)`
}

function initials(name) {
  const clean = name.replace(/\(.+?\)/g, '').trim()
  const parts = clean.split(/[\s/\-_.]+/).filter(Boolean)
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase()
  return (parts[0][0] + parts[1][0]).toUpperCase()
}

function showLogo(tech) {
  return tech.logo && !failedLogos[tech.id]
}

function onLogoError(id) {
  failedLogos[id] = true
}

function open(tech, cat) {
  selected.value = { ...tech, _category: cat }
  document.body.style.overflow = 'hidden'
}

function close() {
  selected.value = null
  document.body.style.overflow = ''
}

function overallScore(scores) {
  if (!scores) return null
  return (scores[0] * 0.3 + scores[1] * 0.25 + scores[2] * 0.25 + scores[3] * 0.2).toFixed(2)
}
</script>

<template>
  <div class="landscape-root">
    <div class="landscape-header">
      <div class="landscape-stats">
        <span>{{ totalCount }} 个产品</span>
        <span class="dim">·</span>
        <span>6 大生命周期</span>
        <span class="dim">·</span>
        <span>点击卡片查看详情</span>
      </div>
      <input
        v-model="filterText"
        placeholder="按名称 / 描述 / 来源筛选..."
        class="landscape-search"
      />
    </div>

    <div class="landscape-grid">
      <section
        v-for="cat in filtered"
        :key="cat.id"
        class="stage-section"
        :style="{ '--accent': cat.color }"
      >
        <header class="stage-header">
          <span class="stage-icon">{{ stageIcons[cat.id] || '◆' }}</span>
          <div class="stage-title">
            <h3>{{ cat.label }}</h3>
            <div class="stage-meta">
              <span class="badge" :style="{ background: cat.color }">
                {{ summaryById[cat.id]?.overallScore?.toFixed(2) }}
              </span>
              <span class="muted">{{ summaryById[cat.id]?.status }}</span>
              <span class="muted">· {{ cat.technologies.length }} 个产品</span>
            </div>
          </div>
        </header>

        <div class="cards">
          <button
            v-for="tech in cat.technologies"
            :key="tech.id"
            class="tech-card"
            @click="open(tech, cat)"
          >
            <div class="logo-wrap">
              <img
                v-if="showLogo(tech)"
                :src="tech.logo"
                :alt="tech.name + ' logo'"
                class="logo-img"
                loading="lazy"
                @error="onLogoError(tech.id)"
              />
              <div
                v-else
                class="logo-block"
                :style="{ background: pickColor(tech.name) }"
              >
                {{ initials(tech.name) }}
              </div>
            </div>
            <div class="tech-name">{{ tech.name }}</div>
            <div class="tech-source">{{ tech.source }}</div>
          </button>
        </div>
      </section>
    </div>

    <Transition name="modal">
      <div v-if="selected" class="modal-overlay" @click.self="close">
        <div class="modal-card">
          <button class="modal-close" @click="close" aria-label="关闭">×</button>

          <div class="modal-head">
            <div class="logo-wrap large">
              <img
                v-if="showLogo(selected)"
                :src="selected.logo"
                :alt="selected.name + ' logo'"
                class="logo-img"
                @error="onLogoError(selected.id)"
              />
              <div
                v-else
                class="logo-block large"
                :style="{ background: pickColor(selected.name) }"
              >
                {{ initials(selected.name) }}
              </div>
            </div>
            <div class="modal-title">
              <h2>{{ selected.name }}</h2>
              <div class="modal-tags">
                <span class="tag" :style="{ background: selected._category.color }">
                  {{ selected._category.label }}
                </span>
                <span class="tag-muted">{{ selected.source }}</span>
                <span
                  v-if="overallScore(selected.scores)"
                  class="tag-muted"
                >综合评分 {{ overallScore(selected.scores) }}</span>
              </div>
              <p v-if="selected.detail?.tagline" class="modal-tagline">
                {{ selected.detail.tagline }}
              </p>
            </div>
          </div>

          <p class="modal-desc">{{ selected.description }}</p>

          <section v-if="selected.detail?.principle" class="modal-section">
            <h4>核心原理</h4>
            <p>{{ selected.detail.principle }}</p>
          </section>

          <section v-if="selected.detail?.capabilities?.length" class="modal-section">
            <h4>主要能力</h4>
            <ul>
              <li v-for="(c, i) in selected.detail.capabilities" :key="i">{{ c }}</li>
            </ul>
          </section>

          <section v-if="selected.detail?.limitations?.length" class="modal-section">
            <h4>局限性</h4>
            <ul>
              <li v-for="(l, i) in selected.detail.limitations" :key="i">{{ l }}</li>
            </ul>
          </section>

          <section v-if="selected.scores" class="modal-section">
            <h4>4 维成熟度评分</h4>
            <div class="scores">
              <div v-for="(s, i) in selected.scores" :key="i" class="score-row">
                <div class="score-label">
                  {{ dimensions[i].label }}
                  <span class="score-value">{{ s.toFixed(2) }}</span>
                </div>
                <div class="score-bar">
                  <div
                    class="score-fill"
                    :style="{ width: (s * 100) + '%', background: selected._category.color }"
                  />
                </div>
                <div
                  v-if="selected.detail?.scoreRationale?.[dimensions[i].key]"
                  class="score-rationale"
                >
                  {{ selected.detail.scoreRationale[dimensions[i].key] }}
                </div>
              </div>
            </div>
          </section>

          <section v-if="selected.detail?.references?.length" class="modal-section">
            <h4>参考资料</h4>
            <ul class="ref-list">
              <li v-for="(r, i) in selected.detail.references" :key="i">
                <a :href="r.url" target="_blank" rel="noopener">{{ r.label }} ↗</a>
              </li>
            </ul>
          </section>

          <div class="modal-actions">
            <a
              v-if="selected.link"
              :href="selected.link"
              target="_blank"
              rel="noopener"
              class="btn primary"
            >
              访问原始链接 →
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.landscape-root {
  font-size: 14px;
  margin: 24px 0;
}

.landscape-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.landscape-stats {
  display: flex;
  gap: 10px;
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.dim { opacity: 0.45; }

.landscape-search {
  padding: 8px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  width: 280px;
  max-width: 100%;
}

.landscape-grid {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.stage-section {
  border-left: 4px solid var(--accent);
  padding-left: 16px;
}

.stage-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.stage-icon { font-size: 26px; line-height: 1; }

.stage-title h3 { margin: 0; font-size: 17px; font-weight: 600; }

.stage-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  font-size: 11px;
}

.muted { color: var(--vp-c-text-2); }

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
}

.tech-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 14px 10px 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.15s, border-color 0.15s, box-shadow 0.15s;
  text-align: center;
  font-family: inherit;
  color: var(--vp-c-text-1);
}

.tech-card:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.logo-wrap {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid var(--vp-c-divider);
  flex-shrink: 0;
}

.logo-wrap.large {
  width: 72px;
  height: 72px;
  border-radius: 14px;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 6px;
  box-sizing: border-box;
}

.logo-block {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.5px;
}

.logo-wrap.large .logo-block { font-size: 22px; }

.tech-name {
  font-weight: 600;
  font-size: 13px;
  line-height: 1.3;
}

.tech-source {
  font-size: 11px;
  color: var(--vp-c-text-2);
  line-height: 1.3;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-card {
  background: var(--vp-c-bg);
  border-radius: 14px;
  max-width: 680px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 28px;
  position: relative;
  border: 1px solid var(--vp-c-divider);
}

.modal-close {
  position: absolute;
  top: 14px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  color: var(--vp-c-text-2);
  padding: 4px 10px;
}

.modal-close:hover { color: var(--vp-c-text-1); }

.modal-head {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 20px;
}

.modal-title { flex: 1; }
.modal-title h2 { margin: 0 0 6px; font-size: 22px; }

.modal-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 8px;
}

.tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
}

.tag-muted {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 12px;
}

.modal-tagline {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin: 6px 0 0;
}

.modal-desc {
  color: var(--vp-c-text-1);
  line-height: 1.6;
  margin: 0 0 20px;
  padding: 12px 14px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  font-size: 13.5px;
}

.modal-section {
  margin-bottom: 20px;
}

.modal-section h4 {
  margin: 0 0 10px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  padding-bottom: 6px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.modal-section p {
  margin: 0;
  line-height: 1.65;
  color: var(--vp-c-text-1);
  font-size: 13.5px;
}

.modal-section ul {
  margin: 0;
  padding-left: 20px;
  line-height: 1.7;
  color: var(--vp-c-text-1);
  font-size: 13.5px;
}

.modal-section ul li { margin-bottom: 4px; }

.scores {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.score-row {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 13px;
}

.score-label {
  display: flex;
  justify-content: space-between;
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.score-bar {
  height: 6px;
  background: var(--vp-c-bg-soft);
  border-radius: 3px;
  overflow: hidden;
}

.score-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.3s;
}

.score-value {
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text-2);
  font-weight: 600;
}

.score-rationale {
  font-size: 12px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin-top: 2px;
  padding-left: 2px;
}

.ref-list {
  list-style: none !important;
  padding-left: 0 !important;
}

.ref-list li { margin-bottom: 6px; }
.ref-list a {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-size: 13px;
}
.ref-list a:hover { text-decoration: underline; }

.modal-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.btn {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}

.btn:hover { border-color: var(--vp-c-brand); }

.btn.primary {
  background: var(--vp-c-brand);
  color: #fff;
  border-color: var(--vp-c-brand);
}

/* Modal transition */
.modal-enter-active,
.modal-leave-active { transition: opacity 0.2s; }
.modal-enter-active .modal-card,
.modal-leave-active .modal-card { transition: transform 0.2s; }
.modal-enter-from,
.modal-leave-to { opacity: 0; }
.modal-enter-from .modal-card,
.modal-leave-to .modal-card { transform: scale(0.96) translateY(8px); }
</style>
