import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n";

/**
 * Primary actions placed inside a page hero so the main action stays
 * reachable without scrolling.
 */
export function HeroActions({ secondary = true }: { secondary?: boolean }) {
  const { t } = useI18n();

  return (
    <div className="mt-5 flex flex-wrap gap-3">
      <Link
        to="/request"
        className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        {t("cta.button")}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
      {secondary ? (
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-branddeep transition-colors hover:bg-secondary"
        >
          {t("nav.contact")}
        </Link>
      ) : null}
    </div>
  );
}
