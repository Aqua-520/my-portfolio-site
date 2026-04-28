// 导入清除默认样式
import '@/assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入粒子背景图
import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 注册粒子插件
app.use(Particles, {
  init: async (engine) => {
    await loadSlim(engine)
  },
})

app.mount('#app')
