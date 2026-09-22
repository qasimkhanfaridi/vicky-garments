"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play, Video, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function TikTokSection() {
  const videoPreviews = [
    {
      id: "v1",
      title: "Rs. 500 Shirt Unboxing & Fit Check",
      views: "12.4K",
      thumbnail: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "v2",
      title: "New Saddar Rawalpindi Stock Arrival",
      views: "24.8K",
      thumbnail: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "v3",
      title: "Rs. 700 Oxford Casual Styling",
      views: "18.2K",
      thumbnail: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="tiktok" className="py-24 bg-[#F5F4F0] border-t border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-200 text-zinc-800 text-xs font-mono uppercase tracking-widest mb-3 shadow-sm"
          >
            <Video className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>TIKTOK FASHION CHANNEL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-editorial text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight"
          >
            SEE WHAT&apos;S NEW
          </motion.h2>

          <p className="text-zinc-600 text-sm sm:text-base mt-3 font-normal leading-relaxed">
            Follow Vicky Garments on TikTok for our latest styles, deals and store arrivals in Saddar, Rawalpindi.
          </p>

          <div className="mt-4 inline-block">
            <span className="text-xs font-mono tracking-widest text-[#8B6508] px-3.5 py-1 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/30 font-bold">
              {siteConfig.tiktokHandle}
            </span>
          </div>
        </div>

        {/* TikTok Video Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {videoPreviews.map((vid, idx) => (
            <motion.a
              key={vid.id}
              href={siteConfig.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative rounded-xl overflow-hidden aspect-[9/16] bg-stone-900 border border-stone-200 hover:border-[#B8860B]/60 transition-all duration-500 shadow-xl"
            >
              <img
                src={vid.thumbnail}
                alt={vid.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Play Button Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md border border-white flex items-center justify-center text-zinc-900 group-hover:scale-110 group-hover:bg-[#B8860B] group-hover:text-white transition-all duration-300 shadow-2xl">
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Card Copy */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <span className="text-[10px] font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 mb-2 inline-block">
                  {vid.views} Views
                </span>
                <h4 className="text-white text-xs font-semibold line-clamp-2 leading-snug">
                  {vid.title}
                </h4>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={siteConfig.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-900 text-white hover:bg-[#B8860B] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>FOLLOW ON TIKTOK ({siteConfig.tiktokHandle})</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
