# Deploy detour.protovoid.com

## One-shot (after Cloudflare auth)

```sh
cd ~/Project/detour-web
npm install
npm run deploy
```

`wrangler.jsonc` deploys Worker **`detour-web`** with assets from `./dist` and custom domain **`detour.protovoid.com`**.

## Auth

If deploy fails with a missing token:

```sh
npx wrangler login
# or export CLOUDFLARE_API_TOKEN=<token with Workers + zone edit on protovoid.com>
npm run deploy
```

Use the Cloudflare account that owns the **protovoid.com** zone.

## DNS / custom domain

When `custom_domain: true` succeeds, Cloudflare attaches the hostname automatically.

If the Worker is live but the hostname is not:

1. Dashboard → **Workers & Pages** → **detour-web** → **Settings** → **Domains & Routes**
2. Add custom domain `detour.protovoid.com`
3. Or on the **protovoid.com** zone, confirm the Worker custom domain / CNAME Cloudflare manages for that hostname

No separate Pages project is required; this is an assets Worker.
