import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Replace 'Focus-Tracker' with your exact repository name on GitHub
export default defineConfig({
  base: '/Focus-Tracker/', 
  plugins: [
    react(),
    tailwindcss(),
  ],
})