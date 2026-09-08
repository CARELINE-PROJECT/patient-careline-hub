import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { useI18n } from "@/i18n";
import { DemoNote, FeatureCard, PageHero, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security and confidentiality at Careline" },
      {
        name: "description",
        content:
          "Data minimisation, confidentiality obligations, access control, encryption in transit and clear user rights — privacy considered by design.",
      },
      { property: "og:title", content: "Security and confidentiality at Careline" },
      {
        property: "og:description",
        content: "How Careline protects the personal data entrusted to it.",
      },
    ],
  }),
  component: Security,
});

function Security() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <PageHero
        eyebrow={t("security.eyebrow")}
        title={t("security.title")}
        lead={t("security.lead")}
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((n) => (
            <FeatureCard
              key={n}
              icon={<ShieldCheck className="size-5" />}
              title={t(`security.s${n}t`)}
              description={t(`security.s${n}d`)}
            />
          ))}
        </div>
        <DemoNote>{t("security.disclaimer")}</DemoNote>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/legal/privacy"
            className="rounded-full border border-brand px-5 py-2.5 text-sm font-medium text-brand transition-colors hover:bg-secondary"
          >
            {t("footer.privacy")}
          </Link>
          <Link
            to="/privacy-preferences"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-branddeep transition-colors hover:bg-secondary"
          >
            {t("footer.preferences")}
          </Link>
        </div>
      </Section>
    </>
  );
}
