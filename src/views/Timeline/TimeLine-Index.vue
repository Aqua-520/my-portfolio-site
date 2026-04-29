<script setup>
const projectHistory = ref([
  {
    name: '捷买士商城小程序',
    date: '2025.10 - 2026.03',
    description: '用户可以通过分享小程序锁粉，当粉丝下单时获取佣金。',
    techStack: ['小程序', 'Gulp', 'SCSS', '七牛云'],
    points: [
      '构建小程序开发框架，实现图片压缩、SCSS 实时编译及多环境配置技术方案。',
      '实现了登录授权、分享、商品、购物车、下单支付等核心业务模块。',
      '利用 Canvas 绘制营销海报，实现签到大转盘、九宫格翻牌等营销功能。',
      '对图片请求及时效性不高的接口进行数据缓存，大幅提升页面加载速度。',
    ],
  },
  {
    name: '商城后台管理系统',
    date: '2025.06 - 2025.09',
    description: '主要用于管理用户、商品、订单及供应商信息。',
    techStack: ['Vue 2', 'Element UI', 'Vuex', 'Webpack'],
    points: [
      '基于 Element UI 快速构建开发标准版后台，实现动态路由权限管理。',
      '开发热点图、运费模板等高度可复用业务组件。',
      '二次封装图片上传及表格组件，结合 Mixin 实现搜索翻页功能，减少 30% 重复代码。',
    ],
  },
])
</script>
<template>
  <div class="growth-timeline">
    <el-timeline>
      <el-timeline-item
        v-for="(item, index) in projectHistory"
        :key="index"
        :timestamp="item.date"
        placement="top"
        :hollow="true"
        class="custom-timeline-item"
      >
        <div class="project-detail-card">
          <h3 class="project-name">{{ item.name }}</h3>

          <div class="detail-section">
            <span class="section-label">项目描述：</span>
            <p class="section-text">{{ item.description }}</p>
          </div>

          <div class="detail-section">
            <span class="section-label">技术栈：</span>
            <div class="tech-tags">
              <span v-for="tech in item.techStack" :key="tech" class="mini-tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>

          <ul class="experience-list">
            <li v-for="(point, pIndex) in item.points" :key="pIndex">
              {{ point }}
            </li>
          </ul>
        </div>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style scoped>
.growth-timeline {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

/* 深度定制 Element Plus 时间轴颜色 */
:deep(.el-timeline-item__node) {
  background-color: transparent !important;
  border: 2px solid var(--primary-pink, #ff69b4) !important;
  width: 14px;
  height: 14px;
}

:deep(.el-timeline-item__tail) {
  border-left: 2px solid var(--primary-pink-lighter, #fff0f6) !important;
}

/* 卡片样式 */
.project-detail-card {
  padding: 20px 25px;
  background: white;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid #fff0f6;
}

.project-detail-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px var(--primary-pink-lighter);
  border: 1px solid #fff0f6;
}

.project-name {
  margin: 0 0 15px 0;
  font-size: 1.25rem;
  color: #2c3e50;
  font-weight: 700;
}

.detail-section {
  margin-bottom: 12px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.section-label {
  font-weight: 600;
  color: var(--text-main, #333);
  white-space: nowrap;
}

.section-text {
  margin: 0;
  color: #5e6d82;
  font-size: 0.95rem;
}

/* 技术栈小标签 */
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.mini-tech-tag {
  font-size: 0.8rem;
  padding: 1px 8px;
  background: white;
  border: 1px solid var(--primary-pink, #ff69b4);
  color: var(--primary-pink, #ff69b4);
  border-radius: 4px;
}

/* 列表圆点样式 */
.experience-list {
  padding-left: 18px;
  margin-top: 15px;
}

.experience-list li {
  color: #5e6d82;
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: 8px;
  position: relative;
  list-style-type: disc;
}

.experience-list li::marker {
  color: var(--primary-pink, #ff69b4);
}

/* 时间戳样式 */
:deep(.el-timeline-item__timestamp) {
  color: var(--primary-pink);
  font-weight: 600;
  font-size: 0.9rem;
}
</style>
