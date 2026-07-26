"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Shop", href: "/shop" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Partners", href: "/partners" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/shop" ? pathname === "/shop" || pathname.startsWith("/products") : pathname === href;

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

        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hide-mobile">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: isActive(item.href) ? "var(--fb-navy)" : "var(--fb-text-secondary)",
                fontWeight: isActive(item.href) ? 700 : 500,
                fontSize: 14,
                letterSpacing: "0.02em",
                textDecoration: "none",
                padding: "4px 0",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/fundraiser"
            style={{
              background: "var(--fb-navy)",
              color: "#FFFFFF",
              border: "none",
              padding: "10px 20px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.04em",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Start a Fundraiser
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "none",
            flexDirection: "column",
            gap: 5,
          }}
          className="show-mobile"
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

      {open && (
        <div style={{ background: "#FFFFFF", borderTop: "1px solid var(--fb-border)", padding: "16px 24px 24px" }}>
          {NAV_ITEMS.map((item) => (
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
                color: "var(--fb-text)",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/fundraiser"
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
            Start a Fundraiser
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hide-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
