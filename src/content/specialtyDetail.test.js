import { expect, test } from "bun:test";
import guides from "./specialtyGuides.json";
import { specialtyIds } from "../config/specialties";
import { photoDims } from "../config/photoDims";

test("every specialty has its own guide, source and distinct photo", () => {
  for (const id of specialtyIds) {
    expect(guides[id].fr.length).toBeGreaterThan(40);
    expect(guides[id].topics.length).toBeGreaterThan(20);
    expect(guides[id].exams.length).toBeGreaterThan(20);
    expect(guides[id].care.length).toBeGreaterThan(20);
    expect(new URL(guides[id].source.url).protocol).toBe("https:");
    expect(photoDims[`specialite-${id.replace(/_/g, "-")}-consultation`]).toBeDefined();
  }
});

test("the canonical catalog contains all 72 actual specialties with unique photographic identities", () => {
  expect(specialtyIds.length).toBe(72);
  expect(new Set(specialtyIds.map(id => `specialite-${id.replace(/_/g, "-")}-consultation`)).size).toBe(72);
});

test("only verified video identifiers are embedded in new specialty guides", () => {
  const verified = ["CT0aB-EORMU", "43ZViMpWUXk", "jHZkeezzBSw", "jOC7mnrbh7w", "gFMg2BO-eqE", "uTfa9Tia1A4", "hkYOYR9QIeI", "dDWNZQ-u3Y4", "nkfGekREHeE", "RpipxPa3baE", "6s7Xsz9y2ck", "gmvONBMJUNQ", "sMFPmkTJ6gs"];
  expect([...new Set(Object.values(guides).flatMap(g => g.video ? [g.video.id] : []))].sort()).toEqual(verified.sort());
});
