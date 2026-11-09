import { expect, test } from "bun:test";
import { specialtyIds } from "../config/specialties.ts";
import { laserGuides } from "./laserGuides.ts";
import hebrew from "./hebrewMedical.json";

test("Hebrew medical guides retain all canonical specialty IDs and laser slugs", () => {
  expect(Object.keys(hebrew.specialties).sort()).toEqual([...specialtyIds].sort());
  expect(hebrew.guides.map(guide => guide.slug)).toEqual(laserGuides.map(guide => guide.slug));
});