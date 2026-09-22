"use client";

import { Star, Award, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function TrustProof() {
  return (
    <section className="py-16 bg-[#FAF9F6] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl bg-gradient-to-r from-white via-stone-50 to-white border border-stone-200 p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Rating Box */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#B8860B]/10 border border-[#B8860B]/30 flex items-center justify-center shrink-0 shadow-sm">
              <Star className="w-8 h-8 text-[#B8860B] fill-[#B8860B]" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif-editorial text-3xl font-extrabold text-zinc-900">
                  {siteConfig.googleRating}
                </span>
                <div className="flex text-[#B8860B]">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <Star className="w-4 h-4 fill-current opacity-40" />
                </div>
              </div>

              <p className="text-xs font-mono text-zinc-600">
                Based on <span className="text-zinc-900 font-bold">{siteConfig.googleReviewCount}+ Verified Google Business Listing Reviews</span> in Saddar, Rawalpindi
              </p>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="grid grid-cols-2 gap-6 border-t md:border-t-0 md:border-l border-stone-200 pt-6 md:pt-0 md:pl-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#B8860B]" />
              <div>
                <span className="block text-zinc-900 text-xs font-bold uppercase tracking-wider">
                  Rs. 500 & Rs. 700
                </span>
                <span className="text-[11px] text-zinc-500 font-mono">Transparent Pricing</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#B8860B]" />
              <div>
                <span className="block text-zinc-900 text-xs font-bold uppercase tracking-wider">
                  Rawalpindi Saddar
                </span>
                <span className="text-[11px] text-zinc-500 font-mono">Established Store</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
