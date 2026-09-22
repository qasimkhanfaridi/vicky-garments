"use client";

import { motion } from "framer-motion";
import { ArrowRight, Tag, Sparkles } from "lucide-react";

interface PriceCampaignProps {
  onSelectCategory?: (category: "500" | "700") => void;
}

export default function PriceCampaign({ onSelectCategory }: PriceCampaignProps) {
  const handleDealClick = (category: "500" | "700") => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
    const element = document.getElementById("collection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="deals" className="py-20 bg-[#F5F4F0] relative overflow-hidden border-y border-stone-200">
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/30 text-[#8B6508] text-xs font-mono uppercase tracking-widest mb-3 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>SPECIAL PRICE PROMOTION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-editorial text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight"
          >
            UNMISSABLE DEALS
          </motion.h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-3 font-normal">
            Luxury aesthetics without the luxury markup. Choose your deal category below.
          </p>
        </div>

        {/* Two Giant Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Rs 500 Collection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative rounded-2xl overflow-hidden bg-white border border-stone-200/80 p-8 sm:p-12 hover:border-[#B8860B]/60 transition-all duration-500 flex flex-col justify-between shadow-lg hover:shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8860B]/5 rounded-full blur-3xl group-hover:bg-[#B8860B]/10 transition-all duration-700 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono tracking-widest text-[#8B6508] uppercase border border-[#B8860B]/30 px-3 py-1 rounded-full bg-[#B8860B]/10 font-bold">
                  EVERYDAY VALUE
                </span>
                <Tag className="w-5 h-5 text-zinc-400 group-hover:text-[#B8860B] transition-colors" />
              </div>

              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-zinc-900 font-bold mb-2">
                Rs. 500 COLLECTION
              </h3>

              <p className="text-zinc-600 text-sm sm:text-base font-normal mb-8 leading-relaxed">
                Everyday style. Incredible value. Premium tees, polo shirts & shorts crafted for daily comfort.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs text-zinc-400 uppercase font-mono block">Fixed Deal Price</span>
                <span className="font-serif-editorial text-5xl sm:text-6xl font-extrabold gold-gradient-text">
                  ₨500
                </span>
              </div>

              <button
                onClick={() => handleDealClick("500")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 text-white hover:bg-[#B8860B] font-bold text-xs uppercase tracking-widest transition-all duration-300 group/btn shadow-md"
              >
                <span>VIEW Rs. 500 DEALS</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Rs 700 Collection */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative rounded-2xl overflow-hidden bg-white border border-stone-200/80 p-8 sm:p-12 hover:border-[#B8860B]/60 transition-all duration-500 flex flex-col justify-between shadow-lg hover:shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-all duration-700 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono tracking-widest text-[#8B6508] uppercase border border-[#B8860B]/30 px-3 py-1 rounded-full bg-[#B8860B]/10 font-bold">
                  MOST POPULAR
                </span>
                <Tag className="w-5 h-5 text-zinc-400 group-hover:text-[#B8860B] transition-colors" />
              </div>

              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-zinc-900 font-bold mb-2">
                Rs. 700 COLLECTION
              </h3>

              <p className="text-zinc-600 text-sm sm:text-base font-normal mb-8 leading-relaxed">
                More style. Still an incredible price. Tailored Oxford shirts, linen blends, and structured overshirts.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs text-zinc-400 uppercase font-mono block">Fixed Deal Price</span>
                <span className="font-serif-editorial text-5xl sm:text-6xl font-extrabold gold-gradient-text">
                  ₨700
                </span>
              </div>

              <button
                onClick={() => handleDealClick("700")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 text-white hover:bg-[#B8860B] font-bold text-xs uppercase tracking-widest transition-all duration-300 group/btn shadow-md"
              >
                <span>VIEW Rs. 700 DEALS</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
