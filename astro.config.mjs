import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://noob-slayer.github.io',
  base: '/sidd',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
