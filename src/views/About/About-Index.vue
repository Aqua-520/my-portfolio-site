<script setup>
import { ref } from 'vue'
defineOptions({
  name: 'AboutView',
})

// 1. 个人信息：用 Map 结构方便循环渲染
const userInfo = ref({
  name: '汪宸宇',
  email: 'wcy843708301@gmail.com',
  wechat: 'Wcy520aqua',
  github: 'https://github.com/Aqua-520',
  address: '湖北省荆门市',
})

// 定义一个 label 映射，让显示更友好
const infoLabels = {
  name: '姓名',
  email: '邮箱',
  wechat: '微信',
  github: 'Github',
  address: '籍贯',
}

// 2. 教育背景：增加 showName 控制，城西国际大学 Logo 自带文字则设为 false
const educationList = ref([
  {
    pic: 'src/assets/picture/长工职logo.webp',
    school: '长江工程职业技术学院',
    degree: '专科',
    major: '计算机网络',
    tag: '统招',
  },
  {
    pic: 'src/assets/picture/蓝色城西logo.png',
    school: '城西国际大学',
    degree: '本科/学部',
    major: '観光学',
    tag: '留学',
  },
])
</script>

<template>
  <div class="sub-page-container">
    <header class="resume-header">
      <div class="title-wrapper">
        <h2 class="main-title">教育与背景</h2>
        <div class="title-line"></div>
      </div>
    </header>

    <div class="resume-card">
      <section class="info-section">
        <div class="section-tag">Basic Info</div>
        <div class="info-grid">
          <div
            class="info-item"
            v-for="(val, key) in userInfo"
            :key="key"
            :class="{ 'full-row': key === 'github' }"
          >
            <span class="label">{{ infoLabels[key] }}:</span>

            <template v-if="key === 'github'">
              <a :href="val" target="_blank" class="value link-effect">{{ val }}</a>
            </template>
            <template v-else>
              <span class="value" :class="{ 'name-style': key === 'name' }">{{ val }}</span>
            </template>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <section class="edu-section">
        <div class="section-tag">Education</div>
        <div class="edu-column">
          <div class="edu-card" v-for="(item, index) in educationList" :key="index">
            <div class="logo-wrapper">
              <img :src="item.pic" class="school-logo" />
            </div>

            <div class="edu-content">
              <div class="edu-main">
                <span class="school-name">{{ item.school }}</span>
                <span class="degree-badge">{{ item.degree }}</span>
                <span class="major-name">{{ item.major }}</span>
              </div>
              <div class="edu-sub">
                <span class="type-tag">{{ item.tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* 容器适配二级路由，增加丝滑的入场感 */
.sub-page-container {
  margin: 0 auto;
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.resume-header {
  margin-bottom: 25px;
}

.main-title {
  font-size: 26px;
  color: #2c3e50;
  margin: 0;
  font-weight: 600;
}

.title-line {
  width: 40px;
  height: 4px;
  /* 替换为粉色 */
  background: #ff69b4;
  margin-top: 8px;
  border-radius: 2px;
}

/* 卡片容器 */
.resume-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 40px 40px 0;
  margin-bottom: 60px;
  border: 1px solid #f0f2f5;
}

.section-tag {
  font-size: 12px;
  text-transform: uppercase;
  color: #bdc3c7;
  letter-spacing: 2px;
  margin-bottom: 20px;
  font-weight: bold;
}

/* 个人信息布局 */
.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.full-row {
  grid-column: span 2;
}

.label {
  font-weight: 600;
  color: #34495e;
  margin-right: 12px;
}

.value {
  color: #7f8c8d;
}

.name-style {
  color: #2c3e50;
  font-size: 1.1em;
  font-weight: bold;
}

.link-effect {
  /* 链接修改为粉色 */
  color: #ff69b4;
  text-decoration: none;
  transition: color 0.3s;
}

.link-effect:hover {
  /* 悬停稍微减淡 */
  color: #ff85c0;
  /* text-decoration: underline; */
}

.divider {
  height: 1px;
  background: linear-gradient(to right, #eee, transparent);
  margin: 40px 0;
}

/* 教育项布局 */
.edu-card {
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 12px;
  transition: background 0.3s;
}

.edu-card:hover {
  /* 悬停背景改为极浅粉色 */
  background: #fffafa;
}

.logo-wrapper {
  width: 140px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
}

.school-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.edu-main {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.school-name {
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
}

.degree-badge {
  /* 徽章背景改为浅粉色，文字改为深粉色 */
  background: #fff0f6;
  color: #ff69b4;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 13px;
}

.major-name {
  color: #606266;
  font-size: 17px;
}

.type-tag {
  display: inline-block;
  margin-top: 10px;
  font-size: 12px;
  color: #909399;
  border: 1px solid #e4e7ed;
  padding: 1px 8px;
  border-radius: 4px;
}

/* 手机端适配 */
@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
  .edu-card {
    flex-direction: column;
    align-items: flex-start;
  }
  .logo-wrapper {
    margin-bottom: 15px;
  }
}
</style>
