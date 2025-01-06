import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

declare global {
  interface ImportMeta {
    dirname?: string
  }
}

const __dirname = import.meta.dirname

export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    assetsDir: './assets/',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '~',
        replacement: `${__dirname}/src/`,
      },
    ],
  },
})
