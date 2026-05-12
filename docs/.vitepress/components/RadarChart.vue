<script setup>
import { onMounted, ref } from 'vue'
import * as d3 from 'd3'
import radarData from '../../assets/radar-data.json'

const radarRef = ref(null)

const drawRadar = () => {
  if (!radarRef.value) return

  const colorById = Object.fromEntries(
    radarData.categories.map(c => [c.id, c.color])
  )
  const labelById = Object.fromEntries(
    radarData.categories.map(c => [c.id, c.label])
  )

  const axisOrder = ['evaluation', 'recall', 'execution', 'optimization', 'generation', 'management']

  const categories = axisOrder.map(id => {
    const s = radarData.categorySummary.find(c => c.id === id)
    return {
      id,
      label: labelById[id] || s.label,
      color: colorById[id] || '#888',
      score: s.overallScore,
      status: s.status,
    }
  })

  const width = 560
  const height = 460
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) / 2 - 70
  const levels = 5
  const maxValue = 1.0

  d3.select(radarRef.value).selectAll('*').remove()

  const svg = d3.select(radarRef.value)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${centerX}, ${centerY})`)

  const angleSlice = (Math.PI * 2) / categories.length

  for (let level = 0; level < levels; level++) {
    const levelRadius = (radius / levels) * (level + 1)
    svg.append('circle')
      .attr('r', levelRadius)
      .attr('fill', 'none')
      .attr('stroke', '#e0e0e0')
      .attr('stroke-width', 1)
      .attr('stroke-dasharray', '3,3')

    svg.append('text')
      .attr('x', 5)
      .attr('y', -levelRadius - 4)
      .attr('font-size', '10px')
      .attr('fill', '#999')
      .text(`${((level + 1) / levels * 100).toFixed(0)}%`)
  }

  categories.forEach((cat, i) => {
    const angle = angleSlice * i - Math.PI / 2
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius

    svg.append('line')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', x)
      .attr('y2', y)
      .attr('stroke', '#d8d8d8')
      .attr('stroke-width', 1)

    const labelX = Math.cos(angle) * (radius + 36)
    const labelY = Math.sin(angle) * (radius + 36)

    svg.append('text')
      .attr('x', labelX)
      .attr('y', labelY - 6)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '13px')
      .attr('font-weight', 'bold')
      .attr('fill', cat.color)
      .text(cat.label)

    svg.append('text')
      .attr('x', labelX)
      .attr('y', labelY + 10)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '11px')
      .attr('fill', '#666')
      .text(`${(cat.score * 100).toFixed(0)}% · ${cat.status}`)
  })

  const points = categories.map((cat, i) => {
    const angle = angleSlice * i - Math.PI / 2
    const r = (cat.score / maxValue) * radius
    return {
      x: Math.cos(angle) * r,
      y: Math.sin(angle) * r,
      ...cat
    }
  })

  const lineGenerator = d3.line()
    .x(d => d.x)
    .y(d => d.y)
    .curve(d3.curveLinearClosed)

  svg.append('path')
    .attr('d', lineGenerator(points))
    .attr('fill', 'rgba(78, 205, 196, 0.18)')
    .attr('stroke', '#4ECDC4')
    .attr('stroke-width', 2)

  svg.selectAll('.data-point')
    .data(points)
    .enter()
    .append('circle')
    .attr('class', 'data-point')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', 6)
    .attr('fill', d => d.color)
    .attr('stroke', '#fff')
    .attr('stroke-width', 2)
    .style('cursor', 'pointer')
    .append('title')
    .text(d => `${d.label}: ${(d.score * 100).toFixed(0)}% ${d.status}`)
}

onMounted(() => {
  drawRadar()
})
</script>

<template>
  <div class="radar-container">
    <div ref="radarRef" class="radar-chart"></div>
    <div class="legend">
      <div class="legend-item">
        <span class="dot" style="background: #96CEB4"></span>
        <span>🟢 成熟期 (≥ 0.60)</span>
      </div>
      <div class="legend-item">
        <span class="dot" style="background: #FFB347"></span>
        <span>🟡 成长期 (0.40 – 0.60)</span>
      </div>
      <div class="legend-item">
        <span class="dot" style="background: #B8B8B8"></span>
        <span>🔴 探索期 (&lt; 0.40)</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.radar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.radar-chart {
  max-width: 100%;
}

.legend {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
</style>
