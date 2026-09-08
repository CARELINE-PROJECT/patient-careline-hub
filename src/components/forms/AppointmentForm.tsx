import { useState } from "react";
import { z } from "zod";
import { AlertTriangle } from "lucide-react";
import { useI18n } from "@/i18n";
import { submitForm } from "@/lib/api";
import { Glass, DemoNote } from "@/components/site/primitives";
import {
  ConsentField,
  SelectField,
  SubmitButton,
  TextAreaField,
  TextField,
} from "./fields";
import { SuccessPanel } from "./SuccessPanel";

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  country: "",
  practitionerType: "",
  reason: "",
  period: "",
  preference: "",
  additional: "",
  consent: false,
};

export function AppointmentForm() {
  const { t } = useI18n();
  const [values, setValues] = useState(initial);
  type FieldKey = keyof typeof initial;
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [loading, setLoading] = useState(false);
  const [reference, setReference] = useState<string | null>(null);

  const schema = z.object({
    firstName: z.string().trim().min(1, t("form.errors.required")).max(80, t("form.errors.tooLong")),
    lastName: z.string().trim().min(1, t("form.errors.required")).max(80, t("form.errors.tooLong")),
    email: z.string().trim().min(1, t("form.errors.required")).email(t("form.errors.email")).max(255),
    phone: z
      .string()
      .trim()
      .min(6, t("form.errors.phone"))
      .max(30, t("form.errors.tooLong"))
      .regex(/^[+0-9 ().-]+$/, t("form.errors.phone")),
    city: z.string().trim().min(1, t("form.errors.required")).max(120, t("form.errors.tooLong")),
    country: z.string().trim().min(1, t("form.errors.required")).max(120, t("form.errors.tooLong")),
    practitionerType: z.string().min(1, t("form.errors.required")),
    reason: z.string().trim().min(1, t("form.errors.required")).max(1000, t("form.errors.tooLong")),
    period: z.string().trim().max(160, t("form.errors.tooLong")),
    preference: z.string().min(1, t("form.errors.required")),
    additional: z.string().trim().max(1000, t("form.errors.tooLong")),
    consent: z.literal(true, { errorMap: () => ({ message: t("form.errors.consent") }) }),
  });

  const set = (key: FieldKey) => (v: string) => setValues((prev) => ({ ...prev, [key]: v }));
  const setBool = (key: FieldKey) => (v: boolean) => setValues((prev) => ({ ...prev, [key]: v }));

  const practitionerOptions = [
    "gp",
    "specialist",
    "dentist",
    "dermatologist",
    "cardiologist",
    "gynecologist",
    "pediatrician",
    "ophthalmologist",
    "psychologist",
    "other",
  ].map((k) => ({ value: k, label: t(`practitioners.${k}`) }));

  const preferenceOptions = ["clinic", "remote", "any"].map((k) => ({
    value: k,
    label: t(`preference.${k}`),
  }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<FieldKey, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]) as FieldKey;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      const first = document.getElementById(Object.keys(next)[0] ?? "");
      first?.focus();
      return;
    }
    setErrors({});
    setLoading(true);
    const result = await submitForm("appointment", parsed.data);
    setLoading(false);
    setReference(result.reference);
  }

  if (reference) {
    return (
      <SuccessPanel
        title={t("form.success.title")}
        lead={t("form.success.lead")}
        referenceLabel={t("form.success.number")}
        reference={reference}
        detail={t("form.success.detail")}
        keepNote={t("form.success.keep")}
        againLabel={t("form.success.again")}
        onAgain={() => {
          setValues(initial);
          setReference(null);
        }}
      />
    );
  }

  return (
    <Glass className="p-6 sm:p-8">
      <form onSubmit={onSubmit} noValidate className="space-y-5">
        <div className="flex items-start gap-3 rounded-2xl border border-accent/40 bg-accent/10 p-4">
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden="true" />
          <p className="text-xs leading-relaxed text-accent-foreground">{t("form.warning")}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <TextField id="firstName" label={t("form.firstName")} required autoComplete="given-name" value={values.firstName} onChange={set("firstName")} error={errors.firstName} />
          <TextField id="lastName" label={t("form.lastName")} required autoComplete="family-name" value={values.lastName} onChange={set("lastName")} error={errors.lastName} />
          <TextField id="email" type="email" label={t("form.email")} required autoComplete="email" value={values.email} onChange={set("email")} error={errors.email} />
          <TextField id="phone" type="tel" label={t("form.phone")} required autoComplete="tel" value={values.phone} onChange={set("phone")} error={errors.phone} />
          <TextField id="city" label={t("form.city")} required autoComplete="address-level2" value={values.city} onChange={set("city")} error={errors.city} />
          <TextField id="country" label={t("form.country")} required autoComplete="country-name" value={values.country} onChange={set("country")} error={errors.country} />
          <SelectField id="practitionerType" label={t("form.practitionerType")} required placeholder={t("form.select")} options={practitionerOptions} value={values.practitionerType} onChange={set("practitionerType")} error={errors.practitionerType} />
          <SelectField id="preference" label={t("form.preference")} required placeholder={t("form.select")} options={preferenceOptions} value={values.preference} onChange={set("preference")} error={errors.preference} />
          <TextField id="period" label={t("form.period")} hint={t("form.optional")} value={values.period} onChange={set("period")} error={errors.period} className="sm:col-span-2" />
        </div>

        <TextAreaField id="reason" label={t("form.reason")} required rows={4} value={values.reason} onChange={set("reason")} error={errors.reason} />
        <TextAreaField id="additional" label={t("form.additional")} rows={3} value={values.additional} onChange={set("additional")} error={errors.additional} />

        <ConsentField id="consent" checked={values.consent} onChange={setBool("consent")} label={t("form.consent")} error={errors.consent} />

        <SubmitButton loading={loading} loadingLabel={t("form.sending")}>
          {t("form.submit")}
        </SubmitButton>

        <DemoNote>{t("form.demoNotice")}</DemoNote>
      </form>
    </Glass>
  );
}
