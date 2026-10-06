import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin } from "lucide-react";
import { useI18n } from "@/i18n";
import { staticRouteMeta } from "@/i18n/head";
import { siteConfig } from "@/config/site";
import { DemoNote, Glass, PageHero, Photo, Reveal, Section } from "@/components/site/primitives";
import coordinator from "@/assets/team-coordinator.jpg";
import { ContactForm } from "@/components/forms/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: staticRouteMeta("contact"),
  }),
  component: Contact,
});

function Contact() {
  const { t } = useI18n();

  return (
    <>
      <PageHero eyebrow={t("contact.eyebrow")} title={t("contact.title")} lead={t("contact.lead")} />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <ContactForm />
          <Glass className="p-7">
            <h2 className="font-display text-lg tracking-tight text-branddeep">
              {t("contact.detailsTitle")}
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 text-brand" aria-hidden="true" />
                <a className="text-muted-foreground hover:text-branddeep" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 text-brand" aria-hidden="true" />
                <span className="text-muted-foreground">
                  {t("contact.hours")}: {t("site.supportHours")}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-brand" aria-hidden="true" />
                <span className="text-muted-foreground">
                  {t("contact.addressLabel")}: {t("site.address")}
                </span>
              </li>
            </ul>
            <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
              {t("contact.socialLabel")}: {t("contact.socialNone")}
            </p>
            <Reveal className="mt-6">
              <Photo src={coordinator} alt={t("media.contactCoordinator")} />
            </Reveal>
            <DemoNote>{t("site.contactDetailsPlaceholder")}</DemoNote>
          </Glass>
        </div>
      </Section>
    </>
  );
}
