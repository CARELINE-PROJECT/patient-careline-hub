import { useState } from "react";
import { Globe } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { useI18n, stripLocalePrefix } from "@/i18n";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandInput, CommandList, CommandItem, CommandEmpty } from "@/components/ui/command";
import { countryLanguagePath, languageCountryOptions } from "@/config/languageCountries";
import { Flag } from "@/components/site/Flag";

const localeFlag: Record<string, string> = { en: "GB", fr: "FR", nl: "NL", de: "DE", es: "ES", it: "IT", pt: "PT", ar: "SA", zh: "CN", ru: "RU", ja: "JP", ko: "KR", hi: "IN", tr: "TR", pl: "PL", sv: "SE", uk: "UA", id: "ID" };

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, t, meta } = useI18n();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const basePath = stripLocalePrefix(pathname);

  return (
    <Popover open={open} onOpenChange={(next) => { setOpen(next); setQuery(""); }}>
      <PopoverTrigger asChild><Button variant="outline"
        aria-label={t("nav.language")}
        className={
          "inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-2 text-sm font-medium text-branddeep transition-colors hover:bg-secondary " +
          (className ?? "")
        }
      >
        <Globe className="size-4" aria-hidden="true" />
        <Flag code={localeFlag[locale] ?? "GB"} className="h-3.5 w-5" />
        <span>{meta.name}</span>
      </Button></PopoverTrigger>
      <PopoverContent align="end" className="w-80 max-w-[calc(100vw-2rem)] p-0">
        <Command shouldFilter={false}>
          <CommandInput value={query} onValueChange={setQuery} aria-label={t("nav.language")} placeholder={locale === "fr" ? "Rechercher un pays ou une langue…" : "Search countries or languages…"} />
          <CommandList className="max-h-[min(360px,60dvh)]" aria-label={t("nav.language")}>
            <CommandEmpty>{locale === "fr" ? "Aucun résultat." : "No results."}</CommandEmpty>
            {languageCountryOptions(locale, query).map(entry => (
              <CommandItem key={`${entry.id}-${entry.language}`} value={`${entry.id}-${entry.language}`}
                onSelect={() => { window.location.assign(countryLanguagePath(entry.language, basePath)); }}
                className="px-3 py-2.5">
                <Flag code={entry.flag} className="h-4 w-6 shrink-0" />
                <span className="min-w-0 flex-1 whitespace-normal text-start">
                  <span className="block font-medium">{entry.label}</span>
                  <span dir={entry.dir} className="block text-xs text-muted-foreground">{entry.languageName}</span>
                </span>
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
