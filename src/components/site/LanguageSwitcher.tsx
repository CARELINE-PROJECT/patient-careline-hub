import { Check, Globe } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { useI18n, locales, stripLocalePrefix } from "@/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, t, meta } = useI18n();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const basePath = stripLocalePrefix(pathname);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("nav.language")}
        className={
          "inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-2 text-sm font-medium text-branddeep transition-colors hover:bg-secondary " +
          (className ?? "")
        }
      >
        <Globe className="size-4" aria-hidden="true" />
        <span aria-hidden="true">{meta.flag}</span>
        <span>{meta.short}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-h-80 w-56 overflow-y-auto">
        <DropdownMenuLabel>{t("nav.language")}</DropdownMenuLabel>
        {locales.map((l) => (
          <DropdownMenuItem key={l.code} asChild>
            <a
              href={`/${l.code}${basePath === "/" ? "" : basePath}`}
              hrefLang={l.htmlLang}
              className="flex items-center justify-between gap-2"
            >
              <span dir={l.dir} className="flex items-center gap-2">
                <span aria-hidden="true">{l.flag}</span>
                {l.name}
              </span>
              {l.code === locale ? <Check className="size-4 text-brand" aria-hidden="true" /> : null}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
