/** Regional action radius drawn around each office on the Contact map (SVG units, 1000×440 viewBox). */
export const officeReach: Record<string, number> = {
  antsirabe: 85, "silicon-valley": 70, miami: 70, dubai: 80, singapore: 75, london: 80, "hong-kong": 70,
};

const regions = {
  fr: { antsirabe: "Afrique et océan Indien", "silicon-valley": "Ouest de l’Amérique du Nord", miami: "Est de l’Amérique du Nord, Caraïbes et Amérique latine", dubai: "Moyen-Orient et Asie du Sud", singapore: "Asie du Sud-Est et Océanie", london: "Europe", "hong-kong": "Asie de l’Est" },
  en: { antsirabe: "Africa and Indian Ocean", "silicon-valley": "Western North America", miami: "Eastern North America, Caribbean and Latin America", dubai: "Middle East and South Asia", singapore: "Southeast Asia and Oceania", london: "Europe", "hong-kong": "East Asia" },
} as const;

export function reachLabel(locale: string) { return locale === "fr" ? "Zone d’action" : "Coverage area"; }
export function officeRegion(locale: string, id: string): string {
  const r = (locale === "fr" ? regions.fr : regions.en) as Record<string, string>;
  return r[id] ?? "";
}
