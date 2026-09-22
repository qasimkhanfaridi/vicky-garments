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
    <section id="tiktok" className="py-24 bg-[#121214] border-t border-white/10 relative overflow-hidden text-white">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/15 text-zinc-300 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <Video className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>TIKTOK FASHION CHANNEL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-editorial text-3xl sm:text-5xl font-bold text-white tracking-tight"
          >
            SEE WHAT&apos;S NEW
          </motion.h2>

          <p className="text-zinc-400 text-sm sm:text-base mt-3 font-light leading-relaxed">
            Follow Vicky Garments on TikTok for our latest styles, deals and store arrivals in Saddar, Rawalpindi.
          </p>

          <div className="mt-4 inline-block">
            <span className="text-xs font-mono tracking-widest text-[#D4AF37] px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 font-bold">
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
              className="group relative rounded-xl overflow-hidden aspect-[9/16] bg-black border border-white/15 hover:border-[#D4AF37]/60 transition-all duration-500 shadow-2xl"
            >
              <img
                src={vid.thumbnail}
                alt={vid.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Play Button Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 shadow-2xl">
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Card Copy */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <span className="text-[10px] font-mono text-zinc-300 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 mb-2 inline-block">
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
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#E6C687] text-black font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>FOLLOW ON TIKTOK ({siteConfig.tiktokHandle})</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
