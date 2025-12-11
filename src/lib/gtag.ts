// Google Ads Conversion Tracking Utility

// Declare gtag for TypeScript
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

// Track WhatsApp click conversion
export function gtagReportConversion(url?: string) {
    const callback = () => {
        if (typeof url !== "undefined") {
            window.location.href = url;
        }
    };

    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
            send_to: "AW-17794646751/XlymCOeVs88bEN-Fk6VC",
            event_callback: callback,
        });
    }

    return false;
}
