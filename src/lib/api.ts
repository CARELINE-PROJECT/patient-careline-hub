/**
 * API-ready submission layer.
 *
 * Submissions are emailed to the Careline secretariat through a server function.
 */

export type FormKind = "appointment" | "contact" | "partner";

export interface SubmitResult {
  ok: boolean;
  reference: string;
  demo: boolean;
}

export function generateReference(prefix = "CL"): string {
  const year = new Date().getFullYear();
  const random = Math.random().toString(36).toUpperCase().slice(2, 8);
  return `${prefix}-${year}-${random}`;
}

export async function submitForm(
  kind: FormKind,
  payload: Record<string, unknown>,
): Promise<SubmitResult> {
  const prefix = kind === "appointment" ? "CL" : kind === "partner" ? "CP" : "CM";
  const reference = generateReference(prefix);
  const { sendFormSubmission } = await import("@/lib/forms.functions");
  const data = Object.fromEntries(Object.entries(payload).filter(([, v]) => typeof v === "string" || typeof v === "boolean")) as Record<string, string | boolean>;
  const hp = typeof document !== "undefined"
    ? Array.from(document.querySelectorAll<HTMLInputElement>('input[name="cl_website"]')).map((i) => i.value).join("")
    : "";
  const r = await sendFormSubmission({ data: { kind, reference, data, hp: hp.slice(0, 200), page: typeof window !== "undefined" ? window.location.pathname : undefined } });
  return { ok: r.sent, reference, demo: false };
}
