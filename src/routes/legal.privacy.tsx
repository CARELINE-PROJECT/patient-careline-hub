import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { staticRouteMeta } from "@/i18n/head";
import { LegalPage } from "@/components/site/LegalPage";
import { privacySections } from "@/content/legal";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    meta: staticRouteMeta("privacy"),
  }),
  component: Privacy,
});

function Privacy() {
  const { t } = useI18n();
  return <LegalPage title={t("legal.privacyTitle")} sections={privacySections} />;
}
