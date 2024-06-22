## Hi there

This project is a barebones template I've made so Lily can get some standard html / css done and deploy a decent portfolio website. This app is from a Next.js Static Export template.

* To get started, fork this repo and start the dev server (npm install if you need)
* The pages are already made:
    * Home page (page.tsx in the main folder)
    * About
    * Battle Bank
    * BravoCare
    * Woodforest

**Please just use tailwind. Don't use next image. This project shouldn't need any react or special next development, but feel free to do something minimal if needed.**

I know an image modal is required, I'll add in the Radix dialog for it.

Feel free to ping me and ask any q's, but in general just use Tailwind Grid and some flex and it should all work just fine. I've already loaded in the font.

For delivery, send a PR or similar to this repo.

## CBT

There seems to be a crazy number of packages already in package.json. There should likely only be 3:

```json
"dependencies": {
"react": "^18",
"react-dom": "^18",
"next": "14.2.4"
}
```

and right now we have:

```json
  "dependencies": {
    "@types/node": "^18.11.5",
    "@types/react": "^18.0.23",
    "@types/react-dom": "^18.0.7",
    "autoprefixer": "^10.4.19",
    "next": "latest",
    "postcss": "^8.4.38",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "serve": "^14.2.0",
    "tailwindcss": "^3.4.4",
    "typescript": "^4.8.4"
  }
```

Not off to a great start there. Make sure those are pruned back.

### Old documentation below here

Next.js enables starting as a static site or Single-Page Application (SPA), then later optionally upgrading to use features that require a server.

When running `next build`, Next.js generates an HTML file per route. By breaking a strict SPA into individual HTML files, Next.js can avoid loading unnecessary JavaScript code on the client-side, reducing the bundle size and enabling faster page loads.

Learn more: https://nextjs.org/docs/app/building-your-application/deploying/static-exports

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-static-export)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-static-export)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-static-export with-static-export-app
```

```bash
yarn create next-app --example with-static-export with-static-export-app
```

```bash
pnpm create next-app --example with-static-export with-static-export-app
```
