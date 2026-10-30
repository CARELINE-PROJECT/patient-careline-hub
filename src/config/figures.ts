/**
 * Single source of truth for every key figure shown on the site
 * (pages, meta descriptions, llms.txt, structured data).
 *
 * A figure marked `confirmed: false` is hidden everywhere until the owner
 * validates it — never invent or display an unverified number.
 */
export const figures = {
  professionals: { value: "10M+", confirmed: false },
  countries: { value: "190+", confirmed: false },
  specialties: { value: "25+", confirmed: false },
  /** Verifiable from the code: the site ships 18 locale dictionaries. */
  languages: { value: "18", confirmed: true },
  softwarePartners: { value: "100+", confirmed: false },
} as const;

export type FigureKey = keyof typeof figures;

export function isFigureConfirmed(key: FigureKey): boolean {
  return figures[key].confirmed;
}

export function figureValue(key: FigureKey): string | null {
  return figures[key].confirmed ? figures[key].value : null;
}
