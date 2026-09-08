/**
 * API-ready submission layer.
 *
 * DEMONSTRATION MODE: no backend is connected yet, so submissions are simulated
 * locally and never stored or transmitted. To go live, replace the body of
 * `submitForm` with a call to a server function / API endpoint — the rest of the
 * application does not need to change.
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
  _payload: Record<string, unknown>,
): Promise<SubmitResult> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  const prefix = kind === "appointment" ? "CL" : kind === "partner" ? "CP" : "CM";
  return { ok: true, reference: generateReference(prefix), demo: true };
}
