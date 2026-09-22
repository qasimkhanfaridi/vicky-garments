export const siteConfig = {
  name: "Vicky Garments",
  tagline: "Style That Doesn't Break The Bank",
  location: "Saddar, Rawalpindi",
  fullAddress: "H3V4+G6F, Saddar, Rawalpindi, 46000, Pakistan",
  city: "Rawalpindi",
  province: "Punjab",
  postalCode: "46000",
  country: "Pakistan",

  // Centralized WhatsApp contact configuration
  // Replace this phone number with your active WhatsApp business phone number in international format without spaces (e.g. "923001234567")
  whatsappNumber: "923000000000", 
  whatsappDisplayNumber: "+92 300 0000000",

  // Social Links
  tiktokUrl: "https://www.tiktok.com/@vicky.garment",
  tiktokHandle: "@vicky.garment",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=H3V4%2BG6F,+Saddar,+Rawalpindi,+46000,+Pakistan",

  // Real business stats from public listing
  googleRating: 4.1,
  googleReviewCount: 36,

  // Campaign Highlights
  featuredDeals: [
    {
      price: 500,
      title: "Rs. 500 Collection",
      subtitle: "Everyday style. Incredible value.",
      badge: "UNBEATABLE VALUE",
      id: "deal-500",
    },
    {
      price: 700,
      title: "Rs. 700 Collection",
      subtitle: "More style. Still an incredible price.",
      badge: "MOST POPULAR",
      id: "deal-700",
    }
  ],

  // SEO metadata
  seo: {
    title: "Vicky Garments Saddar Rawalpindi | Rs. 500 & Rs. 700 Garments",
    description: "Shop affordable fashion from Vicky Garments in Saddar, Rawalpindi. Explore our Rs. 500 and Rs. 700 garment collections and order directly through WhatsApp.",
    keywords: ["Vicky Garments", "Saddar Rawalpindi garments", "Rs 500 clothes Rawalpindi", "Rs 700 shirts Saddar", "Affordable fashion Rawalpindi", "Menswear Saddar"],
  }
};

export type SiteConfig = typeof siteConfig;
