# Tasks
- [ ] Build all 79 specialty detail pages with specialty-specific educational content, distinct generated illustrations, verified sources/videos where available, appointment CTA, metadata, breadcrumbs and sitemap; verify directory-to-request flow.
- [x] Header: replace Professionals with Specialties, retain Professionals in footer, remove About from header; include all About content in How it works and verify both menus and pages.
- [x] Remove social placeholder from Contact.
- [x] Present administrative services, independence and onboarding on Services with partner form.
- [x] Highlight practitioner benefits and free registration with no subscription or entry fee; verify pages and fee rules (form remains demonstration-only).
- [x] Add five proposed international locations on Contact, with accurate validation statuses, provider links and an accessible interactive world map.
- [x] Verify provider references, all five selections and desktop/mobile layouts without changing existing contact content; show address uncertainties, including the New York ZIP discrepancy.
- [x] Add the illustrated specialties directory and its footer link under Professionals.
- [x] Add a sourced eye-laser guide without prices, covering techniques and before/after care (French and English; other locales use the English guide with a visible language notice).
- [x] Integrate three verified educational YouTube videos and check both new pages, search, request navigation, mobile layout and actual playback of the French video.
- [x] Remove legal form and registered-office address from footer only, retaining legal-page identity.
- [x] Rename the +261 telephone label to “Centre d’appels mondial” everywhere it is rendered.
- [x] Reduce all homepage photo heights without changing other pages.
- [x] Add a scrolling section with the 50 software brands from the supplied list and verify assets and motion controls (49 retrieved identifiers; WeDoctor shown by name).
- [x] Add official company identity and director to relevant legal pages in all languages.
- [x] Add address and regional telephone contacts to contact page and footer.
- [x] Verify public pages and apply required package security update.
- [x] Replace "organisations" with "Patients" in the hero tagline in all 10 languages.
- [x] Update the health professionals statistic to more than 10 million in all languages.
- [x] Remove the "professional baseline / legal counsel" review notices from legal and security pages.
- [x] Replace sophie@careline.doctor with contact@careline.doctor everywhere.
- [x] Reduce the services page photo height.
- [x] Add a searchable full specialty list to the professionals partner form.
- [x] Make the footer imagery project an international, worldwide service reach.
- [x] Add an international GDPR / no-health-data mention to the security page in all languages.
- [x] Reduce the empty space below "Décrivez votre besoin" on the request page.
- [x] Re-arrange the other public pages so the main call to action stays above the fold.
- [x] Fix the partner software logos and verify the external public homepage in French: all 98 image instances load, including the six vendors in the user's screenshot.

- [x] Menu langues : drapeaux + 8 nouvelles langues (ja, ko, hi, tr, pl, sv, uk, id) — 18 au total, repli anglais pour les pages non traduites
- [x] Remove domiciliation provider names and website links from the Contact global-presence section.
- [x] Add the Antsirabe (Madagascar) registered office to the Contact global-presence section.
- [x] Remove status, type, disclaimer, per-address note and address-label wording from the Contact global-presence cards.
- [x] Fix Antsirabe and Dubai pins/labels overlapping on the Contact world map, especially on mobile.
- [x] Remove the "Services in use" / "Services considered" headings and their lists from the Contact location cards.
- [x] Remove all displayed telephone numbers (footer, contact page, legal notice) so public contact is email only.
- [x] Replace the New York location with Silicon Valley (Palo Alto) and Miami on the Contact global-presence section, and verify the seven cards, map points and labels.
- [x] Reduce the empty vertical space above the "Prénom" field on the form pages.
- [x] Show the "Facultatif" (optional) mention on the telephone field and on the company/society field in the forms.
- [x] Replace the Contact page emoji flags with drawn SVG flags so no two-letter country codes (MG, US, AE, GB, SG, HK) appear.

## SEO technical foundations (approved plan 2026-10-29)
- [ ] Static prerender of all 18 public routes (vite.config.ts) + view-source verification
- [ ] Canonicals and og:url → https://www.careline.doctor on all routes
- [ ] robots.txt rewrite (AI crawlers allowed, /request params + confirmation blocked, sitemap reference)
- [ ] Dynamic sitemap.xml (router-derived helper, no lastmod)
- [ ] public/llms.txt + public/llms-full.txt
- [ ] Performance: LCP image preload, lazy-load non-hero images, font swap (already), route code-splitting (native)
- [ ] Breadcrumbs component + JSON-LD on internal pages; verify 404 page
- [ ] GTM + Consent Mode v2 wired to cookie banner; form_start/form_submit events; GSC/Bing meta {À CONFIRMER}
- [ ] IndexNow key file + notification function

## SEO step 2 — languages, tags, structure (done 2026-10-30)
- [x] URL-based i18n: all 18 locales as /fr/ /en/ /nl/ ... subdirectories, root redirect by Accept-Language, hreflang + x-default, lang/dir attributes
- [x] 301 redirects from old URLs to /fr/ equivalents
- [x] Per-page tags: single H1, 50-60 char titles, 140-155 char descriptions (fr/en tuned), per-language canonical, OG/Twitter with dedicated 1200x630 images
- [x] Specialties: single list page; only ophthalmology dedicated
- [x] Centralized key figures (src/config/figures.ts); unconfirmed figures hidden
- [x] Logo strip: unconfirmed "100+" masked; connected-only mode ready
- [x] Sitemap: 324 URLs (18 pages × 18 locales) + hreflang xhtml:link
- [ ] {À CONFIRMER}: GTM ID, GSC/Bing verification codes, DNS careline.doctor, figure validation

## Images (étape images)
- [x] Photos renommées, WebP/JPG 480/960/1600, alt 18 langues, sitemap image:image, tableau de vérification
- [ ] Page /specialties : une image distincte par spécialité + une page dédiée par spécialité (description complète, CTA rendez-vous) — périmètre à confirmer (≈79 spécialités × 18 langues)

## Données structurées JSON-LD (étape suivante)
- [ ] Organization/WebSite, BreadcrumbList, MedicalWebPage, MedicalProcedure, MedicalCondition, Service, FAQPage — liste des fichiers et points ambigus à présenter avant de coder

## Page pilier et landing pages (prompt 5)
- [ ] Lire, lister fichiers et points ambigus avant de coder

## Laser pillar & contact (2026-10-30)
- [x] Laser pillar page /fr/chirurgie-laser-yeux with 301 from old guide
- [x] Contact: remove "envisagées" wording
- [x] Contact map: show each office regional action radius
- [ ] Laser sub-pages (17), quiz, guides hub, /fr/a-propos (+301 from /about), méthode éditoriale, choix chirurgien
- [ ] 79 specialty pages with distinct images
