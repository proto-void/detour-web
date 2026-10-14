# SEO ops (post-launch)

Implementable site SEO lives in the repo (`BaseLayout`, `site.config.ts`, `/vs-resource-override/`, OG image). These steps stay **manual** for Hamza after CWS approval and first deploy.

## Google Search Console

1. Add a property for `https://detour.protovoid.com/` (URL-prefix or domain via DNS).
2. Submit sitemap: `https://detour.protovoid.com/sitemap-index.xml`
3. Request indexing for `/` and `/vs-resource-override/`
4. Optional: Rich Results Test for SoftwareApplication / FAQPage on the home URL

## After Chrome Web Store is live

1. Set `chromeStoreUrl` in [`site.config.ts`](../site.config.ts) to the public CWS listing URL.
2. Redeploy detour-web (`npm run deploy` or Cloudflare Workers deploy).
3. Update GitHub README badges / install section with the same URL.
4. Update Protovoid `/products/` CTA when the store link should appear there.
5. Paste listing copy from the extension repo `docs/distribution/store-listing.md` on [proto-void/detour](https://github.com/proto-void/detour) — do **not** automate CWS upload from this site.

## Sanity checks after deploy

- `https://detour.protovoid.com/` — title, H1, FAQ, footer links
- `https://detour.protovoid.com/vs-resource-override/`
- `https://detour.protovoid.com/brand/og-default.png` (1200×630)
- `https://detour.protovoid.com/sitemap-index.xml`
- `https://detour.protovoid.com/robots.txt`
