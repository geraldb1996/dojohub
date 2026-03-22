import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://geraldb1996.github.io',
    base: '/dojohub',
    integrations: [tailwind()],
});
