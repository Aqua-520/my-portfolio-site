<script setup>
const options = {
  background: {
    color: { value: 'transparent' },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: false, mode: 'push' },
      onHover: { enable: false, mode: 'bubble' }, // 没了连线，悬浮用 bubble 效果更有趣
    },
    modes: {
      bubble: { distance: 200, size: 6, duration: 0.3, opacity: 1 },
      push: { quantity: 10 },
    },
  },
  particles: {
    // 保持随机彩色
    color: {
      value: ['#3498db', '#e74c3c', '#9b59b6', '#f1c40f', '#2ecc71', '#e67e22'],
    },
    links: {
      // 1. 关闭连线
      enable: false,
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: 'none',
      outModes: { default: 'out' }, // 改为 out 模式，从一边出另一边进，更自然
    },
    number: {
      density: { enable: true, area: 800 },
      // 2. 数量调多，建议 150-200 左右
      value: 500,
    },
    opacity: {
      value: { min: 0.3, max: 0.8 }, // 随机透明度增加层次感
    },
    shape: { type: 'circle' },
    size: {
      // 3. 数量多了，尺寸建议稍微调小一点，显得精致
      value: { min: 1, max: 4 },
    },
  },
  detectRetina: true,
}
</script>

<template>
  <div id="app-layout">
    <!-- 
      生成canvas点点图
    -->
    <vue-particles id="tsparticles" :options="options" />
    <!-- 路由出口,加载根节点layout/ -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
#app-layout {
  width: 100%;
  height: 100%;
  position: relative;
}

/* 粒子背景：强制铺满并置于底层 */
#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* 粒子在最底层 */
}

/* 路由容器：提升层级，确保内容可以被点击 */
.main-view {
  position: relative;
  z-index: 1; /* 内容在粒子上方 */
  width: 100%;
  height: 100%;
}
</style>
