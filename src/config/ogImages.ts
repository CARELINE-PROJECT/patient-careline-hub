import ogHome from "@/assets/og/home.jpg";
import ogServices from "@/assets/og/services.jpg";
import ogProfessionals from "@/assets/og/professionals.jpg";
import ogCompanies from "@/assets/og/companies.jpg";
import ogRequest from "@/assets/og/request.jpg";
import ogContact from "@/assets/og/contact.jpg";
import ogSpecialties from "@/assets/og/specialties.jpg";
import ogLaser from "@/assets/og/laser.jpg";

import { siteConfig } from "@/config/site";
import type { HeadKey } from "@/i18n/head";

/** Dedicated 1200×630 share image per main page (absolute URL on the public origin). */
const ogImageByKey: Partial<Record<HeadKey, string>> = {
  home: ogHome,
  root: ogHome,
  services: ogServices,
  professionals: ogProfessionals,
  companies: ogCompanies,
  request: ogRequest,
  contact: ogContact,
};

export const ogSpecialtiesImage = ogSpecialties;
export const ogLaserImage = ogLaser;

export function ogImageFor(key: HeadKey): string | undefined {
  const asset = ogImageByKey[key];
  return asset ? `${siteConfig.url}${asset}` : undefined;
}
