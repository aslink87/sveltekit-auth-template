import { writable } from 'svelte/store';

export const seo = writable({
  title: 'company name',
  description: 'company description',
});
