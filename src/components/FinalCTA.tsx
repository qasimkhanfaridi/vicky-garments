"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { getGeneralWhatsAppLink } from "@/utils/whatsapp";

export default function FinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#0B0B0C] border-t border-white/10 text-white">
      {/* Background High Fashion Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop"
          alt="Vicky Garments Luxury Fashion Closing Visual"
          className="w-full h-full object-cover object-center filter brightness-40 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/80 to-[#0B0B0C]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold block mb-3"
        >
          VICKY GARMENTS · SADDAR RAWALPINDI
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
        >
          SEE IT. LOVE IT. <br />
          <span className="gold-gradient-text italic font-normal">ORDER IT.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-300 text-base sm:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Your next outfit could be just one WhatsApp message away. Explore our Rs. 500 & Rs. 700 deals today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={getGeneralWhatsAppLink("Final Campaign CTA")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#E6C687] text-black font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-black" />
            <span>ORDER ON WHATSAPP</span>
          </a>

          <a
            href={siteConfig.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 transition-all duration-300"
          >
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>VISIT OUR STORE</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
