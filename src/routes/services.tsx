import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  CalendarCheck,
  Ear,
  Globe2,
  HeartHandshake,
  Languages,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import { useI18n } from "@/i18n";
import { FeatureCard, PageHero, Section } from "@/components/site/primitives";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Careline services — practitioner search, booking and support" },
      {
        name: "description",
        content:
          "Practitioner search, appointment booking, patient–practitioner matching, teleconsultation, international coordination and multilingual support.",
      },
      { property: "og:title", content: "Careline services" },
      {
        property: "og:description",
        content:
          "A single point of contact for patients, medical practices and organizations at every step of the appointment journey.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  const { t } = useI18n();
  const icons = [
    Stethoscope,
    CalendarCheck,
    HeartHandshake,
    Sparkles,
    Users,
    Building2,
    Globe2,
    Languages,
    ShieldCheck,
    Ear,
  ];

  return (
    <>
      <PageHero
        eyebrow={t("services.eyebrow")}
        title={t("services.title")}
        lead={t("services.lead")}
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {icons.map((Icon, i) => (
            <FeatureCard
              key={i}
              icon={<Icon className="size-5" />}
              title={t(`services.i${i + 1}t`)}
              description={t(`services.i${i + 1}d`)}
            />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
