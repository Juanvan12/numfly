import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://numfly.pro',
  output: 'static',
  server: {
    host: '0.0.0.0'
  },
  integrations: [sitemap()]
})