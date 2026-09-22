"use client";

import { Star, Award, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function TrustProof() {
  return (
    <section className="py-16 bg-[#0B0B0C] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl bg-gradient-to-r from-[#141416] via-[#1A1A1E] to-[#141416] border border-white/15 p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Rating Box */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 shadow-md">
              <Star className="w-8 h-8 text-[#D4AF37] fill-[#D4AF37]" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif-editorial text-3xl font-extrabold text-white">
                  {siteConfig.googleRating}
                </span>
                <div className="flex text-[#D4AF37]">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <Star className="w-4 h-4 fill-current opacity-40" />
                </div>
              </div>

              <p className="text-xs font-mono text-zinc-400">
                Based on <span className="text-white font-bold">{siteConfig.googleReviewCount}+ Verified Google Business Listing Reviews</span> in Saddar, Rawalpindi
              </p>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="grid grid-cols-2 gap-6 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
              <div>
                <span className="block text-white text-xs font-bold uppercase tracking-wider">
                  Rs. 500 & Rs. 700
                </span>
                <span className="text-[11px] text-zinc-400 font-mono">Transparent Pricing</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#D4AF37]" />
              <div>
                <span className="block text-white text-xs font-bold uppercase tracking-wider">
                  Rawalpindi Saddar
                </span>
                <span className="text-[11px] text-zinc-400 font-mono">Established Store</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
