import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  root: './',
  base: '/',
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        education: resolve(__dirname, 'src/pages/education.html'),
        experiences: resolve(__dirname, 'src/pages/experiences.html')
      }
    },
  },
  plugins: [
    handlebars({
      partialDirectory: 'src/components',
    }),
    // vue(),
  ],

  // Resolve options for module imports
  resolve: {
    alias: {
      // Alias for common paths to simplify imports
      '@': '/src',
    },
  },
});