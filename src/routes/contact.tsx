import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/i18n";
import { siteConfig } from "@/config/site";
import { DemoNote, Glass, PageHero, Section } from "@/components/site/primitives";
import { ContactForm } from "@/components/forms/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Careline — talk to our team" },
      {
        name: "description",
        content:
          "Questions about an appointment request, a partnership or our services? Contact the Careline team by form, email or telephone.",
      },
      { property: "og:title", content: "Contact Careline" },
      {
        property: "og:description",
        content: "Reach the Careline team about a request, a partnership or our services.",
      },
    ],
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
                <Phone className="mt-0.5 size-4 text-brand" aria-hidden="true" />
                <a
                  className="text-muted-foreground hover:text-branddeep"
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 text-brand" aria-hidden="true" />
                <span className="text-muted-foreground">
                  {t("contact.hours")}: {siteConfig.supportHours}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-brand" aria-hidden="true" />
                <span className="text-muted-foreground">
                  {t("contact.addressLabel")}: {siteConfig.address}
                </span>
              </li>
            </ul>
            <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
              {t("contact.socialLabel")}: {t("contact.socialNone")}
            </p>
            <DemoNote>
              Placeholder contact details — replace the email, phone, address and hours with your
              verified information.
            </DemoNote>
          </Glass>
        </div>
      </Section>
    </>
  );
}
