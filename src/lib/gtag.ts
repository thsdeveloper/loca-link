// Google Ads Conversion Tracking Utility

// Declare gtag for TypeScript
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

// Track WhatsApp click conversion
export function trackWhatsAppConversion() {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
            send_to: "AW-17794646751/XlymCOeVs88bEN-Fk6VC",
            value: 1.0,
            currency: "BRL",
        });
    }
}
