import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://noob-slayer.github.io',
  base: '/blogs',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
