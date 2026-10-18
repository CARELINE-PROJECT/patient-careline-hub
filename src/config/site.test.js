import { describe, expect, test } from "bun:test";
import { siteConfig } from "./site";

describe("Official company details", () => {
  test("uses the supplied Malagasy legal form", () => {
    expect(siteConfig.company.legalForm).toBe("société à responsabilité limitée (SARL) de droit malgache");
  });
  test("uses the supplied registered office", () => {
    expect(siteConfig.company.address).toBe("Lot 0912 C 185 Manodidina ny Gara, Antsirabe I, Madagascar");
  });
  test("uses the supplied NIF", () => {
    expect(siteConfig.company.nif).toBe("1019212209");
  });
  test("uses the supplied STAT", () => {
    expect(siteConfig.company.stat).toBe("78 200 12 2024 0 01330");
  });
  test("uses the supplied publication director", () => {
    expect(siteConfig.company.director).toBe("Monsieur Ayrton AHARKIOLKIS");
  });
  test("preserves Madagascar contact", () => {
    expect(siteConfig.phones[0]).toEqual({ region: "madagascar", display: "+261 32 03 682 18", href: "tel:+261320368218" });
  });
  test("preserves France and Switzerland contact with international dialing", () => {
    expect(siteConfig.phones[1]).toEqual({ region: "franceSwitzerland", display: "+33 06 44 60 25 72", href: "tel:+33644602572" });
  });
  test("preserves Belgium and Netherlands contact with international dialing", () => {
    expect(siteConfig.phones[2]).toEqual({ region: "belgiumNetherlands", display: "+32 0460 20 94 27", href: "tel:+32460209427" });
  });
});