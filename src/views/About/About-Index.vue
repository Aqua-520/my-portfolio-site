<script setup>
import { ref } from 'vue'

const userInfo = ref({
  name: '汪宸宇',
  email: 'wcy843708301@gmail.com',
  wechat: 'Wcy520aqua',
  github: 'https://github.com/Aqua-520',
  address: '湖北省荆门市',
})

const educationList = ref([
  {
    pic: 'src/assets/picture/长工职logo.webp',
    school: '长江工程职业技术学院',
    degree: '专科',
    major: '计算机网络',
  },
])
</script>

<template>
  <div class="resume-container">
    <section class="info-section">
      <h2 class="section-title">个人信息</h2>
      <!-- 
        个人信息两栏布局
      -->
      <div class="info-grid">
        <div class="info-item">
          <span class="label">姓名:</span>
          <span class="value emphasis">{{ userInfo.name }}</span>
        </div>
        <div class="info-item">
          <span class="label">邮箱:</span>
          <span class="value">{{ userInfo.email }}</span>
        </div>
        <div class="info-item">
          <span class="label">微信:</span>
          <span class="value">{{ userInfo.wechat }}</span>
        </div>
        <div class="info-item">
          <span class="label">github:</span>
          <a :href="userInfo.github" class="value link" target="_blank">{{ userInfo.github }}</a>
        </div>
        <div class="info-item full-width">
          <span class="label">出生:</span>
          <span class="value">{{ userInfo.address }}</span>
        </div>
      </div>
    </section>
    <!-- 分割线 -->
    <hr class="divider" />

    <section class="edu-section">
      <h2 class="section-title">教育背景</h2>
      <!-- 教育背景容器 -->
      <div class="edu-content" v-for="(item, index) in educationList" :key="index">
        <img :src="item.pic" alt="School Logo" class="school-logo" />
        <div class="edu-text">
          <span class="school-name">{{ item.school }}</span>
          <span class="separator">,</span>
          <span class="degree">{{ item.degree }}</span>
          <span class="major">{{ item.major }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.resume-container {
  max-width: 800px;
  margin: 0 auto;
  /* padding: 40px; */
  font-family:
    'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', Arial,
    sans-serif;
  color: #333;
}

.section-title {
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 30px;
  color: #1a1a1a;
}

/* 个人信息网格布局 */
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr; /* 左右两栏比例 */
  gap: 15px 0;
}

.info-item {
  display: flex;
  align-items: center;
  font-size: 18px;
}

.full-width {
  grid-column: span 2;
}

.label {
  font-weight: bold;
  margin-right: 12px;
  min-width: 50px;
}

.value {
  color: #999; /* 模仿图中较浅的灰色 */
}

.emphasis {
  color: #666; /* 姓名颜色稍深 */
}

.link {
  color: #ff6b81; /* 模仿图中 GitHub 的粉色链接 */
  text-decoration: none;
}

.divider {
  border: none;
  border-top: 1px solid #eee;
  margin: 40px 0;
}

/* 教育背景布局 */
.edu-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.school-logo {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

.edu-text {
  font-size: 22px;
  color: #333;
}

.school-name {
  font-weight: 500;
}

.separator {
  margin: 0 10px;
}

.degree,
.major {
  margin-left: 10px;
}
</style>
