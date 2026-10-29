import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { staticRouteHead } from "@/i18n/head";
import { Glass, PageHero, Section } from "@/components/site/primitives";
import { HeroActions } from "@/components/site/HeroActions";

export const Route = createFileRoute("/careers")({
  staticData: { sitemap: true },
  head: () => staticRouteHead("careers", "/careers"),
  component: Careers,
});

function Careers() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("careers.eyebrow")} title={t("careers.title")} lead={t("careers.lead")} actions={<HeroActions />} />
      <Section>
        <Glass className="max-w-2xl p-8">
          <p className="text-sm leading-relaxed text-muted-foreground">{t("careers.body")}</p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-branddeep"
          >
            {t("footer.contactUs")}
          </Link>
        </Glass>
      </Section>
    </>
  );
}
