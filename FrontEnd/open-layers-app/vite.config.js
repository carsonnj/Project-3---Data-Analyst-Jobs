// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        map: resolve(__dirname, 'data/map.html'),
        salary: resolve(__dirname, 'data/salary.html'),
        sector: resolve(__dirname, 'data/sector.html')
      },
    },
  },
})
