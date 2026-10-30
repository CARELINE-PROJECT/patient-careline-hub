import { LocalizedLink } from "@/components/site/LocalizedLink";
import { ChevronRight } from "lucide-react";

import { stripLocalePrefix, useI18n } from "@/i18n";
import { localizedUrl } from "@/i18n/head";
import { headKeyByPath } from "@/i18n/head";
import { specialtyPageCopy } from "@/i18n/specialtyPages";

/** Short navigation labels where they exist; otherwise the cleaned page title. */
const navLabelByPath: Record<string, string> = {
  "/about": "nav.about",
  "/services": "nav.services",
  "/professionals": "nav.professionals",
  "/companies": "nav.corporations",
  "/contact": "nav.contact",
  "/faq": "nav.faq",
  "/security": "nav.security",
  "/how-it-works": "nav.howItWorks",
  "/request": "nav.requestShort",
};

interface Crumb {
  label: string;
  to?: string;
}

function cleanTitle(title: string): string {
  return title.split("|")[0]?.split("—")[0]?.trim() ?? title;
}

/**
 * Visible breadcrumb trail + BreadcrumbList JSON-LD, derived from the URL.
 * Rendered for every non-home public page from the root layout.
 */
export function Breadcrumbs({ pathname }: { pathname: string }) {
  const { t, locale } = useI18n();
  pathname = stripLocalePrefix(pathname);

  const crumbs: Crumb[] = [{ label: "Careline", to: "/" }];

  if (pathname === "/specialties" || pathname === "/chirurgie-laser-yeux") {
    const copy = specialtyPageCopy(locale);
    if (pathname === "/chirurgie-laser-yeux") {
      crumbs.push({ label: copy.title, to: "/specialties" }, { label: copy.eyeTitle });
    } else {
      crumbs.push({ label: copy.title });
    }
  } else {
    const navKey = navLabelByPath[pathname];
    const headKey = headKeyByPath[pathname];
    const label = navKey ? t(navKey) : headKey ? cleanTitle(t(`head.${headKey}.title`)) : pathname;
    crumbs.push({ label });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      ...(crumb.to ? { item: localizedUrl(locale, crumb.to) } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b border-border/60 bg-background">
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1.5 px-5 py-2.5 text-xs text-muted-foreground sm:px-8">
        {crumbs.map((crumb, index) => (
          <li key={`${crumb.label}-${index}`} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="size-3 opacity-60" aria-hidden />}
            {crumb.to ? (
              <LocalizedLink to={crumb.to} className="transition-colors hover:text-foreground">
                {crumb.label}
              </LocalizedLink>
            ) : (
              <span aria-current="page" className="font-medium text-foreground">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </nav>
  );
}
