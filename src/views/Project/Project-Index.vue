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
    image: new URL('@/assets/picture/小兔鲜宣传图.png', import.meta.url).href,
    demoUrl: '',
    githubUrl: 'https://github.com/Aqua-520/xtx-shop-pc',
  },
  {
    title: '个人作品集网站',
    type: '个人主页',
    description:
      '使用 Vue 3 组合式 API 搭建的响应式个人门户。采用 Scoped CSS 确保样式隔离，集成粉色系视觉设计。',
    tags: ['Vue 3', 'Vite', 'Scoped CSS'],
    date: '2026.04',
    image: new URL('@/assets/picture/个人网站宣传图.png', import.meta.url).href,
    demoUrl: 'https://aqua-520.github.io/my-portfolio-site/#/about',
    githubUrl: ' https://github.com/Aqua-520/my-portfolio-site',
  },
])

/* 
  跳转到对应的仓库，新开标签页
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
      <!-- 几个卡片 -->
      <div v-for="(project, index) in projects" :key="index" class="project-card">
        <!-- 点击图片打开演示网站 -->
        <div class="card-cover" @click="openLink(project.demoUrl)">
          <img v-if="project.image" :src="project.image" :alt="project.title" />
          <div v-else class="placeholder">Project Image</div>
          <div class="cover-mask">
            <el-button class="pink-btn" round>查看演示</el-button>
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
              查看代码仓库 <el-icon class="el-icon--right"><i-lucide-link /></el-icon>
            </el-link>
            <span class="date-text">{{ project.date }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-banner">
      <div class="banner-content">
        <h3>万事开头难，但我已准备好起跑</h3>
        <p>
          作为一名非科班转码的应届生，我深知入行的机会弥足珍贵。<br />
          我拥有极强的自驱动力和抗压性，已准备好将全部精力投入到实战中。
        </p>
      </div>
      <el-button class="banner-btn" size="large" @click="$router.push('/about')">
        给予机会 / 联系我
      </el-button>
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
  transition: font-size var(--transition-base);
}

@media (max-width: 768px) {
  .title {
    font-size: 1.8rem;
  }
  .subtitle {
    font-size: 1rem;
  }
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
  object-position: left 41%;
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

/* 底部 Banner 重写 */
.contact-banner {
  max-width: 1000px; /* 稍微加宽一点更有高级感 */
  margin: 100px auto 40px;
  position: relative;
  overflow: hidden;

  /* 采用极浅的粉色背景，配合精致的边框 */
  background: var(--primary-pink-lighter, #fff0f6);
  border: 1px solid rgba(255, 105, 180, 0.2);
  padding: 30px;
  border-radius: 24px;

  /* 布局改为左右或上下居中 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* 装饰性光晕，增加艺术感 */
.contact-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 105, 180, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 0;
}

.banner-content {
  position: relative;
  z-index: 1;
  text-align: left;
  flex: 1;
}

.contact-banner h3 {
  font-size: 1.6rem;
  color: #2c3e50;
  margin: 0 0 12px 0;
  font-weight: 700;
}

.contact-banner p {
  color: #5e6d82;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-left: 10px;
  max-width: 600px;
}

/* 按钮样式升级 */
.banner-btn {
  position: relative;
  z-index: 1;
  height: 50px !important;
  padding: 0 20px !important;
  background-color: #ff69b4 !important;
  color: white !important;
  border: none !important;
  font-size: 0.9rem !important;
  font-weight: 600 !important;
  border-radius: 14px !important;
  box-shadow: 0 8px 20px rgba(255, 105, 180, 0.3) !important;
  transition: all 0.3s ease !important;
}

.banner-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 12px 25px rgba(255, 105, 180, 0.4) !important;
  background-color: #ff85c0 !important;
}

/* 移动端自适应 */
@media (max-width: 768px) {
  .contact-banner {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
    margin: 60px 20px 0;
  }

  .banner-content {
    text-align: center;
  }

  .contact-banner p {
    font-size: 0.95rem;
  }

  .banner-btn {
    width: 100%;
  }
}
</style>
