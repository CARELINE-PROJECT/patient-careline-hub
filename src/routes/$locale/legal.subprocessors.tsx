import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { staticRouteHead } from "@/i18n/head";
import { transparencyCopy } from "@/i18n/transparency";
import { technicalServices } from "@/content/transparency";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/site/primitives";
import { LocalizedLink } from "@/components/site/LocalizedLink";

export const Route = createFileRoute("/$locale/legal/subprocessors")({
  staticData: { sitemap: true },
  head: ({ params }) => staticRouteHead("subprocessors", "/legal/subprocessors", params.locale),
  component: ProviderRegister,
});

function ProviderRegister() {
  const { locale } = useI18n();
  const c = transparencyCopy(locale);
  return <article lang={c.language}>
    <Section>
      <h1 className="max-w-4xl font-display text-3xl text-branddeep sm:text-4xl">{c.providers}</h1>
      <h2 className="mt-8 font-display text-xl text-branddeep">{c.scope}</h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{c.scopeBody}</p>
      <div className="mt-8 divide-y divide-border">{technicalServices.map((service) => {
        const details = c.services[service.id];
        if (!details) return null;
        return <section key={service.id} className="py-6 first:pt-0">
          <h2 className="font-display text-2xl text-branddeep"><a href={service.url} target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-4">{service.name}</a></h2>
          <dl className="mt-4 grid gap-5 md:grid-cols-3">{[c.purpose, c.data, c.activation].map((label, index) => <div key={label}><dt className="text-sm font-semibold text-branddeep">{label}</dt><dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{details[index]}</dd></div>)}</dl>
        </section>;
      })}</div>
    </Section>
    <Section tone="muted">
      <h2 className="font-display text-2xl text-branddeep">{c.contracts}</h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{c.contractsBody}</p>
      <div className="mt-5 flex flex-wrap gap-5 text-sm text-brand"><a href={`mailto:${siteConfig.email}`} className="break-all underline">{siteConfig.email}</a><LocalizedLink to="/legal/privacy" className="underline">{c.rights}</LocalizedLink></div>
    </Section>
  </article>;
}