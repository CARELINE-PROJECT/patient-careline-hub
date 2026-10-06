import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { headKeyByPath, type HeadKey } from "@/i18n/head";

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
  const { t } = useI18n();

  useEffect(() => {
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
  }, [pathname, t]);

  return null;
}
