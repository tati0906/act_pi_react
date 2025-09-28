"use client";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { products, Product } from "@/lib/products";
import { formatCOP } from "@/utils/currency";

export interface CartItem {
  id: string;
  qty: number;
}

export interface FullCartItem extends Product {
  qty: number;
  lineTotal: number;
}

interface CartContextType {
  items: CartItem[];
  full: FullCartItem[];
  total: number;
  add: (id: string, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  formatCOP: (value: number) => string;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cart:v1");
      if (saved) setItems(JSON.parse(saved));
    } catch {
      // ignorar errores
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("cart:v1", JSON.stringify(items));
    } catch {
      // ignorar errores
    }
  }, [items]);

  const full: FullCartItem[] = useMemo(
    () =>
      items.map((it) => {
        const p = products.find((x) => x.id === it.id)!;
        return { ...p, qty: it.qty, lineTotal: it.qty * p.price };
      }),
    [items]
  );

  const total = useMemo(
    () => full.reduce((acc, it) => acc + it.lineTotal, 0),
    [full]
  );

  const add = (id: string, qty = 1) => {
    setItems((prev) => {
      const i = prev.findIndex((p) => p.id === id);
      if (i >= 0) {
        const cp = [...prev];
        cp[i] = { ...cp[i], qty: cp[i].qty + qty };
        return cp;
      }
      return [...prev, { id, qty }];
    });
  };

  const remove = (id: string) =>
    setItems((prev) => prev.filter((p) => p.id !== id));

  const setQty = (id: string, qty: number) => {
    if (qty <= 0) return remove(id);
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty } : p))
    );
  };

  const clear = () => setItems([]);

  const value: CartContextType = {
    items,
    full,
    total,
    add,
    remove,
    setQty,
    clear,
    formatCOP,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
};