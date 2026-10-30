import { createFileRoute, redirect } from "@tanstack/react-router";

/** Former guide URL: permanently moved to the eye-laser pillar page. */
export const Route = createFileRoute("/$locale/specialties_/laser-des-yeux")({
  staticData: { sitemap: false },
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/$locale/chirurgie-laser-yeux", params: { locale: params.locale }, statusCode: 301 });
  },
});
