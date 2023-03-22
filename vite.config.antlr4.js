import { defineConfig } from "vite";

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        app: 'src/index.vite.antlr4.html'
      },
      output: {
        app: 'index.html'
      }
    },
    outDir: "../distViteAntlr4"
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
    open: '/index.vite.antlr4.html',
  },
});
