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
  test("publishes no phone numbers", () => {
    const serialized = JSON.stringify(siteConfig);
    expect(siteConfig.phones).toBeUndefined();
    expect(serialized).not.toContain("tel:");
    for (const dialing of ["+261", "+33", "+32"]) {
      expect(serialized).not.toContain(dialing);
    }
  });
});
