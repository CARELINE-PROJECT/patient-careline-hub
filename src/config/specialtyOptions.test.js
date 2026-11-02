import { expect, test } from "bun:test";
import { specialtyOptions } from "./specialtyOptions.ts";
import { specialtyIds } from "./specialties.ts";

test("empty specialty search exposes the complete canonical catalog", () => {
  expect(specialtyOptions("fr").map((x) => x.id)).toEqual([...specialtyIds]);
  expect(specialtyOptions("fr")).toHaveLength(72);
});
test("specialty search accepts accents, English and stable IDs", () => {
  expect(specialtyOptions("fr", "pediatrie").map((x) => x.id)).toContain("pediatrics");
  expect(specialtyOptions("fr", "cardiology").map((x) => x.id)).toContain("cardiology");
  expect(specialtyOptions("fr", "public_health").map((x) => x.id)).toEqual(["public_health"]);
  expect(specialtyOptions("fr", "zzzzzzz")).toEqual([]);
});