<script setup>
const menuList = [
  { name: '首页', path: '/home', icon: IconLucideHome },
  { name: '个人信息', path: '/about', icon: IconLucideUser },
  { name: '擅长技术', path: '/skills', icon: IconLucideWrench },
  { name: '作品集', path: '/projects', icon: IconLucideFileText },
  { name: '我的爱好', path: '/hobbies', icon: IconLucideHeart },
  { name: '成长轨迹', path: '/timeline', icon: IconLucideCompass },
]
</script>

<template>
  <!-- 透明盒子撑满页面 -->
  <div class="screen-wrapper">
    <!-- flex布局将容器变成居中 -->
    <div class="container">
      <!-- 中间盒子flex左右两栏 -->
      <div class="router-box">
        <!-- 左侧导航 -->
        <nav class="left-nav">
          <div class="logo-container">
            <div class="logo-placeholder"></div>
          </div>

          <ul class="menu-list">
            <li v-for="item in menuList" :key="item.path">
              <router-link :to="item.path" active-class="active">
                <component :is="item.icon" class="nav-icon" />
                <span class="nav-text">{{ item.name }}</span>
              </router-link>
            </li>
          </ul>
        </nav>
        <!-- 右侧二级路由出口 -->
        <div class="right-content">
          <router-view v-slot="{ Component }">
            <transition name="page-slide">
              <keep-alive>
                <component :is="Component" :key="$route.path" />
              </keep-alive>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 屏幕容器 */
.screen-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
}

/* 主面板 */
.container {
  position: relative;
  overflow: hidden;
  width: 1100px;
  height: 650px;
  background-color: #ffffff;
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}

.router-box {
  display: flex;
  height: 100%;
}

/* --- 左侧导航 --- */
.left-nav {
  width: 100px;
  background: var(--primary-pink-lighter);
  border-right: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column; /* 垂直排列 logo 和 menu */
}

/* Logo 区域样式：在这里控制给 Logo 留出的位置 */
.logo-container {
  height: 100px; /* 明确 Logo 占位高度 */
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.logo-placeholder {
  width: 60px;
  height: 60px;
  background-image: url('@/assets/picture/千早爱音.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 50%;
  box-shadow: 0 4px 10px var(--primary-pink-shadow);
}

.menu-list {
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  /* 每个li平分容器的空间 */
  flex: 1;
}

.menu-list li {
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}
.menu-list li:last-child {
  border-bottom: none;
}

.menu-list a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 22px 0;
  font-size: 13px;
  color: var(--text-sub);
  text-decoration: none;
  transition: all var(--transition-base);
  position: relative;
}

.nav-icon {
  width: 22px;
  height: 22px;
  stroke-width: 2;
}

/* --- 路由选中效果 --- */
.menu-list a.active {
  color: var(--primary-pink);
  background: var(--primary-pink-alpha);
}

/* 左侧激活条 */
.menu-list a.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 15%;
  height: 70%;
  width: 4px;
  background-color: var(--primary-pink);
  border-radius: 0 4px 4px 0;
}

/* 悬停效果 */
.menu-list a:hover:not(.active) {
  color: var(--primary-pink);
  background: var(--primary-pink-alpha);
}

/* --- 右侧内容区 --- */
/* 1. 给父容器开启相对定位 */
.right-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 50px;
  scrollbar-gutter: stable both-edges;
  position: relative; /* 新增：作为绝对定位的参考基准 */
}

/* 2. 给参与过渡的直接子元素开启绝对定位 */
.right-content > div {
  position: absolute; /* 新增：脱离文档流，新旧组件重叠 */
  top: 50px; /* 对应父容器的 padding-top */
  left: 50px; /* 对应父容器的 padding-left */
  width: calc(100% - 100px); /* 减去左右 padding 的宽度 (50px * 2) */
  min-height: calc(100% - 100px);
}
/* --- 切换动画 --- */
.page-slide-enter-active,
.page-slide-leave-active {
  will-change: transform, opacity;
  transition:
    opacity var(--transition-slow),
    transform var(--transition-slow);
}

.page-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.page-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
