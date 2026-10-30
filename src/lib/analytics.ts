import { useRef } from "react";

import { CONSENT_CHANGED, readConsent, type ConsentState } from "./consent";

// {À CONFIRMER}: set VITE_GTM_ID once the Google Tag Manager container exists.
const GTM_ID = import.meta.env["VITE_GTM_ID"] as string | undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function push(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

/** Consent Mode v2 update, mapped from the cookie banner categories. */
function consentUpdate(state: ConsentState) {
  push("consent", "update", {
    analytics_storage: state.analytics ? "granted" : "denied",
    ad_storage: state.marketing ? "granted" : "denied",
    ad_user_data: state.marketing ? "granted" : "denied",
    ad_personalization: state.marketing ? "granted" : "denied",
    functionality_storage: state.functional ? "granted" : "denied",
  });
}

let started = false;

/**
 * Loads GTM once and keeps Consent Mode v2 in sync with the cookie banner.
 * Client-only: call from a useEffect. The consent "default: denied" snippet
 * lives in the root route head so it runs before any tag.
 */
export function initAnalytics() {
  if (started || typeof window === "undefined") return;
  started = true;

  const existing = readConsent();
  if (existing) consentUpdate(existing);

  window.addEventListener(CONSENT_CHANGED, (event) => {
    consentUpdate((event as CustomEvent<ConsentState>).detail);
  });

  if (!GTM_ID) return;
  push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
  document.head.appendChild(script);
}

/** Pushes a custom event into the dataLayer (form_start, form_submit, page_view, ...). */
export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

/**
 * Form measurement: fires `form_start` on the first field focus and exposes
 * `trackSubmit` to fire `form_submit` when the request is actually sent.
 */
export function useFormTracking(form: string) {
  const started = useRef(false);
  const onFocusCapture = () => {
    if (!started.current) {
      started.current = true;
      trackEvent("form_start", { form });
    }
  };
  const trackSubmit = () => trackEvent("form_submit", { form });
  return { onFocusCapture, trackSubmit };
}
