"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/utils/whatsapp";

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past initial hero (200px)
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden animate-in slide-in-from-bottom duration-300">
      <a
        href={getGeneralWhatsAppLink("Mobile Sticky CTA")}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3.5 px-5 rounded-full bg-[#D4AF37] text-black font-extrabold text-xs uppercase tracking-widest flex items-center justify-between shadow-[0_10px_35px_rgba(212,175,55,0.4)] border border-[#E6C687]/40 active:scale-95 transition-all"
      >
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>
          <span className="font-bold">ORDER ON WHATSAPP</span>
        </div>

        <div className="flex items-center gap-1 text-[10px] font-mono bg-black text-[#D4AF37] px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
          <MessageCircle className="w-3.5 h-3.5 fill-[#D4AF37]" />
          <span>Saddar Deals</span>
        </div>
      </a>
    </div>
  );
}
