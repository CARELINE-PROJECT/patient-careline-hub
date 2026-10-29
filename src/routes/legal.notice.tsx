import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { staticRouteHead } from "@/i18n/head";
import { LegalPage } from "@/components/site/LegalPage";
import { noticeSections } from "@/content/legal";

export const Route = createFileRoute("/legal/notice")({
  staticData: { sitemap: true },
  head: () => staticRouteHead("notice", "/legal/notice"),
  component: Notice,
});

function Notice() {
  const { t } = useI18n();
  return <LegalPage title={t("legal.noticeTitle")} sections={noticeSections} />;
}
