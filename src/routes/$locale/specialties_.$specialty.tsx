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
  const [playing, setPlaying] = useState(false);
  const id = specialtyFromSlug(specialty);
  if (!id) throw notFound();
  const c = specialtyDetailCopy(locale);
  const g = specialtyGuides[id];
  const name = specialtyLabels[locale][id];
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
      {locale === "fr" && <div className="mx-auto mb-9 max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div className="space-y-7">
            <div><h2 className="font-display text-2xl text-branddeep">Comprendre la spécialité et ses indications</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Les motifs fréquemment rencontrés comprennent : {g.topics}. Cette liste donne des repères et ne permet pas de déduire un diagnostic. Le professionnel évalue votre situation, vos antécédents et le retentissement sur votre vie quotidienne avant de proposer un parcours adapté.</p></div>
            <div><h2 className="font-display text-2xl text-branddeep">Examens et déroulement de l'évaluation</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Selon la question clinique, l'évaluation peut comprendre : {g.exams}. Tous les examens ne sont pas systématiques. Le praticien vous explique leur intérêt, les alternatives, les éventuelles précautions et la façon dont les résultats orienteront la suite.</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Transmettez vos informations médicales directement au professionnel, jamais à Careline. Demandez au cabinet si une prescription ou des consignes particulières sont nécessaires. Ne jeûnez pas et ne modifiez pas vos médicaments sans instruction de l'équipe soignante.</p></div>
            <div><h2 className="font-display text-2xl text-branddeep">Soins possibles et suivi</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Les prises en charge possibles incluent : {g.care}. Le choix dépend du diagnostic, de vos objectifs et des bénéfices et risques discutés avec le professionnel. La présence d'un acte dans ce guide ne signifie pas qu'il est indiqué pour vous ni disponible auprès d'un partenaire Careline.</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">À la fin du rendez-vous, vérifiez que vous avez compris le plan proposé, les contrôles à prévoir et les signes qui nécessitent de recontacter l'équipe. Si vous consultez loin de votre domicile, discutez de la continuité des soins et de la transmission des comptes rendus à votre médecin habituel.</p></div>
          </div>
          <aside className="border-l border-border pl-6">
            <h2 className="font-display text-xl text-branddeep">Questions à poser au professionnel</h2>
            {list(["Quelles explications envisagez-vous et quels examens sont réellement utiles ?", "Quelles sont les alternatives, les limites et les risques de la prise en charge ?", "Quelles consignes suivre avant et après un examen ou un geste ?", "Quand prévoir le prochain contrôle et qui contacter en cas d'aggravation ?"])}
            <h2 className="mt-7 font-display text-xl text-branddeep">Un parcours adapté à votre situation</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Les qualifications, les actes autorisés, le besoin d'une prescription et les règles de remboursement varient selon les pays et les professions. Confirmez ces points avec le cabinet et votre organisme de couverture avant le rendez-vous.</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Pour les urgences, la réanimation, les expertises, les analyses et les disciplines de santé publique, l'accès se fait souvent par un hôpital, un prescripteur, un employeur ou une autorité compétente, plutôt que par un rendez-vous direct.</p>
            {id === "ophthalmology" && <Button asChild variant="outline" className="mt-5 h-auto whitespace-normal"><LocalizedLink to="/chirurgie-laser-yeux">Guide complet de la chirurgie laser des yeux<ArrowRight aria-hidden="true" /></LocalizedLink></Button>}
          </aside>
        </div>
      </div>}
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
