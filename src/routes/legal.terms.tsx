import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { staticRouteHead } from "@/i18n/head";
import { LegalPage } from "@/components/site/LegalPage";
import { termsSections } from "@/content/legal";

export const Route = createFileRoute("/legal/terms")({
  staticData: { sitemap: true },
  head: () => staticRouteHead("terms", "/legal/terms"),
  component: Terms,
});

function Terms() {
  const { t } = useI18n();
  return <LegalPage title={t("legal.termsTitle")} sections={termsSections} />;
}
