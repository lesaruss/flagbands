"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface CartItem {
  flagSlug: string;
  materialId: string;
  flagName: string;
  materialName: string;
  unitPriceCents: number;
  image: string;
  qty: number;
  preorder: boolean;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (flagSlug: string, materialId: string) => void;
  updateQty: (flagSlug: string, materialId: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotalCents: number;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "flagbands_cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore corrupt cart data
    }
    setHydrated(true);
  }, []);

  // Persist on every change (skip the very first render before hydration)
  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem: CartContextValue["addItem"] = (item, qty = 1) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.flagSlug === item.flagSlug && i.materialId === item.materialId
      );
      if (existingIndex >= 0) {
        const next = [...prev];
        next[existingIndex] = { ...next[existingIndex], qty: next[existingIndex].qty + qty };
        return next;
      }
      return [...prev, { ...item, qty }];
    });
  };

  const removeItem: CartContextValue["removeItem"] = (flagSlug, materialId) => {
    setItems((prev) => prev.filter((i) => !(i.flagSlug === flagSlug && i.materialId === materialId)));
  };

  const updateQty: CartContextValue["updateQty"] = (flagSlug, materialId, qty) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => !(i.flagSlug === flagSlug && i.materialId === materialId))
        : prev.map((i) => (i.flagSlug === flagSlug && i.materialId === materialId ? { ...i, qty } : i))
    );
  };

  const clear = () => setItems([]);

  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);
  const subtotalCents = useMemo(
    () => items.reduce((sum, i) => sum + i.unitPriceCents * i.qty, 0),
    [items]
  );

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clear, count, subtotalCents }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
