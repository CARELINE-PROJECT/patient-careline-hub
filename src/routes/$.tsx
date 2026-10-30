import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * Legacy deep URLs without a locale prefix (e.g. /specialties/laser-des-yeux,
 * /legal/notice) have permanently moved under /fr/.
 */
export const Route = createFileRoute("/$")({
  staticData: { sitemap: false },
  beforeLoad: ({ location }) => {
    throw redirect({ href: `/fr${location.pathname}`, statusCode: 301 });
  },
});
