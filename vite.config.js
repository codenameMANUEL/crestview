// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',  // Changed from './' to '/' for proper routing
  plugins: [react()],
  build: {
    outDir: 'dist',  // Keeping your existing build output directory
  },
  server: {
    historyApiFallback: true  // Added for proper routing handling
  }
})
