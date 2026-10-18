import { useI18n } from "@/i18n";
import { PageHero, Section } from "./primitives";
import type { LegalSection } from "@/content/legal";
import { lastUpdated } from "@/content/legal";
import { PublicationContact } from "./CompanyDetails";
import { siteConfig } from "@/config/site";

export function LegalPage({
  title,
  sections,
}: {
  title: string;
  sections: LegalSection[];
}) {
  const { t } = useI18n();
  return (
    <>
      <PageHero eyebrow={t("footer.legal")} title={title}>
        <p className="mt-4 text-sm text-muted-foreground">
          {t("legal.updated")}: {sections[0]?.id === "notice" ? siteConfig.company.updatedAt : lastUpdated}
        </p>
      </PageHero>
      <Section>
        <div className="mt-2 max-w-3xl space-y-9">
          {sections.map((section) => (
            <article key={`${section.id}.${section.section}`}>
              <h2 className="font-display text-xl tracking-tight text-branddeep">
                {t(`legalContent.${section.id}.${section.section}.heading`)}
              </h2>
              {section.id === "notice" && section.section === "contact" ? <PublicationContact /> : Array.from({ length: section.bodyCount }, (_, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(`legalContent.${section.id}.${section.section}.body.${i}`)}
                </p>
              ))}
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
