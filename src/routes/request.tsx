import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { staticRouteMeta } from "@/i18n/head";
import { Glass, PageHero, Section } from "@/components/site/primitives";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

export const Route = createFileRoute("/request")({
  head: () => ({
    meta: staticRouteMeta("request"),
  }),
  component: RequestPage,
});

function RequestPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero eyebrow={t("request.eyebrow")} title={t("request.title")} lead={t("request.lead")} />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <AppointmentForm />
          <Glass className="p-7">
            <h2 className="font-display text-lg tracking-tight text-branddeep">{t("how.eyebrow")}</h2>
            <ol className="mt-4 space-y-4">
              {[1, 2, 3, 4].map((n) => (
                <li key={n} className="flex gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-brand">
                    {n}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-branddeep">{t(`how.s${n}t`)}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {t(`how.s${n}d`)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
              {t("footer.disclaimer")}
            </p>
          </Glass>
        </div>
      </Section>
    </>
  );
}
