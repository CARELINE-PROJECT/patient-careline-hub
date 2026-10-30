import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { useI18n } from "@/i18n";
import { specialtyLabels, specialtyUi } from "@/i18n/specialties";
import { specialtyPageCopy, specialtyPageHead } from "@/i18n/specialtyPages";
import { filterSpecialties, specialtyImage } from "@/config/specialtyDirectory";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import eye from "@/assets/specialties-eye.jpg";

export const Route = createFileRoute("/specialties")({ staticData: { sitemap: true }, head: () => specialtyPageHead("directory"), component: Specialties });

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
          <img src={eye} width={1408} height={896} alt={labels.ophthalmology} loading="lazy" className="h-44 w-full object-cover md:h-56" />
          <div className="flex flex-col justify-center p-5 md:pe-8">
            <h2 className="font-display text-2xl text-branddeep">{c.eyeTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.lead}</p>
            <Button asChild className="mt-4 w-fit"><Link to="/specialties/laser-des-yeux">{c.guide}<ArrowRight aria-hidden="true" /></Link></Button>
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
            <img src={specialtyImage(id)} alt="" width={1024} height={768} loading="lazy" className="h-28 w-full object-cover object-center" />
            <div className="p-4">
              <h2 className="min-h-12 font-display text-lg leading-snug text-branddeep">{labels[id]}</h2>
              <Button asChild variant="link" className="mt-1 h-auto justify-start whitespace-normal px-0 text-start">
                {id === "ophthalmology" ? <Link to="/specialties/laser-des-yeux">{c.guide}<ArrowRight aria-hidden="true" /></Link> : <Link to="/request">{t("cta.button")}<ArrowRight aria-hidden="true" /></Link>}
              </Button>
            </div>
          </article>)}
        </div>
        {!matches.length && <p className="py-8 text-muted-foreground">{specialtyUi[locale].none}</p>}
      </div>
    </section>
  </>;
}