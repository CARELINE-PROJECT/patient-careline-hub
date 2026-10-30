import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import type { AnyRoute } from "@tanstack/react-router";

import {
  isSitemapRouteIncluded,
  sitemapPathForLocation,
  sitemapXML,
  type SitemapEntry,
} from "@/lib/sitemap";
import { defaultLocale, locales } from "@/i18n";
import { localizedUrl } from "@/i18n/head";
import { photoUrl, type PhotoId } from "@/lib/photos";
import { directorySpecialties } from "@/config/specialtyDirectory";
import { specialtyPath, specialtyPhoto } from "@/content/specialtyDetail";
import { specialtyIds } from "@/config/specialties";

/** Photos visible on each page (locale-free path); kept in sync with the page components. */
const pagePhotos: Record<string, PhotoId[]> = {
  "/": ["coordinatrice-careline-rendez-vous-ophtalmologiste", "patient-demande-rendez-vous-telephone", "ophtalmologiste-accueil-patient-consultation", "coordinatrice-careline-suivi-patient", "equipe-careline-internationale-reunion"],
  "/about": ["equipe-careline-internationale-reunion"],
  "/companies": ["equipe-careline-internationale-reunion"],
  "/contact": ["coordinatrice-careline-suivi-patient"],
  "/how-it-works": ["patient-demande-rendez-vous-telephone"],
  "/professionals": ["ophtalmologiste-accueil-patient-consultation"],
  "/security": ["securite-donnees-careline-protection"],
  "/specialties": [...new Set<PhotoId>(["chirurgie-laser-yeux-ophtalmologiste", ...directorySpecialties.map(specialtyPhoto)])],
  "/chirurgie-laser-yeux": ["femto-lasik-topographie-cornee"],
  "/services": ["coordinatrice-careline-suivi-patient", "services-equipe-joyeuse", "services-accueil-colore", "services-coordination-coloree"],
};

// Public site origin requested by the site owner; live once the careline.doctor DNS connection completes.
const BASE_URL = "https://www.careline.doctor";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        // Localized page templates: included routes living under /$locale/.
        const templates = (Object.values(router.routesById) as AnyRoute[]).filter(
          (route) => isSitemapRouteIncluded(route) && route.fullPath.includes("$locale") && !route.fullPath.includes("$specialty"),
        );

        const entries: SitemapEntry[] = [];
        for (const route of templates) {
          // Locale-free path of the page: "/$locale/services" → "/services", "/$locale/" → "/".
          const basePath = route.fullPath.replace("/$locale", "") || "/";
          const alternates = [
            ...locales.map((l) => ({ hrefLang: l.htmlLang, href: localizedUrl(l.code, basePath) })),
            { hrefLang: "x-default", href: localizedUrl(defaultLocale, basePath) },
          ];
          for (const locale of locales) {
            const location = router.buildLocation({
              to: route.fullPath as never,
              params: { locale: locale.code } as never,
            });
            const path = sitemapPathForLocation(router, location, route.id);
            if (path) entries.push({ path, alternates, images: (pagePhotos[basePath] ?? []).map((id) => `${BASE_URL}${photoUrl(id)}`) });
          }
        }
        for (const id of specialtyIds) {
          const basePath = specialtyPath(id);
          const alternates = [...locales.map((l) => ({ hrefLang: l.htmlLang, href: localizedUrl(l.code, basePath) })), { hrefLang: "x-default", href: localizedUrl(defaultLocale, basePath) }];
          for (const locale of locales) entries.push({ path: `/${locale.code}${basePath}`, alternates, images: [`${BASE_URL}${photoUrl(specialtyPhoto(id))}`] });
        }

        // No lastmod: there is no authoritative per-page modification date, and invented dates hurt SEO.
        if (entries.length === 0) {
          return new Response(
            'No pages are included in this sitemap. Check route decisions and ancestor exclusions. Setting "exclude-subtree" on the root excludes the entire site.',
            { status: 404, headers: { "Cache-Control": "no-store" } },
          );
        }
        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
