import { createFileRoute } from "@tanstack/react-router";
import {
  BriefcaseMedical,
  ClipboardCheck,
  Globe2,
  HeartHandshake,
  Layers,
  UserRoundCheck,
} from "lucide-react";
import { useI18n } from "@/i18n";
import { staticRouteMeta } from "@/i18n/head";
import { FeatureCard, PageHero, Photo, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import doctorGreeting from "@/assets/doctor-greeting.jpg";
import { PartnerForm } from "@/components/forms/PartnerForm";

export const Route = createFileRoute("/professionals")({
  head: () => ({
    meta: staticRouteMeta("professionals"),
  }),
  component: Professionals,
});

function Professionals() {
  const { t } = useI18n();
  const icons = [Globe2, Layers, UserRoundCheck, ClipboardCheck, BriefcaseMedical, HeartHandshake];

  return (
    <>
      <PageHero
        eyebrow={t("professionals.eyebrow")}
        title={t("professionals.title")}
        lead={t("professionals.lead")}
      />
      <Section>
        <Reveal className="mb-12">
          <Photo src={doctorGreeting} alt={t("media.doctorGreeting")} />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {icons.map((Icon, i) => (
            <FeatureCard
              key={i}
              icon={<Icon className="size-5" />}
              title={t(`professionals.b${i + 1}t`)}
              description={t(`professionals.b${i + 1}d`)}
            />
          ))}
        </div>
      </Section>
      <Section tone="muted" id="partner">
        <SectionHeading
          eyebrow={t("professionals.cta")}
          title={t("professionals.formTitle")}
          lead={t("professionals.formLead")}
        />
        <div className="mt-10 max-w-3xl">
          <PartnerForm />
        </div>
      </Section>
    </>
  );
}
