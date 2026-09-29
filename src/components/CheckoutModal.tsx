"use client";

import { useState } from "react";
import { X, MessageCircle, CheckCircle2, ShieldCheck, CreditCard } from "lucide-react";
import { Product } from "@/data/products";
import { createNewOrder } from "@/utils/orderStore";

interface CheckoutModalProps {
  product: Product | null;
  selectedSize: string;
  onClose: () => void;
}

export default function CheckoutModal({
  product,
  selectedSize,
  onClose,
}: CheckoutModalProps) {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [city, setCity] = useState("Rawalpindi");
  const [paymentMethod, setPaymentMethod] = useState<"EasyPaisa" | "JazzCash" | "Bank Transfer">("EasyPaisa");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !deliveryAddress) return;

    // Save order into Admin Store
    const created = createNewOrder({
      customerName,
      customerPhone,
      deliveryAddress,
      city,
      productName: product.name,
      productId: product.id,
      productPrice: product.price,
      size: selectedSize || product.sizes[0],
      paymentMethod,
      paymentStatus: "Pending Payment",
      assignedStaff: "Unassigned",
    });

    setIsSubmitted(true);

    // Format WhatsApp message for merchant
    const message = `Assalam-o-Alaikum Vicky Garments,

I have submitted an order on your website:

📌 *Order ID:* ${created.id}
👤 *Name:* ${customerName}
📞 *Phone:* ${customerPhone}
📍 *Address:* ${deliveryAddress}, ${city}

📦 *Item:* ${product.name} (Rs. ${product.price})
🏷️ *Code:* ${product.id} | *Size:* ${selectedSize || product.sizes[0]}
💳 *Payment Method:* ${paymentMethod} (Advance Payment)

Please confirm my order and share your ${paymentMethod} account details for payment.`;

    const whatsappUrl = `https://wa.me/923000000000?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp after brief success delay
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white border border-stone-200 rounded-2xl shadow-2xl z-10 p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B8860B] font-bold mb-1">
              <span>DIRECT ORDER FORM</span>
            </div>

            <h3 className="font-serif-editorial text-2xl font-bold text-zinc-900 mb-2">
              Order Details for Delivery Staff
            </h3>

            <p className="text-zinc-600 text-xs mb-6">
              Enter your address & details below so our staff can prepare your order and verify advance payment.
            </p>

            {/* Product Summary Pill */}
            <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 mb-6 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-zinc-900 line-clamp-1">{product.name}</h4>
                <span className="text-[11px] font-mono text-zinc-500">Code: {product.id} · Size: {selectedSize || product.sizes[0]}</span>
              </div>
              <span className="font-serif-editorial text-lg font-bold gold-gradient-text-light">
                ₨{product.price}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-mono uppercase text-zinc-700 font-bold mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hamza Ahmed"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#B8860B] text-zinc-900 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono uppercase text-zinc-700 font-bold mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0300-1234567"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#B8860B] text-zinc-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-mono uppercase text-zinc-700 font-bold mb-1">
                    City *
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#B8860B] text-zinc-900 text-sm bg-white"
                  >
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Other City">Other City (Pakistan)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono uppercase text-zinc-700 font-bold mb-1">
                  Complete Delivery Address *
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="House / Flat #, Street #, Sector / Area"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#B8860B] text-zinc-900 text-sm"
                />
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block font-mono uppercase text-zinc-700 font-bold mb-1">
                  Preferred Advance Payment Method *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["EasyPaisa", "JazzCash", "Bank Transfer"] as const).map((method) => (
                    <button
                      type="button"
                      key={method}
                      onClick={() => setPaymentMethod(method)}
                      className={`py-2 px-2 rounded-lg font-mono font-bold text-[11px] text-center transition-all ${
                        paymentMethod === method
                          ? "bg-zinc-900 text-white border-2 border-zinc-900 shadow-sm"
                          : "bg-stone-100 text-zinc-700 border border-stone-200 hover:bg-stone-200"
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-900 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-amber-700 shrink-0" />
                <span>No COD. Payment account details will be shared on WhatsApp upon submission.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-zinc-900 hover:bg-[#B8860B] text-white font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>SUBMIT ORDER & OPEN WHATSAPP</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif-editorial text-2xl font-bold text-zinc-900">
              Order Logged Successfully!
            </h3>
            <p className="text-zinc-600 text-xs max-w-xs mx-auto">
              Your order has been registered in the Vicky Garments Admin System. Opening WhatsApp to complete confirmation...
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
