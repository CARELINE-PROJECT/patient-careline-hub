import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { staticRouteHead } from "@/i18n/head";
import { LegalPage } from "@/components/site/LegalPage";
import { privacySections } from "@/content/legal";

export const Route = createFileRoute("/legal/privacy")({
  staticData: { sitemap: true },
  head: () => staticRouteHead("privacy", "/legal/privacy"),
  component: Privacy,
});

function Privacy() {
  const { t } = useI18n();
  return <LegalPage title={t("legal.privacyTitle")} sections={privacySections} />;
}
