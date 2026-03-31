import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  
  server: {
    port: 3000,
    open: true,
    strictPort: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['axios']
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  
  optimizeDeps: {
    include: ['axios']
  }
});