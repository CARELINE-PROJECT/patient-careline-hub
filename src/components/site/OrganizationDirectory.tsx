import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { organizations } from "@/config/organizations";
import { organizationTitles } from "@/i18n/organizations";
import { useI18n } from "@/i18n";

function OrganizationIdentity({ organization }: { organization: (typeof organizations)[number] }) {
  const [failed, setFailed] = useState(false);
  return <>
    {organization.logo && !failed ? <img src={organization.logo} alt="" width={180} height={64} loading="lazy" onError={() => setFailed(true)} className="h-16 w-full object-contain" /> : <span className="flex h-16 items-center justify-center text-center font-display text-lg leading-snug text-branddeep">{organization.name}</span>}
    <span className="mt-3 block text-center text-xs font-medium leading-relaxed text-foreground">{organization.name}</span>
  </>;
}

export function OrganizationDirectory({ compact = false }: { compact?: boolean }) {
  const { locale, t } = useI18n();
  const viewport = useRef<HTMLUListElement>(null);
  return <section id={compact ? "organization-banner" : "organizations"} aria-labelledby={compact ? "organization-banner-title" : "organizations-title"} className="border-t border-border bg-background px-5 py-8 sm:px-8 md:py-10">
    <div className="mx-auto max-w-6xl">
      <div className="flex items-center justify-between gap-4">
        <h2 id={compact ? "organization-banner-title" : "organizations-title"} className="font-display text-2xl leading-tight text-branddeep sm:text-3xl">{organizationTitles[locale]}</h2>
        {compact && <div className="flex shrink-0 gap-2" dir="ltr">
          <Button variant="outline" size="icon" title={t("ui.previous")} aria-label={locale === "fr" ? "Organisations précédentes" : "Previous organizations"} onClick={() => viewport.current?.scrollBy({ left: -500, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}><ChevronLeft /></Button>
          <Button variant="outline" size="icon" title={locale === "fr" ? "Organisations suivantes" : "Next organizations"} aria-label={locale === "fr" ? "Organisations suivantes" : "Next organizations"} onClick={() => viewport.current?.scrollBy({ left: 500, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}><ChevronRight /></Button>
        </div>}
      </div>
      <ul ref={viewport} dir="ltr" className={compact ? "software-scroll mt-6 flex gap-4 overflow-x-auto pb-3" : "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"}>
        {organizations.map((organization) => <li key={organization.id} className={compact ? "w-48 shrink-0" : "min-w-0"}>
          {organization.website ? <a href={organization.website} target="_blank" rel="noopener noreferrer" className="relative flex h-full min-h-36 flex-col justify-center rounded-lg border border-border bg-card px-4 py-5 transition-colors hover:border-brand focus-visible:outline-2 focus-visible:outline-brand"><OrganizationIdentity organization={organization} /><ArrowUpRight className="absolute right-2 top-2 size-3 text-muted-foreground" aria-hidden="true" /></a> : <div className="flex h-full min-h-36 flex-col justify-center rounded-lg border border-border bg-card px-4 py-5"><OrganizationIdentity organization={organization} /></div>}
        </li>)}
      </ul>
    </div>
  </section>;
}