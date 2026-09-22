"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowDown, MapPin, Tag } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { getGeneralWhatsAppLink } from "@/utils/whatsapp";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B0B0C]"
    >
      {/* Editorial Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/85 to-[#0B0B0C]/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-[#0B0B0C]/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
          alt="Vicky Garments Luxury Fashion Saddar Rawalpindi"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110 opacity-40 transition-transform duration-1000"
        />
      </div>

      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#D4AF37]/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          
          {/* Location & Deal Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-zinc-300 text-xs font-mono tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              {siteConfig.name} · Saddar Rawalpindi
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 backdrop-blur-md border border-[#D4AF37]/40 text-[#E6C687] text-xs font-bold tracking-wider">
              <Tag className="w-3.5 h-3.5 text-[#D4AF37]" />
              Rs. 500 & Rs. 700 SPECIAL DEALS
            </span>
          </motion.div>

          {/* Main Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
          >
            STYLE THAT <br />
            <span className="gold-gradient-text italic font-normal">
              DOESN&apos;T BREAK
            </span>{" "}
            THE BANK.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-zinc-300 max-w-xl font-light leading-relaxed mb-8"
          >
            Premium fashion. Incredible prices. Discover Rawalpindi&apos;s most sought-after menswear deals directly at Saddar.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href={getGeneralWhatsAppLink("Hero Special Deals")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#E6C687] text-black font-extrabold tracking-widest text-xs uppercase transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span>ORDER ON WHATSAPP</span>
            </a>

            <a
              href="#deals"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold tracking-wider text-xs uppercase border border-white/15 transition-all duration-300 hover:border-[#D4AF37]"
            >
              <span>EXPLORE COLLECTION</span>
            </a>
          </motion.div>

          {/* Quick Value Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            <div>
              <span className="block text-2xl sm:text-3xl font-serif-editorial text-[#D4AF37] font-bold">
                ₨500
              </span>
              <span className="text-xs text-zinc-400 font-mono tracking-wider">
                Everyday Tops & Tops Deals
              </span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-serif-editorial text-[#D4AF37] font-bold">
                ₨700
              </span>
              <span className="text-xs text-zinc-400 font-mono tracking-wider">
                Casual Shirts & Overshirts
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="block text-2xl sm:text-3xl font-serif-editorial text-white font-bold">
                Saddar
              </span>
              <span className="text-xs text-zinc-400 font-mono tracking-wider">
                Rawalpindi Shopping Hub
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2 text-zinc-500 hover:text-[#D4AF37] cursor-pointer"
      >
        <a href="#deals" className="flex flex-col items-center text-[10px] tracking-widest uppercase font-mono">
          <span>Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 mt-1" />
        </a>
      </motion.div>
    </section>
  );
}
