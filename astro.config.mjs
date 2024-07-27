import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import tailwindcssNesting from 'tailwindcss/nesting';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["directus.simongreer.co.uk"],
  },
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcssNesting()]
      }
    }
  },
  integrations: [tailwind({ applyBaseStyles: false }), react(), robotsTxt()],
  site: 'https://cosmodir.simongreer.co.uk'
})
