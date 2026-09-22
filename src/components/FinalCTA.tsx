"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { getGeneralWhatsAppLink } from "@/utils/whatsapp";

export default function FinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#FAF9F6] border-t border-stone-200">
      {/* Background High Fashion Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop"
          alt="Vicky Garments Luxury Fashion Closing Visual"
          className="w-full h-full object-cover object-center filter contrast-110 opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/80 to-[#FAF9F6]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-widest text-[#B8860B] font-bold block mb-3"
        >
          VICKY GARMENTS · SADDAR RAWALPINDI
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-900 tracking-tight leading-tight mb-6"
        >
          SEE IT. LOVE IT. <br />
          <span className="gold-gradient-text italic font-normal">ORDER IT.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-600 text-base sm:text-xl font-normal max-w-xl mx-auto mb-10 leading-relaxed"
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-zinc-900 hover:bg-[#B8860B] text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>ORDER ON WHATSAPP</span>
          </a>

          <a
            href={siteConfig.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-stone-100 text-zinc-900 font-bold text-xs uppercase tracking-wider border border-stone-300 transition-all duration-300 shadow-sm"
          >
            <MapPin className="w-4 h-4 text-[#B8860B]" />
            <span>VISIT OUR STORE</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
