import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe2, Lock, ShieldCheck } from "lucide-react";
import { useI18n } from "@/i18n";
import { staticRouteMeta } from "@/i18n/head";
import { securityFocusCopy } from "@/i18n/securityFocus";
import { FeatureCard, PageHero, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: staticRouteMeta("security"),
  }),
  component: Security,
});

function Security() {
  const { t, locale } = useI18n();
  const f = securityFocusCopy[locale] ?? securityFocusCopy.en;
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <PageHero
        eyebrow={t("security.eyebrow")}
        title={t("security.title")}
        lead={t("security.lead")}
      >
        <div className="mt-6 flex max-w-3xl items-start gap-4 rounded-3xl border border-brand/30 bg-card/80 p-5">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
          <div>
            <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              {f.badge}
            </span>
            <p className="mt-3 font-display text-lg leading-snug tracking-tight text-branddeep sm:text-xl">
              {f.claim}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.claimDetail}</p>
          </div>
        </div>
      </PageHero>
      <Section tone="muted">
        <div className="grid gap-6 sm:grid-cols-2">
          <FeatureCard
            icon={<Globe2 className="size-5" />}
            title={f.gdprTitle}
            description={f.gdprBody}
          />
          <FeatureCard
            icon={<Lock className="size-5" />}
            title={f.standardTitle}
            description={f.standardBody}
          />
        </div>
      </Section>
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((n) => (
            <FeatureCard
              key={n}
              icon={<ShieldCheck className="size-5" />}
              title={t(`security.s${n}t`)}
              description={t(`security.s${n}d`)}
            />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/legal/privacy"
            className="rounded-full border border-brand px-5 py-2.5 text-sm font-medium text-brand transition-colors hover:bg-secondary"
          >
            {t("footer.privacy")}
          </Link>
          <Link
            to="/privacy-preferences"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-branddeep transition-colors hover:bg-secondary"
          >
            {t("footer.preferences")}
          </Link>
        </div>
      </Section>
    </>
  );
}
