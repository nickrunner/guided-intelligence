import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://usegi.dev',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false }), mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
    },
  },
});
