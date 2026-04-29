<script setup>
const projectHistory = ref([
  {
    id: 'erabbit-commerce',
    name: '小兔鲜（e-Rabbit）综合电商门户',
    date: '2026.2 - 2026.03',
    description:
      '基于 Vue 3 组合式 API 开发的高性能全栈电商项目，涵盖从首页分级检索、商品规格溯源（SKU）到完整交易链路的闭环系统。',
    techStack: ['Vue 3 (Composition API)', 'Pinia', 'Vite', 'Element Plus', 'VueUse', 'Axios'],
    points: [
      '**核心业务算法（SKU 系统）**：基于幂集算法（Power Set）构建多规格路径字典，实现了秒级的库存状态检索与无效组合动态禁用，确保了下单链路的逻辑严谨性。',
      '**交互攻坚：高精度放大镜组件**：原生封装跨组件复用的放大镜功能。基于 `mousemove` 实时捕获坐标并结合边界限制算法驱动大图容器偏移，通过事件驱动替代复杂计算属性，实现了主图预览与缩略图切换的深度联动。',
      '**地址管理与交互优化**：集成 `element-china-area-data` 实现标准化的省市区三级联动选择器，并完成地址库全套 CRUD 逻辑。针对悬浮组件，将顶部购物车交互由 CSS 升级为 JS 状态机控制，彻底解决了临界点闪烁与无法点击的交互难题。',
      '**性能优化与稳定性**：引入 `v-infinite-scroll` 实现分页加载，并采用 Loading 占位状态机防止异步请求期间的 DOM 结构坍塌。通过 `finally` 块确保加载状态在异常链路下的准确重置，提升页面健壮性。',
      '**工程化实践（AI 协作）**：熟练运用 Trae/Cursor 等 AI IDE 进行智能重构，通过 AI 辅助清理冗余布局代码并快速生成平滑的过渡动效，显著缩短了从静态 UI 到复杂交互功能的开发周期。',
    ],
  },
  {
    id: 'promise-plus-core',
    name: 'Promise A+ 规范原生实现与异步流调度器',
    date: '2026.3',
    description:
      '脱离框架底层库依赖，基于 ECMAScript 规范完整复刻 Promise 核心机制，旨在深度解决前端异步编程中的回调地狱、状态流转及并发控制问题。',
    techStack: ['JavaScript (ES6+)', 'Event Loop 深度应用'],
    points: [
      '**符合 A+ 规范的底层实现**：严格遵循 Promise/A+ 规范，手写实现 `Pending/Fulfilled/Rejected` 三状态流转机制，并通过“递归解析过程（Resolution Procedure）”完美支持了 then 链式调用的深度嵌套。',
      '**异步调度微任务管理**：利用 `MutationObserver` 或 `queueMicrotask` 模拟微任务执行环境，精准还原 Promise 在事件循环（Event Loop）中的执行优先级，确保异步逻辑的绝对有序。',
      '**全场景 API 矩阵扩展**：在核心逻辑基础上，手动实现了 `Promise.all`（并发控制）、`Promise.race`（竞态处理）及 `Promise.allSettled` 等高级静态方法，显著提升了处理多维度异步请求的灵活性。',
      '**高并发异步调度器（Task Scheduler）**：基于手写的 Promise 进一步封装了具备“并发上限限制”的调度器。通过维护任务队列与活动计数器，成功解决了在瞬时大批量网络请求下，浏览器连接数过载导致的请求阻塞问题。',
      '**健壮性测试与调试**：使用 promises-aplus-tests 官方测试套件进行全量覆盖，并配合 Jest 编写边界场景单元测试，确保了在异常捕获（Catch）、空处理（Finally）等极端链路下的逻辑零偏差。',
    ],
  },
  {
    id: 'personal-portfolio-site',
    name: '个人网站',
    date: '2026.04',
    description:
      '基于 Vue 3 生态构建的高性能单页应用（SPA），集成了作品展示、技术履历与动态交互，作为个人技术栈沉淀与工程化实践的落地窗口。',
    techStack: ['Vue 3', 'Vite', 'Pinia', 'Vue Router', 'Element Plus', 'Tailwind CSS'],
    points: [
      '**现代化 DX 开发流构建**：基于 Vite 深度集成 `unplugin-auto-import` 与 `unplugin-vue-components`。实现了 `ref`、`computed` 等响应式 API 及 Element Plus 组件的**全自动按需导入**，彻底告别冗余的 `import` 语句，大幅提升编码流畅度。',
      '**响应式时间轴与路由架构**：利用 Element Plus 的 `<el-timeline>` 组件，结合 Vue Router 实现了平滑的单页跳转逻辑。通过对历史发展维度的可视化呈现，精准构建了从学术背景到技术进阶的动态履历模块。',
      '**AI 驱动的样式重构与优化**：深度协作 AI IDE（Trae/Cursor），通过 AI 辅助生成的原子化 CSS（Tailwind）布局方案，对全局响应式断点进行了精细化调优。利用 AI 快速清理冗余样式冗余并生成高性能过渡动效，使页面性能与视觉细节达到生产级标准。',
      '**工程化部署与性能调优**：自定义 Vite 插件配置，通过 `base` 与 `build.outDir` 优化 Github Pages 的自动化部署流程。采用路由懒加载与 CDN 分发策略，将首屏渲染时间（FCP）优化至毫秒级，确保了极佳的用户访问体验。',
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
  font-size: 0.9rem;
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
  font-size: 0.9rem;
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
