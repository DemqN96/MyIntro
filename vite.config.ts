import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo name — the site is served from https://<user>.github.io/MyIntro/
export default defineConfig({
  base: '/MyIntro/',
  plugins: [react()],
})
