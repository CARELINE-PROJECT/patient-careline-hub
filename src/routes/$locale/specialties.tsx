import { useState } from "react";
import { createFileRoute, } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { useI18n } from "@/i18n";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { specialtyLabels, specialtyUi } from "@/i18n/specialties";
import { specialtyPageCopy, specialtyPageHead } from "@/i18n/specialtyPages";
import { filterSpecialties, specialtyImage } from "@/config/specialtyDirectory";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResponsivePhoto } from "@/components/site/ResponsivePhoto";

export const Route = createFileRoute("/$locale/specialties")({ staticData: { sitemap: true }, head: ({ params }) => specialtyPageHead("directory", params.locale), component: Specialties });

function Specialties() {
  const { locale, t } = useI18n();
  const c = specialtyPageCopy(locale);
  const [query, setQuery] = useState("");
  const labels = specialtyLabels[locale];
  const matches = filterSpecialties(labels, query);
  return <>
    <section className="border-b border-border bg-secondary/40 px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-3xl leading-tight text-branddeep sm:text-4xl">{c.title}</h1>
        <div className="mt-5 grid gap-5 overflow-hidden rounded-lg border border-border bg-card md:grid-cols-2">
          <ResponsivePhoto id="chirurgie-laser-yeux-ophtalmologiste" priority className="h-44 w-full object-cover md:h-56" />
          <div className="flex flex-col justify-center p-5 md:pe-8">
            <h2 className="font-display text-2xl text-branddeep">{c.eyeTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.lead}</p>
            <Button asChild className="mt-4 w-fit"><LocalizedLink to="/chirurgie-laser-yeux">{c.guide}<ArrowRight aria-hidden="true" /></LocalizedLink></Button>
          </div>
        </div>
      </div>
    </section>
    <section className="px-5 py-7 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative max-w-xl">
          <Search className="pointer-events-none absolute start-3 top-3 size-4 text-muted-foreground" aria-hidden="true" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={specialtyUi[locale].placeholder} aria-label={specialtyUi[locale].placeholder} className="h-10 ps-10" />
        </div>
        <p role="status" className="mt-3 text-sm text-muted-foreground">{specialtyUi[locale].results.replace("{count}", String(matches.length))}</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {matches.map((id) => <article key={id} className="overflow-hidden rounded-lg border border-border bg-card">
            <ResponsivePhoto id={specialtyImage(id)} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="h-28 w-full object-cover object-center" />
            <div className="p-4">
              <h2 className="min-h-12 font-display text-lg leading-snug text-branddeep">{labels[id]}</h2>
              <Button asChild variant="link" className="mt-1 h-auto justify-start whitespace-normal px-0 text-start">
                {id === "ophthalmology" ? <LocalizedLink to="/chirurgie-laser-yeux">{c.guide}<ArrowRight aria-hidden="true" /></LocalizedLink> : <LocalizedLink to="/request">{t("cta.button")}<ArrowRight aria-hidden="true" /></LocalizedLink>}
              </Button>
            </div>
          </article>)}
        </div>
        {!matches.length && <p className="py-8 text-muted-foreground">{specialtyUi[locale].none}</p>}
      </div>
    </section>
  </>;
}