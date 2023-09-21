# Garmeres website frontend

This is the second iteration for the Garmeres website. For more information about this project, contact Levi Sørum.

## Running locally

1. Open the project folder.
2. Create a file named `.env.development` and add the environment variables listed below
3. Run `npm ci --legacy-peer-deps` and then `npm start`
4. Open your browser at `https://localhost:8000`

### Environment variables

For local development, create a file named `.env.development` and add the following variables:

```
GATSBY_STORYBLOK_API_URL=
GATSBY_STORYBLOK_ACCESS_TOKEN=
GATSBY_STORYBLOK_CONTENT_VERSION=draft
GATSBY_GOOGLE_GTAG=
GATSBY_EVENTS_API_URL=https://events.api.garmeres.com

```

### HTTPS proxy

If you want to run a HTTPS-proxy for your localhost, first install it by running `npm run install-https-proxy`.
Then you can run the proxy by using one of the following commands:

#### localhost:8010 -> localhost:8000

`npm run https-proxy-dev`

#### localhost:9010 -> localhost:9000

`npm run https-proxy`

## Deploy to production

This project is still in development, and has not been released to production.
