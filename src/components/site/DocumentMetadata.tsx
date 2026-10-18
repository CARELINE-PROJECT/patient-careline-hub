import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { headKeyByPath, type HeadKey } from "@/i18n/head";
import { specialtyPageCopy } from "@/i18n/specialtyPages";

function upsertMeta(selector: string, attrs: Record<string, string>, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    for (const [key, value] of Object.entries(attrs)) {
      element.setAttribute(key, value);
    }
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export function DocumentMetadata() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const { t, locale } = useI18n();

  useEffect(() => {
    if (pathname === "/specialties" || pathname === "/specialties/laser-des-yeux") {
      const c = specialtyPageCopy(locale);
      const title = `${pathname === "/specialties" ? c.title : c.eyeTitle} | Careline`;
      document.title = title;
      upsertMeta('meta[name="description"]', { name: "description" }, c.lead);
      upsertMeta('meta[property="og:title"]', { property: "og:title" }, title);
      upsertMeta('meta[property="og:description"]', { property: "og:description" }, c.lead);
      return;
    }
    const headKey: HeadKey = headKeyByPath[pathname] ?? "root";
    const base = `head.${headKey}`;

    document.title = t(`${base}.title`);
    upsertMeta('meta[name="description"]', { name: "description" }, t(`${base}.description`));
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, t(`${base}.ogTitle`));
    upsertMeta(
      'meta[property="og:description"]',
      { property: "og:description" },
      t(`${base}.ogDescription`),
    );
  }, [pathname, t, locale]);

  return null;
}
