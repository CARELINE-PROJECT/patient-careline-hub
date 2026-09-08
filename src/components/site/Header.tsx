import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, HeartPulse } from "lucide-react";
import { useI18n } from "@/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { siteConfig } from "@/config/site";

const navItems = [
  { to: "/how-it-works", key: "nav.howItWorks" },
  { to: "/services", key: "nav.services" },
  { to: "/professionals", key: "nav.professionals" },
  { to: "/companies", key: "nav.corporations" },
  { to: "/security", key: "nav.security" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        {t("nav.discover")}
      </a>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label={siteConfig.name}>
          <span className="flex size-9 items-center justify-center rounded-2xl bg-brand text-primary-foreground">
            <HeartPulse className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-xl tracking-tight text-branddeep">
            {siteConfig.name}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "bg-secondary text-branddeep" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-branddeep"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Link
            to="/request"
            className="hidden rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-branddeep sm:inline-flex"
          >
            {t("nav.requestShort")}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t("nav.close") : t("nav.menu")}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-branddeep lg:hidden"
          >
            {open ? <Menu className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3 sm:px-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-branddeep hover:bg-secondary"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              to="/faq"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-medium text-branddeep hover:bg-secondary"
            >
              {t("nav.faq")}
            </Link>
            <Link
              to="/request"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              {t("nav.request")}
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
            >
              <X className="size-4" aria-hidden="true" />
              {t("nav.close")}
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
