import codes from "i18n-iso-countries/codes.json";

export function normalizeCountrySearch(value: string) {
  return value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

export function countryOptions(locale: string) {
  const names = new Intl.DisplayNames([locale], { type: "region" });
  const english = new Intl.DisplayNames(["en"], { type: "region" });
  const french = new Intl.DisplayNames(["fr"], { type: "region" });
  return codes.map(([code]) => String(code)).map((code) => ({
    code,
    label: names.of(code) ?? english.of(code) ?? code,
    aliases: [english.of(code) ?? code, french.of(code) ?? code],
  })).sort((a, b) => a.label.localeCompare(b.label, locale));
}

export function filterCountries(options: ReturnType<typeof countryOptions>, query: string) {
  const search = normalizeCountrySearch(query);
  return options.filter((country) => [country.code, country.label, ...country.aliases]
    .some((name) => normalizeCountrySearch(name).includes(search)));
}