import { test } from "bun:test";
import { expect } from "bun:test";
import { specialtyIds, specialtyCount } from "./specialties.ts";
import { specialtyLabels, specialtyUi } from "../i18n/specialties.ts";

const localeCodes = ["en", "fr", "nl", "de", "es", "it", "pt", "ar", "zh", "ru"];

test("catalogue has no duplicate ids", () => {
  const seen = new Set(specialtyIds);
  expect(seen.size).toBe(specialtyIds.length);
  expect(specialtyCount).toBe(specialtyIds.length);
});

test("every locale translates every specialty id", () => {
  for (const code of localeCodes) {
    const labels = specialtyLabels[code];
    expect(Object.keys(labels).sort()).toEqual([...specialtyIds].sort());
    for (const id of specialtyIds) {
      expect(labels[id].trim().length).toBeGreaterThan(0);
    }
  }
});

test("no specialty label is left in English outside English", () => {
  const en = specialtyLabels.en;
  for (const code of localeCodes.filter((c) => c !== "en")) {
    const labels = specialtyLabels[code];
    const untouched = specialtyIds.filter((id) => labels[id] === en[id]);
    expect(untouched).toEqual([]);
  }
});

test("interface copy exists for all ten locales", () => {
  for (const code of localeCodes) {
    const ui = specialtyUi[code];
    expect(ui.placeholder.trim().length).toBeGreaterThan(0);
    expect(ui.hint.trim().length).toBeGreaterThan(0);
    expect(ui.none.trim().length).toBeGreaterThan(0);
    expect(ui.use).toContain("{value}");
    expect(ui.results).toContain("{count}");
    expect(ui.clear.trim().length).toBeGreaterThan(0);
    expect(ui.open.trim().length).toBeGreaterThan(0);
  }
});
