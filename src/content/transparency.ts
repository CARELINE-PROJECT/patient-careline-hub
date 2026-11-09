import { figures, type FigureKey } from "@/config/figures";

/** Facts are sourced from configuration, never independently copied into press pages. */
export function pressFigures() {
  return (Object.keys(figures) as FigureKey[])
    .filter((key) => figures[key].confirmed && key !== "specialties")
    .map((key) => ({ key, value: figures[key].value }));
}

/** Technical services observed in the application; not a list of signed processing agreements. */
export const technicalServices = [
  { id: "lovable", name: "Lovable", url: "https://lovable.dev/privacy" },
  { id: "fonts", name: "Google Fonts", url: "https://developers.google.com/fonts/faq/privacy" },
  { id: "youtube", name: "YouTube", url: "https://policies.google.com/privacy" },
  { id: "analytics", name: "Google Tag Manager", url: "https://policies.google.com/privacy" },
] as const;