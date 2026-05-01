<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuList = [
  { name: '首页', path: '/home', icon: IconLucideHome },
  { name: '个人信息', path: '/about', icon: IconLucideUser },
  { name: '擅长技术', path: '/skills', icon: IconLucideWrench },
  { name: '作品集', path: '/projects', icon: IconLucideFileText },
  { name: '我的爱好', path: '/hobbies', icon: IconLucideHeart },
  { name: '成长轨迹', path: '/timeline', icon: IconLucideCompass },
]

const isMenuOpen = ref(false)
const isMobile = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 992
  if (!isMobile.value) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<template>
  <!-- 透明盒子撑满页面 -->
  <div class="screen-wrapper">
    <!-- 移动端顶部导航 -->
    <header v-if="isMobile" class="mobile-header">
      <div class="mobile-logo-box">
        <div class="logo-placeholder-sm"></div>
        <span class="mobile-title">移动端展示效果</span>
      </div>
      <button
        class="menu-toggle"
        :class="{ 'is-active': isMenuOpen }"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </header>

    <!-- 移动端菜单遮罩 -->
    <transition name="fade">
      <div v-if="isMenuOpen && isMobile" class="menu-overlay" @click="toggleMenu"></div>
    </transition>

    <!-- flex布局将容器变成居中 -->
    <div class="container" :class="{ 'mobile-layout': isMobile }">
      <!-- 中间盒子flex左右两栏 -->
      <div class="router-box">
        <!-- 左侧导航 (桌面端显示，移动端折叠) -->
        <nav class="left-nav" :class="{ 'mobile-nav': isMobile, 'is-open': isMenuOpen }">
          <div class="logo-container" v-if="!isMobile">
            <div class="logo-placeholder"></div>
          </div>

          <ul class="menu-list">
            <li v-for="item in menuList" :key="item.path">
              <router-link
                :to="item.path"
                active-class="active"
                @click="isMobile && (isMenuOpen = false)"
              >
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  min-height: -webkit-fill-available;
  background-color: #f0f2f5;
  overflow: hidden;
}

/* 移动端顶部导航 */
.mobile-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 100;
}

.mobile-logo-box {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-placeholder-sm {
  width: 32px;
  height: 32px;
  background-image: url('@/assets/picture/千早爱音.png');
  background-position: center;
  background-size: cover;
  border-radius: 50%;
}

.mobile-title {
  font-weight: 600;
  color: var(--primary-pink);
  font-size: 1.1rem;
}

.menu-toggle {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-primary);
  background-color: var(--gray-light);
  border-radius: 8px;
  cursor: pointer;
  transition: all var(--transition-base);
  border: 1px solid var(--border-color);
  -webkit-tap-highlight-color: transparent;
  padding: 0;
}

/* 三条杠容器 */
.hamburger {
  width: 20px;
  height: 14px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* 每一条杠的样式 */
.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--text-light);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

/* 激活状态（变成 X） */
.is-active .hamburger span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.is-active .hamburger span:nth-child(2) {
  opacity: 0;
  transform: translateX(-10px);
}

.is-active .hamburger span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

.menu-toggle:hover {
  background-color: var(--primary-pink-lighter);
  color: var(--primary-pink);
  border-color: var(--primary-pink-light);
}

.menu-toggle:active {
  transform: scale(0.92);
  background-color: var(--primary-pink-alpha);
}

.toggle-icon {
  width: 24px;
  height: 24px;
}

/* 主面板 */
.container {
  position: relative;
  overflow: hidden;
  width: 1100px;
  height: 650px;
  background-color: #ffffff;
  max-width: 95vw;
  max-height: 90vh;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  transition: all var(--transition-base);
}

.container.mobile-layout {
  width: 100%;
  height: calc(100vh - 60px);
  height: calc(100dvh - 60px);
  margin-top: 60px;
  max-width: 100vw;
  max-height: 100vh;
  max-height: 100dvh;
  border-radius: 0;
  box-shadow: none;
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
  flex-direction: column;
  transition: transform var(--transition-base);
  z-index: 90;
}

/* 移动端侧边栏样式 */
.left-nav.mobile-nav {
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
  width: 240px;
  transform: translateX(-100%);
  border-right: none;
  background: white;
  padding-bottom: env(safe-area-inset-bottom);
}

.left-nav.mobile-nav.is-open {
  transform: translateX(0);
  box-shadow: 10px 0 30px rgba(0, 0, 0, 0.1);
}

/* Logo 区域 */
.logo-container {
  height: 100px;
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
  border-radius: 50%;
  box-shadow: 0 4px 10px var(--primary-pink-shadow);
}

.menu-list {
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
}

.menu-list li {
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
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
  transition: all var(--transition-base);
  position: relative;
}

/* 移动端菜单项样式调整 */
.mobile-nav .menu-list a {
  flex-direction: row;
  justify-content: flex-start;
  padding: 16px 25px;
  gap: 15px;
  font-size: 15px;
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

.menu-list a:hover:not(.active) {
  color: var(--primary-pink);
  background: var(--primary-pink-alpha);
}

/* --- 右侧内容区 --- */
.right-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: var(--content-padding);
  scrollbar-gutter: stable both-edges;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.right-content > div {
  position: absolute;
  top: var(--content-padding);
  left: var(--content-padding);
  width: calc(100% - (var(--content-padding) * 2));
  min-height: calc(100% - (var(--content-padding) * 2));
}

@media (max-width: 992px) {
  .right-content {
    padding-bottom: calc(var(--content-padding) + env(safe-area-inset-bottom));
  }

  .right-content::after {
    content: '';
    display: block;
    height: calc(60px + env(safe-area-inset-bottom));
  }
}

/* 遮罩层动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-base);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: 80;
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
