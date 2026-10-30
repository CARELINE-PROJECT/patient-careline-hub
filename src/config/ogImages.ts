import ogHome from "@/assets/og/partage-careline-accueil.jpg";
import ogServices from "@/assets/og/partage-careline-services.jpg";
import ogProfessionals from "@/assets/og/partage-careline-praticiens.jpg";
import ogCompanies from "@/assets/og/partage-careline-etablissements.jpg";
import ogRequest from "@/assets/og/partage-careline-demande-rendez-vous.jpg";
import ogContact from "@/assets/og/partage-careline-contact.jpg";
import ogSpecialties from "@/assets/og/partage-careline-specialites.jpg";
import ogLaser from "@/assets/og/partage-careline-laser-yeux.jpg";

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
