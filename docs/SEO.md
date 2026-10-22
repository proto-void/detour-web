# SEO ops (post-launch)

Implementable site SEO lives in the repo (`BaseLayout`, `site.config.ts`, `/vs-resource-override/`, OG image). These steps stay **manual** for Hamza after CWS approval and first deploy.

## Redeploy (when Wrangler OAuth is expired)

```sh
cd ~/Project/detour-web
npx wrangler login
npm run deploy
```

If `protovoid-web` product blurb should be live too (branch `feat/astro-redesign`):

```sh
cd ~/Project/protovoid-web
npx wrangler login   # same account if needed
npm run deploy
```

## Google Search Console

1. Add a property for `https://detour.protovoid.com/` (URL-prefix or domain via DNS).
2. Submit sitemap: `https://detour.protovoid.com/sitemap-index.xml`
3. Request indexing for `/` and `/vs-resource-override/`
4. Optional: Rich Results Test for SoftwareApplication / FAQPage on the home URL

## After Chrome Web Store is live

1. **Done:** `chromeStoreUrl` in [`site.config.ts`](../site.config.ts) → `https://chromewebstore.google.com/detail/detour/jfgbokgdgpjhkciooicmbdgablgkklmn`.
2. Redeploy detour-web (`npm run deploy` or Cloudflare Workers deploy) so Install CTA / JSON-LD update.
3. **Done (public Detour README):** Install section + Chrome Web Store badge use the same URL.
4. Optional: Protovoid `/products/` CTA still uses the product site; point at CWS only if install-from-store is desired there.
5. Paste listing copy from the extension repo `docs/distribution/store-listing.md` in the CWS dashboard when editing — do **not** automate CWS upload from this site.

## Sanity checks after deploy

- `https://detour.protovoid.com/` — title, H1, FAQ, footer links
- `https://detour.protovoid.com/vs-resource-override/`
- `https://detour.protovoid.com/brand/og-default.png` (1200×630)
- `https://detour.protovoid.com/sitemap-index.xml`
- `https://detour.protovoid.com/robots.txt`
