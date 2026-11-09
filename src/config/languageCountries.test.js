import { expect, test } from "bun:test";
import { languageCountries, languageCountryOptions, countryLanguagePath } from "./languageCountries.ts";
import { locales } from "../i18n/types.ts";

test("every requested francophone country and territory offers French", () => {
  for (const id of ["FR", "BE", "CH", "LU", "MC", "CA", "HT", "SN", "CI", "GN", "BJ", "TG", "CD", "CG", "CM", "GA", "TD", "CF", "GQ", "MG", "KM", "DJ", "SC", "RW", "BI", "VU", "ML", "BF", "NE", "MA", "DZ", "TN", "MR", "LB", "AD", "US-LA", "IT-23", "GP", "MQ", "GF", "RE", "YT", "NC", "PF", "PM", "WF", "MF", "BL"]) {
    expect(languageCountries.find(entry => entry.id === id)?.languages).toContain("fr");
  }
});

test("all existing translations remain reachable without duplicate country-language choices", () => {
  const options = languageCountryOptions("fr");
  for (const locale of locales) expect(options.some(entry => entry.language === locale.code)).toBe(true);
  expect(new Set(options.map(entry => `${entry.id}-${entry.language}`)).size).toBe(options.length);
});

test("every requested Spanish-speaking destination opens the Spanish version of the current page", () => {
  for (const id of ["ES", "MX", "GT", "HN", "SV", "NI", "CR", "PA", "CU", "DO", "PR", "CO", "VE", "EC", "PE", "BO", "CL", "AR", "UY", "PY", "GQ", "US", "AD", "GI", "BZ", "EH", "PH"]) {
    const choice = languageCountryOptions("fr").find(entry => entry.id === id && entry.language === "es");
    expect(choice?.language).toBe("es");
    expect(countryLanguagePath(choice?.language ?? "fr", "/contact")).toBe("/es/contact");
  }
});

test("Swiss Canadian and Belgian French choices preserve the current page", () => {
  for (const country of ["CH", "CA", "BE"]) {
    const choice = languageCountryOptions("fr").find(entry => entry.id === country && entry.language === "fr");
    expect(choice?.flag).toBe(country);
    expect(countryLanguagePath(choice?.language ?? "en", "/contact")).toBe("/fr/contact");
  }
  expect(countryLanguagePath("fr", "/")).toBe("/fr");
});

test("all requested Portuguese destinations retain a Portuguese link to the current page", () => {
  for (const id of ["PT", "BR", "AO", "MZ", "CV", "GW", "ST", "GQ", "TL", "MO", "FR", "LU", "CH", "US", "VE", "PY", "UY", "ZA", "IN"]) {
    const choice = languageCountryOptions("fr").find(entry => entry.id === id && entry.language === "pt");
    expect(choice?.language).toBe("pt");
    expect(countryLanguagePath(choice?.language ?? "fr", "/contact")).toBe("/pt/contact");
  }
});

test("country search accepts accents and multilingual names", () => {
  expect(languageCountryOptions("fr", "haiti").map(entry => entry.id)).toContain("HT");
  expect(languageCountryOptions("fr", "Switzerland").map(entry => entry.id)).toContain("CH");
  expect(languageCountryOptions("en", "Belgique").map(entry => entry.id)).toContain("BE");
});

test("every requested Arabic destination preserves the current page in Arabic", () => {
  for (const id of ["MA", "DZ", "TN", "LY", "MR", "EG", "SD", "LB", "SY", "JO", "PS", "IQ", "SA", "AE", "QA", "BH", "KW", "OM", "YE", "SO", "DJ", "KM", "TD", "ER", "IR", "TR"]) {
    const choice = languageCountryOptions("fr").find(entry => entry.id === id && entry.language === "ar");
    expect(choice?.language).toBe("ar");
    expect(countryLanguagePath(choice?.language ?? "fr", "/contact")).toBe("/ar/contact");
  }
});