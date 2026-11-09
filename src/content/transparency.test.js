import { describe, expect, test } from "bun:test";
import { pressFigures } from "./transparency";
import { figures } from "../config/figures";

describe("Press figure publication", () => {
  test("never publishes the unconfirmed specialty figure", () => {
    expect(figures.specialties.confirmed).toBe(false);
    expect(pressFigures().some((figure) => figure.key === "specialties")).toBe(false);
  });
  test("uses the owner's exact professional figure", () => {
    expect(pressFigures().find((figure) => figure.key === "professionals")?.value).toBe("10 Millions");
  });
  test("uses the owner's exact synchronized appointment figure", () => {
    expect(pressFigures().find((figure) => figure.key === "appointments")?.value).toBe("24 Milliards");
  });
});