import { en } from "./locales/en";
import { administrativeTranslation } from "./administrativeServices";
import { defaultLocale, locales, type LocaleCode } from "./types";

function safeLocale(locale: string): LocaleCode {
  return locales.some((l) => l.code === locale) ? (locale as LocaleCode) : defaultLocale;
}
import { siteConfig } from "@/config/site";

export type HeadKey = keyof typeof en.head;

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
};

export function staticRouteMeta(key: HeadKey) {
  const head = en.head[key];
  const value = (field: keyof typeof head) => administrativeTranslation("en", `head.${key}.${field}`) ?? head[field];

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
  return `${siteConfig.url}/${locale}${path === "/" ? "" : path}`;
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
  return {
    meta: [
      ...staticRouteMeta(key),
      { property: "og:url", content: url },
      { property: "og:locale", content: ogLocale },
    ],
    links: [{ rel: "canonical", href: url }, ...hreflangLinks(path)],
  };
}
