import catalog from "./startups.json";
import countries from "./startupCountries.json";
import type { LocaleCode } from "./types";

export type StartupUI = typeof catalog.en.ui;
export interface StartupTranslation {
  ui: StartupUI;
  domains: Record<string, string>;
  continents: Record<string, string>;
}
const translations: Record<string, StartupTranslation> = catalog;

export function startupCopy(locale: string): StartupTranslation {
  return translations[locale] ?? catalog.en;
}

export function startupPath(locale: string): string {
  return locale === "fr" ? "/start-up" : "/startups";
}

export function startupCountry(code: string, locale: LocaleCode): string {
  const labels: Record<string, Record<string, string>> = countries;
  return labels[locale]?.[code] ?? code;
}