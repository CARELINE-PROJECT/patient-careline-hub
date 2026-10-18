import type { LocaleCode } from "./types";

const en = {
  eyebrow: "Careline · International",
  title: "Our global presence",
  lead: "Five locations under consideration, one international ambition.",
  notice: "These locations are proposals, not active Careline offices. Addresses and usage rights remain subject to contractual confirmation. No location listed here is Careline’s legal headquarters.",
  statuses: { proposed: "Proposed location", validating: "Under validation", validated: "Address validated" },
  types: { virtual: "Virtual address", representation: "Representation address", workspace: "Workspace option" },
  address: "Reference address · to confirm", validatedAddress: "Validated address", indicative: "Indicative postal area · no street address confirmed",
  services: "Services considered", contracted: "Contracted services",
  terms: "Depending on the offer ultimately retained. No active Careline service at this location.",
  details: "Location details", active: "Service active", inactive: "No active service",
  cities: { "new-york": "New York", dubai: "Dubai", singapore: "Singapore", london: "London", "hong-kong": "Hong Kong" },
  countries: { "new-york": "United States", dubai: "United Arab Emirates", singapore: "Singapore", london: "United Kingdom", "hong-kong": "Hong Kong SAR" },
  serviceNames: { address: "Business address", mail: "Mail handling", phone: "Telephone reception", meeting: "Meeting rooms", workspace: "Flexible workspaces", office: "Office solutions", professional: "Professional services", scan: "Mail scanning" },
  map: "Proposed international locations", attribution: "Map: Natural Earth · public domain",
  verification: { "new-york": "The NY 10019 area is indicative; the exact street address remains to be confirmed.", dubai: "Gate Avenue has not been confirmed as the address of the proposed location.", singapore: "Tower 2 at 10 Marina Boulevard is listed; the postal code remains to be confirmed.", london: "Careline’s right to use this address remains to be confirmed.", "hong-kong": "The building, street number and floor remain to be confirmed." },
};
const fr: typeof en = {
  eyebrow: "Careline · International",
  title: "Notre présence mondiale",
  lead: "Cinq localisations envisagées, une ambition internationale.",
  notice: "Ces localisations sont des projets, pas des bureaux Careline actifs. Les adresses et droits d’utilisation restent soumis à confirmation contractuelle. Aucune de ces localisations n’est le siège social légal de Careline.",
  statuses: { proposed: "Localisation envisagée", validating: "En cours de validation", validated: "Adresse validée" },
  types: { virtual: "Adresse virtuelle", representation: "Adresse de représentation", workspace: "Solution d’espace de travail" },
  address: "Adresse de référence · à confirmer", validatedAddress: "Adresse validée", indicative: "Zone postale indicative · adresse exacte non confirmée",
  services: "Services envisagés", contracted: "Services souscrits",
  terms: "Selon la formule finalement retenue. Aucun service Careline actif à cette localisation.",
  details: "Détails de la localisation", active: "Service actif", inactive: "Aucun service actif",
  cities: { "new-york": "New York", dubai: "Dubaï", singapore: "Singapour", london: "Londres", "hong-kong": "Hong Kong" },
  countries: { "new-york": "États-Unis", dubai: "Émirats arabes unis", singapore: "Singapour", london: "Royaume-Uni", "hong-kong": "Région administrative spéciale de Hong Kong" },
  serviceNames: { address: "Adresse commerciale", mail: "Gestion du courrier", phone: "Accueil téléphonique", meeting: "Salles de réunion", workspace: "Espaces de travail flexibles", office: "Solutions de bureaux", professional: "Services professionnels", scan: "Numérisation du courrier" },
  map: "Localisations internationales envisagées", attribution: "Carte : Natural Earth · domaine public",
  verification: { "new-york": "La zone NY 10019 est indicative ; l’adresse exacte reste à confirmer.", dubai: "Gate Avenue n’a pas été confirmé comme adresse de la localisation envisagée.", singapore: "Le Tower 2 au 10 Marina Boulevard est indiqué ; le code postal reste à confirmer.", london: "Le droit d’utilisation de cette adresse par Careline reste à confirmer.", "hong-kong": "L’immeuble, le numéro de rue et l’étage restent à confirmer." },
};

export function globalOfficeCopy(locale: LocaleCode) {
  return locale === "fr" ? fr : en;
}
export function officeLabel(labels: Record<string, string>, id: string, fallback: string) {
  return labels[id] ?? fallback;
}
