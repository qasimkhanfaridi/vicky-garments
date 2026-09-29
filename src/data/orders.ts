export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  deliveryAddress: string;
  city: string;
  productName: string;
  productId: string;
  productPrice: number;
  size: string;
  paymentMethod: "EasyPaisa" | "JazzCash" | "Bank Transfer";
  paymentStatus: "Pending Payment" | "Payment Verified" | "Out for Delivery" | "Delivered";
  assignedStaff?: string;
  notes?: string;
  createdAt: string;
}

export const initialOrders: Order[] = [
  {
    id: "VG-2026-101",
    customerName: "Hamza Ahmed",
    customerPhone: "03125557890",
    deliveryAddress: "House 42, Street 5, Commercial Market, Satellite Town",
    city: "Rawalpindi",
    productName: "Classic Textured Cotton Polo",
    productId: "VG-501",
    productPrice: 500,
    size: "M",
    paymentMethod: "EasyPaisa",
    paymentStatus: "Payment Verified",
    assignedStaff: "Ali Rider (Saddar Branch)",
    createdAt: "2026-09-29 11:30 AM"
  },
  {
    id: "VG-2026-102",
    customerName: "Usman Tariq",
    customerPhone: "03335123456",
    deliveryAddress: "Plaza 14, Main Saddar Bazaar, Near GPO",
    city: "Rawalpindi",
    productName: "Oxford Slim-Fit Casual Shirt",
    productId: "VG-701",
    productPrice: 700,
    size: "L",
    paymentMethod: "JazzCash",
    paymentStatus: "Out for Delivery",
    assignedStaff: "Bilal Rider",
    createdAt: "2026-09-29 10:15 AM"
  },
  {
    id: "VG-2026-103",
    customerName: "Zubair Khan",
    customerPhone: "03009876543",
    deliveryAddress: "Flat 3B, F-8/3",
    city: "Islamabad",
    productName: "Linen-Blend Summer Casual Shirt",
    productId: "VG-702",
    productPrice: 700,
    size: "XL",
    paymentMethod: "Bank Transfer",
    paymentStatus: "Pending Payment",
    assignedStaff: "Unassigned",
    createdAt: "2026-09-29 12:05 PM"
  }
];
