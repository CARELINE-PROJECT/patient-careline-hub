import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, Check, CheckCircle2, ClipboardList, Cpu, Globe2, HeartHandshake, Scale, ShieldCheck, Users } from "lucide-react";
import { useI18n } from "@/i18n";
import { staticRouteHead } from "@/i18n/head";
import { Section, SectionHeading } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";
import coordinator from "@/assets/team-coordinator.jpg";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { PartnerRegistration } from "@/components/site/PartnerRegistration";
import { administrativeServicesCopy } from "@/i18n/administrativeServices";

export const Route = createFileRoute("/services")({
  staticData: { sitemap: true },
  head: () => {
    const base = staticRouteHead("services", "/services");
    return {
      ...base,
      links: [
        ...base.links,
        // LCP candidate: the full-screen hero photo is preloaded.
        { rel: "preload", as: "image", href: coordinator, fetchpriority: "high" },
      ],
    };
  },
  component: Services,
});

function Services() {
  const { t, locale } = useI18n();
  const c = administrativeServicesCopy(locale);
  const serviceIcons = [CalendarCheck, Cpu, ShieldCheck, Users, HeartHandshake];
  const independenceIcons = [Scale, Globe2, HeartHandshake, ClipboardList];

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border bg-branddeep px-5 py-10 sm:px-8 md:py-14">
        <img src={coordinator} alt={t("media.coordinatorPhone")} className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_28%]" />
        <div className="absolute inset-0 -z-10 bg-branddeep/90" aria-hidden="true" />
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-sm font-medium text-aqua">Careline · {c.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-primary-foreground sm:text-5xl">{c.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">{c.lead}</p>
          <Button asChild size="lg" className="mt-6 h-auto min-h-11 max-w-full whitespace-normal bg-aqua px-5 py-3 text-branddeep hover:bg-aqua/90">
            <a href="#partner-contact">{c.cta}<ArrowRight aria-hidden="true" /></a>
          </Button>
          <p className="mt-4 flex max-w-2xl items-start gap-2 text-sm leading-relaxed text-primary-foreground/90"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-aqua" aria-hidden="true" />{c.free}</p>
        </div>
      </section>

      <Section className="pb-6 md:pb-8">
        <div className="flex max-w-4xl items-start gap-4">
          <CalendarCheck className="mt-1 size-6 shrink-0 text-brand" aria-hidden="true" />
          <div>
            <h2 className="font-display text-2xl leading-tight text-branddeep">{c.noShows}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{c.noShowsLead}</p>
          </div>
        </div>
      </Section>

      <Section className="pt-6 md:pt-8">
        <SectionHeading title={c.servicesTitle} />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {c.cards.map((card, i) => {
            const Icon = serviceIcons[i] ?? ClipboardList;
            return (
              <article key={card.title} className="rounded-lg border border-border bg-card p-6">
                <Icon className="size-6 text-brand" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl leading-tight text-branddeep">{card.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {card.items.map((item) => <li key={item} className="flex items-start gap-2.5"><Check className="mt-1 size-3.5 shrink-0 text-brand" aria-hidden="true" /><span>{item}</span></li>)}
                </ul>
              </article>
            );
          })}
        </div>
      </Section>

      <Section tone="deep">
        <SectionHeading title={c.independenceTitle} invert />
        <ul className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {c.independence.map((point, i) => {
            const Icon = independenceIcons[i] ?? ShieldCheck;
            return <li key={point} className="border-t border-primary-foreground/25 pt-5"><Icon className="size-6 text-aqua" strokeWidth={1.5} aria-hidden="true" /><p className="mt-4 text-sm leading-relaxed text-primary-foreground/90">{point}</p></li>;
          })}
        </ul>
      </Section>

      <Section>
        <SectionHeading title={c.stepsTitle} />
        <ol className="mt-8 grid gap-0 lg:grid-cols-8">
          {c.steps.map((step, i) => (
            <li key={step} className="relative flex gap-4 border-l border-border pb-7 pl-5 last:border-transparent lg:block lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pr-3">
              <span className="relative -ml-9 flex size-7 shrink-0 items-center justify-center rounded-full border border-brand bg-background text-xs font-semibold text-brand lg:-mt-3.5 lg:ml-0">{i + 1}</span>
              <p className="pt-1 text-sm leading-relaxed text-muted-foreground lg:mt-4 lg:pt-0">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="partner-contact" tone="muted" className="scroll-mt-24">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionHeading title={c.formTitle} lead={c.formLead} />
            <div className="mt-5"><PartnerRegistration /></div>
          </div>
          <PartnerForm />
        </div>
      </Section>
    </>
  );
}
