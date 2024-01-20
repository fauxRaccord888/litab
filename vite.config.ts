import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routeFileIgnorePrefix: '-'
    }),
    react(),
  ],
  /* resolve만 담당, ESlint는 TSConfig에서 적용됨 */
  resolve: {
    alias: [
      { find: "$lib", replacement: path.resolve(__dirname, "src/lib") },
    ],
  },
})
