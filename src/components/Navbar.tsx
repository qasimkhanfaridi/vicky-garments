"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X, MapPin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { getGeneralWhatsAppLink } from "@/utils/whatsapp";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Deals", href: "#deals" },
    { name: "Collection", href: "#collection" },
    { name: "Rs. 500", href: "#deals" },
    { name: "Rs. 700", href: "#deals" },
    { name: "TikTok", href: "#tiktok" },
    { name: "Location", href: "#location" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0B0B0C]/90 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3 shadow-2xl"
            : "bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="#hero"
              className="flex flex-col group focus:outline-none focus:ring-1 focus:ring-[#D4AF37] rounded-sm p-0.5"
            >
              <span className="font-serif-editorial text-lg sm:text-2xl font-bold tracking-widest text-white group-hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                VICKY GARMENTS
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-zinc-400 font-mono flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#D4AF37] shrink-0" /> SADDAR · RAWALPINDI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-zinc-300 hover:text-[#D4AF37] font-semibold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop WhatsApp CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider text-black bg-[#D4AF37] hover:bg-[#E6C687] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>ORDER ON WHATSAPP</span>
              </a>
            </div>

            {/* Mobile Touch Action Buttons (44px Minimum Touch Target) */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[42px] min-h-[42px] flex items-center justify-center rounded-full bg-[#D4AF37] text-black shadow-md focus:outline-none active:scale-95 transition-transform"
                aria-label="Order on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="min-w-[42px] min-h-[42px] flex items-center justify-center text-zinc-200 hover:text-white focus:outline-none active:scale-95 transition-transform"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#D4AF37]" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#0B0B0C]/98 backdrop-blur-2xl flex flex-col justify-between animate-in fade-in duration-300 overflow-y-auto">
          {/* Top Bar */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10">
            <span className="font-serif-editorial text-lg font-bold tracking-widest text-white">
              VICKY GARMENTS
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-zinc-400 hover:text-white"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6 text-[#D4AF37]" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 py-8 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl sm:text-2xl font-serif-editorial text-zinc-200 hover:text-[#D4AF37] tracking-wider transition-colors border-b border-white/5 pb-3 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-zinc-500">→</span>
              </a>
            ))}

            <div className="pt-6">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-full bg-[#D4AF37] text-black font-extrabold tracking-widest text-xs uppercase shadow-xl hover:bg-[#E6C687] active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>ORDER ON WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Footer Address */}
          <div className="p-6 text-center border-t border-white/5">
            <p className="text-xs text-zinc-500 font-mono">
              {siteConfig.fullAddress}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
