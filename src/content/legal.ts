/**
 * LEGAL BASELINE CONTENT — DEMONSTRATION / DRAFT.
 * These texts are a professional starting point only. They must be reviewed and
 * validated by qualified legal counsel for every country in which Careline operates.
 * Placeholders in [brackets] must be replaced with verified company information.
 */

export interface LegalSection {
  id: "privacy" | "cookies" | "terms" | "notice";
  section: string;
  bodyCount: number;
}

export const lastUpdated = "2026-01-01";

export const privacySections: LegalSection[] = [
  { id: "privacy", section: "who", bodyCount: 1 },
  { id: "privacy", section: "data", bodyCount: 2 },
  { id: "privacy", section: "purposes", bodyCount: 3 },
  { id: "privacy", section: "recipients", bodyCount: 1 },
  { id: "privacy", section: "transfers", bodyCount: 1 },
  { id: "privacy", section: "retention", bodyCount: 1 },
  { id: "privacy", section: "rights", bodyCount: 1 },
  { id: "privacy", section: "security", bodyCount: 1 },
  { id: "privacy", section: "contact", bodyCount: 1 },
];

export const cookieSections: LegalSection[] = [
  { id: "cookies", section: "types", bodyCount: 4 },
  { id: "cookies", section: "consent", bodyCount: 1 },
  { id: "cookies", section: "duration", bodyCount: 1 },
  { id: "cookies", section: "thirdParties", bodyCount: 1 },
];

export const termsSections: LegalSection[] = [
  { id: "terms", section: "purpose", bodyCount: 1 },
  { id: "terms", section: "service", bodyCount: 2 },
  { id: "terms", section: "requests", bodyCount: 1 },
  { id: "terms", section: "obligations", bodyCount: 1 },
  { id: "terms", section: "liability", bodyCount: 1 },
  { id: "terms", section: "ip", bodyCount: 1 },
  { id: "terms", section: "law", bodyCount: 1 },
];

export const noticeSections: LegalSection[] = [
  { id: "notice", section: "publisher", bodyCount: 1 },
  { id: "notice", section: "contact", bodyCount: 1 },
  { id: "notice", section: "status", bodyCount: 1 },
];
