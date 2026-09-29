import { Order, initialOrders } from "@/data/orders";

const STORAGE_KEY = "vicky_garments_orders";
const ADMIN_PIN_KEY = "vicky_garments_admin_pin";
export const DEFAULT_ADMIN_PIN = "vicky123";

export function getStoredOrders(): Order[] {
  if (typeof window === "undefined") return initialOrders;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialOrders));
      return initialOrders;
    }
    return JSON.parse(saved);
  } catch (e) {
    return initialOrders;
  }
}

export function saveOrders(orders: Order[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  } catch (e) {
    console.error("Failed to save orders:", e);
  }
}

export function createNewOrder(newOrderData: Omit<Order, "id" | "createdAt">): Order {
  const currentOrders = getStoredOrders();
  const nextNumber = currentOrders.length + 101;
  const newOrder: Order = {
    ...newOrderData,
    id: `VG-2026-${nextNumber}`,
    createdAt: new Date().toLocaleString("en-US", {
      dateStyle: "short",
      timeStyle: "short"
    })
  };
  const updated = [newOrder, ...currentOrders];
  saveOrders(updated);
  return newOrder;
}

export function updateOrderStatus(orderId: string, status: Order["paymentStatus"], assignedStaff?: string): Order[] {
  const currentOrders = getStoredOrders();
  const updated = currentOrders.map((ord) => {
    if (ord.id === orderId) {
      return {
        ...ord,
        paymentStatus: status,
        ...(assignedStaff !== undefined ? { assignedStaff } : {})
      };
    }
    return ord;
  });
  saveOrders(updated);
  return updated;
}

export function deleteOrder(orderId: string): Order[] {
  const currentOrders = getStoredOrders();
  const updated = currentOrders.filter((ord) => ord.id !== orderId);
  saveOrders(updated);
  return updated;
}
