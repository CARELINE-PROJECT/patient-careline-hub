import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BaseProps {
  id: string;
  label: string;
  error?: string | undefined;
  required?: boolean | undefined;
  hint?: string | undefined;
  className?: string | undefined;
}

function Wrapper({
  id,
  label,
  error,
  required,
  hint,
  className,
  children,
}: BaseProps & { children: ReactNode }) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-medium text-branddeep">
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </label>
      {children}
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const control =
  "w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-brand";

export function TextField({
  type = "text",
  value,
  onChange,
  autoComplete,
  placeholder,
  ...rest
}: BaseProps & {
  type?: string | undefined;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string | undefined;
  placeholder?: string | undefined;
}) {
  return (
    <Wrapper {...rest}>
      <input
        id={rest.id}
        name={rest.id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(rest.error)}
        aria-describedby={rest.error ? `${rest.id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={cn(control, rest.error && "border-destructive")}
      />
    </Wrapper>
  );
}

export function TextAreaField({
  value,
  onChange,
  rows = 5,
  maxLength = 1000,
  placeholder,
  ...rest
}: BaseProps & {
  value: string;
  onChange: (v: string) => void;
  rows?: number | undefined;
  maxLength?: number | undefined;
  placeholder?: string | undefined;
}) {
  return (
    <Wrapper {...rest}>
      <textarea
        id={rest.id}
        name={rest.id}
        rows={rows}
        maxLength={maxLength}
        value={value}
        placeholder={placeholder}
        aria-invalid={Boolean(rest.error)}
        aria-describedby={rest.error ? `${rest.id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={cn(control, "resize-y", rest.error && "border-destructive")}
      />
    </Wrapper>
  );
}

export function SelectField({
  value,
  onChange,
  options,
  placeholder,
  ...rest
}: BaseProps & {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
}) {
  return (
    <Wrapper {...rest}>
      <select
        id={rest.id}
        name={rest.id}
        value={value}
        aria-invalid={Boolean(rest.error)}
        aria-describedby={rest.error ? `${rest.id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={cn(control, rest.error && "border-destructive")}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}

export function ConsentField({
  id,
  checked,
  onChange,
  label,
  error,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  error?: string | undefined;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-start gap-3">
        <input
          id={id}
          name={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-1 size-4 rounded border-input accent-[var(--brand)]"
        />
        <label htmlFor={id} className="text-sm leading-relaxed text-muted-foreground">
          {label}
        </label>
      </div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function SubmitButton({
  loading,
  children,
  loadingLabel,
}: {
  loading: boolean;
  children: ReactNode;
  loadingLabel: string;
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-branddeep disabled:opacity-60 sm:w-auto"
    >
      {loading ? loadingLabel : children}
    </button>
  );
}
