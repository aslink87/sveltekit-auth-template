import type { PageServerLoad } from './$types';

export const load = (async () => {
  return {
    items: [
      {
        name: "here's some page data",
        valid: true,
        awesome: true,
      },
      {
        name: "here's some more page data",
        valid: false,
        awesome: true,
      },
    ],
  };
}) satisfies PageServerLoad;
