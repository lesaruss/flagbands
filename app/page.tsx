"use client";

import { useState, useEffect, useCallback } from "react";

// ─── Flag SVGs ────────────────────────────────────────────────────────────────

function FlagUSA() {
  const stripes = Array.from({ length: 13 });
  return (
    <svg viewBox="0 0 190 100" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      {stripes.map((_, i) => (
        <rect key={i} x="0" y={i * (100 / 13)} width="190" height={100 / 13 + 0.5} fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"} />
      ))}
      <rect x="0" y="0" width="76" height={100 * 7 / 13} fill="#3C3B6E" />
      {/* Stars - 5 rows of 6, 4 rows of 5, offset */}
      {Array.from({ length: 9 }).map((_, row) =>
        Array.from({ length: row % 2 === 0 ? 6 : 5 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={row % 2 === 0 ? 5 + col * 12 : 11 + col * 12}
            cy={4 + row * 6}
            r="1.6"
            fill="#FFFFFF"
          />
        ))
      )}
    </svg>
  );
}

function FlagJamaica() {
  return (
    <svg viewBox="0 0 190 100" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      {/* Black triangles left/right */}
      <polygon points="0,0 95,50 0,100" fill="#000000" />
      <polygon points="190,0 95,50 190,100" fill="#000000" />
      {/* Gold triangles top/bottom */}
      <polygon points="0,0 190,0 95,50" fill="#FED100" />
      <polygon points="0,100 190,100 95,50" fill="#FED100" />
      {/* Green — actually Jamaica: black=hardships, gold=sun, green=land */}
      {/* Saltire in gold, triangles: top & bottom green, left & right black */}
      {/* Redraw: top/bottom = green, left/right = black */}
      <polygon points="0,0 190,0 95,50" fill="#009B3A" />
      <polygon points="0,100 190,100 95,50" fill="#009B3A" />
      {/* Gold saltire cross stripes */}
      <polygon points="0,0 20,0 95,50 20,100 0,100" fill="#FED100" />
      <polygon points="190,0 170,0 95,50 170,100 190,100" fill="#FED100" />
      <polygon points="0,0 190,0 190,20 95,50 0,20" fill="#FED100" />
      <polygon points="0,100 190,100 190,80 95,50 0,80" fill="#FED100" />
    </svg>
  );
}

function FlagHaiti() {
  return (
    <svg viewBox="0 0 190 100" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="190" height="50" fill="#00209F" />
      <rect y="50" width="190" height="50" fill="#D21034" />
      {/* Simplified coat of arms: white rectangle center */}
      <rect x="75" y="30" width="40" height="40" rx="3" fill="white" opacity="0.9" />
      <rect x="81" y="36" width="28" height="28" rx="2" fill="#009A44" />
      {/* Palm tree simplified */}
      <rect x="93" y="38" width="4" height="16" fill="#8B4513" />
      <ellipse cx="95" cy="38" rx="8" ry="5" fill="#009A44" />
      {/* Cannons (dots) */}
      <circle cx="84" cy="58" r="2" fill="#333" />
      <circle cx="106" cy="58" r="2" fill="#333" />
    </svg>
  );
}

function FlagVenezuela() {
  return (
    <svg viewBox="0 0 190 100" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="190" height="33.4" fill="#CF142B" />
      <rect y="33.4" width="190" height="33.3" fill="#00247D" />
      <rect y="66.7" width="190" height="33.3" fill="#F4CF17" />
      {/* 8 white stars in arc */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = Math.PI + (i / 7) * Math.PI;
        const cx = 95 + 22 * Math.cos(angle);
        const cy = 50 + 14 * Math.sin(angle);
        return <circle key={i} cx={cx} cy={cy} r="3" fill="#FFFFFF" />;
      })}
    </svg>
  );
}

function FlagPuertoRico() {
  return (
    <svg viewBox="0 0 190 100" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="0" y={i * 20} width="190" height="20.5" fill={i % 2 === 0 ? "#C8102E" : "#FFFFFF"} />
      ))}
      {/* Blue equilateral triangle */}
      <polygon points="0,0 87,50 0,100" fill="#002868" />
      {/* White star */}
      <polygon
        points="44,36 47,46 58,46 50,53 53,63 44,57 35,63 38,53 30,46 41,46"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function FlagCuba() {
  return (
    <svg viewBox="0 0 190 100" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="0" y={i * 20} width="190" height="20.5" fill={i % 2 === 0 ? "#002A8F" : "#FFFFFF"} />
      ))}
      {/* Red equilateral triangle */}
      <polygon points="0,0 80,50 0,100" fill="#CF142B" />
      {/* White star */}
      <polygon
        points="38,36 41,46 52,46 44,53 47,63 38,57 29,63 32,53 24,46 35,46"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function FlagLGBT() {
  const colors = ["#FF0018", "#FF8C00", "#FFEF00", "#008026", "#004DFF", "#750787"];
  return (
    <svg viewBox="0 0 190 100" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      {colors.map((color, i) => (
        <rect key={i} x="0" y={i * (100 / 6)} width="190" height={100 / 6 + 0.5} fill={color} />
      ))}
    </svg>
  );
}

function FlagVegan() {
  return (
    <svg viewBox="0 0 190 100" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      {/* Vegan flag: blue top-left triangle, white diagonal band, green bottom-right */}
      <rect width="190" height="100" fill="#3A7DC9" />
      <polygon points="0,100 190,0 190,100" fill="#3DAE2B" />
      {/* White diagonal band */}
      <polygon points="0,75 115,0 190,0 75,100 0,100" fill="rgba(255,255,255,0.2)" />
      <polygon points="0,60 100,0 130,0 30,100 0,100" fill="rgba(255,255,255,0.85)" />
      {/* V checkmark in white */}
      <polyline
        points="75,38 90,58 115,28"
        fill="none"
        stroke="#3A7DC9"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlagPeru() {
  return (
    <svg viewBox="0 0 190 100" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="63" height="100" fill="#D91023" />
      <rect x="63" width="64" height="100" fill="#FFFFFF" />
      <rect x="127" width="63" height="100" fill="#D91023" />
      {/* Simplified coat of arms */}
      <ellipse cx="95" cy="45" rx="14" ry="10" fill="#009A44" opacity="0.8" />
      <rect x="90" y="55" width="10" height="12" fill="#9B7426" opacity="0.7" />
      <circle cx="81" cy="42" r="5" fill="#4FB5E6" opacity="0.8" />
    </svg>
  );
}

// ─── Products ─────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    id: "usa",
    name: "United States",
    label: "USA",
    price: "$30",
    available: true,
    FlagComponent: FlagUSA,
    accentColor: "#002868",
  },
  {
    id: "jamaica",
    name: "Jamaica",
    label: "JAM",
    price: "$30",
    available: true,
    FlagComponent: FlagJamaica,
    accentColor: "#009B3A",
  },
  {
    id: "haiti",
    name: "Haiti",
    label: "HTI",
    price: "$30",
    available: true,
    FlagComponent: FlagHaiti,
    accentColor: "#00209F",
  },
  {
    id: "venezuela",
    name: "Venezuela",
    label: "VEN",
    price: "$30",
    available: true,
    FlagComponent: FlagVenezuela,
    accentColor: "#00247D",
  },
  {
    id: "puerto-rico",
    name: "Puerto Rico",
    label: "PRI",
    price: "$30",
    available: true,
    FlagComponent: FlagPuertoRico,
    accentColor: "#002868",
  },
  {
    id: "cuba",
    name: "Cuba",
    label: "CUB",
    price: "$30",
    available: true,
    FlagComponent: FlagCuba,
    accentColor: "#002A8F",
  },
  {
    id: "lgbtq",
    name: "Pride",
    label: "PRIDE",
    price: "$30",
    available: true,
    FlagComponent: FlagLGBT,
    accentColor: "#750787",
  },
  {
    id: "vegan",
    name: "Vegan",
    label: "VGN",
    price: "$30",
    available: true,
    FlagComponent: FlagVegan,
    accentColor: "#3DAE2B",
  },
  {
    id: "peru",
    name: "Peru",
    label: "PER",
    price: "$30",
    available: true,
    FlagComponent: FlagPeru,
    accentColor: "#D91023",
  },
];

// ─── Nav ──────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Shop", section: 1 },
  { label: "How It Works", section: 2 },
  { label: "Fundraising", section: 3 },
  { label: "Partners", section: 4 },
];

function Nav({ current, onNav }: { current: number; onNav: (i: number) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: current === 0 ? "transparent" : "rgba(255,255,255,0.96)",
        borderBottom: current === 0 ? "none" : "1px solid rgba(0,0,0,0.08)",
        backdropFilter: "blur(16px)",
        transition: "background 0.4s ease, border-color 0.4s ease",
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
        <button
          onClick={() => onNav(0)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
        >
          <img src="/logo.svg" alt="Flag Bands" style={{ height: 44, width: "auto" }} />
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hide-mobile">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.section}
              onClick={() => onNav(item.section)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: current === 0 ? "rgba(255,255,255,0.85)" : "var(--fb-text-secondary)",
                fontWeight: 500,
                fontSize: 14,
                letterSpacing: "0.02em",
                transition: "color 0.15s ease",
                padding: "4px 0",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = current === 0 ? "#fff" : "var(--fb-navy)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = current === 0 ? "rgba(255,255,255,0.85)" : "var(--fb-text-secondary)")}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => onNav(3)}
            style={{
              background: current === 0 ? "rgba(255,255,255,0.15)" : "var(--fb-navy)",
              color: "#FFFFFF",
              border: current === 0 ? "1.5px solid rgba(255,255,255,0.4)" : "none",
              padding: "10px 20px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.04em",
              transition: "all 0.15s ease",
            }}
          >
            Start a Fundraiser
          </button>
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
                background: current === 0 ? "#FFFFFF" : "var(--fb-navy)",
                borderRadius: 2,
              }}
            />
          ))}
        </button>
      </div>

      {open && (
        <div style={{ background: "#FFFFFF", borderTop: "1px solid var(--fb-border)", padding: "16px 24px 24px" }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.section}
              onClick={() => { onNav(item.section); setOpen(false); }}
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
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { onNav(3); setOpen(false); }}
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
            }}
          >
            Start a Fundraiser
          </button>
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

// ─── Section 1: Hero ──────────────────────────────────────────────────────────

function HeroSection({ onShop }: { onShop: () => void }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "var(--fb-navy)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 15% 50%, rgba(200,16,46,0.15) 0%, transparent 55%),
                            radial-gradient(circle at 85% 20%, rgba(212,160,23,0.1) 0%, transparent 45%)`,
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 100,
              padding: "6px 14px",
              marginBottom: 28,
            }}
          >
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", fontWeight: 600, letterSpacing: "0.05em" }}>
              9 FLAGS NOW AVAILABLE
            </span>
          </div>

          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 900,
              lineHeight: 1.08,
              margin: "0 0 24px",
              letterSpacing: "-0.02em",
            }}
          >
            Wear Your Flag.
            <br />
            <span style={{ color: "rgba(255,255,255,0.5)" }}>Find Your People.</span>
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: 18,
              lineHeight: 1.6,
              margin: "0 0 40px",
              maxWidth: 460,
            }}
          >
            Handcrafted beaded wristbands featuring custom flag plates. Represent your heritage,
            support your community. Every band funds a cause.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              onClick={onShop}
              style={{
                background: "#FFFFFF",
                color: "var(--fb-navy)",
                padding: "16px 32px",
                borderRadius: 10,
                border: "none",
                cursor: "pointer",
                fontWeight: 800,
                fontSize: 15,
                letterSpacing: "0.03em",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Shop All Flags
            </button>
          </div>

          <div style={{ display: "flex", gap: 36, marginTop: 48, flexWrap: "wrap" }}>
            {[
              { num: "$30", label: "Per Band" },
              { num: "9", label: "Flags Available" },
              { num: "$5", label: "Community Contribution" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: 22, lineHeight: 1 }}>{stat.num}</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, fontWeight: 500, marginTop: 4, letterSpacing: "0.04em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flag mosaic */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="hero-product">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 8,
              width: "100%",
              maxWidth: 420,
              opacity: 0.9,
            }}
          >
            {PRODUCTS.slice(0, 9).map((p) => (
              <button
                key={p.id}
                onClick={onShop}
                style={{
                  aspectRatio: "3/2",
                  borderRadius: 8,
                  overflow: "hidden",
                  border: "2px solid rgba(255,255,255,0.15)",
                  background: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "transform 0.15s ease, border-color 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                }}
              >
                <p.FlagComponent />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; padding-top: 80px !important; }
          .hero-product { display: none !important; }
        }
      `}</style>
    </div>
  );
}

// ─── Section 2: Collection ────────────────────────────────────────────────────

function CollectionSection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#F8F7F4",
        overflowY: "auto",
        paddingTop: 64,
      }}
    >
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
          <h2
            style={{
              fontSize: "clamp(26px, 3.5vw, 44px)",
              fontWeight: 900,
              color: "var(--fb-navy)",
              margin: "0 0 12px",
              letterSpacing: "-0.02em",
            }}
          >
            Browse By Flag
          </h2>
          <p style={{ color: "var(--fb-text-secondary)", fontSize: 16, maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            9 flags available now. Every band is $30 with free shipping and a $5 community contribution.
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
          {PRODUCTS.map((product) => {
            const isSelected = selected === product.id;
            return (
              <div
                key={product.id}
                onClick={() => setSelected(isSelected ? null : product.id)}
                style={{
                  background: "#FFFFFF",
                  borderRadius: 14,
                  border: isSelected ? `2px solid ${product.accentColor}` : "2px solid transparent",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                  boxShadow: isSelected ? `0 8px 32px ${product.accentColor}30` : "0 2px 12px rgba(0,0,0,0.06)",
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(13,31,60,0.12)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                  }
                }}
              >
                {/* Flag image - large, proportional */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "3/2",
                    overflow: "hidden",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <product.FlagComponent />
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
                    <button
                      style={{
                        background: isSelected ? product.accentColor : "var(--fb-navy)",
                        color: "#FFFFFF",
                        border: "none",
                        borderRadius: 7,
                        padding: "7px 14px",
                        cursor: "pointer",
                        fontWeight: 700,
                        fontSize: 12,
                        letterSpacing: "0.02em",
                        transition: "background 0.15s ease",
                      }}
                    >
                      {isSelected ? "Selected" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {selected && (
          <div
            style={{
              marginTop: 32,
              background: "#FFFFFF",
              borderRadius: 16,
              padding: "24px 32px",
              border: "1px solid var(--fb-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ fontWeight: 700, color: "var(--fb-navy)", fontSize: 16 }}>
                {PRODUCTS.find((p) => p.id === selected)?.name} Flag Band - $30
              </div>
              <div style={{ color: "var(--fb-text-muted)", fontSize: 13, marginTop: 4 }}>
                Free shipping. $5 goes to the community. Ships in 3-5 business days.
              </div>
            </div>
            <button
              style={{
                background: "var(--fb-navy)",
                color: "#FFFFFF",
                border: "none",
                borderRadius: 10,
                padding: "14px 32px",
                cursor: "pointer",
                fontWeight: 800,
                fontSize: 14,
                letterSpacing: "0.03em",
                whiteSpace: "nowrap",
              }}
            >
              Checkout - $30
            </button>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .flag-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
        }
      `}</style>
    </div>
  );
}

// ─── Section 3: How It Works ──────────────────────────────────────────────────

function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Choose Your Flag",
      body: "Browse 9 available flags — USA, Jamaica, Haiti, Venezuela, Puerto Rico, Cuba, Pride, Vegan, and Peru. Each one represents a community.",
    },
    {
      num: "02",
      title: "We Build Your Band",
      body: "Each wristband is handcrafted with genuine lava stone beads, a custom-printed wood flag plate, and copper hardware.",
    },
    {
      num: "03",
      title: "It Ships to You",
      body: "Free shipping, 3-5 business days. $5 from every sale funds a community cause tied to that flag.",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        paddingTop: 64,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-block",
              background: "var(--fb-off-white)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 14,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "var(--fb-navy)", textTransform: "uppercase" }}>
              How It Works
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              color: "var(--fb-navy)",
              margin: "0 0 14px",
              letterSpacing: "-0.02em",
            }}
          >
            Simple. Personal. Purposeful.
          </h2>
          <p style={{ color: "var(--fb-text-secondary)", fontSize: 17, maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            From flag to wrist in three steps.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 }} className="steps-grid">
          {steps.map((step) => (
            <div key={step.num}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: "var(--fb-navy)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                <span style={{ color: "#FFFFFF", fontWeight: 900, fontSize: 20, letterSpacing: "0.02em" }}>
                  {step.num}
                </span>
              </div>
              <h3 style={{ fontWeight: 800, fontSize: 20, color: "var(--fb-navy)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>
                {step.title}
              </h3>
              <p style={{ color: "var(--fb-text-secondary)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  );
}

// ─── Section 4: Fundraising ───────────────────────────────────────────────────

function FundraisingSection() {
  return (
    <div
      id="fundraising"
      style={{
        width: "100%",
        height: "100%",
        background: "var(--fb-navy)",
        display: "flex",
        alignItems: "center",
        paddingTop: 64,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 70% 30%, rgba(200,16,46,0.1) 0%, transparent 55%)`,
        }}
      />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 24,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.8)", textTransform: "uppercase" }}>
              Fundraising
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 900,
              color: "#FFFFFF",
              margin: "0 0 20px",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Run a Flag Band Campaign
            <br />
            <span style={{ color: "rgba(255,255,255,0.5)" }}>for Your Organization</span>
          </h2>

          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 18, maxWidth: 600, margin: "0 auto 48px", lineHeight: 1.6 }}>
            Schools, nonprofits, cultural organizations, and teams. We handle fulfillment.
            You keep a portion of every sale and build community at the same time.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginBottom: 48 }} className="fundraise-grid">
            {[
              { icon: "🏫", title: "Schools", desc: "Custom flag bands for your school community. Perfect for spirit weeks and multicultural events." },
              { icon: "🏛", title: "Nonprofits", desc: "Raise awareness and funds simultaneously. Flag Bands tell your story on every wrist." },
              { icon: "🤝", title: "Organizations", desc: "Cultural organizations, unions, clubs. Any group with a flag and a cause." },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16,
                  padding: "28px 24px",
                  textAlign: "left",
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ color: "#FFFFFF", fontWeight: 800, fontSize: 17, margin: "0 0 8px" }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <a
            href="mailto:contact@flagbands.com"
            style={{
              display: "inline-block",
              background: "#FFFFFF",
              color: "var(--fb-navy)",
              padding: "18px 40px",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: 800,
              fontSize: 15,
              letterSpacing: "0.03em",
            }}
          >
            Start a Fundraiser
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .fundraise-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </div>
  );
}

// ─── Section 5: Partners / About ──────────────────────────────────────────────

function PartnersSection() {
  return (
    <div
      id="partners"
      style={{
        width: "100%",
        height: "100%",
        background: "#F8F7F4",
        display: "flex",
        alignItems: "center",
        paddingTop: 64,
        overflowY: "auto",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 80px", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
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
              Partners
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              color: "var(--fb-navy)",
              margin: "0 0 14px",
              letterSpacing: "-0.02em",
            }}
          >
            Built on Community
          </h2>
          <p style={{ color: "var(--fb-text-secondary)", fontSize: 17, maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
            Flag Bands partners with cultural organizations, community leaders, and schools to deliver
            impact alongside every wristband.
          </p>
        </div>

        {/* Partner placeholder grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 20, marginBottom: 56 }}>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                border: "1px solid var(--fb-border)",
                borderRadius: 14,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "var(--fb-text-muted)", fontSize: 13, fontWeight: 600, letterSpacing: "0.05em" }}>
                PARTNER {i}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: "1px solid var(--fb-border)",
            paddingTop: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <img src="/logo.svg" alt="Flag Bands" style={{ height: 36, width: "auto" }} />
            <p style={{ color: "var(--fb-text-muted)", fontSize: 13, marginTop: 8, maxWidth: 320, lineHeight: 1.5 }}>
              Handcrafted wristbands. Real flags. Real causes.
            </p>
          </div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["Contact", "Fundraising", "Returns", "FAQ"].map((link) => (
              <a
                key={link}
                href="#"
                style={{ color: "var(--fb-text-muted)", fontSize: 13, textDecoration: "none", fontWeight: 500 }}
              >
                {link}
              </a>
            ))}
          </div>
          <div style={{ color: "var(--fb-text-muted)", fontSize: 12 }}>
            2026 Flag Bands. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const SECTION_COUNT = 5;

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return;
      setDirection(index > current ? "forward" : "backward");
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 40);
    },
    [animating, current]
  );

  const goNext = useCallback(() => goTo(Math.min(current + 1, SECTION_COUNT - 1)), [goTo, current]);
  const goPrev = useCallback(() => goTo(Math.max(current - 1, 0)), [goTo, current]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const sections = [
    <HeroSection key="hero" onShop={() => goTo(1)} />,
    <CollectionSection key="browse" />,
    <HowItWorksSection key="how" />,
    <FundraisingSection key="fundraise" />,
    <PartnersSection key="partners" />,
  ];

  return (
    <>
      <Nav current={current} onNav={goTo} />

      <main
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
        }}
      >
        {sections.map((section, i) => {
          const offset = i - current;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                transition: animating ? "none" : "transform 0.55s cubic-bezier(0.77,0,0.18,1), opacity 0.55s ease",
                transform: `translateX(${offset * 100}%)`,
                opacity: Math.abs(offset) > 1 ? 0 : 1,
                willChange: "transform",
              }}
            >
              {section}
            </div>
          );
        })}

        {/* Navigation Controls */}
        <div
          style={{
            position: "fixed",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 20,
            zIndex: 300,
          }}
        >
          {/* Prev */}
          <button
            onClick={goPrev}
            disabled={current === 0}
            aria-label="Previous section"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "none",
              background: current === 0
                ? "rgba(255,255,255,0.15)"
                : current === 0 || current === 2
                  ? "rgba(255,255,255,0.85)"
                  : "rgba(255,255,255,0.85)",
              cursor: current === 0 ? "default" : "pointer",
              opacity: current === 0 ? 0.3 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
              transition: "opacity 0.2s ease",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="var(--fb-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {Array.from({ length: SECTION_COUNT }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to section ${i + 1}`}
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: "none",
                  background:
                    current === 0 || current === 3
                      ? i === current
                        ? "rgba(255,255,255,0.95)"
                        : "rgba(255,255,255,0.35)"
                      : i === current
                        ? "var(--fb-navy)"
                        : "rgba(13,31,60,0.25)",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.25s ease, background 0.25s ease",
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={goNext}
            disabled={current === SECTION_COUNT - 1}
            aria-label="Next section"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,0.85)",
              cursor: current === SECTION_COUNT - 1 ? "default" : "pointer",
              opacity: current === SECTION_COUNT - 1 ? 0.3 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
              transition: "opacity 0.2s ease",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="var(--fb-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Section label */}
        <div
          style={{
            position: "fixed",
            bottom: 44,
            right: 32,
            zIndex: 300,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: current === 0 || current === 3 ? "rgba(255,255,255,0.4)" : "rgba(13,31,60,0.25)",
            }}
          >
            {current + 1} / {SECTION_COUNT}
          </span>
        </div>
      </main>
    </>
  );
}
