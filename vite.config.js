import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  base: '/store_plant-bench/',
  build: {
    outDir: 'dist',
    cssCodeSplit: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: { main: resolve(__dirname, 'index.html') }
    }
  }
})
