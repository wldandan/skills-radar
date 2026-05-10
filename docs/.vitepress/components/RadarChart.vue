<script setup>
import { onMounted, ref } from 'vue'
import * as d3 from 'd3'

const radarRef = ref(null)

const drawRadar = () => {
  if (!radarRef.value) return

  const data = {
    categories: [
      {
        id: 'evaluation',
        label: 'Skill 评测',
        score: 0.73,
        color: '#96CEB4'
      },
      {
        id: 'recall',
        label: 'Skill 召回',
        score: 0.66,
        color: '#4ECDC4'
      },
      {
        id: 'execution',
        label: 'Skill 执行',
        score: 0.54,
        color: '#45B7D1'
      },
      {
        id: 'optimization',
        label: 'Skill 优化',
        score: 0.53,
        color: '#DDA0DD'
      },
      {
        id: 'generation',
        label: 'Skill 生成',
        score: 0.52,
        color: '#FF6B6B'
      },
      {
        id: 'management',
        label: 'Skill 管理',
        score: 0.39,
        color: '#B8B8B8'
      }
    ]
  }

  const width = 500
  const height = 400
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) / 2 - 60
  const levels = 5
  const maxValue = 1.0

  d3.select(radarRef.value).selectAll('*').remove()

  const svg = d3.select(radarRef.value)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${centerX}, ${centerY})`)

  const angleSlice = (Math.PI * 2) / data.categories.length

  // Draw concentric circles (levels)
  for (let level = 0; level < levels; level++) {
    const levelRadius = (radius / levels) * (level + 1)
    const circle = d3.svg.circle()
      .radius(levelRadius)
      .center([0, 0])

    svg.append('circle')
      .attr('r', levelRadius)
      .attr('fill', 'none')
      .attr('stroke', '#e0e0e0')
      .attr('stroke-width', 1)
      .attr('stroke-dasharray', '3,3')

    // Level label
    svg.append('text')
      .attr('x', 5)
      .attr('y', -levelRadius - 5)
      .attr('font-size', '10px')
      .attr('fill', '#999')
      .text(`${((level + 1) / levels * 100).toFixed(0)}%`)
  }

  // Draw axes
  data.categories.forEach((cat, i) => {
    const angle = angleSlice * i - Math.PI / 2
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius

    // Axis line
    svg.append('line')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', x)
      .attr('y2', y)
      .attr('stroke', '#e0e0e0')
      .attr('stroke-width', 1)

    // Label
    const labelX = Math.cos(angle) * (radius + 30)
    const labelY = Math.sin(angle) * (radius + 30)

    svg.append('text')
      .attr('x', labelX)
      .attr('y', labelY)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '12px')
      .attr('font-weight', 'bold')
      .attr('fill', cat.color)
      .text(cat.label)
  })

  // Draw data polygon
  const points = data.categories.map((cat, i) => {
    const angle = angleSlice * i - Math.PI / 2
    const r = (cat.score / maxValue) * radius
    return {
      x: Math.cos(angle) * r,
      y: Math.sin(angle) * r,
      ...cat
    }
  })

  const lineFunction = d3.svg.line()
    .x(d => d.x)
    .y(d => d.y)
    .interpolate('linear-closed')

  // Fill area
  svg.append('path')
    .attr('d', lineFunction(points))
    .attr('fill', 'rgba(78, 205, 196, 0.2)')
    .attr('stroke', '#4ECDC4')
    .attr('stroke-width', 2)

  // Data points
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
    .text(d => `${d.label}: ${(d.score * 100).toFixed(0)}%`)
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
        <span>🟢 成熟期 (>0.6)</span>
      </div>
      <div class="legend-item">
        <span class="dot" style="background: #FFB347"></span>
        <span>🟡 成长期 (0.4-0.6)</span>
      </div>
      <div class="legend-item">
        <span class="dot" style="background: #B8B8B8"></span>
        <span>🔴 探索期 (<0.4)</span>
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
