import { useMemo, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";
import { countryOptions, filterCountries } from "@/config/countries";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

interface CountryFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean | undefined;
  error?: string | undefined;
  className?: string | undefined;
}

const copy: Record<string, [string, string]> = {
  fr: ["Rechercher un pays…", "Aucun pays trouvé."],
  en: ["Search countries…", "No countries found."],
  nl: ["Zoek een land…", "Geen landen gevonden."],
  de: ["Land suchen…", "Keine Länder gefunden."],
  es: ["Buscar un país…", "No se encontraron países."],
  it: ["Cerca un paese…", "Nessun paese trovato."],
  pt: ["Pesquisar país…", "Nenhum país encontrado."],
  ar: ["البحث عن بلد…", "لم يتم العثور على بلد."],
  zh: ["搜索国家…", "未找到国家。"],
  ru: ["Найти страну…", "Страны не найдены."],
  ja: ["国を検索…", "国が見つかりません。"],
  ko: ["국가 검색…", "국가를 찾을 수 없습니다."],
  hi: ["देश खोजें…", "कोई देश नहीं मिला।"],
  tr: ["Ülke ara…", "Ülke bulunamadı."],
  pl: ["Szukaj kraju…", "Nie znaleziono kraju."],
  sv: ["Sök land…", "Inga länder hittades."],
  uk: ["Знайти країну…", "Країни не знайдено."],
  id: ["Cari negara…", "Negara tidak ditemukan."],
};

export function CountryField({ id, label, value, onChange, required, error, className }: CountryFieldProps) {
  const { locale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const options = useMemo(() => countryOptions(locale), [locale]);
  const filtered = useMemo(() => filterCountries(options, query), [options, query]);
  const [search, empty] = copy[locale] ?? ["Search countries…", "No countries found."];
  return <div className={cn("flex flex-col gap-1.5", className)}>
    <label htmlFor={id} className="text-sm font-medium text-branddeep">
      {label}{required && <span className="text-destructive"> *</span>}
    </label>
    <Popover open={open} onOpenChange={(next) => { setOpen(next); if (next) setQuery(""); }}>
      <PopoverTrigger asChild>
        <Button id={id} type="button" variant="outline" role="combobox" aria-expanded={open}
          aria-controls={`${id}-list`} aria-required={required} aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn("h-auto min-h-12 w-full justify-between rounded-2xl px-4 py-3 text-start font-normal shadow-none", error && "border-destructive")}>
          <span className={cn("min-w-0 whitespace-normal", !value && "text-muted-foreground")}>{value || t("form.select")}</span>
          <ChevronDown className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[var(--radix-popover-trigger-width)] max-w-[calc(100vw-2rem)] p-0">
        <Command shouldFilter={false}>
          <CommandInput value={query} onValueChange={setQuery} placeholder={search} aria-label={search} />
          <CommandList id={`${id}-list`} aria-label={label} className="max-h-60">
            <CommandEmpty>{empty}</CommandEmpty>
            {filtered.map((country) => <CommandItem key={country.code} value={country.code}
              onSelect={() => { onChange(country.label); setOpen(false); }} className="px-3 py-2">
              <span className="flex-1">{country.label}</span>
              {value === country.label && <Check className="size-4 text-brand" aria-hidden="true" />}
            </CommandItem>)}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    {error && <p id={`${id}-error`} role="alert" className="text-xs font-medium text-destructive">{error}</p>}
  </div>;
}