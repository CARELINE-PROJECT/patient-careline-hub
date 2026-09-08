import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { LegalPage } from "@/components/site/LegalPage";
import { privacySections } from "@/content/legal";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Careline" },
      {
        name: "description",
        content:
          "How Careline collects, uses, shares, protects and retains personal data, and how you can exercise your rights.",
      },
      { property: "og:title", content: "Privacy Policy — Careline" },
      { property: "og:description", content: "Careline's approach to personal data protection." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  const { t } = useI18n();
  return <LegalPage title={t("legal.privacyTitle")} sections={privacySections} />;
}
