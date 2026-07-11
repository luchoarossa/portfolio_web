// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lucianoarossa.com',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});