import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true
  },
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Portfolio App',
        theme_color: '#0f172a',
        icons: [
          {
            src: './src/assets/images/logo.png',
            sizes: '800x329',
            type: 'image/png'
          }
        ]
      },
     workbox:{
      globPatterns:["**/*.{js,css,html,png,jpg,}"]
     }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
