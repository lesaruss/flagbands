"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import NavBar from "../../components/NavBar";
import SiteFooter from "../../components/SiteFooter";
import { useCart } from "../../lib/cart-context";

function money(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export default function CartPage() {
  return (
    <Suspense fallback={null}>
      <CartPageInner />
    </Suspense>
  );
}

function CartPageInner() {
  const { items, updateQty, removeItem, subtotalCents, clear } = useCart();
  const searchParams = useSearchParams();
  const success = searchParams.get("success") === "1";
  const canceled = searchParams.get("canceled") === "1";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Clear the cart once after a successful checkout redirect.
  if (success && items.length > 0) {
    clear();
  }

  const handleCheckout = async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            flagSlug: i.flagSlug,
            materialId: i.materialId,
            flagName: i.flagName,
            materialName: i.materialName,
            unitPriceCents: i.unitPriceCents,
            qty: i.qty,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Checkout failed");
      }
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px 96px", minHeight: "60vh" }}>
        <h1
          style={{
            fontSize: 32,
            fontWeight: 900,
            color: "var(--fb-navy)",
            margin: "0 0 24px",
            letterSpacing: "-0.01em",
          }}
        >
          Your Cart
        </h1>

        {success && (
          <div
            style={{
              background: "#EAF7EE",
              border: "1px solid #B7E4C7",
              borderRadius: 12,
              padding: "16px 20px",
              marginBottom: 24,
              color: "#1B5E20",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Order placed! Check your email for confirmation. Any pre-order items will ship in 2-4 weeks.
          </div>
        )}
        {canceled && (
          <div
            style={{
              background: "#FFF8E1",
              border: "1px solid #FFE0A3",
              borderRadius: 12,
              padding: "16px 20px",
              marginBottom: 24,
              color: "#8A6D00",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Checkout was canceled. Your cart is still here whenever you're ready.
          </div>
        )}

        {items.length === 0 && !success ? (
          <div style={{ textAlign: "center", padding: "64px 0" }}>
            <p style={{ color: "var(--fb-text-secondary)", fontSize: 16, marginBottom: 24 }}>
              Your cart is empty.
            </p>
            <Link
              href="/shop"
              style={{
                background: "var(--fb-navy)",
                color: "#FFFFFF",
                padding: "12px 28px",
                borderRadius: 10,
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Shop All Flags
            </Link>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              {items.map((item) => (
                <div
                  key={`${item.flagSlug}-${item.materialId}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: 16,
                    border: "1px solid var(--fb-border)",
                    borderRadius: 12,
                  }}
                >
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 10,
                      overflow: "hidden",
                      background: "#FFFFFF",
                      border: "1px solid var(--fb-border)",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={item.image} alt={item.flagName} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: "var(--fb-navy)", fontSize: 15 }}>
                      {item.flagName} Flag Band
                    </div>
                    <div style={{ color: "var(--fb-text-muted)", fontSize: 13 }}>
                      {item.materialName}
                      {item.preorder ? " · Pre-Order" : ""}
                    </div>
                    <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 10 }}>
                      <button
                        onClick={() => updateQty(item.flagSlug, item.materialId, item.qty - 1)}
                        style={qtyBtnStyle}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span style={{ fontWeight: 700, minWidth: 20, textAlign: "center" }}>{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.flagSlug, item.materialId, item.qty + 1)}
                        style={qtyBtnStyle}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.flagSlug, item.materialId)}
                        style={{
                          marginLeft: 12,
                          background: "none",
                          border: "none",
                          color: "var(--fb-text-muted)",
                          fontSize: 13,
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: "var(--fb-text)" }}>
                    {money(item.unitPriceCents * item.qty)}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                borderTop: "1px solid var(--fb-border)",
                paddingTop: 24,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontSize: 13, color: "var(--fb-text-muted)" }}>Subtotal (shipping included)</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "var(--fb-navy)" }}>{money(subtotalCents)}</div>
              </div>
              <button
                onClick={handleCheckout}
                disabled={loading}
                style={{
                  background: "var(--fb-navy)",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 10,
                  padding: "14px 32px",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: loading ? "default" : "pointer",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? "Redirecting…" : "Checkout"}
              </button>
            </div>
            {error && (
              <p style={{ color: "#B3261E", fontSize: 13, marginTop: 12, textAlign: "right" }}>{error}</p>
            )}
          </>
        )}
      </div>
      <SiteFooter />
    </>
  );
}

const qtyBtnStyle: React.CSSProperties = {
  width: 26,
  height: 26,
  borderRadius: 6,
  border: "1px solid var(--fb-border)",
  background: "#FFFFFF",
  cursor: "pointer",
  fontWeight: 700,
  fontSize: 14,
  lineHeight: 1,
};
