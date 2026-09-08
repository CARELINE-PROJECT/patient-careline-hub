import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { AuroraBackdrop, Section } from "./primitives";

export function CTASection() {
  const { t } = useI18n();
  return (
    <Section tone="deep">
      <AuroraBackdrop invert />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl leading-tight tracking-tight text-primary-foreground sm:text-4xl">
          {t("cta.title")}
        </h2>
        <p className="mt-4 text-base text-primary-foreground/75">{t("cta.lead")}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/request"
            className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-semibold text-branddeep transition-transform hover:-translate-y-0.5"
          >
            {t("cta.button")}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            {t("nav.contact")}
          </Link>
        </div>
      </div>
    </Section>
  );
}
