import { defineConfig } from 'vite';
import { resolve } from 'path';
import preact from '@preact/preset-vite';
import makeManifest from './scripts/make-manifest';
import UnoCSS from '@unocss/vite'

const src = resolve(__dirname, 'src');
const assetsDir = resolve(src, 'assets');
const outDir = resolve(__dirname, 'dist');
const publicDir = resolve(__dirname, 'public');
const modulesDir = resolve(__dirname, 'node_modules');

export default defineConfig({
  resolve: {
    alias: {
      '@src': src,
      '@assets': assetsDir,
      '@modules': modulesDir,
    },
  },
  plugins: [
    makeManifest(),
    preact(),
    UnoCSS({
      configFile: 'uno.config.ts',
    }),
  ],
  publicDir,
  build: {
    outDir,
    rollupOptions: {
      input: {
        content: resolve(src, 'content', 'index.ts'),
        background: resolve(src, 'background', 'index.ts'),
        popup: resolve(src, 'popup', 'index.html'),
        overrides: resolve(src, 'overrides', 'newtab', 'index.html'),
        sidepanels: resolve(src, 'sidepanels', 'index.html'),
        devtools: resolve(src, 'devtools', 'index.html'),
        options: resolve(src, 'options', 'index.html'),
      },
      output: {
        entryFileNames: chunk => `src/${chunk.name}/index.js`,
      },
    },
  },
});
