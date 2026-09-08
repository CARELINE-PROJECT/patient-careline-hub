import { createFileRoute } from "@tanstack/react-router";
import { Globe2, HeartHandshake, Languages, Layers, ShieldCheck, Timer } from "lucide-react";
import { useI18n } from "@/i18n";
import { FeatureCard, PageHero, Photo, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import teamOffice from "@/assets/team-office.jpg";
import { ContactForm } from "@/components/forms/ContactForm";

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: [
      { title: "For companies — international healthcare access for your people" },
      {
        name: "description",
        content:
          "Offer employees, clients or beneficiaries a simple, coordinated route to medical appointments across countries, languages and time zones.",
      },
      { property: "og:title", content: "Careline for companies" },
      {
        property: "og:description",
        content:
          "One partner for medical appointment requests across multiple countries, with human accompaniment for every person.",
      },
    ],
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
      />
      <Section>
        <Reveal className="mb-12">
          <Photo src={teamOffice} alt="Une équipe internationale échangeant autour d'une table de réunion" />
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
      <Section tone="muted">
        <SectionHeading eyebrow={t("corporations.cta")} title={t("contact.title")} lead={t("contact.lead")} />
        <div className="mt-10 max-w-3xl">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
