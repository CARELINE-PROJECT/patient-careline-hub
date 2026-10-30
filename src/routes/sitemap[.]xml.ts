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
          (route) => isSitemapRouteIncluded(route) && route.fullPath.includes("$locale"),
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
              to: route.fullPath,
              params: { locale: locale.code },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, route.id);
            if (path) entries.push({ path, alternates });
          }
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
