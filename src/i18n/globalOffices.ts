import type { LocaleCode } from "./types";

const en = {
  eyebrow: "Careline · International",
  title: "Our global presence",
  lead: "Our registered office in Madagascar and five locations under consideration, one international ambition.",
  notice: "Careline’s registered office is in Antsirabe, Madagascar. The other five locations are proposals, not active Careline offices: their addresses and usage rights remain subject to contractual confirmation.",
  types: { headquarters: "Registered office", virtual: "Virtual address", representation: "Representation address", workspace: "Workspace option" },
  address: "Reference address · to confirm", validatedAddress: "Registered address", indicative: "Indicative postal area · no street address confirmed",
  terms: "No active Careline service at this location.",
  details: "Location details", active: "Service active", inactive: "No active service",
  cities: { antsirabe: "Antsirabe", "new-york": "New York", dubai: "Dubai", singapore: "Singapore", london: "London", "hong-kong": "Hong Kong" },
  countries: { antsirabe: "Madagascar", "new-york": "United States", dubai: "United Arab Emirates", singapore: "Singapore", london: "United Kingdom", "hong-kong": "Hong Kong SAR" },
  map: "Registered office and proposed international locations", attribution: "Map: Natural Earth · public domain",
  verification: { "new-york": "The NY 10019 area is indicative; the exact street address remains to be confirmed.", dubai: "Gate Avenue has not been confirmed as the address for this location.", singapore: "Tower 2 at 10 Marina Boulevard is listed; the postal code remains to be confirmed.", london: "Careline’s right to use this address remains to be confirmed.", "hong-kong": "The building, street number and floor remain to be confirmed." },
};
const fr: typeof en = {
  eyebrow: "Careline · International",
  title: "Notre présence mondiale",
  lead: "Notre siège social à Madagascar et cinq localisations envisagées, une ambition internationale.",
  notice: "Le siège social de Careline est à Antsirabe, Madagascar. Les cinq autres localisations sont des projets, pas des bureaux Careline actifs : leurs adresses et droits d’utilisation restent soumis à confirmation contractuelle.",
  types: { headquarters: "Siège social", virtual: "Adresse virtuelle", representation: "Adresse de représentation", workspace: "Solution d’espace de travail" },
  address: "Adresse de référence · à confirmer", validatedAddress: "Adresse enregistrée", indicative: "Zone postale indicative · adresse exacte non confirmée",
  terms: "Aucun service Careline actif à cette localisation.",
  details: "Détails de la localisation", active: "Service actif", inactive: "Aucun service actif",
  cities: { antsirabe: "Antsirabe", "new-york": "New York", dubai: "Dubaï", singapore: "Singapour", london: "Londres", "hong-kong": "Hong Kong" },
  countries: { antsirabe: "Madagascar", "new-york": "États-Unis", dubai: "Émirats arabes unis", singapore: "Singapour", london: "Royaume-Uni", "hong-kong": "Région administrative spéciale de Hong Kong" },
  map: "Siège social et localisations internationales envisagées", attribution: "Carte : Natural Earth · domaine public",
  verification: { "new-york": "La zone NY 10019 est indicative ; l’adresse exacte reste à confirmer.", dubai: "Gate Avenue n’a pas été confirmé comme adresse pour cette localisation.", singapore: "Le Tower 2 au 10 Marina Boulevard est indiqué ; le code postal reste à confirmer.", london: "Le droit d’utilisation de cette adresse par Careline reste à confirmer.", "hong-kong": "L’immeuble, le numéro de rue et l’étage restent à confirmer." },
};

export function globalOfficeCopy(locale: LocaleCode) {
  return locale === "fr" ? fr : en;
}
export function officeLabel(labels: Record<string, string>, id: string, fallback: string) {
  return labels[id] ?? fallback;
}
