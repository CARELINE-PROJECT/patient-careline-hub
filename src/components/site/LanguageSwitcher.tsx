import { Check, Globe } from "lucide-react";
import { useI18n, locales, type LocaleCode } from "@/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t, meta } = useI18n();

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
        <span>{meta.short}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-h-80 w-56 overflow-y-auto">
        <DropdownMenuLabel>{t("nav.language")}</DropdownMenuLabel>
        {locales.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onSelect={() => setLocale(l.code as LocaleCode)}
            className="flex items-center justify-between gap-2"
          >
            <span dir={l.dir}>{l.label}</span>
            {l.code === locale ? <Check className="size-4 text-brand" aria-hidden="true" /> : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
