# detour-web

Product site for [Detour](https://github.com/proto-void/detour) — Astro static site on a Cloudflare Worker at **https://detour.protovoid.com**.

## Develop

```sh
npm install
npm run dev
```

## SEO

See [docs/SEO.md](docs/SEO.md) for Search Console and post–Chrome Web Store wiring (`chromeStoreUrl`).

## Deploy

Requires Cloudflare auth (`wrangler login` or `CLOUDFLARE_API_TOKEN`) on the Protovoid account that owns the `protovoid.com` zone.

```sh
npm run deploy
```

`wrangler.jsonc` attaches custom domain `detour.protovoid.com`. If deploy succeeds but DNS is missing, in Cloudflare Dashboard → **Workers** → **detour-web** → **Domains & Routes**, confirm the custom domain; or add a Worker route / custom domain for `detour.protovoid.com` on the `protovoid.com` zone.

## Push to GitHub

```sh
cd ~/Project/detour-web
git init
git add .
git commit -m "Initial Detour product site"
gh repo create proto-void/detour-web --public --source=. --remote=origin --push
# or:
# git remote add origin git@github.com:proto-void/detour-web.git
# git branch -M main
# git push -u origin main
```

Use your **Protovoid** org account (not a personal Rogers account).
