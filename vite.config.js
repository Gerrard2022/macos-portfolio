import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '#components': resolve(__dirname, 'src/components'),
      '#constants': resolve(__dirname, 'src/constants'),
      '#hoc': resolve(__dirname, 'src/hoc'),
      '#store': resolve(__dirname, 'src/store'),
      '#windows': resolve(__dirname, 'src/windows')
    }
  }
})
