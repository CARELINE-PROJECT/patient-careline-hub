import { en } from "./locales/en";
import { dictionaries, lookup } from "./dictionaries";
import { administrativeTranslation } from "./administrativeServices";
import { defaultLocale, locales, type LocaleCode } from "./types";

function safeLocale(locale: string): LocaleCode {
  return locales.some((l) => l.code === locale) ? (locale as LocaleCode) : defaultLocale;
}
import { siteConfig } from "@/config/site";
import { ogImageFor } from "@/config/ogImages";
import { humanitarianCopy } from "./humanitarian";
import { transparencyCopy } from "./transparency";
import { startupCopy, startupPath } from "./startups";
import { startupLogos, visibleStartups } from "@/config/startups";

export type HeadKey = keyof typeof en.head | "humanitarian" | "press" | "subprocessors" | "startups";

export const headKeyByPath: Record<string, HeadKey> = {
  "/": "home",
  "/about": "about",
  "/careers": "careers",
  "/companies": "companies",
  "/contact": "contact",
  "/faq": "faq",
  "/how-it-works": "howItWorks",
  "/legal/cookies": "cookies",
  "/legal/notice": "notice",
  "/legal/privacy": "privacy",
  "/legal/terms": "terms",
  "/privacy-preferences": "preferences",
  "/professionals": "professionals",
  "/request": "request",
  "/security": "security",
  "/services": "services",
  "/humanitaire": "humanitarian",
  "/press": "press",
  "/legal/subprocessors": "subprocessors",
  "/start-up": "startups",
  "/startups": "startups",
};

export function staticRouteMeta(key: HeadKey, locale: string = "en") {
  if (key === "startups") {
    const c = startupCopy(locale).ui;
    return [{ title: c.metaTitle }, { name: "description", content: c.metaDescription }, { property: "og:title", content: c.metaTitle }, { property: "og:description", content: c.metaDescription }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }];
  }
  if (key === "press" || key === "subprocessors") {
    const copy = transparencyCopy(locale);
    const title = `${key === "press" ? copy.press : copy.providers} | Careline`;
    const description = key === "press" ? copy.pressDescription : copy.providersDescription;
    return [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }];
  }
  if (key === "humanitarian") {
    const copy = humanitarianCopy(locale);
    return [
      { title: `${copy.title} | Careline` },
      { name: "description", content: copy.description },
      { property: "og:title", content: `${copy.title} | Careline` },
      { property: "og:description", content: copy.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ];
  }
  const head = en.head[key];
  const dict = dictionaries[safeLocale(locale)];
  const admin = locale === "fr" || locale === "en" || locale === "he" ? safeLocale(locale) : null;
  const value = (field: keyof typeof head) =>
    (admin ? administrativeTranslation(admin, `head.${key}.${field}`) : undefined) ??
    lookup(dict, ["head", key, field]) ??
    head[field];

  return [
    { title: value("title") },
    { name: "description", content: value("description") },
    { property: "og:title", content: value("ogTitle") },
    { property: "og:description", content: value("ogDescription") },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

/** Absolute URL of a page in a given language: localizedUrl("fr", "/services"). */
export function localizedUrl(locale: LocaleCode, path: string): string {
  const normalized = path === "/start-up" || path === "/startups" ? startupPath(locale) : path;
  return `${siteConfig.url}/${locale}${normalized === "/" ? "" : normalized}`;
}

/** Reciprocal hreflang links for every supported language plus x-default (French). */
export function hreflangLinks(path: string) {
  return [
    ...locales.map((l) => ({
      rel: "alternate",
      hrefLang: l.htmlLang,
      href: localizedUrl(l.code, path),
    })),
    { rel: "alternate", hrefLang: "x-default", href: localizedUrl(defaultLocale, path) },
  ];
}

/**
 * Full head for a static public route in a given language: localized meta,
 * self-referencing canonical and og:url in that language, og:locale, hreflang.
 */
export function staticRouteHead(key: HeadKey, path: string, locale: string) {
  const url = localizedUrl(safeLocale(locale), path);
  const ogLocale = locales.find((l) => l.code === safeLocale(locale))?.ogLocale ?? "fr_FR";
  const image = ogImageFor(key);
  return {
    meta: [
      ...staticRouteMeta(key, locale),
      { property: "og:url", content: url },
      { property: "og:locale", content: ogLocale },
      ...(image
        ? [
            { property: "og:image", content: image },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
            { name: "twitter:image", content: image },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: url }, ...hreflangLinks(path)],
    ...(key === "startups" ? { scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "CollectionPage", "@id": `${url}#collection`, url, name: startupCopy(locale).ui.title, inLanguage: safeLocale(locale), mainEntity: { "@id": `${url}#list` } },
        { "@type": "ItemList", "@id": `${url}#list`, numberOfItems: visibleStartups().length, itemListElement: visibleStartups().map((s, i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "Organization", name: s.name, url: s.website, ...(startupLogos[s.slug] ? { logo: new URL(startupLogos[s.slug]?.src ?? "", siteConfig.url).href } : {}), address: { "@type": "PostalAddress", addressCountry: s.country.code } } })) },
        { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Careline", item: localizedUrl(safeLocale(locale), "/") }, { "@type": "ListItem", position: 2, name: startupCopy(locale).ui.nav, item: url }] },
      ],
    }).replace(/</g, "\\u003c") }] } : {}),
  };
}
