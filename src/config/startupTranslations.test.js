import { expect, test } from "bun:test";
import { locales } from "../i18n/types";
import { startupRecords } from "./startups";
import { startupPath } from "../i18n/startups";
import { readFile } from "node:fs/promises";

test("all 19 public languages have all 313 supplied startup descriptions", async () => {
  expect(locales).toHaveLength(19);
  const slugs = startupRecords.map(s => s.slug).sort();
  for (const locale of locales) {
    const text = await readFile(new URL(`../content/startupDescriptions/${locale.code}.json`, import.meta.url), "utf8");
    const descriptions = JSON.parse(text);
    expect(Object.keys(descriptions).sort()).toEqual(slugs);
    expect(Object.values(descriptions).every(d => typeof d === "string" && d.trim().length > 0)).toBe(true);
  }
});
test("French uses start-up and the other 18 languages use startups", () => {
  expect(startupPath("fr")).toBe("/start-up");
  for (const locale of locales.filter(l => l.code !== "fr")) expect(startupPath(locale.code)).toBe("/startups");
});