import { createRouter, createWebHashHistory } from 'vue-router'
/* 
  静态引入，减少路由切换的卡顿感
*/
import LayoutIndex from '@/views/Layout/Layout-Index.vue'
import HomeIndex from '@/views/Home/Home-Index.vue'
import AboutIndex from '@/views/About/About-Index.vue'
import SkillsIndex from '@/views/Skills/Skills-Index.vue'
import ProjectIndex from '@/views/Project/Project-Index.vue'
import HobbiesIndex from '@/views/Hobbies/ Hobbies-Index.vue'
import TimeLineIndex from '@/views/Timeline/TimeLine-Index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutIndex,
      // 路由重定向
      redirect: '/home',
      children: [
        // 首页
        { path: '/home', name: 'HomeView', component: HomeIndex },
        // 个人信息
        { path: '/about', name: 'AboutView', component: AboutIndex },
        // 擅长技术
        { path: '/skills', name: 'SkillsView', component: SkillsIndex },
        // 作品集
        { path: '/projects', name: 'ProjectsView', component: ProjectIndex },
        // 爱好
        {
          path: '/hobbies',
          name: 'HobbiesView',
          component: HobbiesIndex,
        },
        // 学习时间线
        {
          path: '/timeline',
          name: 'TimeLineView',
          component: TimeLineIndex,
        },
      ],
    },
  ],
})

router.afterEach(() => {
  const el = document.querySelector('.right-content') // 你的滚动容器
  if (el) {
    el.scrollTop = 0
  }
})
export default router
