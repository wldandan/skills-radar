<script setup>
import { ref, computed, reactive } from 'vue'
import radarData from '../../assets/radar-data.json'

const selected = ref(null)
const filterText = ref('')
const failedLogos = reactive({})

const stageIcons = {
  generation: '🏗️',
  recall: '🎯',
  execution: '⚙️',
  evaluation: '📏',
  optimization: '🚀',
  management: '🛡️',
}

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
  if (typeof document !== 'undefined') document.body.style.overflow = 'hidden'
}

function close() {
  selected.value = null
  if (typeof document !== 'undefined') document.body.style.overflow = ''
}

// Decide an icon character for a reference link based on label/url
function refIcon(ref) {
  const text = (ref.label + ' ' + ref.url).toLowerCase()
  if (text.includes('github.com') || text.includes('github')) return '⌥'
  if (text.includes('arxiv.org') || text.includes('论文') || text.includes('paper')) return '📄'
  if (text.includes('huggingface') || text.includes('blog') || text.includes('博客')) return '✎'
  if (text.includes('文档') || text.includes('docs')) return '📖'
  return '🔗'
}

// Build a unified link list for modal header. Always include primary `link` first,
// then `references` (de-dup against primary).
function allLinks(tech) {
  const list = []
  const seen = new Set()
  if (tech.link) {
    list.push({ label: '主要链接', url: tech.link, isPrimary: true })
    seen.add(tech.link)
  }
  for (const r of (tech.detail?.references || [])) {
    if (!r.url || seen.has(r.url)) continue
    list.push({ label: r.label, url: r.url })
    seen.add(r.url)
  }
  return list
}
</script>

<template>
  <div class="landscape-root">
    <div class="landscape-header">
      <div class="landscape-stats">
        <strong>Skills Radar</strong>
        <span class="dim">·</span>
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
            <span class="stage-count">{{ cat.technologies.length }} 个产品</span>
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
              </div>
              <p v-if="selected.detail?.tagline" class="modal-tagline">
                {{ selected.detail.tagline }}
              </p>
            </div>
          </div>

          <div v-if="allLinks(selected).length" class="links-bar">
            <a
              v-for="(l, i) in allLinks(selected)"
              :key="i"
              :href="l.url"
              target="_blank"
              rel="noopener"
              class="link-btn"
              :class="{ primary: l.isPrimary }"
              :title="l.url"
            >
              <span class="link-icon">{{ refIcon(l) }}</span>
              <span class="link-label">{{ l.label }}</span>
            </a>
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
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.landscape-root {
  font-size: 14px;
  margin: 24px 32px;
}

.landscape-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 28px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.landscape-stats {
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.landscape-stats strong {
  color: var(--vp-c-text-1);
  font-size: 16px;
  letter-spacing: 0.3px;
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

.stage-title {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.stage-title h3 {
  margin: 0;
  font-size: 17px;
  font-weight: 600;
}

.stage-count {
  font-size: 12px;
  color: var(--vp-c-text-2);
}

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
  width: 80px;
  height: 80px;
  border-radius: 16px;
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

.logo-wrap.large .logo-block { font-size: 24px; }

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
  width: 66vw;
  max-width: 1100px;
  min-width: 320px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 32px 36px;
  position: relative;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .modal-card {
    width: 95vw;
    padding: 22px 18px;
  }
}

.modal-close {
  position: absolute;
  top: 14px;
  right: 18px;
  background: transparent;
  border: none;
  font-size: 30px;
  line-height: 1;
  cursor: pointer;
  color: var(--vp-c-text-2);
  padding: 4px 10px;
}

.modal-close:hover { color: var(--vp-c-text-1); }

.modal-head {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 18px;
  padding-right: 36px;
}

.modal-title { flex: 1; min-width: 0; }
.modal-title h2 {
  margin: 0 0 8px;
  font-size: 24px;
  line-height: 1.2;
}

.modal-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10px;
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
  line-height: 1.55;
  margin: 6px 0 0;
}

/* Links bar (CNCF-style) */
.links-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 22px;
  padding: 14px 0;
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
}

.link-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.15s;
  max-width: 100%;
}

.link-btn:hover {
  border-color: var(--vp-c-brand);
  background: var(--vp-c-bg-alt);
  transform: translateY(-1px);
}

.link-btn.primary {
  background: var(--vp-c-brand);
  color: #fff;
  border-color: var(--vp-c-brand);
}

.link-btn.primary:hover {
  filter: brightness(1.08);
  background: var(--vp-c-brand);
}

.link-icon {
  font-size: 14px;
  display: inline-flex;
  align-items: center;
}

.link-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 320px;
}

.modal-desc {
  color: var(--vp-c-text-1);
  line-height: 1.65;
  margin: 0 0 22px;
  padding: 14px 16px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  font-size: 14px;
}

.modal-section {
  margin-bottom: 22px;
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
  line-height: 1.7;
  color: var(--vp-c-text-1);
  font-size: 14px;
}

.modal-section ul {
  margin: 0;
  padding-left: 22px;
  line-height: 1.75;
  color: var(--vp-c-text-1);
  font-size: 14px;
}

.modal-section ul li { margin-bottom: 5px; }

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
