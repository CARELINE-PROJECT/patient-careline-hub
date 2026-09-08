import { useState } from "react";
import { z } from "zod";
import { useI18n } from "@/i18n";
import { submitForm } from "@/lib/api";
import { Glass, DemoNote } from "@/components/site/primitives";
import { ConsentField, SubmitButton, TextAreaField, TextField } from "./fields";
import { SuccessPanel } from "./SuccessPanel";

const initial = {
  practiceName: "",
  firstName: "",
  lastName: "",
  specialty: "",
  professionalEmail: "",
  phone: "",
  city: "",
  country: "",
  message: "",
  consent: false,
};

export function PartnerForm() {
  const { t } = useI18n();
  const [values, setValues] = useState(initial);
  type FieldKey = keyof typeof initial;
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const schema = z.object({
    practiceName: z.string().trim().min(1, t("form.errors.required")).max(160, t("form.errors.tooLong")),
    firstName: z.string().trim().min(1, t("form.errors.required")).max(80, t("form.errors.tooLong")),
    lastName: z.string().trim().min(1, t("form.errors.required")).max(80, t("form.errors.tooLong")),
    specialty: z.string().trim().min(1, t("form.errors.required")).max(120, t("form.errors.tooLong")),
    professionalEmail: z.string().trim().min(1, t("form.errors.required")).email(t("form.errors.email")).max(255),
    phone: z.string().trim().max(30, t("form.errors.tooLong")),
    city: z.string().trim().min(1, t("form.errors.required")).max(120, t("form.errors.tooLong")),
    country: z.string().trim().min(1, t("form.errors.required")).max(120, t("form.errors.tooLong")),
    message: z.string().trim().max(1000, t("form.errors.tooLong")),
    consent: z.literal(true, { errorMap: () => ({ message: t("form.errors.consent") }) }),
  });

  const set = (key: FieldKey) => (v: string) => setValues((prev) => ({ ...prev, [key]: v }));
  const setBool = (key: FieldKey) => (v: boolean) => setValues((prev) => ({ ...prev, [key]: v }));

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
      document.getElementById(Object.keys(next)[0] ?? "")?.focus();
      return;
    }
    setErrors({});
    setLoading(true);
    await submitForm("partner", parsed.data);
    setLoading(false);
    setDone(true);
  }

  if (done) {
    return (
      <SuccessPanel
        title={t("form.partnerSuccess.title")}
        lead={t("form.partnerSuccess.lead")}
        againLabel={t("form.partnerSuccess.again")}
        onAgain={() => {
          setValues(initial);
          setDone(false);
        }}
      />
    );
  }

  return (
    <Glass className="p-6 sm:p-8">
      <form onSubmit={onSubmit} noValidate className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField id="practiceName" label={t("form.practiceName")} required value={values.practiceName} onChange={set("practiceName")} error={errors.practiceName} className="sm:col-span-2" />
          <TextField id="firstName" label={t("form.firstName")} required autoComplete="given-name" value={values.firstName} onChange={set("firstName")} error={errors.firstName} />
          <TextField id="lastName" label={t("form.lastName")} required autoComplete="family-name" value={values.lastName} onChange={set("lastName")} error={errors.lastName} />
          <TextField id="specialty" label={t("form.specialty")} required value={values.specialty} onChange={set("specialty")} error={errors.specialty} />
          <TextField id="professionalEmail" type="email" label={t("form.professionalEmail")} required autoComplete="email" value={values.professionalEmail} onChange={set("professionalEmail")} error={errors.professionalEmail} />
          <TextField id="phone" type="tel" label={t("form.phone")} hint={t("form.optional")} value={values.phone} onChange={set("phone")} error={errors.phone} />
          <TextField id="city" label={t("form.city")} required value={values.city} onChange={set("city")} error={errors.city} />
          <TextField id="country" label={t("form.country")} required value={values.country} onChange={set("country")} error={errors.country} className="sm:col-span-2" />
        </div>

        <TextAreaField id="message" label={t("form.message")} rows={4} value={values.message} onChange={set("message")} error={errors.message} />
        <ConsentField id="consent" checked={values.consent} onChange={setBool("consent")} label={t("form.consent")} error={errors.consent} />

        <SubmitButton loading={loading} loadingLabel={t("form.sending")}>
          {t("form.submit")}
        </SubmitButton>

        <DemoNote>{t("form.demoNotice")}</DemoNote>
      </form>
    </Glass>
  );
}
