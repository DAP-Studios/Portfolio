# DAP Portfolio (Next.js Static Export)

This project is a Next.js app configured for static export.

## Local development

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Build static output:

```bash
npm run build
```

After build, static files are generated in the `out` directory.

## Cloudflare Pages deployment

Use Cloudflare Pages with static hosting settings:

1. Framework preset: `None` (or static site)
2. Build command: `npm run build`
3. Build output directory: `out`
4. Node.js version: `20` (recommended)

Important Cloudflare dashboard settings:

1. Disable `Rocket Loader`
2. Disable JavaScript transform/minify features if enabled

## Optional base path (subdirectory hosting)

If your site is served from a subpath like `/portfolio`, set this environment variable in Cloudflare Pages:

- `NEXT_PUBLIC_BASE_PATH=/portfolio`

Then redeploy. The app is configured to apply this base path for static assets and routes.
