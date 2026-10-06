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
import { staticRouteMeta } from "@/i18n/head";
import { FeatureCard, PageHero, Photo, Reveal, Section } from "@/components/site/primitives";
import coordinator from "@/assets/team-coordinator.jpg";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: staticRouteMeta("services"),
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
        <Reveal className="mb-12">
          <Photo src={coordinator} alt={t("media.coordinatorPhone")} />
        </Reveal>
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
