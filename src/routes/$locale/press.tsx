import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { useI18n } from "@/i18n";
import { staticRouteHead } from "@/i18n/head";
import { transparencyCopy } from "@/i18n/transparency";
import { pressFigures } from "@/content/transparency";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/site/primitives";
import logoAsset from "@/assets/careline-logo-officiel.webp.asset.json";
import { publicAssetUrl } from "@/lib/assets";

export const Route = createFileRoute("/$locale/press")({
  staticData: { sitemap: true },
  head: ({ params }) => staticRouteHead("press", "/press", params.locale),
  component: PressPage,
});

function PressPage() {
  const { locale } = useI18n();
  const c = transparencyCopy(locale);
  return <article lang={c.language}>
    <Section>
      <h1 className="font-display text-3xl text-branddeep sm:text-4xl">{c.press}</h1>
      <img src={publicAssetUrl(logoAsset)} width={1080} height={280} alt="Careline — Global Health Solutions" className="mt-6 h-auto w-full max-w-sm rounded-lg" />
      <h2 className="mt-8 font-display text-2xl text-branddeep">{c.about}</h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{c.aboutBody}</p>
    </Section>
    <Section tone="muted">
      <h2 className="font-display text-2xl text-branddeep">{c.figuresTitle}</h2>
      <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{pressFigures().map(({ key, value }) => <div key={key} className="border-s-2 border-brand ps-4"><dd className="font-display text-3xl text-branddeep">{value}</dd><dt className="mt-2 text-sm text-muted-foreground">{c.labels[key]}</dt></div>)}</dl>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">{c.figuresNote}</p>
    </Section>
    <Section>
      <h2 className="font-display text-2xl text-branddeep">{c.contact}</h2>
      <p className="mt-3 text-muted-foreground">{c.contactBody}</p>
      <a href={`mailto:${siteConfig.email}`} className="mt-4 inline-flex items-center gap-2 break-all text-brand underline underline-offset-4"><Mail className="size-4 shrink-0" aria-hidden="true" />{siteConfig.email}</a>
    </Section>
  </article>;
}