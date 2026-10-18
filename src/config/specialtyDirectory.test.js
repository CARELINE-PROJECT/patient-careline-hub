import { describe, expect, test } from "bun:test";
import { eyeLaserVideos, eyeLaserSources } from "../content/eyeLaser";
import { specialtyIds } from "./specialties";

describe("patient guide provenance", () => {
  test("includes ophthalmology in the canonical directory", () => {
    expect(specialtyIds.includes("ophthalmology")).toBe(true);
  });
  test("uses the three verified educational video identifiers", () => {
    expect(eyeLaserVideos.map((video) => video.id)).toEqual(["fxjedAwVlvw", "r7EMHgRhlW0", "qoH0VHrOM9A"]);
    expect(eyeLaserVideos.filter((video) => video.realProcedure).map((video) => video.id)).toEqual(["qoH0VHrOM9A"]);
  });
  test("medical sources include NHS and the AAO", () => {
    const hosts = eyeLaserSources.map((source) => new URL(source.url).hostname);
    expect(hosts).toContain("www.nhs.uk");
    expect(hosts).toContain("www.aao.org");
  });
});