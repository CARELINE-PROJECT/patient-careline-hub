import { CheckCircle2 } from "lucide-react";
import { useI18n } from "@/i18n";
import { administrativeServicesCopy } from "@/i18n/administrativeServices";
import { partnerTerms } from "@/config/partnerTerms";

export function PartnerRegistration() {
  const { locale } = useI18n();
  const c = administrativeServicesCopy(locale);
  const isFree = partnerTerms.registrationFee === 0 && partnerTerms.entryFee === 0 && !partnerTerms.subscriptionRequired;
  if (!isFree) return null;

  return (
    <div className="flex items-start gap-3 border-l-2 border-aqua bg-secondary/70 px-4 py-4">
      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
      <div>
        <p className="font-semibold text-branddeep">{c.freeTitle}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.free}</p>
      </div>
    </div>
  );
}