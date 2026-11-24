import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Flag } from "./Flag";

export type FilterOption = { value: string; text: string; flag?: string };

export function SearchableFilter({ label, value, allText, options, onChange, searchText = "Rechercher…", emptyText = "—" }: { label: string; value: string; allText: string; options: readonly FilterOption[]; onChange: (v: string) => void; searchText?: string; emptyText?: string }) {
  const [open, setOpen] = useState(false);
  const current = options.find(o => o.value === value);
  return <div className="grid gap-2 text-sm font-medium text-branddeep">
    <span>{label}</span>
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button type="button" role="combobox" aria-expanded={open} aria-label={label} className="flex h-10 w-full min-w-0 items-center justify-between gap-2 rounded-md border border-input bg-background px-3 text-sm font-normal text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          <span className="flex min-w-0 items-center gap-2 truncate">{current?.flag && <Flag code={current.flag} className="h-4 w-6 shrink-0" />}<span className="truncate">{current?.text ?? allText}</span></span>
          <ChevronsUpDown className="size-4 shrink-0 opacity-50" aria-hidden="true" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] min-w-56 p-0" align="start">
        <Command>
          <CommandInput placeholder={searchText} />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {[{ value: "", text: allText } as FilterOption, ...options].map(o => <CommandItem key={o.value || "__all"} value={`${o.text} ${o.value}`} onSelect={() => { onChange(o.value); setOpen(false); }}>
                <Check className={`size-4 ${value === o.value ? "opacity-100" : "opacity-0"}`} aria-hidden="true" />
                {o.flag && <Flag code={o.flag} className="h-4 w-6 shrink-0" />}
                <span className="truncate">{o.text}</span>
              </CommandItem>)}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  </div>;
}
