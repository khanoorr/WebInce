"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
    const whatsappUrl = "https://wa.me/917208809892?text=Hi%20I%20want%20to%20grow%20my%20business%20online";

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />

            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-background border border-white/10 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                Chat with us
                <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-background border-r border-t border-white/10 rotate-45" />
            </span>
        </a>
    );
}
