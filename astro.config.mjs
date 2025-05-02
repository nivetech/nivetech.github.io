// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nivetech.github.io',
  base: '/',
  outDir: './dist',
  vite: {
    plugins: [tailwindcss()]
  }
});