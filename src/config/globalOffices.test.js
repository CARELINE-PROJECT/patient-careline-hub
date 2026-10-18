import { describe, expect, test } from "bun:test";
import { globalOffices, isActiveOffice } from "./globalOffices";

describe("Proposed international locations", () => {
  test("includes exactly the five requested cities", () => {
    expect(globalOffices.map(o => o.city)).toEqual(["New York", "Dubai", "Singapore", "London", "Hong Kong"]);
  });
  test("does not imply any location is contractually validated", () => {
    expect(globalOffices.map(o => o.status)).toEqual(Array(5).fill("proposed"));
  });
  test("does not offer services as already contracted", () => {
    expect(globalOffices.every(o => o.contractedServices.length === 0 && o.serviceActive === false)).toBe(true);
  });
  test("requires validation and activation to show an active service", () => {
    const office = globalOffices[0];
    expect(isActiveOffice({ ...office, status: "proposed", serviceActive: true })).toBe(false);
    expect(isActiveOffice({ ...office, status: "validated", serviceActive: false })).toBe(false);
    expect(isActiveOffice({ ...office, status: "validated", serviceActive: true })).toBe(true);
  });
  test("preserves the supplied provider verification links", () => {
    expect(globalOffices.map(o => o.url)).toEqual([
      "https://www.manhattanvirtualoffice.com/",
      "https://www.difc.com/business/services/spaces-and-offices",
      "https://www.servcorp.com.sg/en/virtual-offices/prices-locations/singapore/marina-bay-financial-centre/",
      "https://www.londonaddress.com/en/",
      "https://www.bbcl.com.hk/en/virtual-office",
    ]);
  });
  test("keeps New York as an indicative area without inventing a street number", () => {
    expect(globalOffices[0].address).toBe("New York, NY 10019");
  });
});