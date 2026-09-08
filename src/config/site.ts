/**
 * Central, easily editable site configuration.
 * Statistics below are DEMONSTRATION PLACEHOLDERS — replace with verified figures.
 */
export const siteConfig = {
  name: "Careline",
  legalName: "Careline",
  tagline: "Healthcare appointments, made simple.",
  email: "sophie@careline.doctor",
  partnersEmail: "sophie@careline.doctor",
  address: "Address to be confirmed",
  supportHours: "Monday to Friday, 09:00 – 18:00 (CET)",
  social: {
    linkedin: "",
    x: "",
  },
  /** Placeholder figures — edit here, they propagate everywhere. */
  stats: {
    professionals: "3,000+",
    countries: "40+",
    specialties: "25+",
    languages: "11",
  },
} as const;
