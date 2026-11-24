import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { startupCopy, startupPath } from "@/i18n/startups";
import { startupBannerItems, startupLogos } from "@/config/startups";
import { LocalizedLink } from "./LocalizedLink";
import { Flag } from "./Flag";
import { startupCountry } from "@/i18n/startups";
import "./StartupsBanner.css";

export function StartupsBanner({ heading = true }: { heading?: boolean }) {
  const { locale } = useI18n();
  const c = startupCopy(locale).ui;
  const items = startupBannerItems().slice(0, 42);
  if (!items.length) return null;
  return <section className="border-y border-border bg-background py-7" aria-label={c.banner}>
    {heading && <div className="mx-auto mb-6 flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 sm:px-8">
      <h2 className="font-display text-xl text-branddeep">{c.banner}</h2>
      <LocalizedLink to={startupPath(locale)} className="inline-flex items-center gap-2 text-sm text-brand hover:underline">{c.explore}<ArrowRight className="size-4" aria-hidden="true" /></LocalizedLink>
    </div>}
    <div className="startup-marquee" dir="ltr">
      <div className="startup-marquee-track">
        {[false, true].map(duplicate => <div key={String(duplicate)} className="startup-marquee-group" aria-hidden={duplicate || undefined}>
          {items.map(s => <LocalizedLink key={s.slug} to={startupPath(locale)} hash={s.slug} tabIndex={duplicate ? -1 : 0} className="group flex w-44 shrink-0 flex-col items-center justify-center gap-1.5 text-center" title={s.name}>
            <span className="flex h-10 w-full items-center justify-center">{startupLogos[s.slug] ? <img src={startupLogos[s.slug]?.src} alt="" loading="lazy" className="max-h-10 max-w-full object-contain" /> : <span className="font-display text-lg text-branddeep">{s.name.slice(0, 2)}</span>}</span>
            <span className="flex max-w-full items-center gap-1.5 text-xs font-medium text-branddeep"><Flag code={s.country.code} className="h-3.5 w-5 shrink-0" /><span className="truncate">{s.name}</span></span>
            <span className="sr-only">{startupCountry(s.country.code, locale)}</span>
          </LocalizedLink>)}
        </div>)}
      </div>
    </div>
  </section>;
}