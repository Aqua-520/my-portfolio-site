import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// 导入element-plus自动按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 导入tailwindcss
import tailwindcss from '@tailwindcss/vite'
// 导入icon
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vite.dev/config/
export default defineConfig({
  // 设置仓库名
  base: '/my-portfolio-site/', // 必须和仓库名一致，前后都要有斜杠
  build: {
    outDir: 'docs', // 把默认的 dist 改成 docs
  },
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      // 自动导入 Vue 相关函数
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
          enabledCollections: ['ep', 'lucide'],
        }),
      ],
      dts: 'src/auto-imports.d.ts',
      // 生成 eslint 配置文件
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep', 'lucide'],
          alias: {
            park: 'icon-park',
          },
        }),
      ],
      dts: 'src/components.d.ts',
    }),
    tailwindcss(),
    Icons({
      autoInstall: true,
      compiler: 'vue3',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
