import { createFileRoute } from "@tanstack/react-router";
import { Globe2, HeartHandshake, Languages, Layers, ShieldCheck, Timer } from "lucide-react";
import { useI18n } from "@/i18n";
import { staticRouteMeta } from "@/i18n/head";
import { FeatureCard, PageHero, Photo, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { HeroActions } from "@/components/site/HeroActions";
import teamOffice from "@/assets/team-office.jpg";
import { ContactForm } from "@/components/forms/ContactForm";

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: staticRouteMeta("companies"),
  }),
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
        actions={<HeroActions />}
      />
      <Section>
        <SectionHeading eyebrow={t("corporations.cta")} title={t("contact.title")} lead={t("contact.lead")} />
        <div className="mt-6 max-w-3xl">
          <ContactForm />
        </div>
      </Section>
      <Section tone="muted">
        <Reveal className="mb-8">
          <Photo
            src={teamOffice}
            alt={t("media.teamOffice")}
            className="mx-auto max-w-3xl"
            imgClassName="h-52 object-[50%_30%] lg:h-60"
          />
        </Reveal>
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
