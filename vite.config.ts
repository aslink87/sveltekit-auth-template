import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { resolve } from 'path';

const config: UserConfig = {
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}', 'tests/*.{test,spec}.{js,ts}'],
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      $: resolve('./src'),
    },
  },
};

export default config;
