import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { useI18n, stripLocalePrefix } from "@/i18n";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandInput, CommandList, CommandItem, CommandEmpty } from "@/components/ui/command";
import { countryLanguagePath, languageCountryOptions, selectedLanguageCountry } from "@/config/languageCountries";
import { Flag } from "@/components/site/Flag";
import { getVisitorCountry } from "@/lib/visitorCountry.functions";

const countryPreferenceKey = "careline.language-country";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, t, meta } = useI18n();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [countryId, setCountryId] = useState<string | null>(null);
  useEffect(() => {
    let stored: string | null = null;
    try { stored = window.localStorage.getItem(countryPreferenceKey); } catch { /* Storage may be disabled. */ }
    if (stored) { setCountryId(stored); return; }
    const fromBrowser = (navigator.languages ?? [navigator.language]).map(tag => tag.split("-")[1]?.toUpperCase()).find(c => c && /^[A-Z]{2}$/.test(c)) ?? null;
    if (fromBrowser) setCountryId(fromBrowser);
    getVisitorCountry().then(({ country }) => { if (country) setCountryId(country); }).catch(() => { /* Keep browser guess. */ });
  }, []);
  const selected = selectedLanguageCountry(locale, countryId);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const basePath = stripLocalePrefix(pathname);

  return (
    <Popover open={open} onOpenChange={(next) => { setOpen(next); setQuery(""); }}>
      <PopoverTrigger asChild><Button variant="outline"
        aria-label={t("nav.language")}
        className={
          "inline-flex h-auto min-h-11 min-w-0 items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-2 text-sm font-medium text-branddeep transition-colors hover:bg-secondary " +
          (className ?? "")
        }
      >
        <Globe className="hidden size-4 shrink-0 xl:block" aria-hidden="true" />
        <Flag code={selected?.flag ?? "FR"} className="h-6 w-9 shrink-0" />
        <span className="min-w-0 max-w-24 text-start sm:max-w-32" title={`${selected?.label ?? ""} · ${meta.name}`}>
          <span className="block truncate text-sm leading-tight">{selected?.label}</span>
          <span dir={meta.dir} className="block truncate text-xs leading-tight text-muted-foreground">{meta.name}</span>
        </span>
      </Button></PopoverTrigger>
      <PopoverContent align="end" className="w-80 max-w-[calc(100vw-2rem)] p-0">
        <Command shouldFilter={false}>
          <CommandInput value={query} onValueChange={setQuery} aria-label={t("nav.language")} placeholder={locale === "he" ? "חיפוש מדינה או שפה…" : locale === "ar" ? "البحث عن بلد أو لغة…" : locale === "fr" ? "Rechercher un pays ou une langue…" : "Search countries or languages…"} />
          <CommandList className="max-h-[min(360px,60dvh)]" aria-label={t("nav.language")}>
            <CommandEmpty>{locale === "he" ? "לא נמצאו תוצאות." : locale === "ar" ? "لا توجد نتائج." : locale === "fr" ? "Aucun résultat." : "No results."}</CommandEmpty>
            {languageCountryOptions(locale, query).map(entry => (
              <CommandItem key={`${entry.id}-${entry.language}`} value={`${entry.id}-${entry.language}`}
                onSelect={() => {
                  setCountryId(entry.id);
                  try { window.localStorage.setItem(countryPreferenceKey, entry.id); } catch { /* Selection still works without storage. */ }
                  setOpen(false);
                  window.location.assign(countryLanguagePath(entry.language, basePath));
                }}
                className="px-3 py-2.5">
                <Flag code={entry.flag} className="h-6 w-9 shrink-0" />
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
