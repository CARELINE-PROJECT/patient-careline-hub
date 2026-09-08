import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { Glass, PageHero, Section } from "@/components/site/primitives";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How Careline works — from request to confirmed appointment" },
      {
        name: "description",
        content:
          "Four calm steps: send your request, Careline analyses your need, several practitioners are proposed, you confirm your appointment.",
      },
      { property: "og:title", content: "How Careline works" },
      {
        property: "og:description",
        content: "Four calm steps from your first request to a confirmed medical appointment.",
      },
    ],
  }),
  component: HowItWorks,
});

function HowItWorks() {
  const { t } = useI18n();
  const steps = [1, 2, 3, 4];

  return (
    <>
      <PageHero eyebrow={t("how.eyebrow")} title={t("how.title")} lead={t("how.lead")} />
      <Section>
        <ol className="space-y-6">
          {steps.map((n) => (
            <li key={n}>
              <Glass className="flex flex-col gap-4 p-7 sm:flex-row sm:items-start sm:gap-7">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand font-display text-xl text-primary-foreground">
                  {n}
                </span>
                <div>
                  <h2 className="font-display text-xl tracking-tight text-branddeep">
                    {t(`how.s${n}t`)}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`how.s${n}d`)}
                  </p>
                </div>
              </Glass>
            </li>
          ))}
        </ol>
      </Section>
      <CTASection />
    </>
  );
}
