import { useMemo, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";
import { specialtyOptions } from "@/config/specialtyOptions";
import { specialtyUi } from "@/i18n/specialties";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

interface SpecialtyFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean | undefined;
  error?: string | undefined;
  className?: string | undefined;
}

export function SpecialtyField({ id, label, value, onChange, required, error, className }: SpecialtyFieldProps) {
  const { locale, t } = useI18n();
  const ui = specialtyUi[locale];
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const options = useMemo(() => specialtyOptions(locale, query), [locale, query]);
  return <div className={cn("flex flex-col gap-1.5", className)}>
    <label htmlFor={id} className="text-sm font-medium text-branddeep">{label}{required && <span className="text-destructive"> *</span>}</label>
    <Popover open={open} onOpenChange={(next) => { setOpen(next); if (next) setQuery(""); }}>
      <PopoverTrigger asChild>
        <Button id={id} type="button" variant="outline" role="combobox" aria-expanded={open} aria-controls={`${id}-list`} aria-required={required} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} className={cn("h-auto min-h-12 w-full justify-between rounded-2xl px-4 py-3 text-start font-normal shadow-none", error && "border-destructive")}>
          <span className={cn("min-w-0 whitespace-normal", !value && "text-muted-foreground")}>{value || t("form.select")}</span>
          <ChevronDown className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[var(--radix-popover-trigger-width)] max-w-[calc(100vw-2rem)] p-0">
        <Command shouldFilter={false}>
          <CommandInput value={query} onValueChange={setQuery} placeholder={ui.placeholder} aria-label={ui.placeholder} />
          <CommandList id={`${id}-list`} aria-label={label} className="max-h-60">
            <CommandEmpty>{ui.none}</CommandEmpty>
            {options.map((option) => <CommandItem key={option.id} value={option.id} onSelect={() => { onChange(option.label); setOpen(false); }} className="px-3 py-2">
              <span className="flex-1">{option.label}</span>{value === option.label && <Check className="size-4 text-brand" aria-hidden="true" />}
            </CommandItem>)}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    {error && <p id={`${id}-error`} role="alert" className="text-xs font-medium text-destructive">{error}</p>}
  </div>;
}
