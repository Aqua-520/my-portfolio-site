<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    title: '小兔鲜儿 (Xiao Tu Xian)',
    type: '电商项目',
    description:
      '基于 Vue 3 + Pinia 构建的全功能电商平台。实现了复杂的 SKU 规格选择逻辑、购物车本地与接口同步、以及完整的订单结算流程。',
    tags: ['Vue 3', 'Pinia', 'Sku', 'Element Plus'],
    date: '2026.03',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop',
    demoUrl: '',
    githubUrl: '',
  },
  {
    title: '个人作品集网站',
    type: '个人主页',
    description:
      '使用 Vue 3 组合式 API 搭建的响应式个人门户。采用 Scoped CSS 确保样式隔离，集成粉色系视觉设计。',
    tags: ['Vue 3', 'Vite', 'Scoped CSS'],
    date: '2026.04',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
    demoUrl: '',
    githubUrl: '',
  },
])

/* 
  跳转到对应的gitHub仓库地址
*/
const openLink = (url) => {
  if (url) window.open(url, '_blank')
}
</script>

<template>
  <div class="header-section">
    <h2 class="title">我的作品集 / <span>Projects</span></h2>
    <div class="underline"></div>
    <p class="subtitle">记录我在前端开发道路上的实践与探索</p>
  </div>
  <div class="project-container">
    <div class="project-grid">
      <div v-for="(project, index) in projects" :key="index" class="project-card">
        <div class="card-cover" @click="openLink(project.demoUrl)">
          <img v-if="project.image" :src="project.image" :alt="project.title" />
          <div v-else class="placeholder">Project Image</div>
          <div class="cover-mask">
            <el-button class="pink-btn" round>预览项目</el-button>
          </div>
        </div>

        <div class="card-content">
          <div class="card-header">
            <h3 class="card-title">{{ project.title }}</h3>
            <el-tag size="small" class="pink-tag">{{ project.type }}</el-tag>
          </div>

          <p class="card-desc">{{ project.description }}</p>

          <div class="tag-group">
            <span v-for="tech in project.tags" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>

          <div class="card-footer">
            <el-link class="pink-link" :underline="false" @click="openLink(project.githubUrl)">
              查看代码 <el-icon class="el-icon--right"><Link /></el-icon>
            </el-link>
            <span class="date-text">{{ project.date }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-banner">
      <h3>万事开头难，但我已准备好起跑</h3>
      <p>
        作为一名非科班转码的应届生，我深知入行的机会弥足珍贵。<br />
        我拥有极强的自驱动力和抗压性，已准备好将全部精力投入到实战中。希望能获得一次面试机会，向您展示我的可能性！
      </p>
      <el-button class="banner-btn" size="large" @click="$router.push('/about')"
        >给予机会 / 联系我</el-button
      >
    </div>
  </div>
</template>

<style scoped>
/* 容器 */
.project-container {
  /* padding: 50px 20px; */
  /* background-color: #fffafc; */
  min-height: 100vh;
}

/* 头部 */
.header-section {
  text-align: center;
  margin-bottom: 40px;
}

.title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.title span {
  color: #ff69b4; /* 核心粉 */
}

.underline {
  width: 60px;
  height: 4px;
  background-color: #ff69b4;
  margin: 0 auto 20px;
  border-radius: 2px;
}

.subtitle {
  color: #5e6d82;
  font-size: 1.1rem;
}

/* 网格布局 */
.project-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

/* 卡片样式 */
.project-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(255, 105, 180, 0.2);
}

.card-cover {
  position: relative;
  height: 200px;
  background-color: #fce4ec;
  cursor: pointer;
  overflow: hidden;
}

.card-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.cover-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 105, 180, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-cover:hover .cover-mask {
  opacity: 1;
}

/* 按钮与标签的粉色深度定制 */
.pink-btn {
  background-color: #ff69b4 !important;
  border-color: #ff69b4 !important;
  color: white !important;
}

.pink-tag {
  background-color: #fff0f6 !important;
  color: #ff69b4 !important;
  border-color: #ffadd2 !important;
}

.tech-tag {
  background-color: #fff0f6;
  color: #ff69b4;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  border: 1px solid #ffadd2;
}

.pink-link {
  color: #ff69b4 !important;
  font-weight: 600;
}

.pink-link:hover {
  color: #ff85c0 !important;
}

/* 内容 */
.card-content {
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  margin: 0;
  font-size: 1.3rem;
  color: #2c3e50;
}

.card-desc {
  color: #5e6d82;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 15px 0;
  height: 4.8em;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  margin-top: auto;
  padding-top: 15px;
  border-top: 1px solid #fff0f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date-text {
  font-size: 0.8rem;
  color: #b0b0b0;
}

/* 底部 Banner */
.contact-banner {
  max-width: 800px;
  margin: 80px auto 0;
  background: linear-gradient(135deg, #ff69b4 0%, #ffc0cb 100%);
  padding: 30px;
  border-radius: 30px;
  text-align: center;
  color: white;
  box-shadow: 0 10px 25px rgba(255, 105, 180, 0.3);
}

.banner-btn {
  margin-top: 20px;
  background-color: white !important;
  color: #ff69b4 !important;
  border: none !important;
  font-weight: bold !important;
  border-radius: 25px !important;
}

@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
