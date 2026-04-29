<script setup>
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
    pic: new URL('@/assets/picture/长工职logo.webp', import.meta.url).href,
    school: '长江工程职业技术学院',
    degree: '专科',
    major: '计算机网络',
    tag: '统招',
  },
  {
    pic: new URL('@/assets/picture/蓝色城西logo.png', import.meta.url).href,
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
          <div class="edu-card hover-lift" v-for="(item, index) in educationList" :key="index">
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

/* 卡片容器 */
.resume-card {
  /* background: var(--bg-card); */
  border-radius: 16px;
  /* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); */
  padding: 20px;
  margin-bottom: 60px;
  /* border: 1px solid var(--border-color); */
}

.section-tag {
  font-size: 12px;
  text-transform: uppercase;
  color: var(--text-light);
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
  color: var(--text-main);
  margin-right: 12px;
}

.value {
  color: var(--text-sub);
}

.name-style {
  color: var(--text-main);
  font-size: 1.1em;
  font-weight: bold;
}

.link-effect {
  color: var(--primary-pink);
  text-decoration: none;
  transition: color var(--transition-base);
}

.link-effect:hover {
  color: var(--primary-pink-light);
}

.divider {
  height: 1px;
  background: var(--border-color);
  margin: 40px 0;
}

/* 教育背景卡片 */
.edu-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.edu-card {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background: #fafafa;
  border-radius: 12px;
  border: 1px solid transparent;
}

.logo-wrapper {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  background: white;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.school-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.edu-main {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.school-name {
  font-weight: 600;
  color: var(--text-main);
  font-size: 1.1rem;
}

.degree-badge {
  padding: 2px 10px;
  background: var(--primary-pink-lighter);
  color: var(--primary-pink);
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}

.major-name {
  color: var(--text-sub);
}

.type-tag {
  font-size: 0.85rem;
  color: var(--text-light);
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
