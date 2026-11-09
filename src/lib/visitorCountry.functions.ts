import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";

/** Visitor country from the edge network header; null when unknown. */
export const getVisitorCountry = createServerFn({ method: "GET" }).handler(async () => {
  const code = (getRequestHeader("cf-ipcountry") ?? "").toUpperCase();
  return { country: /^[A-Z]{2}$/.test(code) && code !== "XX" && code !== "T1" ? code : null };
});
