import { en } from "./locales/en";

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

  return [
    { title: head.title },
    { name: "description", content: head.description },
    { property: "og:title", content: head.ogTitle },
    { property: "og:description", content: head.ogDescription },
  ];
}
