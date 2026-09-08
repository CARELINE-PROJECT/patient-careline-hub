import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { LegalPage } from "@/components/site/LegalPage";
import { noticeSections } from "@/content/legal";

export const Route = createFileRoute("/legal/notice")({
  head: () => ({
    meta: [
      { title: "Legal Notice — Careline" },
      {
        name: "description",
        content: "Publisher, contact, hosting and status information for the Careline website.",
      },
      { property: "og:title", content: "Legal Notice — Careline" },
      { property: "og:description", content: "Publisher, hosting and status of the Careline site." },
    ],
  }),
  component: Notice,
});

function Notice() {
  const { t } = useI18n();
  return <LegalPage title={t("legal.noticeTitle")} sections={noticeSections} />;
}
