import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

import { isLocaleCode } from "@/i18n";

/**
 * Locale layout: every public page lives under /$locale/.
 * An unknown first segment means a legacy unprefixed URL (e.g. /services):
 * it has permanently moved to its French equivalent.
 */
export const Route = createFileRoute("/$locale")({
  staticData: { sitemap: false },
  beforeLoad: ({ params, location }) => {
    if (!isLocaleCode(params.locale)) {
      throw redirect({ href: `/fr${location.pathname}`, statusCode: 301 });
    }
  },
  component: () => <Outlet />,
});
