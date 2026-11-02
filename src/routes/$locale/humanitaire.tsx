import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Stethoscope, Sprout, ShieldPlus } from "lucide-react";
import { useI18n } from "@/i18n";
import { staticRouteHead } from "@/i18n/head";
import { humanitarianCopy, humanitarianLabels } from "@/i18n/humanitarian";
import { ResponsivePhoto } from "@/components/site/ResponsivePhoto";
import { OrganizationDirectory } from "@/components/site/OrganizationDirectory";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/primitives";

export const Route = createFileRoute("/$locale/humanitaire")({
  staticData: { sitemap: true },
  head: ({ params }) => staticRouteHead("humanitarian", "/humanitaire", params.locale),
  component: Humanitarian,
});

function Humanitarian() {
  const { locale } = useI18n();
  const c = humanitarianCopy(locale);
  const priorities = [
    { Icon: Stethoscope, title: c.consultation, lead: c.consultationLead },
    { Icon: ShieldPlus, title: c.prevention, lead: c.preventionLead },
    { Icon: Sprout, title: c.nutrition, lead: c.nutritionLead },
  ];
  return <>
    <section className="relative isolate overflow-hidden bg-branddeep px-5 py-12 sm:px-8 md:py-16">
      <div className="absolute inset-0 -z-20"><ResponsivePhoto id="humanitaire-sante-communautaire-madagascar" priority sizes="100vw" decorative className="h-full w-full object-cover object-[65%_50%]" /></div>
      <div className="absolute inset-0 -z-10 bg-branddeep/70" aria-hidden="true" />
      <div className="mx-auto max-w-6xl">
        <p className="flex items-center gap-2 text-sm font-medium text-aqua"><HeartHandshake className="size-5" aria-hidden="true" />Careline · {humanitarianLabels[locale]}</p>
        <h1 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-primary-foreground sm:text-5xl">{c.title}</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground">{c.introduction}</p>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-primary-foreground/90">{c.lead}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild className="h-auto min-h-11 whitespace-normal bg-aqua px-5 py-3 text-branddeep hover:bg-aqua/90"><LocalizedLink to="/contact">{c.action}<ArrowRight aria-hidden="true" /></LocalizedLink></Button>
          <Button asChild variant="outline" className="h-auto min-h-11 whitespace-normal bg-background px-5 py-3"><a href="#organizations">{c.directory}</a></Button>
        </div>
      </div>
    </section>
    <Section>
      <h2 className="max-w-3xl font-display text-3xl leading-tight text-branddeep">{c.priorities}</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2"><p className="leading-relaxed text-muted-foreground">{c.presentation}</p><p className="leading-relaxed text-muted-foreground">{c.partnerships}</p></div>
      <div className="mt-9 grid gap-7 md:grid-cols-3">{priorities.map(({ Icon, title, lead }) => <article key={title} className="border-t border-border pt-5"><Icon className="size-7 text-brand" strokeWidth={1.5} aria-hidden="true" /><h3 className="mt-4 font-display text-xl text-branddeep">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{lead}</p></article>)}</div>
    </Section>
    <Section tone="muted">
      <div className="grid gap-5 md:grid-cols-2"><ResponsivePhoto id="humanitaire-equipe-solidaire" className="aspect-[8/5] w-full rounded-lg object-cover" /><ResponsivePhoto id="humanitaire-nutrition-prevention" className="aspect-[8/5] w-full rounded-lg object-cover" /></div>
      <h2 className="mt-8 max-w-3xl font-display text-3xl leading-tight text-branddeep">{c.technology}</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{c.technologyLead}</p>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{c.illustration}</p>
    </Section>
    <OrganizationDirectory />
    <Section tone="deep"><h2 className="max-w-3xl font-display text-3xl leading-tight text-primary-foreground">{c.contact}</h2><p className="mt-4 max-w-2xl leading-relaxed text-primary-foreground/85">{c.contactLead}</p><Button asChild className="mt-6 h-auto min-h-11 whitespace-normal bg-aqua px-5 py-3 text-branddeep hover:bg-aqua/90"><LocalizedLink to="/contact">{c.action}<ArrowRight aria-hidden="true" /></LocalizedLink></Button></Section>
  </>;
}