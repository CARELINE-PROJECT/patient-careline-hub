import { createFileRoute } from "@tanstack/react-router";
import { Globe2, HeartHandshake, Languages, Layers, ShieldCheck, Timer } from "lucide-react";
import { useI18n } from "@/i18n";
import { staticRouteHead } from "@/i18n/head";
import { FeatureCard, PageHero, Photo, Reveal, Section } from "@/components/site/primitives";
import { ContactForm } from "@/components/forms/ContactForm";

export const Route = createFileRoute("/$locale/companies")({
  staticData: { sitemap: true },
  head: ({ params }) => staticRouteHead("companies", "/companies", params.locale),
  component: Companies,
});

function Companies() {
  const { t } = useI18n();
  const icons = [Globe2, HeartHandshake, Layers, Languages, Timer, ShieldCheck];

  return (
    <>
      <PageHero
        eyebrow={t("corporations.eyebrow")}
        title={t("corporations.title")}
        lead={t("corporations.lead")}
      />
      <Section className="pt-4 md:pt-5">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
          <div>
            <h2 className="sr-only">{t("contact.title")}</h2>
            <ContactForm />
          </div>
          <Reveal className="lg:pt-6">
            <Photo
              photo="equipe-careline-internationale-reunion"
              imgClassName="h-52 object-[50%_30%] lg:h-64"
            />
          </Reveal>
        </div>
      </Section>
      <Section tone="muted">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {icons.map((Icon, i) => (
            <FeatureCard
              key={i}
              icon={<Icon className="size-5" />}
              title={t(`corporations.b${i + 1}t`)}
              description={t(`corporations.b${i + 1}d`)}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
