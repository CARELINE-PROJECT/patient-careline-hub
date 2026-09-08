import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { Glass, PageHero, Section } from "@/components/site/primitives";
import { Switch } from "@/components/ui/switch";
import { CONSENT_CHANGED, readConsent, writeConsent } from "@/lib/consent";

export const Route = createFileRoute("/privacy-preferences")({
  head: () => ({
    meta: [
      { title: "Manage privacy preferences — Careline" },
      {
        name: "description",
        content:
          "Review and change the cookie categories you allow on the Careline website at any time.",
      },
      { property: "og:title", content: "Manage privacy preferences — Careline" },
      { property: "og:description", content: "Change the cookie categories you allow." },
    ],
  }),
  component: Preferences,
});

function Preferences() {
  const { t } = useI18n();
  const [functional, setFunctional] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    if (stored) {
      setFunctional(stored.functional);
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
    }
    const sync = () => {
      const next = readConsent();
      if (next) {
        setFunctional(next.functional);
        setAnalytics(next.analytics);
        setMarketing(next.marketing);
      }
    };
    window.addEventListener(CONSENT_CHANGED, sync);
    return () => window.removeEventListener(CONSENT_CHANGED, sync);
  }, []);

  const rows = [
    { id: "necessary", title: t("cookies.necessary"), desc: t("cookies.necessaryD"), locked: true, value: true, set: () => {} },
    { id: "functional", title: t("cookies.functional"), desc: t("cookies.functionalD"), locked: false, value: functional, set: setFunctional },
    { id: "analytics", title: t("cookies.analytics"), desc: t("cookies.analyticsD"), locked: false, value: analytics, set: setAnalytics },
    { id: "marketing", title: t("cookies.marketing"), desc: t("cookies.marketingD"), locked: false, value: marketing, set: setMarketing },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("cookies.manage")}
        title={t("legal.preferencesTitle")}
        lead={t("legal.preferencesLead")}
      />
      <Section>
        <div className="max-w-3xl space-y-4">
          {rows.map((row) => (
            <Glass key={row.id} className="flex items-start justify-between gap-6 p-6">
              <div>
                <h2 className="font-display text-lg tracking-tight text-branddeep">{row.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{row.desc}</p>
              </div>
              {row.locked ? (
                <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs text-brand">
                  {t("cookies.alwaysOn")}
                </span>
              ) : (
                <Switch
                  checked={row.value}
                  onCheckedChange={(v) => row.set(Boolean(v))}
                  aria-label={row.title}
                />
              )}
            </Glass>
          ))}

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                writeConsent({ functional, analytics, marketing });
                setSaved(true);
              }}
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-branddeep"
            >
              {t("cookies.save")}
            </button>
            {saved ? (
              <p role="status" className="text-sm text-brand">
                {t("cookies.managed")}
              </p>
            ) : null}
          </div>
        </div>
      </Section>
    </>
  );
}
