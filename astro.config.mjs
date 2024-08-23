import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  integrations: [mdx(), sitemap()],
  vite: {
    ssr: {
      noExternal: ['date-fns', 'open-props'],
    },
  },
  experimental: {
    contentCollectionCache: true,
  },
});
