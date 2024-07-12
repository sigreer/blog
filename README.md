# Simple Astro Blog ported to Directus

This is a fork of Cosmic CMS's Simple Astro Blog template, ported to Directus. To build this app, we’re going to use the following technologies:

- [Astro](https://astro.build/) - A React framework for production that makes it easy to spin up a full-stack application.
- [Directus](https://directus.io/) - A Headless CMS and composable data platform to easily create and deploy data-rich apps.
- [Tailwind CSS](https://tailwindcss.com/) - A performant utility-first CSS framework that can be composed directly in your markup.

### Links
-[Original Cosmic CMS theme](https://github.com/cosmicjs/simple-astro-blog)
-[Live demo of original theme](https://simple-astro-blog.vercel.app/)

## Screenshots

![Home Page](https://imgix.cosmicjs.com/e0b61790-32db-11ed-8a37-f1952c73e588-astro-cms-screenshot-4.png?w=1200&auto=format)

![Blog Page](https://cdn.cosmicjs.com/cbd90ee0-32db-11ed-8a37-f1952c73e588-astro-cms-screenshot-3.png)

## Getting started

### Environment Variables
Modify the ``.env.example`` file at the root of your project to include the Directus API URL and rename the file to ``.env``.

```
//.env
DIRECTUS_URL=https://directus.mywebsite.com
```

Install the dependencies with
```
bun install
```

Then run the development server:

```
bun run astro dev
```

Open [http://localhost:4321](http://localhost:4321/) in your browser to view the local development server.

You can start editing the page by modifying `src/pages/index.astro`. The page auto-updates as you edit the file.