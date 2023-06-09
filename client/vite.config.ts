import * as path from 'path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
    extensions: ['.ts', '.svelte'],
  },
});
