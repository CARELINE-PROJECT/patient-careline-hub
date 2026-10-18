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
import { FeatureCard, PageHero, Photo, Reveal, Section } from "@/components/site/primitives";
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
      <Section id="partner" className="pt-5 md:pt-6">
        <h2 className="font-display text-2xl leading-tight tracking-tight text-branddeep sm:text-3xl">
          {t("professionals.formTitle")}
        </h2>
        <div className="mt-4 max-w-3xl">
          <PartnerForm />
        </div>
      </Section>
      <Section tone="muted">
        <Reveal className="mb-8">
          <Photo
            src={doctorGreeting}
            alt={t("media.doctorGreeting")}
            className="mx-auto max-w-3xl"
            imgClassName="h-52 object-[50%_30%] lg:h-60"
          />
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
    </>
  );
}
