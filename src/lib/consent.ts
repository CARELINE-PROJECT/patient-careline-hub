export interface ConsentState {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  savedAt: string;
}

const KEY = "careline.consent";
export const CONSENT_CHANGED = "careline:consent-changed";
export const CONSENT_OPEN = "careline:consent-open";

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

export function writeConsent(
  value: Omit<ConsentState, "necessary" | "savedAt">,
): ConsentState {
  const next: ConsentState = { necessary: true, savedAt: new Date().toISOString(), ...value };
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED, { detail: next }));
  return next;
}

/** Opens the preferences dialog from anywhere (footer link, legal pages). */
export function openConsentSettings() {
  window.dispatchEvent(new Event(CONSENT_OPEN));
}
