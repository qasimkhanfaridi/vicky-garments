import { siteConfig } from "@/config/siteConfig";

export interface OrderProductParams {
  id: string;
  name: string;
  price: number;
  size?: string;
  category?: string;
}

/**
 * Generates an encoded wa.me URL for ordering a specific product via WhatsApp.
 */
export function getProductWhatsAppLink(product: OrderProductParams): string {
  const number = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  
  const sizeText = product.size ? `\nSize Preference: ${product.size}` : "";

  const message = `Assalam-o-Alaikum Vicky Garments,

I am interested in ordering the following item:

📦 *Product:* ${product.name}
💰 *Price:* Rs. ${product.price}
🏷️ *Product Code:* ${product.id}${sizeText}

💳 *Payment:* Ready to pay advance via EasyPaisa / JazzCash / Bank Transfer.

Please confirm availability and share account details.

Thank you!`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a general WhatsApp inquiry link.
 */
export function getGeneralWhatsAppLink(customSubject?: string): string {
  const number = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");

  const subjectText = customSubject ? ` regarding ${customSubject}` : "";

  const message = `Assalam-o-Alaikum Vicky Garments,

I am contacting you from your website${subjectText}.

Could you please share details about your current Rs. 500 & Rs. 700 deals, stock availability, and EasyPaisa/JazzCash/Bank account details for advance payment?

Thank you!`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
