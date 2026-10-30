import { createFileRoute, redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

import { defaultLocale, isLocaleCode, type LocaleCode } from "@/i18n";

/** Best Accept-Language match among the supported locales, French by default. */
const getPreferredLocale = createServerFn({ method: "GET" }).handler(() => {
  const accept = getRequest().headers.get("accept-language") ?? "";
  for (const part of accept.split(",")) {
    const code = part.trim().split(";")[0]?.split("-")[0]?.toLowerCase() ?? "";
    if (isLocaleCode(code)) return code as LocaleCode;
  }
  return defaultLocale;
});

/** The root URL permanently redirects to the visitor's language (French by default). */
export const Route = createFileRoute("/")({
  staticData: { sitemap: false },
  beforeLoad: async () => {
    const locale = await getPreferredLocale();
    throw redirect({ href: `/${locale}/`, statusCode: 301 });
  },
});
