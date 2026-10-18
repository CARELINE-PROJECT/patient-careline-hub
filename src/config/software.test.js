import { expect, test } from "bun:test";
import { softwareBrands } from "./software";

test("the supplied software selection contains exactly 50 distinct vendors", () => {
  expect(softwareBrands).toHaveLength(50);
  expect(new Set(softwareBrands.map((brand) => brand.name)).size).toBe(50);
  expect(softwareBrands[0].name).toBe("Maiia");
  expect(softwareBrands[49].name).toBe("Bahmni");
});

test("every available vendor logo uses the public host that serves Lovable assets", () => {
  const logos = softwareBrands.filter((brand) => brand.logo);
  expect(logos).toHaveLength(49);
  for (const brand of logos) {
    expect(new URL(brand.logo).origin).toBe("https://patient-careline-hub.lovable.app");
    expect(new URL(brand.logo).pathname.startsWith("/__l5e/assets-v1/")).toBe(true);
  }
});