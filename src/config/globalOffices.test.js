import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { globalOffices, isActiveOffice } from "./globalOffices";
import { globalOfficeCopy } from "@/i18n/globalOffices";

const proposed = globalOffices.filter(o => o.status !== "validated");

describe("International locations", () => {
  test("lists the registered office first, then the five proposed cities", () => {
    expect(globalOffices.map(o => o.city)).toEqual(["Antsirabe", "New York", "Dubai", "Singapore", "London", "Hong Kong"]);
  });
  test("marks only Antsirabe as the confirmed registered office", () => {
    expect(globalOffices.filter(o => o.status === "validated").map(o => o.id)).toEqual(["antsirabe"]);
    expect(globalOffices[0].type).toBe("headquarters");
    expect(globalOffices[0].address).toBe("Lot 0912 C 185 Manodidina ny Gara, Antsirabe I, Madagascar");
  });
  test("does not offer proposed locations as already contracted", () => {
    expect(proposed.every(o => o.contractedServices.length === 0 && o.serviceActive === false)).toBe(true);
  });
  test("requires validation and activation to show an active service", () => {
    const office = globalOffices[0];
    expect(isActiveOffice({ ...office, status: "proposed", serviceActive: true })).toBe(false);
    expect(isActiveOffice({ ...office, status: "validated", serviceActive: false })).toBe(false);
    expect(isActiveOffice({ ...office, status: "validated", serviceActive: true })).toBe(true);
  });
  test("publishes no domiciliation provider names or links", () => {
    expect(globalOffices.every(o => !("provider" in o) && !("url" in o))).toBe(true);
    expect(JSON.stringify(globalOffices)).not.toMatch(/https?:\/\//i);
  });
  test("keeps New York as an indicative area without inventing a street number", () => {
    expect(globalOffices.find(o => o.id === "new-york")?.address).toBe("New York, NY 10019");
  });
  test("shows no status, type, terms or per-address disclaimer wording on the public section", () => {
    const copy = globalOfficeCopy("fr");
    expect(["notice", "types", "terms", "indicative", "verification"].some(k => k in copy)).toBe(false);
    expect(globalOfficeCopy("en")).not.toHaveProperty("types");
    expect(JSON.stringify(copy)).not.toMatch(/virtual address|adresse virtuelle/i);
    const component = readFileSync(new URL("../components/site/GlobalPresence.tsx", import.meta.url), "utf8");
    expect(component).not.toMatch(/c\.(notice|types|terms|indicative|verification)/);
  });
});
