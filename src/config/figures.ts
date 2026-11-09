/**
 * Single source of truth for every key figure shown on the site
 * (pages, meta descriptions, llms.txt, structured data).
 *
 * A figure marked `confirmed: false` is hidden everywhere until the owner
 * validates it — never invent or display an unverified number.
 */
export const figures = {
  professionals: { value: "10 Millions", confirmed: true },
  countries: { value: "52", confirmed: true },
  specialties: { value: "25+", confirmed: false },
  /** Verifiable from the code: the site ships 19 locale dictionaries. */
  languages: { value: "19", confirmed: true },
  /** Appointments organized each year across the partner software tools. */
  appointments: { value: "24 Milliards", confirmed: true },
  /** Round-the-clock service availability. */
  availability: { value: "24/7", confirmed: true },
  softwarePartners: { value: "50", confirmed: true },
} as const;

export type FigureKey = keyof typeof figures;

export function isFigureConfirmed(key: FigureKey): boolean {
  return figures[key].confirmed;
}

export function figureValue(key: FigureKey): string | null {
  return figures[key].confirmed ? figures[key].value : null;
}
