import type { LocaleCode } from "./types";

const en = {
  eyebrow: "Careline · International",
  title: "Our global presence",
  lead: "Five locations under consideration, one international ambition.",
  notice: "These locations are proposals, not active Careline offices. Addresses and usage rights remain subject to contractual confirmation. No location listed here is Careline’s legal headquarters.",
  statuses: { proposed: "Proposed location", validating: "Under validation", validated: "Address validated" },
  types: { virtual: "Virtual domiciliation", representation: "Representation address", workspace: "Workspace option" },
  address: "Reference address · to confirm", validatedAddress: "Validated address", indicative: "Indicative postal area · no street address confirmed",
  provider: "Prospective provider", services: "Potential provider services", contracted: "Contracted services",
  terms: "Depending on the provider’s offer and the package agreed. No active Careline service at this location.",
  details: "Office details", website: "Provider website", active: "Service active", inactive: "No active service",
  cities: { "new-york": "New York", dubai: "Dubai", singapore: "Singapore", london: "London", "hong-kong": "Hong Kong" },
  countries: { "new-york": "United States", dubai: "United Arab Emirates", singapore: "Singapore", london: "United Kingdom", "hong-kong": "Hong Kong SAR" },
  serviceNames: { address: "Business address", mail: "Mail handling", phone: "Telephone reception", meeting: "Meeting rooms", workspace: "Flexible workspaces", office: "Office solutions", professional: "Professional services", scan: "Mail scanning" },
  map: "Proposed international locations", attribution: "Map: Natural Earth · public domain",
};
const fr: typeof en = {
  eyebrow: "Careline · International",
  title: "Notre présence mondiale",
  lead: "Cinq localisations envisagées, une ambition internationale.",
  notice: "Ces localisations sont des projets, pas des bureaux Careline actifs. Les adresses et droits d’utilisation restent soumis à confirmation contractuelle. Aucune de ces localisations n’est le siège social légal de Careline.",
  statuses: { proposed: "Localisation envisagée", validating: "En cours de validation", validated: "Adresse validée" },
  types: { virtual: "Domiciliation virtuelle", representation: "Adresse de représentation", workspace: "Solution d’espace de travail" },
  address: "Adresse de référence · à confirmer", validatedAddress: "Adresse validée", indicative: "Zone postale indicative · adresse exacte non confirmée",
  provider: "Prestataire envisagé", services: "Services potentiels du prestataire", contracted: "Services souscrits",
  terms: "Selon l’offre du prestataire et la formule convenue. Aucun service Careline actif à cette localisation.",
  details: "Détails de la localisation", website: "Site du prestataire", active: "Service actif", inactive: "Aucun service actif",
  cities: { "new-york": "New York", dubai: "Dubaï", singapore: "Singapour", london: "Londres", "hong-kong": "Hong Kong" },
  countries: { "new-york": "États-Unis", dubai: "Émirats arabes unis", singapore: "Singapour", london: "Royaume-Uni", "hong-kong": "Région administrative spéciale de Hong Kong" },
  serviceNames: { address: "Adresse commerciale", mail: "Gestion du courrier", phone: "Accueil téléphonique", meeting: "Salles de réunion", workspace: "Espaces de travail flexibles", office: "Solutions de bureaux", professional: "Services professionnels", scan: "Numérisation du courrier" },
  map: "Localisations internationales envisagées", attribution: "Carte : Natural Earth · domaine public",
};

export function globalOfficeCopy(locale: LocaleCode) {
  return locale === "fr" ? fr : en;
}
export function officeLabel(labels: Record<string, string>, id: string, fallback: string) {
  return labels[id] ?? fallback;
}