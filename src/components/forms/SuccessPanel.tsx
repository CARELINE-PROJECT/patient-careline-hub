import { CheckCircle2 } from "lucide-react";
import { Glass } from "@/components/site/primitives";

export function SuccessPanel({
  title,
  lead,
  referenceLabel,
  reference,
  detail,
  keepNote,
  againLabel,
  onAgain,
}: {
  title: string;
  lead: string;
  referenceLabel?: string | undefined;
  reference?: string | undefined;
  detail?: string | undefined;
  keepNote?: string | undefined;
  againLabel: string;
  onAgain: () => void;
}) {
  return (
    <Glass className="p-8" >
      <div role="status" aria-live="polite">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-brand">
          <CheckCircle2 className="size-6" aria-hidden="true" />
        </span>
        <h2 className="mt-5 font-display text-2xl tracking-tight text-branddeep">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{lead}</p>

        {reference ? (
          <div className="mt-6 rounded-2xl border border-border bg-secondary/60 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {referenceLabel}
            </p>
            <p className="mt-1 font-display text-2xl tracking-tight text-branddeep">{reference}</p>
            {keepNote ? <p className="mt-2 text-xs text-muted-foreground">{keepNote}</p> : null}
          </div>
        ) : null}

        {detail ? (
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{detail}</p>
        ) : null}

        <button
          type="button"
          onClick={onAgain}
          className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-branddeep transition-colors hover:bg-secondary"
        >
          {againLabel}
        </button>
      </div>
    </Glass>
  );
}
