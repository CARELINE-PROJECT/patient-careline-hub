import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, ShieldCheck } from "lucide-react";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { Button } from "@/components/ui/button";
import { laserGuideBySlug, laserGuides } from "@/content/laserGuides";
import { laserPillarFr as P } from "@/content/laserPillar";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/$locale/chirurgie-laser-yeux_/$guide")({
  staticData: { sitemap: true },
  beforeLoad: ({ params }) => { if (!laserGuideBySlug(params.guide)) throw notFound(); },
  head: ({ params }) => {
    const g = laserGuideBySlug(params.guide);
    if (!g) return { meta: [{ title: "Guide indisponible — Careline" }, { name: "robots", content: "noindex" }] };
    // Guides are written in French only: every locale points to the French canonical.
    const url = `${siteConfig.url}/fr/chirurgie-laser-yeux/${g.slug}`;
    return {
      meta: [
        { title: `${g.label} — Careline` },
        { name: "description", content: g.description },
        { property: "og:title", content: g.title },
        { property: "og:description", content: g.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@graph": [
        { "@type": "MedicalWebPage", name: g.title, description: g.description, inLanguage: "fr", url, publisher: { "@type": "Organization", name: "Careline" } },
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Chirurgie laser des yeux", item: `${siteConfig.url}/fr/chirurgie-laser-yeux` },
          { "@type": "ListItem", position: 2, name: g.label, item: url },
        ] },
      ] }) }],
    };
  },
  component: LaserGuidePage,
});

function LaserGuidePage() {
  const { guide } = Route.useParams();
  const g = laserGuideBySlug(guide);
  if (!g) throw notFound();
  const others = laserGuides.filter((x) => x.slug !== g.slug);
  return <div lang="fr" dir="ltr">
    <section className="border-b border-border bg-secondary/40 px-5 py-7 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Button asChild variant="link" className="h-auto px-0"><LocalizedLink to="/chirurgie-laser-yeux"><ArrowLeft aria-hidden="true" />Chirurgie laser des yeux</LocalizedLink></Button>
        <h1 className="mt-3 font-display text-3xl leading-tight text-branddeep sm:text-4xl">{g.title}</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">{g.intro}</p>
        <Button asChild className="mt-4 h-auto whitespace-normal py-2 text-start"><LocalizedLink to="/request">{P.cta}<ArrowRight aria-hidden="true" /></LocalizedLink></Button>
      </div>
    </section>
    <div className="mx-auto grid max-w-6xl gap-8 px-5 py-7 sm:px-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
      <article className="min-w-0">
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="text-xs font-semibold uppercase text-brand">À retenir</p>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">{g.keyPoints.map((k) => <li key={k} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />{k}</li>)}</ul>
        </div>
        {g.sections.map((sec) => <section key={sec.title} className="border-b border-border py-6">
          <h2 className="font-display text-2xl leading-tight text-branddeep">{sec.title}</h2>
          {sec.paragraphs.map((p) => <p key={p} className="mt-3 text-sm leading-7 text-muted-foreground">{p}</p>)}
        </section>)}
        <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />{P.disclaimer}</p>
        <div className="mt-6 rounded-lg bg-secondary/60 p-5">
          <Button asChild className="h-auto whitespace-normal py-2 text-start"><LocalizedLink to="/request">{P.cta}<ArrowRight aria-hidden="true" /></LocalizedLink></Button>
        </div>
      </article>
      <nav aria-label="Autres guides" className="lg:sticky lg:top-24 lg:self-start">
        <p className="text-sm font-semibold text-branddeep">Autres guides</p>
        <ul className="mt-2 space-y-1">{others.map((o) => <li key={o.slug}><LocalizedLink to={`/chirurgie-laser-yeux/${o.slug}`} className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-secondary hover:text-branddeep">{o.label}</LocalizedLink></li>)}</ul>
      </nav>
    </div>
  </div>;
}
