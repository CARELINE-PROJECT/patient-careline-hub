import { expect, test } from "bun:test";
import { countryOptions, filterCountries } from "./countries.ts";
import { getAlpha2Codes } from "i18n-iso-countries";

test("all ISO countries and territories are offered without duplicates", () => {
  const options = countryOptions("fr");
  expect(options).toHaveLength(249);
  expect(options.map((o) => o.code).sort()).toEqual(Object.keys(getAlpha2Codes()).sort());
  expect(new Set(options.map((o) => o.code)).size).toBe(249);
  for (const code of ["MG", "FR", "US", "AE", "SG", "GB", "HK", "AQ", "ZW"]) {
    expect(options.some((o) => o.code === code)).toBe(true);
  }
});

test("country search filters by localized name, accents, English name and ISO code", () => {
  const options = countryOptions("fr");
  expect(filterCountries(options, "etats unis").map((o) => o.code)).toContain("US");
  expect(filterCountries(options, "Madagascar").map((o) => o.code)).toEqual(["MG"]);
  expect(filterCountries(options, "United States").map((o) => o.code)).toEqual(["US"]);
  expect(filterCountries(options, "ZW").map((o) => o.code)).toEqual(["ZW"]);
  expect(filterCountries(options, "zzzzz")).toEqual([]);
  expect(filterCountries(options, "")).toHaveLength(249);
});