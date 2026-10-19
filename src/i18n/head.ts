import { en } from "./locales/en";
import { administrativeTranslation } from "./administrativeServices";

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
