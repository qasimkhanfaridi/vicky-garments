"use client";

import { useState, useEffect } from "react";
import { X, MessageCircle, ShieldCheck, Truck } from "lucide-react";
import { Product } from "@/data/products";
import { getProductWhatsAppLink } from "@/utils/whatsapp";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");

  useEffect(() => {
    if (product && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  // Handle Escape Key Close & Body Lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappUrl = getProductWhatsAppLink({
    id: product.id,
    name: product.name,
    price: product.price,
    size: selectedSize,
    category: product.category,
  });

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 lg:p-8 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto bg-white border-t sm:border border-stone-200 rounded-t-3xl sm:rounded-2xl shadow-2xl z-10 flex flex-col md:flex-row animate-in slide-in-from-bottom duration-300">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2.5 rounded-full bg-stone-100 text-zinc-700 hover:text-zinc-900 hover:bg-stone-200 transition-colors"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5 text-zinc-900" />
        </button>

        {/* Product Image Section */}
        <div className="md:w-1/2 relative bg-stone-100 aspect-square sm:aspect-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className="px-3.5 py-1 rounded-md bg-zinc-900 text-white font-extrabold text-sm shadow-md">
              ₨{product.price}
            </span>
            {product.dealTag && (
              <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#8B6508] text-xs font-mono font-bold border border-[#B8860B]/30 shadow-sm">
                {product.dealTag}
              </span>
            )}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="md:w-1/2 p-5 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B8860B] font-bold">
                Product ID: {product.id}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                Saddar, Rawalpindi
              </span>
            </div>

            <h2 className="font-serif-editorial text-xl sm:text-3xl text-zinc-900 font-bold mb-3">
              {product.name}
            </h2>

            {/* Price Row */}
            <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
              <span className="font-serif-editorial text-2xl sm:text-3xl font-extrabold gold-gradient-text-light">
                ₨{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs sm:text-sm font-mono text-zinc-400 line-through">
                  ₨{product.originalPrice}
                </span>
              )}
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                In Stock at Store
              </span>
            </div>

            {/* Description */}
            <p className="text-zinc-600 text-xs sm:text-sm font-normal leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Interactive Size Selector */}
            <div className="mb-6">
              <label className="block text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold mb-2">
                Select Your Size:
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[44px] min-h-[44px] px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all active:scale-95 ${
                      selectedSize === size
                        ? "bg-zinc-900 text-white ring-2 ring-zinc-900 ring-offset-2 ring-offset-white shadow-md"
                        : "bg-stone-100 border border-stone-200 text-zinc-700 hover:bg-stone-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 mb-6 pt-4 border-t border-stone-100 text-xs text-zinc-600 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>100% Quality Garment</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>Fast WhatsApp Pickup</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Direct Order CTA */}
          <div className="space-y-2.5 pt-4 border-t border-stone-100 pb-safe">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 sm:py-4 px-5 rounded-xl bg-zinc-900 hover:bg-[#B8860B] text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 shadow-xl active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>ORDER THIS ITEM ON WHATSAPP ({selectedSize})</span>
            </a>
            
            <p className="text-[10px] text-zinc-400 font-mono text-center">
              Clicking will open WhatsApp with pre-filled product details.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
