import { defineConfig } from "vite";

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        app: 'src/index.vite.fork.html'
      },
      output: {
        app: 'index.html'
      }
    },
    outDir: "../distViteFork"
  },
  plugins: [],
  optimizeDeps: {
    exclude: []
  },
  resolve: {
    alias: {
    }
  },
  server: {
    open: '/index.vite.fork.html',
  },
});
