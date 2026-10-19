import { describe, expect, test } from "bun:test";
import { partnerTerms } from "./partnerTerms";

describe("Practitioner registration terms", () => {
  test("registration is free", () => {
    expect(partnerTerms.registrationFee).toBe(0);
  });
  test("no subscription is required", () => {
    expect(partnerTerms.subscriptionRequired).toBe(false);
  });
  test("there is no entry fee", () => {
    expect(partnerTerms.entryFee).toBe(0);
  });
});