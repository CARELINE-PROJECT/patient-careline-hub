import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/health")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () =>
        Response.json({ status: "ok", time: new Date().toISOString() }, { headers: { "cache-control": "no-store" } }),
    },
  },
});
