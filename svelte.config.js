import adapter from '@sveltejs/adapter-auto';
// eslint-disable-next-line import/no-unresolved
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    preprocess({
      scss: {
        prependData: "@import './src/styles/globals.scss';",
      },
    }),
    vitePreprocess(),
  ],

  kit: {
    adapter: adapter(),
  },
};

export default config;
