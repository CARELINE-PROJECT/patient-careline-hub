import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useI18n } from "@/i18n";

export function PhoneContacts() {
  const { t } = useI18n();
  return (
    <ul className="space-y-3">
      {siteConfig.phones.map((phone) => (
        <li key={phone.region}>
          <a href={phone.href} className="flex items-start gap-2 text-sm hover:underline">
            <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>{t(`company.${phone.region}`)}<br /><bdi dir="ltr" className="whitespace-nowrap">{phone.display}</bdi></span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function PublicationContact() {
  const { t } = useI18n();
  return (
    <div className="mt-3 space-y-4 text-sm leading-relaxed text-muted-foreground">
      <p><bdi>{siteConfig.company.director}</bdi>, {t("company.capacity")}.</p>
      <a href={`mailto:${siteConfig.email}`} className="block hover:underline">{siteConfig.email}</a>
      <PhoneContacts />
    </div>
  );
}