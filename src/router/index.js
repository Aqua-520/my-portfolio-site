import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout/Layout-Index.vue'),
      // 路由重定向
      redirect: '/home',
      children: [
        // 首页
        { path: '/home', component: () => import('@/views/Home/Home-Index.vue') },
        // 个人信息
        { path: '/about', component: () => import('@/views/About/About-Index.vue') },
        // 擅长技术
        { path: '/skills', component: () => import('@/views/Skills/Skills-Index.vue') },
      ],
    },
  ],
})

export default router
