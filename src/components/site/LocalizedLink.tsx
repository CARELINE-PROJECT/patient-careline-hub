import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

import { useLocalePath } from "@/i18n";

type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, "to" | "params"> & {
  /** Locale-free path, e.g. "/services". The current locale prefix is added automatically. */
  to: string;
};

/**
 * Internal link that points at the current language's URL (/$locale/...).
 * Use this instead of Link for every in-site navigation.
 */
export function LocalizedLink({ to, ...rest }: LocalizedLinkProps) {
  const lp = useLocalePath();
  const detail = to.match(/^\/specialties\/([^/]+)$/);
  const specialty = detail?.[1];
  if (specialty) {
    return <Link {...rest} to="/$locale/specialties/$specialty" params={{ locale: lp("/").split("/")[1] ?? "fr", specialty }} />;
  }
  // The computed href is always a valid localized route; the cast keeps call sites simple.
  return <Link to={lp(to) as never} {...rest} />;
}
