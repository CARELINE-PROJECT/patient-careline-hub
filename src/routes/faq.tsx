import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { PageHero, Section } from "@/components/site/primitives";
import { CTASection } from "@/components/site/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Careline FAQ — appointments, coverage, data and partnerships" },
      {
        name: "description",
        content:
          "Answers about requesting an appointment, how practitioners are matched, country coverage, data protection and becoming a Careline partner.",
      },
      { property: "og:title", content: "Careline FAQ" },
      {
        property: "og:description",
        content: "Frequently asked questions about the Careline appointment service.",
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <PageHero eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
      <Section>
        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {items.map((n) => (
              <AccordionItem key={n} value={`q${n}`}>
                <AccordionTrigger className="text-left font-display text-base text-branddeep">
                  {t(`faq.q${n}`)}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {t(`faq.a${n}`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
