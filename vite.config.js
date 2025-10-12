import { defineConfig } from 'vite';
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
  },
  plugins: [
    handlebars({
      partialDirectory: 'src/partials',
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