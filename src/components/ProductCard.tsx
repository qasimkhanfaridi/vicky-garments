"use client";

import { useState } from "react";
import { MessageCircle, Eye, Tag } from "lucide-react";
import { Product } from "@/data/products";
import { getProductWhatsAppLink } from "@/utils/whatsapp";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = getProductWhatsAppLink({
    id: product.id,
    name: product.name,
    price: product.price,
    category: product.category,
  });

  return (
    <div
      className="group relative rounded-xl bg-white border border-stone-200/90 overflow-hidden flex flex-col justify-between hover:border-[#B8860B]/60 transition-all duration-500 shadow-md hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Box */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
        <img
          src={isHovered && product.secondaryImage ? product.secondaryImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Price & Deal Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-zinc-900 text-white font-extrabold text-xs tracking-wider shadow-md">
            ₨{product.price}
          </span>
          {product.dealTag && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/95 backdrop-blur-md text-[#8B6508] font-mono text-[10px] font-bold tracking-wider border border-[#B8860B]/30 shadow-sm">
              <Tag className="w-2.5 h-2.5" />
              {product.dealTag}
            </span>
          )}
        </div>

        {/* Product ID Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-0.5 rounded bg-white/90 backdrop-blur-md text-zinc-600 font-mono text-[10px] tracking-widest border border-stone-200 font-semibold">
            {product.id}
          </span>
        </div>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-x-4 bottom-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hidden sm:block">
          <button
            onClick={() => onQuickView(product)}
            className="w-full py-2.5 rounded-lg bg-white/95 backdrop-blur-md border border-stone-300 hover:border-[#B8860B] text-zinc-900 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:text-[#B8860B] transition-colors shadow-md"
          >
            <Eye className="w-4 h-4" />
            <span>QUICK VIEW</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="font-serif-editorial text-lg text-zinc-900 font-bold line-clamp-1 group-hover:text-[#B8860B] transition-colors">
              {product.name}
            </h3>
          </div>

          <p className="text-zinc-600 text-xs line-clamp-2 font-normal mb-3 leading-relaxed">
            {product.description}
          </p>

          {/* Size Pill Indicators */}
          <div className="flex items-center gap-1.5 mb-4">
            <span className="text-[10px] font-mono uppercase text-zinc-400 font-semibold mr-1">Sizes:</span>
            {product.sizes.map((size) => (
              <span
                key={size}
                className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-[10px] font-mono text-zinc-700 font-semibold"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
          {/* WhatsApp Direct Order Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-lg bg-zinc-900 hover:bg-[#B8860B] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>ORDER ON WHATSAPP</span>
          </a>

          {/* Mobile Quick View Fallback */}
          <button
            onClick={() => onQuickView(product)}
            className="w-full py-1.5 text-zinc-500 hover:text-zinc-900 text-[11px] font-mono tracking-wider text-center sm:hidden font-semibold"
          >
            View Details & Size Selection →
          </button>
        </div>
      </div>
    </div>
  );
}
