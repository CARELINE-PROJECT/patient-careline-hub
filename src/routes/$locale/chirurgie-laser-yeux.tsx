import { createFileRoute, } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ShieldCheck, TriangleAlert } from "lucide-react";
import { useI18n } from "@/i18n";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { specialtyPageCopy, specialtyPageHead } from "@/i18n/specialtyPages";
import { eyeLaserContent, eyeLaserSources, eyeLaserVideos } from "@/content/eyeLaser";
import { PatientVideo } from "@/components/site/PatientVideo";
import { Button } from "@/components/ui/button";
import { ResponsivePhoto } from "@/components/site/ResponsivePhoto";
import { laserPillarFr as P, laserPillarUpdated } from "@/content/laserPillar";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/$locale/chirurgie-laser-yeux")({ staticData: { sitemap: true }, head: ({ params }) => { const h = specialtyPageHead("eye", params.locale); return params.locale !== "fr" ? h : { ...h, scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "MedicalWebPage", name: P.h1, inLanguage: "fr", dateModified: laserPillarUpdated, url: `${siteConfig.url}/fr/chirurgie-laser-yeux`, publisher: { "@type": "Organization", name: "Careline" } }, { "@type": "FAQPage", mainEntity: P.faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })) }] }) }] }; }, component: EyeLaser });

function EyeLaser() {
  const { locale, t } = useI18n();
  const c = specialtyPageCopy(locale);
  const f = eyeLaserContent[locale === "fr" ? "fr" : "en"];
  return <>
    <section className="border-b border-border bg-secondary/40 px-5 py-7 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Button asChild variant="link" className="h-auto px-0"><LocalizedLink to="/specialties"><ArrowLeft aria-hidden="true" />{c.directory}</LocalizedLink></Button>
        <div className="mt-3 grid items-center gap-6 md:grid-cols-[1.25fr_1fr]">
          <div>
            <h1 className="font-display text-3xl leading-tight text-branddeep sm:text-4xl">{locale === "fr" ? P.h1 : c.eyeTitle}</h1>
            {locale === "fr" ? <div className="mt-3 max-w-xl rounded-lg border border-border bg-background p-4"><p className="text-xs font-semibold uppercase text-brand">En bref</p>{P.brief.map((b) => <p key={b} className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>)}</div> : <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">{f.intro}</p>}
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild className="h-auto whitespace-normal py-2 text-start"><LocalizedLink to="/request">{locale === "fr" ? P.cta : t("cta.button")}<ArrowRight aria-hidden="true" /></LocalizedLink></Button>
              <Button asChild variant="outline"><LocalizedLink to="/contact">{t("nav.contact")}</LocalizedLink></Button>
            </div>
          </div>
          <ResponsivePhoto id="femto-lasik-topographie-cornee" priority className="h-44 w-full rounded-lg object-cover md:h-56" />
        </div>
        <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />{locale === "fr" ? P.disclaimer : f.note}</p>
        {locale !== "fr" && locale !== "en" && <p className="mt-2 text-xs text-muted-foreground" lang="en">Medical guide available in English and French.</p>}
      </div>
    </section>
    <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-7 sm:px-8 lg:grid-cols-[13rem_minmax(0,1fr)]" lang={locale === "fr" ? "fr" : "en"} dir="ltr">
      <nav aria-label={locale === "fr" ? "Dans ce guide" : "In this guide"} className="flex flex-wrap gap-2 lg:sticky lg:top-24 lg:flex-col lg:gap-0">
        {[f.sections[0], { id: "techniques", title: f.techniquesTitle }, ...f.sections.slice(1), { id: "videos", title: f.videosTitle }].filter((s) => s !== undefined).map((s) => <a key={s.id} href={`#${s.id}`} className="rounded-md border border-border px-3 py-2 text-sm leading-snug text-branddeep hover:bg-secondary lg:border-0 lg:border-s lg:py-3">{s.title}</a>)}
      </nav>
      <div className="min-w-0">
        {f.sections.map((s, index) => <div key={s.id}>
          <section id={s.id} className="scroll-mt-28 border-b border-border pb-7 pt-1">
            <h2 className="mt-3 font-display text-2xl leading-tight text-branddeep">{s.title}</h2>
            {s.paragraphs.map((p) => <p key={p} className="mt-3 text-sm leading-7 text-muted-foreground">{p}</p>)}
          </section>
          {index === 0 && <section id="techniques" className="scroll-mt-28 border-b border-border py-7">
            <h2 className="font-display text-2xl leading-tight text-branddeep">{f.techniquesTitle}</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">{f.techniques.map((tech) => <article key={tech.title} className="rounded-lg border border-border bg-secondary/40 p-4">
              <h3 className="font-display text-lg text-branddeep">{tech.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tech.body}</p>
              <p className="mt-3 border-t border-border pt-3 text-sm leading-relaxed text-branddeep">{tech.recovery}</p>
            </article>)}</div>
          </section>}
        </div>)}
        {locale === "fr" && <>
          <section id="definition" className="border-b border-border py-7"><h2 className="font-display text-2xl text-branddeep">{P.definition.title}</h2>{P.definition.paragraphs.map((p) => <p key={p} className="mt-3 text-sm leading-7 text-muted-foreground">{p}</p>)}</section>
          <section id="comparatif" className="scroll-mt-28 border-b border-border py-7"><h2 className="font-display text-2xl text-branddeep">{P.comparisonTitle}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{P.comparisonLead}</p>
            <div className="mt-4 overflow-x-auto"><table className="w-full min-w-[36rem] border-collapse text-sm"><thead><tr>{P.comparisonHead.map((h) => <th key={h} scope="col" className="border-b border-border bg-secondary/60 p-3 text-start font-semibold text-branddeep">{h}</th>)}</tr></thead><tbody>{P.comparisonRows.map(([k, ...v]) => <tr key={k}><th scope="row" className="border-b border-border p-3 text-start font-medium text-branddeep">{k}</th>{v.map((x) => <td key={x} className="border-b border-border p-3 text-muted-foreground">{x}</td>)}</tr>)}</tbody></table></div></section>
          {[P.defects, P.cost, P.choose].map((b) => <section key={b.title} className="border-b border-border py-7"><h2 className="font-display text-2xl text-branddeep">{b.title}</h2>{b.paragraphs.map((p) => <p key={p} className="mt-3 text-sm leading-7 text-muted-foreground">{p}</p>)}</section>)}
          <div className="my-7 rounded-lg bg-secondary/60 p-5"><p className="text-sm text-branddeep">{P.disclaimer}</p><Button asChild className="mt-4 h-auto whitespace-normal py-2 text-start"><LocalizedLink to="/request">{P.cta}<ArrowRight aria-hidden="true" /></LocalizedLink></Button></div>
        </>}
        <aside className="my-7 border-s-4 border-destructive bg-destructive/5 p-5">
          <h2 className="flex items-start gap-2 font-display text-xl text-branddeep"><TriangleAlert className="mt-1 size-5 shrink-0 text-destructive" aria-hidden="true" />{f.alertTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{f.alert}</p>
        </aside>
        <section className="border-b border-border pb-7">
          <h2 className="font-display text-2xl text-branddeep">{locale === "fr" ? P.surgeonQuestionsTitle : f.questionsTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 ps-5 text-sm leading-relaxed text-muted-foreground">{(locale === "fr" ? P.surgeonQuestions : f.questions).map((q) => <li key={q}>{q}</li>)}</ul>
        </section>
        <section id="videos" className="scroll-mt-28 py-7">
          <h2 className="font-display text-2xl text-branddeep">{f.videosTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.videosLead}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">{eyeLaserVideos.map((video) => <PatientVideo key={video.id} video={video} play={f.play} external={f.external} privacy={f.privacy} real={f.real} />)}</div>
        </section>
        {locale === "fr" && <><section id="faq" className="scroll-mt-28 border-t border-border py-7"><h2 className="font-display text-2xl text-branddeep">{P.faqTitle}</h2>{P.faq.map((x) => <div key={x.q} className="mt-4"><h3 className="font-display text-lg text-branddeep">{x.q}</h3><p className="mt-1 text-sm leading-7 text-muted-foreground">{x.a}</p></div>)}</section>
          <section className="border-t border-border py-7"><h2 className="font-display text-2xl text-branddeep">{P.upcomingTitle}</h2><ul className="mt-3 flex flex-wrap gap-2">{P.upcoming.map((u) => <li key={u} className="rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground">{u}</li>)}</ul><p className="mt-3 text-xs text-muted-foreground">{P.upcomingNote}</p></section></>}
        <section className="border-t border-border py-6">
          <h2 className="font-display text-lg text-branddeep">{f.sources}</h2>
          <ul className="mt-3 space-y-2 text-xs text-brand">{[...eyeLaserSources, ...(locale === "fr" ? P.extraSources : [])].map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{source.title}</a></li>)}</ul>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{locale === "fr" ? `${P.updatedLabel} · ${P.sourcesDate}` : f.date}</p>
          <Button asChild className="mt-5 h-auto whitespace-normal py-2 text-start"><LocalizedLink to="/request">{locale === "fr" ? P.cta : t("cta.button")}<ArrowRight aria-hidden="true" /></LocalizedLink></Button>
        </section>
      </div>
    </div>
  </>;
}