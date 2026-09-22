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

  // Handle Escape Key Close
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-stone-200 rounded-2xl shadow-2xl z-10 flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-100 text-zinc-600 hover:text-zinc-900 hover:bg-stone-200 transition-colors"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5 text-zinc-900" />
        </button>

        {/* Product Image Section */}
        <div className="md:w-1/2 relative bg-stone-100 aspect-square md:aspect-auto">
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
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-white">
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

            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-zinc-900 font-bold mb-3">
              {product.name}
            </h2>

            {/* Price Row */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-serif-editorial text-3xl font-extrabold gold-gradient-text">
                ₨{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm font-mono text-zinc-400 line-through">
                  ₨{product.originalPrice}
                </span>
              )}
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                In Stock at Store
              </span>
            </div>

            {/* Description */}
            <p className="text-zinc-600 text-sm font-normal leading-relaxed mb-6">
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
                    className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
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
            <div className="grid grid-cols-2 gap-3 mb-8 pt-4 border-t border-stone-100 text-xs text-zinc-600 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B8860B]" />
                <span>100% Quality Garment</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#B8860B]" />
                <span>Fast WhatsApp Pickup/Delivery</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Direct Order CTA */}
          <div className="space-y-3 pt-4 border-t border-stone-100">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-xl bg-zinc-900 hover:bg-[#B8860B] text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>ORDER THIS ITEM ON WHATSAPP ({selectedSize})</span>
            </a>
            
            <p className="text-[11px] text-zinc-400 font-mono text-center">
              Clicking will open WhatsApp with pre-filled product details.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
