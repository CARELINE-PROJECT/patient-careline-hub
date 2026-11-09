import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const labels: Record<string, string> = {
  firstName: "Prénom", lastName: "Nom", email: "Email", professionalEmail: "Email professionnel", phone: "Téléphone",
  company: "Société", subject: "Sujet", message: "Message", city: "Ville", country: "Pays",
  practitionerType: "Spécialité", reason: "Motif", period: "Période souhaitée", preference: "Préférence",
  additional: "Informations complémentaires", practiceName: "Cabinet / établissement", specialty: "Spécialité",
};
const formLabels = { contact: "Contact", appointment: "Demande de rendez-vous", partner: "Inscription praticien / partenaire" } as const;

const input = z.object({
  kind: z.enum(["contact", "appointment", "partner"]),
  reference: z.string().regex(/^[A-Z]{2}-[A-Z0-9-]{4,20}$/),
  page: z.string().max(200).optional(),
  data: z.record(z.string(), z.union([z.string().max(5000), z.boolean()])).refine((d) => Object.keys(d).length <= 30),
});

/** Emails every public form submission to the Careline secretariat (fixed recipient in the template). */
export const sendFormSubmission = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => input.parse(d))
  .handler(async ({ data }) => {
    const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
    const fields = Object.entries(data.data)
      .filter(([k, v]) => k !== "consent" && typeof v === "string")
      .map(([k, v]) => ({ label: labels[k] ?? k, value: String(v).trim() }));
    if (data.page) fields.push({ label: "Page", value: data.page });
    try {
      const r = await sendTemplateEmail("form-submission", "secretariat@careline.doctor", {
        templateData: { formLabel: formLabels[data.kind], reference: data.reference, fields },
        idempotencyKey: `form-submission-${data.reference}`,
      });
      return { sent: r.sent };
    } catch (e) {
      console.error("form submission email failed", e);
      return { sent: false };
    }
  });
