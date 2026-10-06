import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { staticRouteMeta } from "@/i18n/head";
import { Glass, PageHero, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: staticRouteMeta("careers"),
  }),
  component: Careers,
});

function Careers() {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("careers.eyebrow")} title={t("careers.title")} lead={t("careers.lead")} />
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
