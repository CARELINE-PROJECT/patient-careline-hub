<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep official company identity in siteConfig, with localized legal identity overrides in i18n/company and shared contact rendering, so public pages cannot drift between languages. Public contact stays email-only: never display phone numbers.
- Keep software vendor data and asset provenance in a shared catalog and render the localized homepage strip separately; this keeps vendor identities distinct from confirmed integrations.
- Keep practitioner registration terms in a shared configuration separate from administrative service pricing, and use shared administrative-service copy for practitioner benefits, homepage service summaries and metadata to prevent contradictory offer claims.
- Resolve Lovable asset pointers through the shared publicAssetUrl helper against the working Lovable published origin; the externally hosted custom domain does not serve the asset gateway.
- Reuse the canonical specialty IDs and translations for the public directory; keep patient guide content, source provenance and verified video IDs separate from route presentation to avoid inconsistent medical claims.
- Load third-party patient videos only after an explicit play action through YouTube's privacy-enhanced embed; no third-party requests before the patient chooses to play.
- Keep global locations in a shared typed catalog with separate validation, representation and service-activation fields, the registered office sourced from siteConfig and no provider/website field for domiciliation services; render the Contact section independently using a local public-domain Natural Earth map, so unconfirmed proposals cannot drift into active-office claims or name a third-party office provider.
- Draw country flags as inline SVG from the shared Flag component keyed by ISO 3166-1 alpha-2 code; never use emoji flags, because systems without a flag font show bare two-letter codes instead of a flag.

## URL-based i18n (SEO step 2)
- Every public page lives under `src/routes/$locale/`; the locale comes from the URL, never from localStorage alone. `src/routes/index.tsx` 301-redirects `/` to the Accept-Language locale (default fr); `src/routes/$.tsx` and the `$locale` layout 301 legacy unprefixed URLs to `/fr/...`.
- Internal navigation uses `LocalizedLink` (locale-free `to`) or `useLocalePath()`; never raw `<Link to="/...">` for in-site links.
- Page head metadata comes from `staticRouteHead(key, path, locale)` / `specialtyPageHead(kind, locale)` — they emit the per-language canonical, og:locale, og:image and the 18 hreflang + x-default links. Never hardcode a canonical.
- Key figures live in `src/config/figures.ts`; a figure with `confirmed: false` is hidden everywhere (pages, meta, llms.txt) until the owner validates it.
- Photos live in src/assets/photos as <descriptive-french-name>-{480,960,1600}.{webp,jpg} and render only through ResponsivePhoto with localized alts from src/i18n/imageAlts.ts; one catalog keeps file names, sizes, alt text and sitemap images consistent.
