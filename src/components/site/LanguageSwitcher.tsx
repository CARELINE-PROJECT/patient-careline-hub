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
import { Flag } from "@/components/site/Flag";

const localeFlag: Record<string, string> = { en: "GB", fr: "FR", nl: "NL", de: "DE", es: "ES", it: "IT", pt: "PT", ar: "SA", zh: "CN", ru: "RU", ja: "JP", ko: "KR", hi: "IN", tr: "TR", pl: "PL", sv: "SE", uk: "UA", id: "ID" };

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
        <Flag code={localeFlag[locale]} className="h-3.5 w-5" />
        <span>{meta.name}</span>
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
                <Flag code={localeFlag[l.code]} className="h-3.5 w-5 shrink-0" />
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
