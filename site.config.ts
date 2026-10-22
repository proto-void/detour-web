export const siteConfig = {
  name: 'Detour',
  tagline: 'Point production at your code.',
  /** SEO document title (~50–60 chars). */
  title: 'Detour · Chrome extension to redirect & override requests',
  description:
    'Redirect requests, modify headers, mock fetch/XHR, and inject JS/CSS in Chrome — locally, MIT open source, no Detour server.',
  url: 'https://detour.protovoid.com',
  themeColor: '#07060d',
  defaultOgImage: '/brand/og-default.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  github: 'https://github.com/proto-void/detour',
  /** Set when the Chrome Web Store listing is live. Empty = show “Chrome soon” CTA; omit downloadUrl in JSON-LD. */
  chromeStoreUrl: 'https://chromewebstore.google.com/detail/detour/jfgbokgdgpjhkciooicmbdgablgkklmn',
  contactEmail: 'detour@protovoid.com',
  studioUrl: 'https://protovoid.com',
  studioName: 'Protovoid',
} as const;
