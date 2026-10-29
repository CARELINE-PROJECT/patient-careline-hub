import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { staticRouteHead } from "@/i18n/head";
import { DemoNote, Glass, PageHero, Photo, Reveal, Section } from "@/components/site/primitives";
import { HeroActions } from "@/components/site/HeroActions";
import teamOffice from "@/assets/team-office.jpg";
import { CTASection } from "@/components/site/CTASection";
import { operationsCopy } from "@/i18n/operations";
import optilineLogo from "@/assets/optiline-mada-logo.png.asset.json";
import { publicAssetUrl } from "@/lib/assets";

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () => staticRouteHead("about", "/about"),
  component: About,
});

function About() {
  const { t, locale } = useI18n();
  const ops = operationsCopy[locale] ?? operationsCopy.en;

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
      <PageHero eyebrow={t("about.eyebrow")} title={t("about.title")} lead={t("about.lead")} actions={<HeroActions />} />
      <Section>
        <Reveal className="mb-12">
          <Photo
            src={teamOffice}
            alt={t("media.aboutTeam")}
            className="mx-auto max-w-3xl"
            imgClassName="h-52 object-[50%_30%] lg:h-60"
          />
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
      <Section className="pt-0">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {ops.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-2xl tracking-tight text-branddeep sm:text-3xl">
            {ops.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {ops.lead}
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {(
            [
              [ops.callCenterTitle, ops.callCenterBody, true],
              [ops.itTitle, ops.itBody, false],
              [ops.securityTitle, ops.securityBody, false],
            ] as const
          ).map(([title, body, isCallCenter]) => (
            <Glass key={title} className="p-7">
              {isCallCenter ? (
                <a
                  href="https://www.optiline-mada.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 inline-flex rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  aria-label="Optiline Mada"
                >
                  <img
                    src={publicAssetUrl(optilineLogo)}
                    alt="Optiline Mada"
                    className="h-10 w-auto"
                    loading="lazy"
                  />
                </a>
              ) : null}
              <h3 className="font-display text-lg tracking-tight text-branddeep">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              {isCallCenter ? (
                <a
                  href="https://www.optiline-mada.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-brand underline-offset-4 hover:underline"
                >
                  www.optiline-mada.com
                </a>
              ) : null}
            </Glass>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
