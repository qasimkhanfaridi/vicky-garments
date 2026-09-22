export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: "500" | "700" | "new-arrivals" | "best-sellers";
  dealTag?: string;
  image: string;
  secondaryImage?: string;
  sizes: string[];
  description: string;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
}

export const products: Product[] = [
  {
    id: "VG-501",
    name: "Classic Textured Cotton Polo",
    price: 500,
    originalPrice: 1200,
    category: "500",
    dealTag: "Rs. 500 Special",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1000&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    description: "Breathable textured cotton polo shirt with ribbed trim collar. High comfort for daily summer and spring wear.",
    isBestSeller: true
  },
  {
    id: "VG-701",
    name: "Oxford Slim-Fit Casual Shirt",
    price: 700,
    originalPrice: 1600,
    category: "700",
    dealTag: "Rs. 700 Special",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop",
    sizes: ["M", "L", "XL", "XXL"],
    description: "Tailored Oxford casual button-up crafted from premium combed cotton. Perfect for evening outings or semi-formal wear.",
    isBestSeller: true
  },
  {
    id: "VG-502",
    name: "Minimalist Heavyweight Crew Tee",
    price: 500,
    originalPrice: 950,
    category: "500",
    dealTag: "Rs. 500 Deal",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    description: "100% ring-spun cotton t-shirt with reinforced double-stitched hem and soft tactile feel.",
    isNewArrival: true
  },
  {
    id: "VG-702",
    name: "Linen-Blend Summer Casual Shirt",
    price: 700,
    originalPrice: 1800,
    category: "700",
    dealTag: "Rs. 700 Deal",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    description: "Ultra-cool relaxed linen blend shirt featuring mandarin collar styling. Ideal for hot Rawalpindi summer days.",
    isNewArrival: true
  },
  {
    id: "VG-503",
    name: "Urban Graphic Streetwear Tee",
    price: 500,
    originalPrice: 1100,
    category: "500",
    dealTag: "Rs. 500 Deal",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
    sizes: ["M", "L", "XL"],
    description: "Modern typography graphic print t-shirt. Oversized relaxed fit for effortless street style.",
    isBestSeller: true
  },
  {
    id: "VG-703",
    name: "Structured Twill Utility Overshirt",
    price: 700,
    originalPrice: 2000,
    category: "700",
    dealTag: "Top Value",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1000&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1000&auto=format&fit=crop",
    sizes: ["M", "L", "XL"],
    description: "Durable cotton twill overshirt with twin chest flap pockets. Versatile layer over t-shirts.",
    isNewArrival: true
  },
  {
    id: "VG-504",
    name: "Slim Fit Stretch Cotton Chino Short",
    price: 500,
    originalPrice: 1300,
    category: "500",
    dealTag: "Rs. 500 Deal",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1000&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
    sizes: ["30", "32", "34", "36"],
    description: "Comfortable stretch chino shorts with slant pockets. Everyday casual essential.",
    isBestSeller: false
  },
  {
    id: "VG-704",
    name: "Embroidered Kurta Casual Shirt",
    price: 700,
    originalPrice: 1750,
    category: "700",
    dealTag: "Rs. 700 Special",
    image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1000&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1000&auto=format&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    description: "Subtle collar embroidery on soft blended cotton. Elegant traditional-meets-modern casual shirt.",
    isBestSeller: true
  }
];

export const CATEGORIES = [
  { id: "all", label: "All Garments" },
  { id: "500", label: "Rs. 500 Deals" },
  { id: "700", label: "Rs. 700 Deals" },
  { id: "new-arrivals", label: "New Arrivals" },
  { id: "best-sellers", label: "Best Sellers" },
] as const;
