import { expect, test } from "bun:test";
import { publicAssetUrl } from "./assets";

test("Lovable asset paths use the working public asset host rather than the external site", () => {
  expect(publicAssetUrl({ url: "/__l5e/assets-v1/example/logo.png" })).toBe(
    "https://patient-careline-hub.lovable.app/__l5e/assets-v1/example/logo.png",
  );
});

test("existing absolute asset addresses remain unchanged", () => {
  expect(publicAssetUrl({ url: "https://cdn.example.com/logo.png" })).toBe(
    "https://cdn.example.com/logo.png",
  );
});