import { Link } from "@tanstack/react-router";
import { HeartPulse, Mail } from "lucide-react";
import { useI18n } from "@/i18n";
import { siteConfig } from "@/config/site";
import { openConsentSettings } from "@/lib/consent";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t("footer.company"),
      links: [
        { to: "/about", label: t("footer.aboutLink") },
        { to: "/services", label: t("footer.services") },
        { to: "/careers", label: t("footer.careers") },
        { to: "/contact", label: t("footer.contact") },
      ],
    },
    {
      title: t("footer.patients"),
      links: [
        { to: "/request", label: t("footer.request") },
        { to: "/how-it-works", label: t("footer.how") },
        { to: "/faq", label: t("footer.faq") },
        { to: "/security", label: t("nav.security") },
      ],
    },
    {
      title: t("footer.professionals"),
      links: [
        { to: "/professionals", label: t("footer.partner") },
        { to: "/professionals", label: t("footer.practiceSolutions") },
        { to: "/companies", label: t("footer.corpSolutions") },
        { to: "/contact", label: t("footer.contactUs") },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { to: "/legal/privacy", label: t("footer.privacy") },
        { to: "/legal/cookies", label: t("footer.cookies") },
        { to: "/legal/terms", label: t("footer.terms") },
        { to: "/legal/notice", label: t("footer.notice") },
      ],
    },
  ] as const;

  return (
    <footer className="border-t border-border/60 bg-branddeep px-5 py-16 text-primary-foreground sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-2xl bg-primary-foreground/10">
                <HeartPulse className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-xl tracking-tight">{siteConfig.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              {t("footer.about")}
            </p>
            <div className="mt-5 space-y-2 text-sm text-primary-foreground/80">
              <a className="flex items-center gap-2 hover:underline" href={`mailto:${siteConfig.email}`}>
                <Mail className="size-4" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link, i) => (
                  <li key={`${link.to}-${i}`}>
                    <Link
                      to={link.to}
                      className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6">
          <p className="text-xs leading-relaxed text-primary-foreground/60">
            {t("footer.disclaimer")}
          </p>
          <div className="mt-4 flex flex-col gap-3 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {siteConfig.legalName}. {t("footer.rights")}
            </p>
            <button
              type="button"
              onClick={openConsentSettings}
              className="text-left underline underline-offset-4 hover:text-primary-foreground"
            >
              {t("footer.preferences")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
