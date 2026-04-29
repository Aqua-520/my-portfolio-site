<script setup>
defineOptions({
  name: 'SkillsView',
})

// 顶部环形进度条数据 - 统一为粉色系
const progressData = ref([
  { label: '前端开发', percent: 95, color: 'var(--primary-pink)' },
  { label: '工程化/AI', percent: 85, color: 'var(--primary-pink-light)' },
  { label: '业务逻辑', percent: 80, color: '#ff85c0' },
  { label: '服务端基础', percent: 45, color: '#ffadd2' },
])

// 底部技能标签数据
const skillsData = ref([
  {
    category: '核心基础',
    skills: [
      { name: 'HTML5', color: '#ff85c0' },
      { name: 'CSS3 / Sass', color: '#ff85c0' },
      { name: 'JavaScript (ES6+)', color: '#ff85c0' },
    ],
  },
  {
    category: 'Vue 全家桶',
    skills: [
      { name: 'Vue 3 (Composition)', color: '#ff69b4' },
      { name: 'Vue 2 (Options)', color: '#ff69b4' },
      { name: 'Pinia / Vuex', color: '#ff69b4' },
      { name: 'Vue Router', color: '#ff69b4' },
    ],
  },
  {
    category: '三方集成/调包',
    skills: [
      { name: 'Element Plus', color: '#e05297' },
      { name: 'Vant UI', color: '#e05297' },
      { name: 'Axios 拦截器封装', color: '#e05297' },
      { name: 'Echarts 图表', color: '#e05297' },
    ],
  },
  {
    category: '开发工具/工程化',
    skills: [
      { name: 'Vite / Webpack', color: '#c41d7f' },
      { name: 'AI Programming', color: '#c41d7f' },
      { name: 'Git / GitHub', color: '#c41d7f' },
      { name: 'ESLint / Prettier', color: '#c41d7f' },
    ],
  },
])
</script>

<template>
  <div class="skills-wrapper">
    <header class="resume-header">
      <div class="title-wrapper">
        <h2 class="main-title">擅长技术</h2>
        <div class="title-line"></div>
      </div>
    </header>

    <div class="resume-card">
      <div class="progress-section">
        <!-- 圆形进度条 -->
        <div class="progress-item" v-for="(item, index) in progressData" :key="index">
          <div class="chart-box">
            <svg viewBox="0 0 100 100" class="circular-chart">
              <circle class="circle-bg" cx="50" cy="50" r="40" pathLength="100" />
              <circle
                class="circle-progress"
                cx="50"
                cy="50"
                r="40"
                pathLength="100"
                :stroke="item.color"
                :stroke-dasharray="`${item.percent} 100`"
              />
              <text x="50" y="55" class="percentage-text">{{ item.percent }}%</text>
            </svg>
          </div>
          <div class="progress-label">{{ item.label }}</div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="tags-section">
        <!-- 技能展示 -->
        <div class="tag-group" v-for="(group, index) in skillsData" :key="index">
          <div class="group-label">{{ group.category }}</div>
          <div class="tags-list">
            <span
              class="skill-tag hover-lift"
              v-for="(skill, sIndex) in group.skills"
              :key="sIndex"
              :style="{ backgroundColor: skill.color }"
            >
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-wrapper {
  margin: 0 auto;
}

.resume-header {
  margin-bottom: 25px;
}

.main-title {
  font-size: 26px;
  color: var(--text-main);
  margin: 0;
  font-weight: 600;
}

.title-line {
  width: 40px;
  height: 4px;
  background: var(--primary-pink);
  margin-top: 8px;
  border-radius: 2px;
}

.resume-card {
  background: var(--bg-card);
  border-radius: 16px;
  /* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); */
  padding: 20px;
  margin-bottom: 60px;
  /* border: 1px solid var(--border-color); */
}

.progress-section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
}

@media (max-width: 768px) {
  .progress-section {
    gap: 20px;
  }
  .progress-item {
    width: 100px;
  }
  .chart-box {
    width: 80px;
    height: 80px;
  }
  .percentage-text {
    font-size: 24px;
  }
}

.progress-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
}

.chart-box {
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
  transition: transform var(--transition-base);
}

.progress-item:hover .chart-box {
  transform: scale(1.1);
}

.circular-chart {
  display: block;
}

.circle-bg {
  fill: none;
  stroke: #f2f2f2;
  stroke-width: 8;
}

.circle-progress {
  fill: none;
  stroke-width: 8;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: stroke-dasharray 1.5s var(--transition-slow);
}

.percentage-text {
  fill: var(--text-main);
  font-size: 20px;
  text-anchor: middle;
  font-weight: 600;
}

.progress-label {
  font-size: 0.95rem;
  color: var(--text-sub);
  font-weight: 500;
}

.divider {
  height: 1px;
  background: var(--border-color);
  margin: 40px 0;
}

.tags-section {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.tag-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.group-label {
  font-size: 0.9rem;
  color: var(--text-light);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 600px) {
  .tag-group {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  .group-label {
    min-width: unset;
    border-right: none;
    border-bottom: 2px solid var(--primary-pink-lighter);
    padding-bottom: 5px;
    margin-bottom: 5px;
  }
  .tags-list {
    gap: 8px;
  }
  .skill-tag {
    padding: 6px 12px;
    font-size: 0.85rem;
  }
}

.skill-tag {
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: default;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}
</style>
