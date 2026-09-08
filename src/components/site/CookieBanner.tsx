import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { useI18n } from "@/i18n";
import { CONSENT_OPEN, readConsent, writeConsent } from "@/lib/consent";
import { Switch } from "@/components/ui/switch";

export function CookieBanner() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState(false);
  const [functional, setFunctional] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    if (!stored) {
      setVisible(true);
    } else {
      setFunctional(stored.functional);
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
    }
    const onOpen = () => {
      setDetails(true);
      setVisible(true);
    };
    window.addEventListener(CONSENT_OPEN, onOpen);
    return () => window.removeEventListener(CONSENT_OPEN, onOpen);
  }, []);

  if (!visible) return null;

  const save = (value: { functional: boolean; analytics: boolean; marketing: boolean }) => {
    writeConsent(value);
    setVisible(false);
    setDetails(false);
  };

  const categories = [
    {
      id: "necessary",
      title: t("cookies.necessary"),
      description: t("cookies.necessaryD"),
      checked: true,
      locked: true,
      set: () => {},
    },
    {
      id: "functional",
      title: t("cookies.functional"),
      description: t("cookies.functionalD"),
      checked: functional,
      locked: false,
      set: setFunctional,
    },
    {
      id: "analytics",
      title: t("cookies.analytics"),
      description: t("cookies.analyticsD"),
      checked: analytics,
      locked: false,
      set: setAnalytics,
    },
    {
      id: "marketing",
      title: t("cookies.marketing"),
      description: t("cookies.marketingD"),
      checked: marketing,
      locked: false,
      set: setMarketing,
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={t("cookies.title")}
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6"
    >
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-border bg-card/95 p-5 shadow-[0_30px_70px_-30px_rgba(16,49,56,0.5)] backdrop-blur-xl sm:p-6">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-2xl bg-secondary text-brand">
            <ShieldCheck className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-display text-lg text-branddeep">{t("cookies.title")}</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {t("cookies.lead")}{" "}
              <Link to="/legal/cookies" className="text-brand underline underline-offset-4">
                {t("footer.cookies")}
              </Link>
            </p>
          </div>
        </div>

        {details ? (
          <ul className="mt-5 space-y-3">
            {categories.map((c) => (
              <li
                key={c.id}
                className="flex items-start justify-between gap-4 rounded-2xl border border-border/70 bg-background/60 p-4"
              >
                <div>
                  <p className="text-sm font-medium text-branddeep">{c.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.description}</p>
                </div>
                {c.locked ? (
                  <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs text-brand">
                    {t("cookies.alwaysOn")}
                  </span>
                ) : (
                  <Switch
                    checked={c.checked}
                    onCheckedChange={(v) => c.set(Boolean(v))}
                    aria-label={c.title}
                  />
                )}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => save({ functional: true, analytics: true, marketing: true })}
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-branddeep"
          >
            {t("cookies.accept")}
          </button>
          <button
            type="button"
            onClick={() => save({ functional: false, analytics: false, marketing: false })}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-branddeep transition-colors hover:bg-secondary"
          >
            {t("cookies.refuse")}
          </button>
          {details ? (
            <button
              type="button"
              onClick={() => save({ functional, analytics, marketing })}
              className="rounded-full border border-brand px-5 py-2.5 text-sm font-medium text-brand transition-colors hover:bg-secondary"
            >
              {t("cookies.save")}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setDetails(true)}
              className="rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground underline underline-offset-4 hover:text-branddeep"
            >
              {t("cookies.customize")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
