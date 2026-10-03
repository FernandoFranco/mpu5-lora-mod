import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mpu5-lora-mod/',
  server: {
    port: 4000,
  },
  build: {
    chunkSizeWarningLimit: 800,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'three', test: /node_modules\/three\//, priority: 30 },
            { name: 'mui', test: /node_modules\/(@mui|@emotion)\//, priority: 20 },
            {
              name: 'react',
              test: /node_modules\/(react|react-dom|react-router|react-router-dom|scheduler)\//,
              priority: 10,
            },
          ],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
