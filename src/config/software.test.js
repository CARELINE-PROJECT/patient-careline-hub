import { expect, test } from "bun:test";
import { softwareBrands } from "./software";

test("the supplied software selection contains exactly 50 distinct vendors", () => {
  expect(softwareBrands).toHaveLength(50);
  expect(new Set(softwareBrands.map((brand) => brand.name)).size).toBe(50);
  expect(softwareBrands[0].name).toBe("Maiia");
  expect(softwareBrands[49].name).toBe("Bahmni");
});