import { expect, test } from "bun:test";
import { startupRecords, isStartupVisible, visibleStartups, matchesStartup } from "./startups";

test("the supplied catalog preserves all 313 distinct startup records", () => {
  expect(startupRecords).toHaveLength(313);
  expect(new Set(startupRecords.map(s => s.slug)).size).toBe(313);
});
test("only unreachable, HTTP 404 and HTTP 410 hide a startup", () => {
  for (const status of ["unreachable", "http_404", "http_410"]) expect(isStartupVisible(status)).toBe(false);
  for (const status of [undefined, "ok", "http_403", "http_429", "http_503"]) expect(isStartupVisible(status)).toBe(true);
});
test("ophthalmology precedes other domains even if those are featured", () => {
  const rows = visibleStartups({});
  const lastEye = rows.findLastIndex(s => s.domain === "ophtalmologie");
  expect(lastEye).toBe(21);
  expect(rows.slice(0, 22).every(s => s.domain === "ophtalmologie")).toBe(true);
});
test("country, continent, domain and company-name filters combine", () => {
  const entry = startupRecords.find(s => s.slug === "belkin-vision");
  if (!entry) throw new Error("Missing supplied Belkin record");
  expect(matchesStartup(entry, { domaine: "ophtalmologie", continent: "moyen-orient", pays: "IL", q: "BELKIN" })).toBe(true);
  expect(matchesStartup(entry, { pays: "FR" })).toBe(false);
  expect(matchesStartup(entry, { domaine: "neurotech" })).toBe(false);
});