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
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
          <div>
            <h2 className="font-display text-2xl leading-tight tracking-tight text-branddeep sm:text-3xl">
              {t("professionals.formTitle")}
            </h2>
            <div className="mt-4">
              <PartnerForm />
            </div>
          </div>
          <Reveal className="lg:pt-6">
            <Photo
              src={doctorGreeting}
              alt={t("media.doctorGreeting")}
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
              title={t(`professionals.b${i + 1}t`)}
              description={t(`professionals.b${i + 1}d`)}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
