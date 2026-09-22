"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PriceCampaign from "@/components/PriceCampaign";
import ProductGrid from "@/components/ProductGrid";
import ProductModal from "@/components/ProductModal";
import TikTokSection from "@/components/TikTokSection";
import WhyVicky from "@/components/WhyVicky";
import LocationSection from "@/components/LocationSection";
import TrustProof from "@/components/TrustProof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import JsonLd from "@/components/JsonLd";
import { Product } from "@/data/products";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleQuickView = (product: Product) => {
    setActiveModalProduct(product);
  };

  const handleCloseModal = () => {
    setActiveModalProduct(null);
  };

  return (
    <main className="min-h-screen bg-[#0B0B0C] flex flex-col relative selection:bg-[#D4AF37] selection:text-black">
      <JsonLd />
      
      {/* Navigation Header */}
      <Navbar />

      {/* Main Campaign Sections */}
      <Hero />

      {/* Visually Dominant Deal Section (Rs. 500 & Rs. 700) */}
      <PriceCampaign onSelectCategory={(cat) => handleCategorySelect(cat)} />

      {/* Product Catalog Grid */}
      <ProductGrid
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
        onQuickView={handleQuickView}
      />

      {/* Social Media Showcase */}
      <TikTokSection />

      {/* Trust & Unique Value Proposition */}
      <WhyVicky />

      {/* Saddar Rawalpindi Store Location */}
      <LocationSection />

      {/* Google Business Rating & Proof */}
      <TrustProof />

      {/* Dramatic Closing CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile WhatsApp Order CTA */}
      <MobileStickyCTA />

      {/* Accessible Quick View Product Drawer / Modal */}
      <ProductModal product={activeModalProduct} onClose={handleCloseModal} />
    </main>
  );
}
