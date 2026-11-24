import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { startupCopy, startupPath } from "@/i18n/startups";
import { startupBannerItems, startupLogos } from "@/config/startups";
import { LocalizedLink } from "./LocalizedLink";
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
          {items.map(s => <LocalizedLink key={s.slug} to={startupPath(locale)} hash={s.slug} tabIndex={duplicate ? -1 : 0} className="group flex h-12 w-36 shrink-0 items-center justify-center text-center" title={s.name}>
            {startupLogos[s.slug] ? <img src={startupLogos[s.slug]?.src} alt={s.name} loading="lazy" className="max-h-8 max-w-full object-contain grayscale transition-[filter] group-hover:grayscale-0 sm:max-h-10" /> : <span className="font-display text-lg text-branddeep">{s.name}</span>}
          </LocalizedLink>)}
        </div>)}
      </div>
    </div>
  </section>;
}