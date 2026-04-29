<script setup>
defineOptions({
  name: 'SkillsView',
})

// 顶部环形进度条数据
const progressData = ref([
  { label: '前端开发', percent: 95, color: '#7b38f8' },
  { label: '工程化/AI', percent: 85, color: '#f35a7c' },
  { label: '业务逻辑', percent: 80, color: '#68d4b2' },
  { label: '服务端基础', percent: 45, color: '#f6ca45' },
])
// 底部技能标签数据
// 底部技能标签数据
const skillsData = ref([
  {
    category: '核心基础',
    skills: [
      { name: 'HTML5', color: '#e34f26' },
      { name: 'CSS3 / Sass', color: '#1572b6' },
      { name: 'JavaScript (ES6+)', color: '#f7df1e' },
    ],
  },
  {
    category: 'Vue 全家桶',
    skills: [
      { name: 'Vue 3 (Composition)', color: '#42b883' },
      { name: 'Vue 2 (Options)', color: '#35495e' },
      { name: 'Pinia / Vuex', color: '#ffca28' },
      { name: 'Vue Router', color: '#42b883' },
    ],
  },
  {
    category: '三方集成/调包',
    skills: [
      { name: 'Element Plus', color: '#409eff' },
      { name: 'Vant UI', color: '#1989fa' },
      { name: 'Axios 拦截器封装', color: '#5a29e4' }, // 强调你不仅是调包，还会封装
      { name: 'Echarts 图表', color: '#8f5cf5' }, // 常用包补位
    ],
  },
  {
    category: '开发工具/工程化',
    skills: [
      { name: 'Vite / Webpack', color: '#646cff' },
      { name: 'AI Programming', color: '#8f5cf5' },
      { name: 'Git / GitHub', color: '#f05032' },
      { name: 'ESLint / Prettier', color: '#4b32c3' },
    ],
  },
])
</script>

<template>
  <div class="skills-wrapper">
    <h2 class="module-title">擅长技术</h2>
    <div class="title-line"></div>

    <div class="progress-section">
      <!-- 原型进度条 -->
      <div class="progress-item" v-for="(item, index) in progressData" :key="index">
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
        <div class="progress-label">{{ item.label }}</div>
      </div>
    </div>

    <div class="tags-section">
      <!-- 技能展示 -->
      <div class="tag-group" v-for="(group, index) in skillsData" :key="index">
        <!-- 标题 -->
        <div class="group-label">{{ group.category }}:</div>
        <div class="tags-list">
          <!-- 有哪些技能 -->
          <span
            class="skill-tag"
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
</template>

<style scoped>
.title-line {
  width: 40px;
  height: 4px;
  /* 替换为粉色 */
  background: #ff69b4;
  margin-top: 8px;
  margin-bottom: 30px;
  border-radius: 2px;
}
.skills-wrapper {
  padding: 20px;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  max-width: 800px;
}

.module-title {
  font-size: 22px;
  font-weight: 600;

  color: #2c3e50;
}

/* 环形进度条区域样式 */
.progress-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  flex-wrap: wrap;
  gap: 20px;
}

.progress-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
}

.circular-chart {
  display: block;
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
}

.circle-bg {
  fill: none;
  stroke: #f2f2f2;
  stroke-width: 6;
}

.circle-progress {
  fill: none;
  stroke-width: 6;
  stroke-linecap: round;
  /* 将圆环起点从默认的3点钟方向旋转到12点钟方向 */
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: stroke-dasharray 1s ease-out;
}

.percentage-text {
  fill: #333;
  font-size: 20px;
  text-anchor: middle;
  font-weight: 500;
}

.progress-label {
  font-size: 15px;
  color: #555;
}

/* 技能标签区域样式 */
.tags-section {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-left: 20px;
  margin-bottom: 60px;
}

.tag-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.group-label {
  font-size: 15px;
  color: #666;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.skill-tag {
  padding: 6px 16px;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.5px;
}
</style>
