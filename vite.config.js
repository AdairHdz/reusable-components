import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.js"],
    testMatch: ["./tests/**/*.test.jsx"],
    globals: true
  }
})
