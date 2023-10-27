# Nuxt ecommerce template

Made for using with [nuxt layers](https://nuxt.com/docs/getting-started/layers)

## Create new project

https://nuxt.com/docs/getting-started/installation

Add into nuxt.config.ts:

````
export default defineNuxtConfig({
  extends: [
    'github:X3D-Ghost/nuxt-ecommerce', // Extend from a git repository
  ]
})
````

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

Copy .env.example to .env

Set environment variables

```
NUXT_BACKEND_URL='your_backend_url'
NUXT_BACKEND_API_URL='your_backend_rest_api_url'
```


## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.
