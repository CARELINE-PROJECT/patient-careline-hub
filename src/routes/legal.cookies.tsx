import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { staticRouteHead } from "@/i18n/head";
import { LegalPage } from "@/components/site/LegalPage";
import { cookieSections } from "@/content/legal";

export const Route = createFileRoute("/legal/cookies")({
  staticData: { sitemap: true },
  head: () => staticRouteHead("cookies", "/legal/cookies"),
  component: Cookies,
});

function Cookies() {
  const { t } = useI18n();
  return <LegalPage title={t("legal.cookiesTitle")} sections={cookieSections} />;
}
