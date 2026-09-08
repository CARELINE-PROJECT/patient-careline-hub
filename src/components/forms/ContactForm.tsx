import { useState } from "react";
import { z } from "zod";
import { useI18n } from "@/i18n";
import { submitForm } from "@/lib/api";
import { Glass, DemoNote } from "@/components/site/primitives";
import { ConsentField, SubmitButton, TextAreaField, TextField } from "./fields";
import { SuccessPanel } from "./SuccessPanel";

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
  consent: false,
};

export function ContactForm() {
  const { t } = useI18n();
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const schema = z.object({
    firstName: z.string().trim().min(1, t("form.errors.required")).max(80, t("form.errors.tooLong")),
    lastName: z.string().trim().min(1, t("form.errors.required")).max(80, t("form.errors.tooLong")),
    email: z.string().trim().min(1, t("form.errors.required")).email(t("form.errors.email")).max(255),
    phone: z.string().trim().max(30, t("form.errors.tooLong")),
    company: z.string().trim().max(120, t("form.errors.tooLong")),
    subject: z.string().trim().min(1, t("form.errors.required")).max(160, t("form.errors.tooLong")),
    message: z.string().trim().min(1, t("form.errors.required")).max(1000, t("form.errors.tooLong")),
    consent: z.literal(true, { errorMap: () => ({ message: t("form.errors.consent") }) }),
  });

  const set = (key: keyof typeof initial) => (v: string | boolean) =>
    setValues((prev) => ({ ...prev, [key]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      document.getElementById(Object.keys(next)[0] ?? "")?.focus();
      return;
    }
    setErrors({});
    setLoading(true);
    await submitForm("contact", parsed.data);
    setLoading(false);
    setDone(true);
  }

  if (done) {
    return (
      <SuccessPanel
        title={t("form.contactSuccess.title")}
        lead={t("form.contactSuccess.lead")}
        againLabel={t("form.contactSuccess.again")}
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
          <TextField id="firstName" label={t("form.firstName")} required autoComplete="given-name" value={values.firstName} onChange={set("firstName")} error={errors.firstName} />
          <TextField id="lastName" label={t("form.lastName")} required autoComplete="family-name" value={values.lastName} onChange={set("lastName")} error={errors.lastName} />
          <TextField id="email" type="email" label={t("form.email")} required autoComplete="email" value={values.email} onChange={set("email")} error={errors.email} />
          <TextField id="phone" type="tel" label={t("form.phone")} hint={t("form.optional")} autoComplete="tel" value={values.phone} onChange={set("phone")} error={errors.phone} />
          <TextField id="company" label={t("form.company")} value={values.company} onChange={set("company")} error={errors.company} className="sm:col-span-2" />
          <TextField id="subject" label={t("form.subject")} required value={values.subject} onChange={set("subject")} error={errors.subject} className="sm:col-span-2" />
        </div>

        <TextAreaField id="message" label={t("form.message")} required value={values.message} onChange={set("message")} error={errors.message} />
        <p className="text-xs leading-relaxed text-muted-foreground">{t("form.warning")}</p>
        <ConsentField id="consent" checked={values.consent} onChange={set("consent")} label={t("form.consent")} error={errors.consent} />

        <SubmitButton loading={loading} loadingLabel={t("form.sending")}>
          {t("form.submitContact")}
        </SubmitButton>

        <DemoNote>{t("form.demoNotice")}</DemoNote>
      </form>
    </Glass>
  );
}
