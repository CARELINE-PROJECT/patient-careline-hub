import { useNavigate } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Search, X } from "lucide-react";
import { useI18n } from "@/i18n";
import { startupCopy, startupCountry } from "@/i18n/startups";
import { visibleStartups, startupLogos, startupTaxonomy, matchesStartup, type StartupFilters } from "@/config/startups";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Flag } from "./Flag";
import { LocalizedLink } from "./LocalizedLink";
import { StartupsBanner } from "./StartupsBanner";
import { Section } from "./primitives";

export function StartupsPage({ filters, descriptions }: { filters: StartupFilters; descriptions: Record<string, string> }) {
  const { locale } = useI18n();
  const copy = startupCopy(locale);
  const c = copy.ui;
  const navigate = useNavigate();
  const items = visibleStartups();
  const countries = [...new Set(items.map(s => s.country.code))].sort((a, b) => {
    const first = startupCountry(a, locale), second = startupCountry(b, locale);
    return first < second ? -1 : first > second ? 1 : 0;
  });
  const fields = new Set(items.map(s => s.domain));
  const count = items.filter(s => matchesStartup(s, filters)).length;
  const update = (changes: StartupFilters) => {
    const next = { ...filters, ...changes };
    const search = Object.fromEntries(Object.entries(next).filter(([, value]) => value));
    void navigate({ to: locale === "fr" ? "/$locale/start-up" : "/$locale/startups", params: { locale }, search, replace: true, resetScroll: false });
  };
  const label = (type: "domains" | "continents", key: string) => copy[type][key] ?? startupTaxonomy[type].find(d => d.key === key)?.[locale === "fr" ? "fr" : "en"] ?? key;

  return <article>
    <Section className="py-8 md:py-10">
      <h1 className="max-w-4xl font-display text-3xl leading-tight text-branddeep sm:text-4xl">{c.title}</h1>
      <p className="mt-5 max-w-4xl leading-relaxed text-muted-foreground">{c.intro}</p>
      <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
        {[{ value: items.length, text: c.startups }, { value: countries.length, text: c.countries }, { value: fields.size, text: c.domains }].map(s => <div key={s.text} className="border-s-2 border-brand ps-4"><dd className="font-display text-3xl text-branddeep">{s.value}</dd><dt className="text-sm text-muted-foreground">{s.text}</dt></div>)}
      </dl>
    </Section>
    <StartupsBanner heading={false} />
    <Section className="py-8 md:py-10">
      <div className="grid gap-4 border-b border-border pb-6 sm:grid-cols-2 lg:grid-cols-4">
        <label className="grid gap-2 text-sm font-medium text-branddeep">{c.search}<span className="relative"><Search className="absolute start-3 top-3 size-4 text-muted-foreground" aria-hidden="true" /><Input type="search" value={filters.q ?? ""} onChange={e => update({ q: e.target.value })} className="h-10 ps-9" placeholder={c.search} /></span></label>
        {([{ key: "continent", title: c.continent, options: startupTaxonomy.continents.map(d => ({ value: d.key, text: label("continents", d.key) })) }, { key: "pays", title: c.country, options: countries.map(code => ({ value: code, text: startupCountry(code, locale) })) }, { key: "domaine", title: c.domain, options: startupTaxonomy.domains.map(d => ({ value: d.key, text: label("domains", d.key) })) }] as const).map(f => <label key={f.key} className="grid gap-2 text-sm font-medium text-branddeep">{f.title}<select className="h-10 min-w-0 w-full rounded-md border border-input bg-background px-3 text-sm font-normal text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={filters[f.key] ?? ""} onChange={e => update({ [f.key]: e.target.value })}><option value="">{c.all}</option>{f.options.map(o => <option key={o.value} value={o.value}>{o.text}</option>)}</select></label>)}
      </div>
      <div className="my-5 flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-muted-foreground" aria-live="polite">{count} {c.results}</p>{Object.values(filters).some(Boolean) && <Button variant="ghost" size="sm" onClick={() => update({ q: "", pays: "", continent: "", domaine: "" })}><X />{c.reset}</Button>}</div>
      {count === 0 && <p className="py-8 text-muted-foreground">{c.empty}</p>}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map(s => <article key={s.slug} id={s.slug} data-startup={s.slug} hidden={!matchesStartup(s, filters)} className="scroll-mt-28 rounded-lg border border-border bg-card p-5">
          <div className="flex min-h-14 items-center gap-4">
            {startupLogos[s.slug] ? <img src={startupLogos[s.slug]?.src} alt={s.name} width={56} height={56} loading="lazy" className="size-14 shrink-0 object-contain" /> : <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-brand font-display text-lg text-primary-foreground" aria-hidden="true">{s.name.split(/\s+/).map(n => n[0]).join("").slice(0, 2)}</span>}
            <div className="min-w-0"><h2 className="break-words font-display text-lg text-branddeep">{s.name}</h2><p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground"><Flag code={s.country.code} className="h-4 w-6 shrink-0" />{startupCountry(s.country.code, locale)}</p></div>
          </div>
          <p className="mt-4 text-xs font-medium text-brand">{label("domains", s.domain)}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{descriptions[s.slug]}</p>
          <Button asChild variant="link" className="mt-3 h-auto max-w-full whitespace-normal px-0 text-start"><a href={s.website} target="_blank" rel="noopener noreferrer nofollow">{c.official}<ArrowUpRight aria-hidden="true" /></a></Button>
        </article>)}
      </div>
      <div className="mt-9 border-t border-border pt-6"><p className="max-w-4xl text-xs leading-relaxed text-muted-foreground">{c.legal} <a href="mailto:contact@careline.doctor" className="break-all text-brand underline">contact@careline.doctor</a>.</p><Button asChild variant="outline" className="mt-5 h-auto min-h-10 whitespace-normal"><a href="mailto:contact@careline.doctor?subject=Proposition%20de%20start-up"><Mail />{c.propose}</a></Button></div>
    </Section>
    <Section tone="muted"><h2 className="font-display text-2xl text-branddeep">{c.appointment}</h2><Button asChild className="mt-5 h-auto min-h-10 whitespace-normal"><LocalizedLink to="/request">{c.request}</LocalizedLink></Button></Section>
  </article>;
}