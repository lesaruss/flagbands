"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../lib/cart-context";

const MENU_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Partners", href: "/partners" },
  { label: "Pulse", href: "/pulse" },
  { label: "Account", href: "/account" },
  { label: "Start a Fundraiser", href: "/fundraiser" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { count } = useCart();

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        background: "rgba(255,255,255,0.97)",
        borderBottom: "1px solid var(--fb-border)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <img src="/logo-landscape.png" alt="Flag Bands" style={{ height: 44, width: "auto" }} />
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Link
            href="/cart"
            aria-label="Cart"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              color: isActive("/cart") ? "var(--fb-navy)" : "var(--fb-text-secondary)",
              textDecoration: "none",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {count > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -8,
                  right: -10,
                  background: "var(--fb-navy)",
                  color: "#FFFFFF",
                  fontSize: 10,
                  fontWeight: 800,
                  borderRadius: 999,
                  minWidth: 16,
                  height: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 4px",
                }}
              >
                {count}
              </span>
            )}
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "var(--fb-navy)",
                  borderRadius: 2,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {open && (
        <div
          style={{
            background: "#FFFFFF",
            borderTop: "1px solid var(--fb-border)",
            padding: "16px 24px 24px",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {MENU_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "12px 0",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid var(--fb-border)",
                  cursor: "pointer",
                  color: isActive(item.href) ? "var(--fb-navy)" : "var(--fb-text)",
                  fontWeight: isActive(item.href) ? 800 : 600,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/shop"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                width: "100%",
                marginTop: 16,
                background: "var(--fb-navy)",
                color: "#FFFFFF",
                border: "none",
                padding: "14px 20px",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: 700,
                fontSize: 14,
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Shop
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
