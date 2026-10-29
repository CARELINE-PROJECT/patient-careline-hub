import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ShieldCheck, TriangleAlert } from "lucide-react";
import { useI18n } from "@/i18n";
import { specialtyPageCopy, specialtyPageHead } from "@/i18n/specialtyPages";
import { eyeLaserContent, eyeLaserSources, eyeLaserVideos } from "@/content/eyeLaser";
import { PatientVideo } from "@/components/site/PatientVideo";
import { Button } from "@/components/ui/button";
import eye from "@/assets/specialties-eye.jpg";

export const Route = createFileRoute("/specialties_/laser-des-yeux")({ staticData: { sitemap: true }, head: () => specialtyPageHead("eye"), component: EyeLaser });

function EyeLaser() {
  const { locale, t } = useI18n();
  const c = specialtyPageCopy(locale);
  const f = eyeLaserContent[locale === "fr" ? "fr" : "en"];
  return <>
    <section className="border-b border-border bg-secondary/40 px-5 py-7 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Button asChild variant="link" className="h-auto px-0"><Link to="/specialties"><ArrowLeft aria-hidden="true" />{c.directory}</Link></Button>
        <div className="mt-3 grid items-center gap-6 md:grid-cols-[1.25fr_1fr]">
          <div>
            <h1 className="font-display text-3xl leading-tight text-branddeep sm:text-4xl">{c.eyeTitle}</h1>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">{f.intro}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild><Link to="/request">{t("cta.button")}<ArrowRight aria-hidden="true" /></Link></Button>
              <Button asChild variant="outline"><Link to="/contact">{t("nav.contact")}</Link></Button>
            </div>
          </div>
          <img src={eye} alt={c.eyeTitle} width={1408} height={896} className="h-44 w-full rounded-lg object-cover md:h-56" />
        </div>
        <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />{f.note}</p>
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
        <aside className="my-7 border-s-4 border-destructive bg-destructive/5 p-5">
          <h2 className="flex items-start gap-2 font-display text-xl text-branddeep"><TriangleAlert className="mt-1 size-5 shrink-0 text-destructive" aria-hidden="true" />{f.alertTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{f.alert}</p>
        </aside>
        <section className="border-b border-border pb-7">
          <h2 className="font-display text-2xl text-branddeep">{f.questionsTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 ps-5 text-sm leading-relaxed text-muted-foreground">{f.questions.map((q) => <li key={q}>{q}</li>)}</ul>
        </section>
        <section id="videos" className="scroll-mt-28 py-7">
          <h2 className="font-display text-2xl text-branddeep">{f.videosTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.videosLead}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">{eyeLaserVideos.map((video) => <PatientVideo key={video.id} video={video} play={f.play} external={f.external} privacy={f.privacy} real={f.real} />)}</div>
        </section>
        <section className="border-t border-border py-6">
          <h2 className="font-display text-lg text-branddeep">{f.sources}</h2>
          <ul className="mt-3 space-y-2 text-xs text-brand">{eyeLaserSources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{source.title}</a></li>)}</ul>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{f.date}</p>
          <Button asChild className="mt-5"><Link to="/request">{t("cta.button")}<ArrowRight aria-hidden="true" /></Link></Button>
        </section>
      </div>
    </div>
  </>;
}