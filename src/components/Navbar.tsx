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
            ? "bg-white/90 backdrop-blur-md border-b border-stone-200/80 py-3 shadow-md"
            : "bg-gradient-to-b from-stone-100/80 via-stone-100/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="#hero"
              className="flex flex-col group focus:outline-none focus:ring-1 focus:ring-[#B8860B] rounded-sm p-1"
            >
              <span className="font-serif-editorial text-xl sm:text-2xl font-bold tracking-widest text-zinc-900 group-hover:text-[#B8860B] transition-colors">
                VICKY GARMENTS
              </span>
              <span className="text-[10px] tracking-widest uppercase text-zinc-500 font-mono flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#B8860B]" /> SADDAR · RAWALPINDI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-zinc-700 hover:text-[#B8860B] font-semibold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B8860B] hover:after:w-full after:transition-all after:duration-300"
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
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider text-white bg-zinc-900 hover:bg-[#B8860B] transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>ORDER ON WHATSAPP</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-zinc-900 text-white shadow-md focus:outline-none"
                aria-label="Order on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-zinc-800 hover:text-black focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#B8860B]" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Light Mode) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-white/98 backdrop-blur-xl flex flex-col animate-in fade-in duration-300">
          <div className="flex items-center justify-between p-5 border-b border-stone-200">
            <span className="font-serif-editorial text-xl font-bold tracking-widest text-zinc-900">
              VICKY GARMENTS
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-zinc-500 hover:text-zinc-900"
            >
              <X className="w-6 h-6 text-[#B8860B]" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-8 py-6 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif-editorial text-zinc-800 hover:text-[#B8860B] tracking-wider transition-colors border-b border-stone-100 pb-3 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-zinc-400">→</span>
              </a>
            ))}

            <div className="pt-6">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-zinc-900 text-white font-bold tracking-widest text-sm uppercase shadow-xl hover:bg-[#B8860B] transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>ORDER ON WHATSAPP</span>
              </a>
            </div>

            <div className="text-center pt-4">
              <p className="text-xs text-zinc-500 font-mono">
                {siteConfig.fullAddress}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
