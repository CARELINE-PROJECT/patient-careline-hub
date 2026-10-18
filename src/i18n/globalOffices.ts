import type { LocaleCode } from "./types";

const en = {
  eyebrow: "Careline · International",
  title: "Our global presence",
  lead: "Our registered office in Madagascar and five locations under consideration, one international ambition.",
  details: "Location details", active: "Service active", inactive: "No active service",
  cities: { antsirabe: "Antsirabe", "new-york": "New York", dubai: "Dubai", singapore: "Singapore", london: "London", "hong-kong": "Hong Kong" },
  countries: { antsirabe: "Madagascar", "new-york": "United States", dubai: "United Arab Emirates", singapore: "Singapore", london: "United Kingdom", "hong-kong": "Hong Kong SAR" },
  map: "Registered office and proposed international locations", attribution: "Map: Natural Earth · public domain",
};
const fr: typeof en = {
  eyebrow: "Careline · International",
  title: "Notre présence mondiale",
  lead: "Notre siège social à Madagascar et cinq localisations envisagées, une ambition internationale.",
  details: "Détails de la localisation", active: "Service actif", inactive: "Aucun service actif",
  cities: { antsirabe: "Antsirabe", "new-york": "New York", dubai: "Dubaï", singapore: "Singapour", london: "Londres", "hong-kong": "Hong Kong" },
  countries: { antsirabe: "Madagascar", "new-york": "États-Unis", dubai: "Émirats arabes unis", singapore: "Singapour", london: "Royaume-Uni", "hong-kong": "Région administrative spéciale de Hong Kong" },
  map: "Siège social et localisations internationales envisagées", attribution: "Carte : Natural Earth · domaine public",
};

export function globalOfficeCopy(locale: LocaleCode) {
  return locale === "fr" ? fr : en;
}
export function officeLabel(labels: Record<string, string>, id: string, fallback: string) {
  return labels[id] ?? fallback;
}
