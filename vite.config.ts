import { defineConfig } from 'vite';
import { resolve } from 'path';


export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
     rollupOptions: {
      input: {
      signup: resolve(__dirname, './src/signup.html'),
      index: resolve(__dirname, './src/index.html'),
      landing: resolve(__dirname, './src/landing.html'),
      dialer: resolve(__dirname, './src/dialer.html'),
      number: resolve(__dirname, './src/number.html'),
      verify: resolve(__dirname, './src/verify.html'),
      },
    },
  }
});
