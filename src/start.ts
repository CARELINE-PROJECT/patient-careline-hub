import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ request, next }) => {
  if (new URL(request.url).pathname.startsWith("/lovable/")) return next();
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

// Security headers compatible with SSR hydration and the editor preview iframe.
const securityHeadersMiddleware = createMiddleware().server(async ({ next }) => {
  const result = await next();
  const h = result.response?.headers;
  if (h) {
    h.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
    h.set("X-Content-Type-Options", "nosniff");
    h.set("Referrer-Policy", "strict-origin-when-cross-origin");
    h.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    h.set("Cross-Origin-Opener-Policy", "same-origin");
  }
  return result;
});

export const startInstance = createStart(() => ({
  requestMiddleware: [securityHeadersMiddleware, errorMiddleware, csrfMiddleware],
}));
