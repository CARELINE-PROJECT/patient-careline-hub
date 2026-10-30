import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { staticRouteHead } from "@/i18n/head";
import { PageHero } from "@/components/site/primitives";
import { HeroActions } from "@/components/site/HeroActions";
import { CTASection } from "@/components/site/CTASection";
import { AboutContent } from "@/components/site/AboutContent";

export const Route = createFileRoute("/$locale/about")({
  staticData: { sitemap: true },
  head: ({ params }) => staticRouteHead("about", "/about", params.locale),
  component: About,
});

function About() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("about.eyebrow")} title={t("about.title")} lead={t("about.lead")} actions={<HeroActions />} />
      <AboutContent />
      <CTASection />
    </>
  );
}
