"use client";

import Link from "next/link";
import { MapPin, MessageCircle, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { getGeneralWhatsAppLink } from "@/utils/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070708] text-zinc-400 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="#hero" className="inline-block">
              <span className="font-serif-editorial text-2xl font-bold tracking-widest text-white">
                VICKY GARMENTS
              </span>
            </Link>
            <p className="text-xs text-zinc-400 font-light max-w-sm leading-relaxed">
              Rawalpindi&apos;s premier store for affordable high-fashion menswear deals. Featuring curated Rs. 500 & Rs. 700 garment collections in the heart of Saddar.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
              <MapPin className="w-4 h-4" />
              <span>{siteConfig.fullAddress}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-mono uppercase tracking-widest mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#hero" className="hover:text-[#D4AF37] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#deals" className="hover:text-[#D4AF37] transition-colors">
                  Rs. 500 & 700 Deals
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#D4AF37] transition-colors">
                  Full Collection
                </a>
              </li>
              <li>
                <a href="#tiktok" className="hover:text-[#D4AF37] transition-colors">
                  TikTok Videos
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#D4AF37] transition-colors">
                  Store Location
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white text-xs font-mono uppercase tracking-widest mb-4">
              CONNECT & ORDER
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={siteConfig.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-300 hover:text-[#D4AF37] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>TikTok ({siteConfig.tiktokHandle})</span>
                </a>
              </li>
              <li>
                <a
                  href={getGeneralWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-mono"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Order via WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-4">
          <p>© {currentYear} Vicky Garments. All rights reserved.</p>
          <p>Saddar · Rawalpindi · Pakistan</p>
        </div>

      </div>
    </footer>
  );
}
