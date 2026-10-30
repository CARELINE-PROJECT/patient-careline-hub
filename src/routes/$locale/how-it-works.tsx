import { createFileRoute, } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { staticRouteHead } from "@/i18n/head";
import patientHands from "@/assets/patient-hands.jpg";
import { Glass, Photo, Reveal, Section } from "@/components/site/primitives";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/$locale/how-it-works")({
  staticData: { sitemap: true },
  head: ({ params }) => staticRouteHead("howItWorks", "/how-it-works", params.locale),
  component: HowItWorks,
});

function HowItWorks() {
  const { t } = useI18n();
  const steps = [1, 2, 3, 4];

  return (
    <>
      <Section className="pt-10 md:pt-12">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              {t("how.eyebrow")}
            </p>
            <h1 className="mt-3 font-display text-3xl leading-tight tracking-tight text-branddeep sm:text-4xl lg:text-[2.75rem]">
              {t("how.title")}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              {t("how.lead")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LocalizedLink
                to="/request"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                {t("cta.button")}
                <ArrowRight className="size-4" aria-hidden="true" />
              </LocalizedLink>
              <LocalizedLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-branddeep transition-colors hover:bg-secondary"
              >
                {t("nav.contact")}
              </LocalizedLink>
            </div>
            <Photo
              src={patientHands}
              alt={t("media.patientHands")}
              className="mt-6"
              imgClassName="h-40 sm:h-48 lg:h-56"
            />
          </Reveal>
          <ol className="space-y-3">
            {steps.map((n, i) => (
              <li key={n}>
                <Reveal delay={i * 90}>
                  <Glass className="flex items-start gap-4 p-5 sm:gap-5 sm:p-6">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand font-display text-lg text-primary-foreground">
                      {n}
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-display text-lg tracking-tight text-branddeep">
                        {t(`how.s${n}t`)}
                      </h2>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {t(`how.s${n}d`)}
                      </p>
                    </div>
                  </Glass>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
