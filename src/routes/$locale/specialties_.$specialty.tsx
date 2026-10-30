import { useState } from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, Check, ExternalLink, Play } from "lucide-react";
import { useI18n } from "@/i18n";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { ResponsivePhoto } from "@/components/site/ResponsivePhoto";
import { Button } from "@/components/ui/button";
import { specialtyLabels } from "@/i18n/specialties";
import { specialtyImage, directorySpecialties } from "@/config/specialtyDirectory";
import { specialtyDetailCopy, specialtyDetailHead, specialtyFromSlug, specialtyGuides, specialtyPath, specialtyPhoto } from "@/content/specialtyDetail";

export const Route = createFileRoute("/$locale/specialties_/$specialty")({
  staticData: { sitemap: true },
  beforeLoad: ({ params }) => { if (!specialtyFromSlug(params.specialty)) throw notFound(); },
  head: ({ params }) => specialtyDetailHead(params.specialty, params.locale),
  component: SpecialtyPage,
});

function SpecialtyPage() {
  const { specialty } = Route.useParams();
  const { locale } = useI18n();
  const id = specialtyFromSlug(specialty)!;
  const c = specialtyDetailCopy(locale);
  const g = specialtyGuides[id];
  const name = specialtyLabels[locale][id];
  const [playing, setPlaying] = useState(false);
  const related = directorySpecialties.filter((x) => x !== id && specialtyImage(x) === specialtyImage(id)).slice(0, 4);
  const list = (items: string[]) => <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">{items.map((i) => <li key={i} className="flex gap-2.5"><Check className="mt-1 size-3.5 shrink-0 text-brand" aria-hidden="true" />{i}</li>)}</ul>;

  return <>
    <section className="border-b border-border bg-secondary/40 px-5 py-8 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-6 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{c.eyebrow}</p>
          <h1 className="mt-2 font-display text-3xl leading-tight text-branddeep sm:text-4xl">{name}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{locale === "fr" ? g.fr : g.en}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg"><LocalizedLink to="/request"><CalendarCheck aria-hidden="true" />{c.cta}</LocalizedLink></Button>
            <Button asChild size="lg" variant="outline"><LocalizedLink to="/specialties">{c.all}</LocalizedLink></Button>
          </div>
        </div>
        <ResponsivePhoto id={specialtyPhoto(id)} priority className="aspect-square w-full rounded-lg object-cover md:max-h-80" />
      </div>
    </section>
    <section className="px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        <article className="rounded-lg border border-border bg-card p-6"><h2 className="font-display text-xl text-branddeep">{c.when}</h2>{list(c.whenItems)}</article>
        <article className="rounded-lg border border-border bg-card p-6"><h2 className="font-display text-xl text-branddeep">{c.prepare}</h2>{list(c.prepareItems)}</article>
        <article className="rounded-lg border border-border bg-card p-6"><h2 className="font-display text-xl text-branddeep">{c.careline}</h2>{list(c.carelineItems)}</article>
      </div>
      <div className="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-2">
        {g.video && <article className="overflow-hidden rounded-lg border border-border bg-card">
          <div className="aspect-video bg-secondary">{playing ? <iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${g.video.id}?autoplay=1`} title={g.video.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen /> :
            <div className="flex h-full flex-col items-center justify-center gap-3 p-4 text-center"><Play className="size-8 text-brand" aria-hidden="true" /><Button onClick={() => setPlaying(true)}><Play aria-hidden="true" />{c.play}</Button><p className="max-w-sm text-xs text-muted-foreground">{c.privacy}</p></div>}</div>
          <div className="p-4"><h2 className="text-xs font-semibold uppercase tracking-wider text-brand">{c.video}</h2><p className="mt-1 font-display text-lg text-branddeep">{g.video.title}</p><p className="text-xs text-muted-foreground">{g.video.publisher}</p>
            <a className="mt-2 inline-flex items-center gap-1 text-sm text-brand hover:underline" href={`https://www.youtube.com/watch?v=${g.video.id}`} target="_blank" rel="noopener noreferrer">{c.external}<ExternalLink className="size-3.5" aria-hidden="true" /></a></div>
        </article>}
        <article className="rounded-lg border border-border bg-card p-6">
          <h2 className="font-display text-xl text-branddeep">{c.source}</h2>
          <a className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline" href={g.source.url} target="_blank" rel="noopener noreferrer">{g.source.title}<ExternalLink className="size-3.5" aria-hidden="true" /></a>
          <p className="mt-2 text-xs text-muted-foreground">{c.sourceNote}</p>
          <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">{c.note}</p>
        </article>
      </div>
      {related.length > 0 && <div className="mx-auto mt-10 max-w-6xl"><h2 className="font-display text-2xl text-branddeep">{c.related}</h2>
        <ul className="mt-4 flex flex-wrap gap-2">{related.map((r) => <li key={r}><LocalizedLink to={specialtyPath(r)} className="inline-block rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm text-brand hover:bg-secondary">{specialtyLabels[locale][r]}</LocalizedLink></li>)}</ul></div>}
      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-start gap-4 rounded-lg bg-branddeep p-7 text-primary-foreground sm:flex-row sm:items-center sm:justify-between">
        <div><h2 className="font-display text-2xl">{c.ctaTitle}</h2><p className="mt-1 text-sm text-primary-foreground/85">{c.ctaText}</p></div>
        <Button asChild size="lg" className="bg-aqua text-branddeep hover:bg-aqua/90"><LocalizedLink to="/request">{c.cta}<ArrowRight aria-hidden="true" /></LocalizedLink></Button>
      </div>
    </section>
  </>;
}
