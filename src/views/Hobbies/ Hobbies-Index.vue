<script setup>
// 核心修正：直接使用图标的变量名，不要加引号。
// 因为配置了自动导入，Vite 会识别这些变量并自动 import 对应的图标组件对象。
const hobbies = [
  {
    id: 'travel',
    title: '探索未知 / 环游世界',
    desc: '热衷于探索全球版图，在步履不停中追求更先进、更公平的高维度生活环境。比起安于现状，我更向往那种充满活力与自由的秩序，在跨越边界的过程中，不断寻找更广阔的自我表达空间。',
    icon: IconLucidePlane,
    tags: ['#无界探索', '#追求卓越', '#全球视野'],
  },
  {
    id: 'anime',
    title: 'ACG 深度参与者 / 二次元爱好者',
    desc: '钟情于 BanG Dream! 及其代表作《Ave Mujica》带来的华丽张力与情感叙事。喜欢那些打破现实边界的跨媒体表达，作为见证者，在角色情感与乐队精神的交织中寻找那份最纯粹的二次元共鸣。',
    icon: IconLucideSparkles,
    tags: ['#BanGDream', '#AveMujica', '#二次元'],
  },
  {
    id: 'lifestyle',
    title: '生活方式 / 咖啡因补给',
    desc: '习惯在下午开启咖啡因模式，无论是 Monster 还是咖啡，都是我逻辑建模与深夜 Debug 的高效“燃料”。比起依赖，我更享受它带来的状态切换，支撑起从午后到凌晨的开发灵感。',
    icon: IconLucideZap,
    tags: ['#补给状态', '#深夜Debug', '#极客作息'],
  },
]
</script>

<template>
  <div class="hobbies-container">
    <!-- 头部标题：已由作品集改为个人特质/爱好 -->
    <div class="header-section">
      <h2 class="title">灵魂共鸣 / <span>Resonance</span></h2>
      <div class="underline"></div>
      <p class="subtitle">在代码之外，探索次元边界与生活的无限可能</p>
    </div>
    <!-- 底部卡片 -->
    <div v-for="hobby in hobbies" :key="hobby.id" :class="['hobby-card', hobby.id]">
      <div class="hobby-icon">
        <el-icon>
          <component :is="hobby.icon" />
        </el-icon>
      </div>
      <div class="hobby-info">
        <h3>{{ hobby.title }}</h3>
        <p>{{ hobby.desc }}</p>
        <span v-for="tag in hobby.tags" :key="tag" class="tag">
          {{ tag }}
        </span>
      </div>
    </div>

    <div class="passion-quote">
      <p>
        “在旋律中见证艺术的张力，在代码中构建自由的秩序。<br />
        借午后的一点补给，跨越边界，去抵达更广阔的高维度世界。”
      </p>
      <el-button class="apply-btn"> 一起探索更先进的未来 ✨ </el-button>
    </div>
  </div>
</template>

<style scoped>
/* 头部标题 */
/* 头部 */
.header-section {
  text-align: center;
  margin-bottom: 10px;
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

/* 样式部分保持不变，省略以节省篇幅... */
.hobbies-container {
  padding: 0 40px 40px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.hobby-card {
  width: 100%;
  max-width: 600px;
  background: white;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 4px 12px rgba(255, 105, 180, 0.1);
  border: 1px solid #fff0f6;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.hobby-card:hover {
  transform: translateY(-5px);
  /* border-color: #ff69b4; */
  box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
}

.hobby-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px; /* 确保图标够大 */
  color: #ff69b4;
  width: 60px;
  height: 60px;
  background: #fff0f6;
  border-radius: 50%;
  flex-shrink: 0;
}

.hobby-info {
  flex: 1;
}

.hobby-info h3 {
  color: #ff69b4;
  margin-bottom: 8px;
  font-size: 1.2rem;
  font-weight: bold;
}

.hobby-info p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 10px;
}

.tag {
  font-size: 12px;
  color: #ff85c0;
  background: #fff0f6;
  padding: 4px 10px;
  border-radius: 12px;
  margin-right: 8px;
  display: inline-block;
  border: 1px solid #ffe3ee;
}

.passion-quote {
  margin-top: 50px;
  text-align: center;
  color: #666;
  line-height: 1.8;
}

.apply-btn {
  margin-top: 25px;
  background: linear-gradient(90deg, #ff85c0 0%, #ff69b4 100%) !important;
  color: white !important;
  border: none !important;
  border-radius: 25px;
  padding: 12px 30px !important;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(255, 105, 180, 0.3);
  transition: all 0.3s;
}

.apply-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(255, 105, 180, 0.4);
}
</style>
