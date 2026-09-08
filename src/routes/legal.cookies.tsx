import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { LegalPage } from "@/components/site/LegalPage";
import { cookieSections } from "@/content/legal";

export const Route = createFileRoute("/legal/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Careline" },
      {
        name: "description",
        content:
          "Which cookie categories Careline uses, how consent is collected and how to change your preferences at any time.",
      },
      { property: "og:title", content: "Cookie Policy — Careline" },
      { property: "og:description", content: "Cookie categories, consent and how to change it." },
    ],
  }),
  component: Cookies,
});

function Cookies() {
  const { t } = useI18n();
  return <LegalPage title={t("legal.cookiesTitle")} sections={cookieSections} />;
}
