import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n";
import { specialtyIds } from "@/config/specialties";
import { specialtyLabels, specialtyUi } from "@/i18n/specialties";

const control =
  "w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-brand";

/** Lowercase and strip accents so "Cardiologie" matches "cardio". */
function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

interface SpecialtyFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string | undefined;
  required?: boolean | undefined;
  className?: string | undefined;
}

export function SpecialtyField({
  id,
  label,
  value,
  onChange,
  error,
  required,
  className,
}: SpecialtyFieldProps) {
  const { locale } = useI18n();
  const labels = specialtyLabels[locale] ?? specialtyLabels.en;
  const ui = specialtyUi[locale] ?? specialtyUi.en;

  const options = useMemo(
    () =>
      specialtyIds.map((sid) => ({
        key: sid,
        label: labels[sid],
        en: specialtyLabels.en[sid],
      })),
    [labels],
  );

  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const box = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const list = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return options;
    const asId = q.replace(/\s+/g, "_");
    return options.filter(
      (o) =>
        normalize(o.label).includes(q) ||
        normalize(o.en).includes(q) ||
        o.key.includes(asId),
    );
  }, [options, query]);

  const trimmed = query.trim();
  const isExact =
    trimmed.length > 0 &&
    options.some((o) => normalize(o.label) === normalize(trimmed));

  const rows = useMemo(() => {
    const base = filtered.map((o) => ({
      key: o.key,
      label: o.label,
      custom: false,
    }));
    return trimmed && !isExact
      ? [...base, { key: "__custom", label: trimmed, custom: true }]
      : base;
  }, [filtered, isExact, trimmed]);

  useEffect(() => {
    if (!open || active < 0) return;
    list.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (!box.current?.contains(e.target as Node)) {
        setOpen(false);
        setActive(-1);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  function select(next: string) {
    setQuery(next);
    onChange(next);
    setOpen(false);
    setActive(-1);
    input.current?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        setActive(rows.length > 0 ? 0 : -1);
        return;
      }
      const last = rows.length - 1;
      setActive((i) => {
        if (last < 0) return -1;
        if (e.key === "ArrowDown") return i < 0 ? 0 : Math.min(i + 1, last);
        return i < 0 ? last : Math.max(i - 1, 0);
      });
      return;
    }
    if (e.key === "Home" || e.key === "End") {
      if (open && rows.length > 0) {
        e.preventDefault();
        setActive(e.key === "Home" ? 0 : rows.length - 1);
      }
      return;
    }
    if (e.key === "Enter") {
      const row = rows[active];
      if (open && row) {
        e.preventDefault();
        select(row.label);
      }
      return;
    }
    if (e.key === "Escape") {
      setOpen(false);
      setActive(-1);
      return;
    }
    if (e.key === "Tab") setOpen(false);
  }

  const hint =
    filtered.length === 0 && trimmed
      ? ui.none
      : trimmed
        ? ui.results.replace("{count}", String(filtered.length))
        : ui.hint;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-medium text-branddeep">
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </label>
      <div ref={box} className="relative">
        <Search
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground"
        />
        <input
          aria-expanded={open}
          aria-controls={`${id}-listbox`}
          aria-autocomplete="list"
          aria-activedescendant={
            open && active >= 0 ? `${id}-option-${active}` : undefined
          }
          aria-describedby={error ? `${id}-error ${id}-hint` : `${id}-hint`}
          aria-invalid={Boolean(error)}
          autoComplete="off"
          className={cn(control, "pr-10 pl-10", error && "border-destructive")}
          id={id}
          name={id}
          onBlur={() => {
            const next = query.trim();
            if (next !== value) onChange(next);
          }}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActive(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={ui.placeholder}
          role="combobox"
          type="text"
          value={query}
        />
        {query ? (
          <button
            aria-label={ui.clear}
            className="absolute top-1/2 right-9 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:text-branddeep"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              setQuery("");
              onChange("");
              input.current?.focus();
            }}
            type="button"
          >
            <X aria-hidden className="size-4" />
          </button>
        ) : null}
        <button
          aria-hidden
          className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => {
            setOpen((o) => !o);
            input.current?.focus();
          }}
          tabIndex={-1}
          type="button"
        >
          <ChevronDown aria-hidden className="size-4" />
        </button>
        {open ? (
          <ul
            aria-label={label}
            className="absolute z-30 mt-2 max-h-64 w-full overflow-auto rounded-2xl border border-border/70 bg-background p-1.5 shadow-[0_24px_60px_-30px_rgba(16,49,56,0.55)]"
            id={`${id}-listbox`}
            ref={list}
            role="listbox"
          >
            {rows.map((row, i) => (
              <li
                aria-selected={i === active}
                className={cn(
                  "cursor-pointer rounded-xl px-3 py-2 text-sm",
                  i === active ? "bg-brand/10 text-branddeep" : "text-foreground",
                  row.custom && "font-medium italic",
                )}
                data-index={i}
                id={`${id}-option-${i}`}
                key={row.key}
                onMouseDown={(e) => e.preventDefault()}
                onMouseEnter={() => setActive(i)}
                onClick={() => select(row.label)}
                role="option"
              >
                {row.custom ? ui.use.replace("{value}", row.label) : row.label}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <p className="text-xs text-muted-foreground" id={`${id}-hint`}>
        {hint}
      </p>
      {error ? (
        <p
          className="text-xs font-medium text-destructive"
          id={`${id}-error`}
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
