import { siteConfig } from "@/config/siteConfig";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "name": siteConfig.name,
    "description": siteConfig.seo.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "H3V4+G6F, Saddar",
      "addressLocality": siteConfig.city,
      "addressRegion": siteConfig.province,
      "postalCode": siteConfig.postalCode,
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.5936,
      "longitude": 73.0551
    },
    "url": "https://vickygarments.pk",
    "priceRange": "₨500 - ₨700",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": siteConfig.googleRating.toString(),
      "reviewCount": siteConfig.googleReviewCount.toString()
    },
    "sameAs": [
      siteConfig.tiktokUrl
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
