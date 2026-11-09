import { locales, type LocaleCode } from "@/i18n/types";
import { normalizeCountrySearch } from "./countries";

export interface LanguageCountry {
  id: string;
  country: string;
  flag: string;
  languages: LocaleCode[];
  region?: string;
}

const frenchCountries = ["FR", "BE", "CH", "LU", "MC", "CA", "HT", "SN", "CI", "GN", "BJ", "TG", "CD", "CG", "CM", "GA", "TD", "CF", "GQ", "MG", "KM", "DJ", "SC", "RW", "BI", "VU", "ML", "BF", "NE", "MA", "DZ", "TN", "MR", "LB", "AD"];
const frenchTerritories = ["GP", "MQ", "GF", "RE", "YT", "NC", "PF", "PM", "WF", "MF", "BL"];
const spanishCountries = ["MX", "GT", "HN", "SV", "NI", "CR", "PA", "CU", "DO", "PR", "CO", "VE", "EC", "PE", "BO", "CL", "AR", "UY", "PY", "US", "GI", "BZ", "EH", "PH"];
const portugueseCountries = ["BR", "AO", "MZ", "CV", "GW", "ST", "TL", "MO", "ZA"];
const arabicCountries = ["LY", "EG", "SD", "SY", "JO", "PS", "IQ", "AE", "QA", "BH", "KW", "OM", "YE", "SO", "ER", "IR"];
const originalCountries: [string, LocaleCode][] = [["GB", "en"], ["NL", "nl"], ["DE", "de"], ["ES", "es"], ["IT", "it"], ["PT", "pt"], ["SA", "ar"], ["CN", "zh"], ["RU", "ru"], ["JP", "ja"], ["KR", "ko"], ["IN", "hi"], ["TR", "tr"], ["PL", "pl"], ["SE", "sv"], ["UA", "uk"], ["ID", "id"]];

/** Language choices are site destinations, not claims of official-language status. */
export const languageCountries: LanguageCountry[] = [
  { id: "IL", country: "IL", flag: "IL", languages: ["he"] as LocaleCode[] },
  ...frenchCountries.map(country => ({ id: country, country, flag: country, languages: ["fr"] as LocaleCode[] })),
  ...frenchTerritories.map(country => ({ id: country, country, flag: "FR", languages: ["fr"] as LocaleCode[] })),
  ...spanishCountries.map(country => ({ id: country, country, flag: country, languages: ["es"] as LocaleCode[] })),
  ...portugueseCountries.map(country => ({ id: country, country, flag: country, languages: ["pt"] as LocaleCode[] })),
  ...arabicCountries.map(country => ({ id: country, country, flag: country, languages: ["ar"] as LocaleCode[] })),
  { id: "US-LA", country: "US", flag: "US", region: "Louisiane · Louisiana", languages: ["fr", "en"] as LocaleCode[] },
  { id: "IT-23", country: "IT", flag: "IT", region: "Vallée d’Aoste · Valle d’Aosta", languages: ["fr", "it"] as LocaleCode[] },
  ...originalCountries.map(([country, language]) => ({ id: country, country, flag: country, languages: [language] })),
].map(entry => {
  const extra: Record<string, LocaleCode[]> = { BE: ["nl", "de"], FR: ["pt"], CH: ["de", "it", "pt"], LU: ["de", "pt"], CA: ["en"], GQ: ["es", "pt"], AD: ["es"], US: ["en", "pt"], VE: ["pt"], PY: ["pt"], UY: ["pt"], IN: ["pt"], MO: ["zh"], ZA: ["en"], GI: ["en"], BZ: ["en"], PH: ["en"], RW: ["en"], SC: ["en"], CM: ["en"], VU: ["en"], MA: ["ar"], DZ: ["ar"], TN: ["ar"], MR: ["ar"], LB: ["ar"], DJ: ["ar"], KM: ["ar"] };
  const arabicExtra: Record<string, LocaleCode[]> = { TD: ["ar"], TR: ["ar"] };
  return { ...entry, languages: [...entry.languages, ...(extra[entry.id] ?? []), ...(arabicExtra[entry.id] ?? [])] };
});

export function languageCountryOptions(locale: LocaleCode, query = "") {
  const names = new Intl.DisplayNames([locale], { type: "region" });
  const french = new Intl.DisplayNames(["fr"], { type: "region" });
  const english = new Intl.DisplayNames(["en"], { type: "region" });
  const search = normalizeCountrySearch(query);
  return languageCountries.flatMap(entry => entry.languages.map(language => {
    const meta = locales.find(item => item.code === language);
    const label = `${names.of(entry.country) ?? entry.country}${entry.region ? ` — ${entry.region}` : ""}`;
    return { ...entry, language, label, languageName: meta?.name ?? language, dir: meta?.dir ?? "ltr", search: [label, french.of(entry.country), english.of(entry.country), entry.region, meta?.name].filter(Boolean).join(" ") };
  })).filter(entry => normalizeCountrySearch(entry.search).includes(search))
    .sort((a, b) => a.label.localeCompare(b.label, locale) || a.languages.indexOf(a.language) - b.languages.indexOf(b.language));
}

export function countryLanguagePath(language: LocaleCode, basePath: string) {
  return `/${language}${basePath === "/" ? "" : basePath}`;
}

export function selectedLanguageCountry(locale: LocaleCode, countryId: string | null) {
  const options = languageCountryOptions(locale);
  return options.find(entry => entry.id === countryId && entry.language === locale)
    ?? options.find(entry => entry.country === countryId && entry.language === locale)
    ?? options.find(entry => entry.language === locale && entry.languages[0] === locale && entry.id === (locale === "en" ? "GB" : locale === "he" ? "IL" : locale === "ar" ? "SA" : locale.toUpperCase()))
    ?? options.find(entry => entry.language === locale);
}