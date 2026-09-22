"use client";

import { motion } from "framer-motion";
import { DollarSign, ShieldCheck, MessageSquareCheck, MapPin } from "lucide-react";

export default function WhyVicky() {
  const features = [
    {
      icon: DollarSign,
      title: "GREAT PRICES",
      description: "Fashion at prices that make sense. Unbeatable Rs. 500 & Rs. 700 special deals.",
    },
    {
      icon: ShieldCheck,
      title: "QUALITY COLLECTION",
      description: "Carefully selected fabrics and tailored garments built for everyday style and durability.",
    },
    {
      icon: MessageSquareCheck,
      title: "EASY ORDERING",
      description: "Order directly through WhatsApp with zero checkout friction or registration forms.",
    },
    {
      icon: MapPin,
      title: "SADDAR LOCATION",
      description: "Visit our physical store located in the prime shopping hub of Saddar, Rawalpindi.",
    },
  ];

  return (
    <section className="py-24 bg-[#FAF9F6] border-t border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8860B] font-bold block mb-2">
            TRUST & VALUE
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            WHY SHOP WITH US?
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl bg-white border border-stone-200/90 p-8 hover:border-[#B8860B]/60 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-[#B8860B] mb-6 group-hover:scale-110 group-hover:bg-[#B8860B]/10 transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  <h3 className="font-serif-editorial text-xl text-zinc-900 font-bold mb-3 tracking-wide group-hover:text-[#B8860B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-zinc-600 text-xs sm:text-sm font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                  Vicky Garments Guarantee
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
