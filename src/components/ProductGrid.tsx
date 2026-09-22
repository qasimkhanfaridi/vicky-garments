"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, CATEGORIES, Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  onQuickView: (product: Product) => void;
}

export default function ProductGrid({
  selectedCategory = "all",
  onSelectCategory,
  onQuickView,
}: ProductGridProps) {
  const [activeTab, setActiveTab] = useState<string>(selectedCategory);

  useEffect(() => {
    if (selectedCategory) {
      setActiveTab(selectedCategory);
    }
  }, [selectedCategory]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (onSelectCategory) {
      onSelectCategory(tabId);
    }
  };

  const filteredProducts = products.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "500") return item.category === "500";
    if (activeTab === "700") return item.category === "700";
    if (activeTab === "new-arrivals") return item.isNewArrival;
    if (activeTab === "best-sellers") return item.isBestSeller;
    return true;
  });

  return (
    <section id="collection" className="py-24 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subheading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-200 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8860B] font-bold block mb-2">
              CURATED FASHION COLLECTION
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
              EXPLORE OUR GARMENTS
            </h2>
          </div>
          <p className="text-zinc-600 text-xs sm:text-sm font-normal mt-4 md:mt-0 max-w-md leading-relaxed">
            Click any garment to inspect size options or place an instant direct WhatsApp order with our Saddar store.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => handleTabChange(category.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-zinc-900 text-white shadow-md scale-105"
                  : "bg-white text-zinc-700 border border-stone-200 hover:border-[#B8860B] hover:text-zinc-900 shadow-sm"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <ProductCard product={product} onQuickView={onQuickView} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200">
            <p className="text-zinc-500 text-sm font-mono">No products found in this category.</p>
          </div>
        )}

      </div>
    </section>
  );
}
