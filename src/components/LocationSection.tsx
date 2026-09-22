"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, MessageCircle, Building2 } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { getGeneralWhatsAppLink } from "@/utils/whatsapp";

export default function LocationSection() {
  return (
    <section id="location" className="py-24 bg-[#F5F4F0] border-t border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8860B] font-bold block mb-2">
              PHYSICAL STORE LOCATION
            </span>

            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight mb-6">
              FIND US IN SADDAR
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base font-normal leading-relaxed mb-8">
              Visit Vicky Garments directly in Saddar, Rawalpindi. Experience our full garment collections, test fabric qualities in person, or pickup your WhatsApp pre-ordered items.
            </p>

            {/* Address Box */}
            <div className="rounded-xl bg-white border border-stone-200/90 p-6 mb-8 space-y-4 shadow-md">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-zinc-900 text-sm font-bold tracking-wide">
                    {siteConfig.name}
                  </h4>
                  <p className="text-zinc-500 text-xs mt-0.5 font-medium">
                    Saddar Commercial District · Rawalpindi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-stone-100">
                <MapPin className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-zinc-400 font-mono block font-semibold">Plus Code & Address</span>
                  <p className="text-zinc-800 text-sm font-mono mt-0.5 font-bold">
                    {siteConfig.fullAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={siteConfig.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white border border-stone-300 hover:border-[#B8860B] text-zinc-900 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm hover:scale-105 active:scale-95"
              >
                <Navigation className="w-4 h-4 text-[#B8860B]" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={getGeneralWhatsAppLink("Store Visit")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-zinc-900 hover:bg-[#B8860B] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>ORDER ON WHATSAPP</span>
              </a>
            </div>

          </motion.div>

          {/* Right Visual Map Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-stone-200 overflow-hidden bg-white relative aspect-video lg:aspect-square flex flex-col justify-between p-8 shadow-xl group"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop"
                alt="Saddar Rawalpindi Location Map Visual"
                className="w-full h-full object-cover filter contrast-110 opacity-30 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
            </div>

            <div className="relative z-10 flex justify-between items-start">
              <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#8B6508] font-mono text-xs border border-[#B8860B]/30 font-bold shadow-sm">
                Saddar, Rawalpindi
              </span>
              <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-zinc-700 font-mono text-xs border border-stone-200 font-bold shadow-sm">
                46000
              </span>
            </div>

            <div className="relative z-10 bg-white/95 backdrop-blur-md p-6 rounded-xl border border-stone-200 mt-auto shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-zinc-900 text-sm font-bold">Vicky Garments Saddar Hub</span>
              </div>
              <p className="text-zinc-600 text-xs font-mono font-medium">
                {siteConfig.fullAddress}
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
