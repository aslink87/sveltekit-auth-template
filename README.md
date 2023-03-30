# SvelteKit App Template

Template for SvelteKit project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Features

1. Authentication handle with [`Auth.js`](https://authjs.dev/reference/sveltekit)
2. Authenticated users can be assigned as page admins via userSettings object in their user database entry.
3. End-to-end testing via [`Playwright`](https://playwright.dev/docs/intro)
4. Unit testing via [`Vitest`](https://vitest.dev/guide/)
5. UI development assistance with [`Storybook`](https://storybook.js.org/)
6. Schema validation with [`Zod`](https://zod.dev/)
7. ESLint configured with [`AirBnb`](https://github.com/airbnb/javascript) standards

## Config

- Copy '.env.example' to '.env' file and update variables as needed
- Update seo data in 'src/lib/stores/seo.ts', 'src/routes/+page.svelte', 'src/routes/protected/(admin)/+page.svelte', 'src/routes/+layout.svelte'

## Developing

- Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open

# spin-up local postgres docker container to store data
docker-compose up -d

# initialize DB using prisma schema file and start prisma studio
npx prisma migrate dev
npx prisma studio

# run storybook for UI development
npm run storybook
```

## First user

This template allows visitors to login via Google auth. Page administrators can assign new users as page admins via the '/admin' route. However, the first admin user must be assigned admin access via a database update through Prisma.

After starting the app login with your Google account to create your user. Then using prisma studio edit your userSettings to set 'approved' to true. Then you'll be able to access the admin page.

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
> This template was inspired by the work of JS content creater 'Coding Garden'. See his repo at [`listd github`](https://github.com/CodingGarden/listd)
