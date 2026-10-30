import { expect, test } from "bun:test";
import guides from "./specialtyGuides.json";
import { specialtyIds } from "../config/specialties";
import { photoDims } from "../config/photoDims";

test("every specialty has its own guide, source and distinct photo", () => {
  for (const id of specialtyIds) {
    expect(guides[id].fr.length).toBeGreaterThan(40);
    expect(new URL(guides[id].source.url).protocol).toBe("https:");
    expect(photoDims[`specialite-${id.replace(/_/g, "-")}-consultation`]).toBeDefined();
  }
});
