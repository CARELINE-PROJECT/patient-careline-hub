import { Link, type LinkProps } from "@tanstack/react-router";

import { useLocalePath } from "@/i18n";

type LocalizedLinkProps = Omit<LinkProps, "to" | "params"> & {
  /** Locale-free path, e.g. "/services". The current locale prefix is added automatically. */
  to: string;
};

/**
 * Internal link that points at the current language's URL (/$locale/...).
 * Use this instead of Link for every in-site navigation.
 */
export function LocalizedLink({ to, ...rest }: LocalizedLinkProps) {
  const lp = useLocalePath();
  return <Link to={lp(to) as unknown as LinkProps["to"]} {...rest} />;
}
