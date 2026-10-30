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
  // The computed href is always a valid localized route; the cast keeps call sites simple.
  return <Link to={lp(to) as never} {...rest} />;
}
