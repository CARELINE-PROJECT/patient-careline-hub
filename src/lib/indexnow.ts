import { createServerFn } from "@tanstack/react-start";

// IndexNow key — the matching verification file lives at public/<key>.txt.
export const INDEXNOW_KEY = "649709e6d018f9a5275f414f02d6e09d";
const HOST = "www.careline.doctor";

/**
 * Notifies IndexNow (Bing, Yandex, ...) that URLs changed.
 * The key is public by design (served at the keyLocation URL), so this
 * function only accepts paths on the Careline host.
 */
export const notifyIndexNow = createServerFn({ method: "POST" })
  .inputValidator((paths: string[]) => {
    if (!Array.isArray(paths) || paths.length === 0 || paths.length > 100) {
      throw new Error("Provide between 1 and 100 paths");
    }
    for (const path of paths) {
      if (typeof path !== "string" || !path.startsWith("/") || path.startsWith("//")) {
        throw new Error("Paths must be absolute site paths");
      }
    }
    return paths;
  })
  .handler(async ({ data }) => {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: data.map((path) => `https://${HOST}${path}`),
      }),
    });
    if (!response.ok) {
      const body = await response.text();
      throw new Error(`IndexNow request failed [${response.status}]: ${body}`);
    }
    return { submitted: data.length };
  });
