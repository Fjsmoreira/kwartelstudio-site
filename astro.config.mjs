// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kwartelstudio.nl',
  output: 'static',
  compressHTML: true,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/bedankt/'),
    }),
  ],
});
