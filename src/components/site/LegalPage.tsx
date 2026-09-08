import { Info } from "lucide-react";
import { useI18n } from "@/i18n";
import { PageHero, Section, Glass } from "./primitives";
import type { LegalSection } from "@/content/legal";
import { lastUpdated } from "@/content/legal";

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
          {t("legal.updated")}: {lastUpdated}
        </p>
      </PageHero>
      <Section>
        <Glass className="flex items-start gap-3 p-5">
          <Info className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-muted-foreground">{t("legal.reviewNotice")}</p>
        </Glass>

        <div className="mt-10 max-w-3xl space-y-9">
          {sections.map((section) => (
            <article key={section.heading}>
              <h2 className="font-display text-xl tracking-tight text-branddeep">
                {section.heading}
              </h2>
              {section.body.map((paragraph, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
