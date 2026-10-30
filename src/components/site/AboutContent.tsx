import { useI18n } from "@/i18n";
import { DemoNote, Glass, Photo, Reveal, Section } from "@/components/site/primitives";
import { operationsCopy } from "@/i18n/operations";
import optilineLogo from "@/assets/optiline-mada-logo.png.asset.json";
import { publicAssetUrl } from "@/lib/assets";

export function AboutContent() {
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
      <Section className="pb-0">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{t("about.eyebrow")}</p>
          <h2 className="mt-3 font-display text-2xl text-branddeep sm:text-3xl">{t("about.title")}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{t("about.lead")}</p>
        </Reveal>
      </Section>
      <Section>
        <Reveal className="mb-12">
          <Photo
            photo="equipe-careline-internationale-reunion"
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
    </>
  );
}
