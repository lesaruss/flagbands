"use client";

import Link from "next/link";
import { PRODUCTS } from "../../lib/products";
import NavBar from "../../components/NavBar";
import SiteFooter from "../../components/SiteFooter";

export default function ShopPage() {
  return (
    <>
      <NavBar />

      <div style={{ width: "100%", background: "#F8F7F4" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 80px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              style={{
                display: "inline-block",
                background: "var(--fb-off-white)",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: 100,
                padding: "6px 16px",
                marginBottom: 14,
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "var(--fb-navy)", textTransform: "uppercase" }}>
                The Collection
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(26px, 3.5vw, 44px)",
                fontWeight: 900,
                color: "var(--fb-navy)",
                margin: "0 0 12px",
                letterSpacing: "-0.02em",
              }}
            >
              Browse By Flag
            </h1>
            <p style={{ color: "var(--fb-text-secondary)", fontSize: 16, maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
              9 flags available now. Every band is $35 with free shipping and a $5 community contribution.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 20,
            }}
            className="flag-grid"
          >
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                style={{
                  display: "block",
                  background: "#FFFFFF",
                  borderRadius: 14,
                  border: "2px solid transparent",
                  overflow: "hidden",
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(13,31,60,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1/1",
                    overflow: "hidden",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                    background: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12%",
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    src={product.heroPhoto}
                    alt={`${product.name} flag band`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      transform: product.slug === "jamaica" ? "rotate(180deg)" : product.slug === "peru" ? "scale(1.22)" : "none",
                    }}
                    loading="lazy"
                  />
                </div>

                <div style={{ padding: "14px 16px 18px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                    <h3
                      style={{
                        fontWeight: 800,
                        fontSize: 15,
                        color: "var(--fb-navy)",
                        margin: 0,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {product.name}
                    </h3>
                    <span
                      style={{
                        background: product.accentColor,
                        color: "#FFFFFF",
                        fontSize: 10,
                        fontWeight: 700,
                        padding: "2px 7px",
                        borderRadius: 4,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {product.label}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
                    <span style={{ fontWeight: 900, fontSize: 18, color: "var(--fb-navy)" }}>{product.price}</span>
                    <span
                      style={{
                        background: "var(--fb-navy)",
                        color: "#FFFFFF",
                        borderRadius: 7,
                        padding: "7px 14px",
                        fontWeight: 700,
                        fontSize: 12,
                        letterSpacing: "0.02em",
                      }}
                    >
                      View
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 600px) {
            .flag-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
          }
        `}</style>
      </div>

      <SiteFooter />
    </>
  );
}
