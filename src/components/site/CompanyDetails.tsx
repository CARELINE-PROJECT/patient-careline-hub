import { siteConfig } from "@/config/site";
import { useI18n } from "@/i18n";

export function PublicationContact() {
  const { t } = useI18n();
  return (
    <div className="mt-3 space-y-4 text-sm leading-relaxed text-muted-foreground">
      <p><bdi>{siteConfig.company.director}</bdi>, {t("company.capacity")}.</p>
      <a href={`mailto:${siteConfig.email}`} className="block hover:underline">{siteConfig.email}</a>
    </div>
  );
}
