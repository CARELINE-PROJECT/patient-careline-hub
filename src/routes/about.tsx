import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { staticRouteMeta } from "@/i18n/head";
import { DemoNote, Glass, PageHero, Photo, Reveal, Section } from "@/components/site/primitives";
import teamOffice from "@/assets/team-office.jpg";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: staticRouteMeta("about"),
  }),
  component: About,
});

function About() {
  const { t } = useI18n();

  const blocks = [
    ["missionT", "missionD"],
    ["visionT", "visionD"],
    ["valuesT", "valuesD"],
    ["approachT", "approachD"],
    ["networkT", "networkD"],
    ["patientsT", "patientsD"],
    ["prosT", "prosD"],
    ["privacyT", "privacyD"],
  ] as const;

  const values = ["v1", "v2", "v3", "v4", "v5", "v6"] as const;

  return (
    <>
      <PageHero eyebrow={t("about.eyebrow")} title={t("about.title")} lead={t("about.lead")} />
      <Section>
        <Reveal className="mb-12">
          <Photo src={teamOffice} alt={t("media.aboutTeam")} />
        </Reveal>
        <ul className="flex flex-wrap gap-2">
          {values.map((v) => (
            <li
              key={v}
              className="rounded-full border border-border bg-secondary/70 px-4 py-2 text-sm text-brand"
            >
              {t(`about.${v}`)}
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {blocks.map(([titleKey, bodyKey]) => (
            <Glass key={titleKey} className="p-7">
              <h2 className="font-display text-xl tracking-tight text-branddeep">
                {t(`about.${titleKey}`)}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(`about.${bodyKey}`)}
              </p>
            </Glass>
          ))}
        </div>
        <DemoNote>{t("about.disclaimer")}</DemoNote>
      </Section>
      <CTASection />
    </>
  );
}
