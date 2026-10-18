/**
 * Central, easily editable site configuration.
 * Statistics below are DEMONSTRATION PLACEHOLDERS — replace with verified figures.
 */
export const siteConfig = {
  name: "Careline",
  legalName: "Careline",
  email: "contact@careline.doctor",
  partnersEmail: "contact@careline.doctor",
  company: {
    legalForm: "société à responsabilité limitée (SARL) de droit malgache",
    address: "Lot 0912 C 185 Manodidina ny Gara, Antsirabe I, Madagascar",
    nif: "1019212209",
    stat: "78 200 12 2024 0 01330",
    director: "Monsieur Ayrton AHARKIOLKIS",
    updatedAt: "2026-10-18",
  },
  phones: [
    { region: "madagascar", display: "+261 32 03 682 18", href: "tel:+261320368218" },
    { region: "franceSwitzerland", display: "+33 06 44 60 25 72", href: "tel:+33644602572" },
    { region: "belgiumNetherlands", display: "+32 0460 20 94 27", href: "tel:+32460209427" },
  ],
  social: {
    linkedin: "",
    x: "",
  },
} as const;
