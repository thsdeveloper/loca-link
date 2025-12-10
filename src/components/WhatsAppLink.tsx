"use client";

import { WHATSAPP_LINK } from "@/lib/constants";
import { trackWhatsAppConversion } from "@/lib/gtag";

interface WhatsAppLinkProps {
    children: React.ReactNode;
    className?: string;
    ariaLabel?: string;
}

export function WhatsAppLink({ children, className, ariaLabel = "Falar no WhatsApp" }: WhatsAppLinkProps) {
    const handleClick = () => {
        trackWhatsAppConversion();
    };

    return (
        <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={className}
            aria-label={ariaLabel}
        >
            {children}
        </a>
    );
}
