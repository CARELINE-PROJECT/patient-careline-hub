import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { LegalPage } from "@/components/site/LegalPage";
import { termsSections } from "@/content/legal";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Careline" },
      {
        name: "description",
        content:
          "Terms governing the use of the Careline website and of the medical appointment facilitation service.",
      },
      { property: "og:title", content: "Terms & Conditions — Careline" },
      { property: "og:description", content: "The terms of the Careline coordination service." },
    ],
  }),
  component: Terms,
});

function Terms() {
  const { t } = useI18n();
  return <LegalPage title={t("legal.termsTitle")} sections={termsSections} />;
}
