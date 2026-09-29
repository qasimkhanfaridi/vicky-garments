"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Lock,
  Package,
  CheckCircle2,
  Clock,
  Truck,
  Copy,
  Plus,
  Trash2,
  Search,
  ArrowLeft,
  UserCheck,
  MapPin,
  MessageSquare,
  AlertCircle
} from "lucide-react";
import { Order } from "@/data/orders";
import {
  getStoredOrders,
  updateOrderStatus,
  deleteOrder,
  createNewOrder,
  DEFAULT_ADMIN_PIN
} from "@/utils/orderStore";

export default function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);

  const [orders, setOrders] = useState<Order[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // New Order Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCustomerName, setNewCustomerName] = useState("");
  const [newCustomerPhone, setNewCustomerPhone] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newCity, setNewCity] = useState("Rawalpindi");
  const [newProductName, setNewProductName] = useState("Classic Textured Cotton Polo");
  const [newPrice, setNewPrice] = useState(500);
  const [newSize, setNewSize] = useState("M");
  const [newPaymentMethod, setNewPaymentMethod] = useState<"EasyPaisa" | "JazzCash" | "Bank Transfer">("EasyPaisa");

  useEffect(() => {
    // Check session authentication
    const authSession = sessionStorage.getItem("vicky_admin_authed");
    if (authSession === "true") {
      setIsAuthenticated(true);
      setOrders(getStoredOrders());
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === DEFAULT_ADMIN_PIN || pinInput === "admin123") {
      setIsAuthenticated(true);
      sessionStorage.setItem("vicky_admin_authed", "true");
      setOrders(getStoredOrders());
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleStatusChange = (orderId: string, newStatus: Order["paymentStatus"]) => {
    const updated = updateOrderStatus(orderId, newStatus);
    setOrders(updated);
  };

  const handleAssignStaff = (orderId: string, staffName: string) => {
    const currentStatus = orders.find((o) => o.id === orderId)?.paymentStatus || "Pending Payment";
    const updated = updateOrderStatus(orderId, currentStatus, staffName);
    setOrders(updated);
  };

  const handleDelete = (orderId: string) => {
    if (confirm("Are you sure you want to delete order " + orderId + "?")) {
      const updated = deleteOrder(orderId);
      setOrders(updated);
    }
  };

  const handleCreateManualOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCustomerName || !newCustomerPhone || !newAddress) return;

    createNewOrder({
      customerName: newCustomerName,
      customerPhone: newCustomerPhone,
      deliveryAddress: newAddress,
      city: newCity,
      productName: newProductName,
      productId: newPrice === 500 ? "VG-501" : "VG-701",
      productPrice: Number(newPrice),
      size: newSize,
      paymentMethod: newPaymentMethod,
      paymentStatus: "Pending Payment",
      assignedStaff: "Unassigned"
    });

    setOrders(getStoredOrders());
    setIsAddModalOpen(false);

    // Reset form
    setNewCustomerName("");
    setNewCustomerPhone("");
    setNewAddress("");
  };

  // Generate WhatsApp Rider Delivery Note
  const generateRiderNote = (order: Order) => {
    const text = `📦 *VICKY GARMENTS - DELIVERY SLIP FOR RIDER*
----------------------------------------
📌 *Order ID:* ${order.id}
👤 *Customer:* ${order.customerName}
📞 *Phone:* ${order.customerPhone}
📍 *Address:* ${order.deliveryAddress}, ${order.city}

🛍️ *Item:* ${order.productName} (Rs. ${order.productPrice})
🏷️ *Size:* ${order.size}
💳 *Payment Status:* ${order.paymentMethod} - ${order.paymentStatus.toUpperCase()}

🚴 *Rider:* ${order.assignedStaff || "Unassigned"}`;

    navigator.clipboard.writeText(text);
    setCopiedId(order.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Filtered Orders
  const filteredOrders = orders.filter((ord) => {
    const matchesStatus = filterStatus === "All" || ord.paymentStatus === filterStatus;
    const matchesSearch =
      ord.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ord.customerPhone.includes(searchQuery) ||
      ord.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ord.deliveryAddress.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Calculate Metrics
  const totalOrders = orders.length;
  const pendingPayment = orders.filter((o) => o.paymentStatus === "Pending Payment").length;
  const verifiedPayment = orders.filter((o) => o.paymentStatus === "Payment Verified").length;
  const outForDelivery = orders.filter((o) => o.paymentStatus === "Out for Delivery").length;
  const delivered = orders.filter((o) => o.paymentStatus === "Delivered").length;
  const totalRevenue = orders.reduce((sum, o) => sum + o.productPrice, 0);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0B0B0C] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#141416] border border-white/10 rounded-2xl p-8 shadow-2xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mx-auto mb-6">
            <Lock className="w-7 h-7" />
          </div>

          <h1 className="font-serif-editorial text-2xl font-bold text-white mb-2">
            VICKY GARMENTS ADMIN
          </h1>
          <p className="text-zinc-400 text-xs mb-6">
            Enter Admin Passkey to view customer orders and assign delivery staff.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Enter Admin PIN (Default: vicky123)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-zinc-500 text-sm font-mono text-center focus:outline-none focus:border-[#D4AF37]"
              />
              {pinError && (
                <p className="text-red-400 text-xs mt-2 font-mono">
                  Incorrect PIN. Please try default &quot;vicky123&quot;.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#E6C687] text-black font-extrabold text-xs uppercase tracking-widest transition-all shadow-lg"
            >
              UNLOCK ADMIN PORTAL
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-white/5">
            <Link
              href="/"
              className="text-xs font-mono text-zinc-500 hover:text-white flex items-center justify-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Store Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-zinc-200 font-sans pb-24">
      {/* Admin Navigation */}
      <header className="bg-[#141416] border-b border-white/10 sticky top-0 z-30 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <span className="font-serif-editorial text-xl font-bold text-white tracking-wider">
              VICKY GARMENTS · ADMIN ORDERS PORTAL
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4AF37] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#E6C687] transition-all shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>LOG MANUAL ORDER</span>
            </button>

            <button
              onClick={() => {
                sessionStorage.removeItem("vicky_admin_authed");
                setIsAuthenticated(false);
              }}
              className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 hover:text-white"
            >
              Lock Portal
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Analytics Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-[#141416] border border-white/10 rounded-xl p-5">
            <span className="text-xs font-mono text-zinc-400 uppercase block">Total Orders</span>
            <span className="font-serif-editorial text-3xl font-bold text-white mt-1 block">
              {totalOrders}
            </span>
          </div>

          <div className="bg-[#141416] border border-white/10 rounded-xl p-5">
            <span className="text-xs font-mono text-amber-400 uppercase block">Pending Payment</span>
            <span className="font-serif-editorial text-3xl font-bold text-amber-400 mt-1 block">
              {pendingPayment}
            </span>
          </div>

          <div className="bg-[#141416] border border-white/10 rounded-xl p-5">
            <span className="text-xs font-mono text-emerald-400 uppercase block">Payment Verified</span>
            <span className="font-serif-editorial text-3xl font-bold text-emerald-400 mt-1 block">
              {verifiedPayment}
            </span>
          </div>

          <div className="bg-[#141416] border border-white/10 rounded-xl p-5">
            <span className="text-xs font-mono text-sky-400 uppercase block">With Delivery Rider</span>
            <span className="font-serif-editorial text-3xl font-bold text-sky-400 mt-1 block">
              {outForDelivery}
            </span>
          </div>

          <div className="bg-[#141416] border border-white/10 rounded-xl p-5 col-span-2 lg:col-span-1">
            <span className="text-xs font-mono text-[#D4AF37] uppercase block">Total Value</span>
            <span className="font-serif-editorial text-3xl font-bold text-[#D4AF37] mt-1 block">
              ₨{totalRevenue}
            </span>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-[#141416] border border-white/10 rounded-xl p-4 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by customer name, phone, address, or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-black/50 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Status Filter Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {["All", "Pending Payment", "Payment Verified", "Out for Delivery", "Delivered"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                  filterStatus === status
                    ? "bg-[#D4AF37] text-black font-bold"
                    : "bg-white/5 text-zinc-400 border border-white/10 hover:text-white"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Orders Table & Cards */}
        <div className="space-y-4">
          {filteredOrders.length === 0 ? (
            <div className="bg-[#141416] rounded-2xl border border-white/10 p-12 text-center">
              <Package className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
              <p className="text-zinc-400 font-mono text-sm">No orders matching your filter criteria.</p>
            </div>
          ) : (
            filteredOrders.map((ord) => (
              <div
                key={ord.id}
                className="bg-[#141416] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all shadow-xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-4 border-b border-white/10">
                  
                  {/* Customer & Item Details */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#D4AF37] font-bold px-2.5 py-0.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                        {ord.id}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">{ord.createdAt}</span>
                    </div>

                    <h3 className="font-serif-editorial text-xl font-bold text-white pt-1">
                      {ord.customerName} · <span className="font-mono text-sm text-zinc-400">{ord.customerPhone}</span>
                    </h3>

                    <p className="text-xs text-zinc-400 font-mono flex items-center gap-1.5 pt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      {ord.deliveryAddress}, {ord.city}
                    </p>
                  </div>

                  {/* Product & Payment */}
                  <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                      <span className="text-white text-sm font-bold block">{ord.productName}</span>
                      <span className="text-xs font-mono text-zinc-400">Code: {ord.productId} | Size: {ord.size}</span>
                      <span className="text-xs font-mono text-amber-400 block font-bold mt-0.5">
                        💳 {ord.paymentMethod}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="font-serif-editorial text-2xl font-bold text-white">
                        ₨{ord.productPrice}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Workflow Status & Delivery Staff Controls */}
                <div className="pt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                  
                  {/* Status Dropdown */}
                  <div className="flex items-center gap-3">
                    <label className="text-xs font-mono text-zinc-400 uppercase">Status:</label>
                    <select
                      value={ord.paymentStatus}
                      onChange={(e) => handleStatusChange(ord.id, e.target.value as Order["paymentStatus"])}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold border focus:outline-none ${
                        ord.paymentStatus === "Pending Payment"
                          ? "bg-amber-950/80 text-amber-300 border-amber-800"
                          : ord.paymentStatus === "Payment Verified"
                          ? "bg-emerald-950/80 text-emerald-300 border-emerald-800"
                          : ord.paymentStatus === "Out for Delivery"
                          ? "bg-sky-950/80 text-sky-300 border-sky-800"
                          : "bg-zinc-800 text-zinc-300 border-zinc-700"
                      }`}
                    >
                      <option value="Pending Payment">⏳ Pending Payment</option>
                      <option value="Payment Verified">✅ Payment Verified</option>
                      <option value="Out for Delivery">🚚 Out for Delivery</option>
                      <option value="Delivered">🎉 Delivered</option>
                    </select>
                  </div>

                  {/* Rider / Delivery Staff Input */}
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-zinc-500 shrink-0" />
                    <input
                      type="text"
                      placeholder="Assign Delivery Rider..."
                      value={ord.assignedStaff || ""}
                      onChange={(e) => handleAssignStaff(ord.id, e.target.value)}
                      className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-[#D4AF37] w-48"
                    />

                    {/* Copy Delivery Note Button */}
                    <button
                      onClick={() => generateRiderNote(ord)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-all"
                      title="Copy Rider Delivery Slip for WhatsApp"
                    >
                      <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{copiedId === ord.id ? "Copied Slip!" : "Rider Slip"}</span>
                    </button>

                    {/* Delete button */}
                    <button
                      onClick={() => handleDelete(ord.id)}
                      className="p-1.5 rounded-lg bg-red-950/50 hover:bg-red-900 text-red-400 border border-red-800/40"
                      aria-label="Delete order"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

      </div>

      {/* Manual Order Creation Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-[#141416] border border-white/15 rounded-2xl p-6 shadow-2xl">
            <h3 className="font-serif-editorial text-xl font-bold text-white mb-4">
              Log Manual Customer Order
            </h3>

            <form onSubmit={handleCreateManualOrder} className="space-y-3 text-xs">
              <div>
                <label className="block text-zinc-400 font-mono mb-1">Customer Name *</label>
                <input
                  type="text"
                  required
                  value={newCustomerName}
                  onChange={(e) => setNewCustomerName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-mono mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={newCustomerPhone}
                  onChange={(e) => setNewCustomerPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-mono mb-1">Delivery Address *</label>
                <input
                  type="text"
                  required
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-400 font-mono mb-1">Price Deal</label>
                  <select
                    value={newPrice}
                    onChange={(e) => setNewPrice(Number(e.target.value))}
                    className="w-full px-2 py-2 rounded-lg bg-black/60 border border-white/10 text-white"
                  >
                    <option value={500}>Rs. 500 Item</option>
                    <option value={700}>Rs. 700 Item</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-400 font-mono mb-1">Payment Method</label>
                  <select
                    value={newPaymentMethod}
                    onChange={(e) => setNewPaymentMethod(e.target.value as any)}
                    className="w-full px-2 py-2 rounded-lg bg-black/60 border border-white/10 text-white"
                  >
                    <option value="EasyPaisa">EasyPaisa</option>
                    <option value="JazzCash">JazzCash</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#D4AF37] text-black font-extrabold"
                >
                  Save Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
