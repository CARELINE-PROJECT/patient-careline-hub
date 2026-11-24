import { createFileRoute, redirect } from "@tanstack/react-router";
import { startupSearchSchema } from "@/config/startupSearch";
import { staticRouteHead } from "@/i18n/head";
import { StartupsPage } from "@/components/site/StartupsPage";
import { loadStartupDescriptions } from "@/content/startupDescriptions";

export const Route = createFileRoute("/$locale/start-up")({
  staticData: { sitemap: false },
  validateSearch: raw => startupSearchSchema.parse(raw),
  beforeLoad: ({ params, search, location }) => {
    if (params.locale !== "fr") throw redirect({ to: "/$locale/startups", params: { locale: params.locale }, search, hash: location.hash, statusCode: 301 });
  },
  head: ({ params }) => staticRouteHead("startups", "/start-up", params.locale),
  loader: ({ params }) => loadStartupDescriptions(params.locale),
  component: StartupRoute,
});

function StartupRoute() { return <StartupsPage filters={Route.useSearch()} descriptions={Route.useLoaderData()} />; }