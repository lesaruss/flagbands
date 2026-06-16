"use client";

import { useState } from "react";

// ─── Nav ───────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "var(--fb-nav-bg)",
        borderBottom: "1px solid var(--fb-nav-border)",
        backdropFilter: "blur(12px)",
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
        {/* Logo */}
        <a
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                width: 28,
                height: 20,
                background: "linear-gradient(180deg, #C8102E 33%, #FFFFFF 33% 66%, #002868 66%)",
                borderRadius: 3,
                border: "1px solid rgba(0,0,0,0.1)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontWeight: 800,
                fontSize: 18,
                letterSpacing: "0.08em",
                color: "var(--fb-navy)",
                textTransform: "uppercase",
              }}
            >
              Flag Bands
            </span>
          </span>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="hide-mobile"
        >
          {[
            { label: "Shop", href: "#browse" },
            { label: "How It Works", href: "#how-it-works" },
            { label: "Fundraising", href: "#fundraising" },
            { label: "Partners", href: "#partners" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                textDecoration: "none",
                color: "var(--fb-text-secondary)",
                fontWeight: 500,
                fontSize: 14,
                letterSpacing: "0.02em",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fb-navy)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fb-text-secondary)")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#start-fundraiser"
            style={{
              background: "var(--fb-navy)",
              color: "#FFFFFF",
              padding: "10px 20px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.04em",
              transition: "background 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--fb-navy-mid)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--fb-navy)")}
          >
            Start a Fundraiser
          </a>
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

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "#FFFFFF",
            borderTop: "1px solid var(--fb-border)",
            padding: "16px 24px 24px",
          }}
        >
          {[
            { label: "Shop", href: "#browse" },
            { label: "How It Works", href: "#how-it-works" },
            { label: "Fundraising", href: "#fundraising" },
            { label: "Partners", href: "#partners" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                textDecoration: "none",
                color: "var(--fb-text)",
                fontWeight: 600,
                fontSize: 15,
                borderBottom: "1px solid var(--fb-border)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#start-fundraiser"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              marginTop: 16,
              background: "var(--fb-navy)",
              color: "#FFFFFF",
              padding: "14px 20px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 14,
              textAlign: "center",
            }}
          >
            Start a Fundraiser
          </a>
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

// ─── Section 1: Hero ───────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "var(--fb-navy)",
        display: "flex",
        alignItems: "center",
        paddingTop: 64,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture - subtle stars pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(200,16,46,0.12) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(212,160,23,0.08) 0%, transparent 40%)`,
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 24px",
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
        {/* Left: Copy */}
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
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", fontWeight: 500, letterSpacing: "0.05em" }}>
              NOW AVAILABLE: USA FLAG BAND
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Find Your People.</span>
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: 18,
              lineHeight: 1.6,
              margin: "0 0 40px",
              maxWidth: 460,
              fontWeight: 400,
            }}
          >
            Handcrafted beaded wristbands featuring custom flag plates. Represent your heritage,
            support your community. Every band funds a cause.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#browse"
              style={{
                background: "#FFFFFF",
                color: "var(--fb-navy)",
                padding: "16px 32px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 800,
                fontSize: 15,
                letterSpacing: "0.03em",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
                display: "inline-block",
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
              Shop USA Flag Band
            </a>
            <a
              href="#start-fundraiser"
              style={{
                background: "transparent",
                color: "#FFFFFF",
                padding: "16px 32px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: "0.03em",
                border: "2px solid rgba(255,255,255,0.3)",
                transition: "border-color 0.15s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")}
            >
              Start a Fundraiser
            </a>
          </div>

          {/* Trust badges */}
          <div
            style={{
              display: "flex",
              gap: 28,
              marginTop: 48,
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "$30", label: "Per Band" },
              { num: "$5", label: "Community Contribution" },
              { num: "100+", label: "Flags Coming" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: 22, lineHeight: 1 }}>
                  {stat.num}
                </div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 500, marginTop: 4, letterSpacing: "0.04em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Display */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="hero-product"
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 480,
              aspectRatio: "4/5",
            }}
          >
            {/* Main product card */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 24,
                overflow: "hidden",
                background: "linear-gradient(135deg, #1B3A6B 0%, #0D1F3C 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
              }}
            >
              {/* Product image area */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 24,
                  padding: 40,
                }}
              >
                {/* USA Flag Band visual */}
                <div
                  style={{
                    width: 220,
                    height: 220,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(200,16,46,0.2), rgba(13,31,60,0.8))",
                    border: "2px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* Band representation */}
                  <div
                    style={{
                      width: 160,
                      height: 40,
                      borderRadius: 20,
                      background: "linear-gradient(90deg, #4a3520 0%, #5a4020 30%, #3d2b15 100%)",
                      position: "relative",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "0 10px",
                      overflow: "hidden",
                    }}
                  >
                    {/* Beads */}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          background: i % 3 === 0 ? "#2a1810" : i % 3 === 1 ? "#3d2b1a" : "#1a0f08",
                          flexShrink: 0,
                          boxShadow: "inset 0 2px 4px rgba(255,255,255,0.1)",
                        }}
                      />
                    ))}
                    {/* Flag plate */}
                    <div
                      style={{
                        width: 32,
                        height: 22,
                        borderRadius: 4,
                        overflow: "hidden",
                        flexShrink: 0,
                        border: "1px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      <div style={{ height: "33%", background: "#C8102E" }} />
                      <div style={{ height: "34%", background: "#FFFFFF" }} />
                      <div style={{ height: "33%", background: "#002868" }} />
                    </div>
                    {/* More beads */}
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          background: i % 2 === 0 ? "#2a1810" : "#3d2b1a",
                          flexShrink: 0,
                          boxShadow: "inset 0 2px 4px rgba(255,255,255,0.1)",
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div style={{ textAlign: "center" }}>
                  <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: 18, letterSpacing: "0.04em" }}>
                    USA FLAG BAND
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 4 }}>
                    Lava Stone + Wood Plate + Copper
                  </div>
                </div>
              </div>

              {/* Price tag */}
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  right: 24,
                  background: "#FFFFFF",
                  borderRadius: 12,
                  padding: "10px 18px",
                }}
              >
                <div style={{ color: "var(--fb-navy)", fontWeight: 900, fontSize: 22 }}>$30</div>
                <div style={{ color: "var(--fb-text-muted)", fontSize: 11, fontWeight: 500 }}>Free shipping</div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                top: -16,
                left: -16,
                background: "var(--fb-red)",
                color: "#FFFFFF",
                borderRadius: 12,
                padding: "10px 16px",
                fontWeight: 800,
                fontSize: 12,
                letterSpacing: "0.06em",
                boxShadow: "0 4px 16px rgba(200,16,46,0.4)",
              }}
            >
              LIMITED LAUNCH
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-product { display: none !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Section 2: Browse By Country ─────────────────────────────────────────
const countries = [
  {
    name: "United States",
    code: "USA",
    available: true,
    price: "$30",
    colors: ["#C8102E", "#FFFFFF", "#002868"],
    description: "The founding design. Lava stone, wood plate, copper hardware.",
  },
  {
    name: "Jamaica",
    code: "JAM",
    available: false,
    colors: ["#009B3A", "#FED100", "#000000"],
    description: "Coming Q2 2026.",
  },
  {
    name: "Puerto Rico",
    code: "PRI",
    available: false,
    colors: ["#C8102E", "#FFFFFF", "#002868"],
    description: "Coming Q2 2026.",
  },
  {
    name: "Trinidad",
    code: "TRI",
    available: false,
    colors: ["#C8102E", "#FFFFFF", "#000000"],
    description: "Coming Q3 2026.",
  },
  {
    name: "Brazil",
    code: "BRA",
    available: false,
    colors: ["#009C3B", "#FFDF00", "#002776"],
    description: "Coming Q3 2026.",
  },
  {
    name: "Japan",
    code: "JPN",
    available: false,
    colors: ["#FFFFFF", "#BC002D", "#FFFFFF"],
    description: "Coming Q3 2026.",
  },
  {
    name: "United Kingdom",
    code: "GBR",
    available: false,
    colors: ["#012169", "#FFFFFF", "#C8102E"],
    description: "Coming Q4 2026.",
  },
  {
    name: "South Africa",
    code: "ZAF",
    available: false,
    colors: ["#007A4D", "#FFB81C", "#000000"],
    description: "Coming Q4 2026.",
  },
];

function BrowseSection() {
  return (
    <section id="browse" style={{ background: "#FFFFFF", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "inline-block",
              background: "var(--fb-off-white)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "var(--fb-navy)", textTransform: "uppercase" }}>
              The Collection
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              color: "var(--fb-navy)",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}
          >
            Browse By Flag
          </h2>
          <p style={{ color: "var(--fb-text-secondary)", fontSize: 17, maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
            One flag. One community. One cause. Start with the USA. 100+ designs coming.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {countries.map((country) => (
            <div
              key={country.code}
              style={{
                background: "#FFFFFF",
                borderRadius: 16,
                border: "1px solid var(--fb-border)",
                overflow: "hidden",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: country.available ? "pointer" : "default",
                opacity: country.available ? 1 : 0.75,
              }}
              onMouseEnter={(e) => {
                if (country.available) {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(13,31,60,0.12)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Flag stripe header */}
              <div style={{ height: 8, display: "flex" }}>
                {country.colors.map((color, i) => (
                  <div key={i} style={{ flex: 1, background: color }} />
                ))}
              </div>

              <div style={{ padding: 24 }}>
                {/* Flag icon */}
                <div
                  style={{
                    width: 56,
                    height: 40,
                    borderRadius: 6,
                    overflow: "hidden",
                    marginBottom: 16,
                    border: "1px solid rgba(0,0,0,0.08)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {country.colors.map((color, i) => (
                    <div key={i} style={{ flex: 1, background: color }} />
                  ))}
                </div>

                <h3
                  style={{
                    fontWeight: 800,
                    fontSize: 17,
                    color: "var(--fb-navy)",
                    margin: "0 0 6px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {country.name}
                </h3>
                <p style={{ color: "var(--fb-text-muted)", fontSize: 13, margin: "0 0 20px", lineHeight: 1.5 }}>
                  {country.description}
                </p>

                {country.available ? (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: 900, fontSize: 20, color: "var(--fb-navy)" }}>
                      {country.price}
                    </span>
                    <a
                      href="#shop-usa"
                      style={{
                        background: "var(--fb-navy)",
                        color: "#FFFFFF",
                        padding: "10px 20px",
                        borderRadius: 8,
                        textDecoration: "none",
                        fontWeight: 700,
                        fontSize: 13,
                        letterSpacing: "0.03em",
                      }}
                    >
                      Shop Now
                    </a>
                  </div>
                ) : (
                  <div
                    style={{
                      background: "var(--fb-off-white)",
                      borderRadius: 8,
                      padding: "10px 16px",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ color: "var(--fb-text-muted)", fontSize: 13, fontWeight: 600 }}>
                      Notify Me When Available
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <p style={{ color: "var(--fb-text-muted)", fontSize: 14, fontWeight: 500 }}>
            100+ country designs in development. Want your flag next?{" "}
            <a
              href="#start-fundraiser"
              style={{ color: "var(--fb-navy)", fontWeight: 700, textDecoration: "underline" }}
            >
              Start a campaign.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: How It Works ───────────────────────────────────────────────
const steps = [
  {
    num: "01",
    title: "Build Community",
    body: "Your organization promotes the campaign to your network. Pre-orders open with no financial risk to you.",
    icon: "community",
  },
  {
    num: "02",
    title: "Reach the Threshold",
    body: "Once minimum pre-orders are met, production begins. Every milestone unlocks bonus contributions.",
    icon: "threshold",
  },
  {
    num: "03",
    title: "We Manufacture",
    body: "Each band is handcrafted with lava stone beads, a natural wood backing plate, and your custom flag plate.",
    icon: "manufacture",
  },
  {
    num: "04",
    title: "You Get Paid",
    body: "$5 from every band goes directly to your organization. No inventory. No upfront cost. No fulfillment burden.",
    icon: "paid",
  },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" style={{ background: "var(--fb-off-white)", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-block",
              background: "#FFFFFF",
              border: "1px solid var(--fb-border)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "var(--fb-navy)", textTransform: "uppercase" }}>
              The Model
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              color: "var(--fb-navy)",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}
          >
            Community Before Capacity
          </h2>
          <p style={{ color: "var(--fb-text-secondary)", fontSize: 17, maxWidth: 540, margin: "0 auto", lineHeight: 1.6 }}>
            We do not build inventory and hope it sells. We build community, secure orders, then manufacture.
            Zero inventory risk. Maximum community impact.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                background: "#FFFFFF",
                borderRadius: 16,
                padding: 32,
                border: "1px solid var(--fb-border)",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontWeight: 900,
                  fontSize: 48,
                  color: "rgba(13,31,60,0.06)",
                  lineHeight: 1,
                  marginBottom: 16,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: 18,
                  color: "var(--fb-navy)",
                  margin: "0 0 12px",
                  letterSpacing: "-0.01em",
                }}
              >
                {step.title}
              </h3>
              <p style={{ color: "var(--fb-text-secondary)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                {step.body}
              </p>
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: -13,
                    width: 24,
                    height: 24,
                    background: "var(--fb-navy)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                  }}
                  className="step-arrow"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M3 5h4M5 3l2 2-2 2" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Thresholds */}
        <div
          style={{
            marginTop: 48,
            background: "var(--fb-navy)",
            borderRadius: 20,
            padding: "40px 48px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 32,
          }}
        >
          <div style={{ gridColumn: "1 / -1", marginBottom: 8 }}>
            <h3 style={{ color: "#FFFFFF", fontWeight: 800, fontSize: 20, margin: 0, letterSpacing: "-0.01em" }}>
              Campaign Milestones
            </h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, margin: "6px 0 0" }}>
              Hit a milestone and unlock more for your community.
            </p>
          </div>
          {[
            { orders: "50 Orders", unlock: "Production Begins", color: "rgba(255,255,255,0.12)" },
            { orders: "100 Orders", unlock: "Bonus Contribution Unlocks", color: "rgba(200,16,46,0.25)" },
            { orders: "250 Orders", unlock: "Limited Edition Version", color: "rgba(200,16,46,0.35)" },
            { orders: "500 Orders", unlock: "Founder Recognition Tier", color: "rgba(212,160,23,0.25)" },
          ].map((tier) => (
            <div
              key={tier.orders}
              style={{
                background: tier.color,
                borderRadius: 12,
                padding: "20px 24px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: 18, marginBottom: 6 }}>
                {tier.orders}
              </div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.4 }}>
                {tier.unlock}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .step-arrow { display: none !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Section 4: Community Impact ───────────────────────────────────────────
function ImpactSection() {
  return (
    <section id="impact" style={{ background: "var(--fb-navy)", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "rgba(255,255,255,0.8)", textTransform: "uppercase" }}>
              The Impact
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              color: "#FFFFFF",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}
          >
            Every Band Funds a Cause
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            Built-in community contribution. No extra fees. No extra steps.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
            marginBottom: 56,
          }}
        >
          {[
            { value: "$5", label: "Per Band to Community", sub: "Guaranteed contribution on every sale" },
            { value: "$30", label: "Retail Price", sub: "Premium quality, accessible pricing" },
            { value: "$50K", label: "Year One Goal", sub: "Returned to partner communities" },
            { value: "100+", label: "Partner Organizations", sub: "Nonprofits, schools, cultural groups" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 16,
                padding: "32px 28px",
                textAlign: "center",
              }}
            >
              <div style={{ color: "#FFFFFF", fontWeight: 900, fontSize: 44, lineHeight: 1, marginBottom: 8 }}>
                {stat.value}
              </div>
              <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 15, marginBottom: 8 }}>
                {stat.label}
              </div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.5 }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Revenue breakdown */}
        <div
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 20,
            padding: "40px 48px",
          }}
        >
          <h3 style={{ color: "#FFFFFF", fontWeight: 800, fontSize: 20, margin: "0 0 32px", letterSpacing: "-0.01em" }}>
            Where Every $30 Goes
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "Flag plate", amount: "$1", width: 3 },
              { label: "Bracelet components & assembly", amount: "$9", width: 30 },
              { label: "Community contribution", amount: "$5", width: 17, highlight: true },
              { label: "Operations, fulfillment, marketing & growth", amount: "$15", width: 50 },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 200, flexShrink: 0, color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
                  {item.label}
                </div>
                <div style={{ flex: 1, height: 12, background: "rgba(255,255,255,0.08)", borderRadius: 6, overflow: "hidden" }}>
                  <div
                    style={{
                      width: `${item.width}%`,
                      height: "100%",
                      background: item.highlight ? "var(--fb-red)" : "rgba(255,255,255,0.3)",
                      borderRadius: 6,
                    }}
                  />
                </div>
                <div style={{ width: 40, flexShrink: 0, color: "#FFFFFF", fontWeight: 700, fontSize: 14, textAlign: "right" }}>
                  {item.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: Partner Organizations ─────────────────────────────────────
const partnerTypes = [
  { label: "Nonprofits", icon: "heart" },
  { label: "Cultural Organizations", icon: "globe" },
  { label: "Community Groups", icon: "users" },
  { label: "Alumni Associations", icon: "graduation" },
  { label: "Student Organizations", icon: "star" },
  { label: "Advocacy Groups", icon: "megaphone" },
  { label: "Heritage Organizations", icon: "flag" },
  { label: "Festivals & Events", icon: "calendar" },
];

function PartnersSection() {
  return (
    <section id="partners" style={{ background: "#FFFFFF", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="partners-grid"
        >
          <div>
            <div
              style={{
                display: "inline-block",
                background: "var(--fb-off-white)",
                borderRadius: 100,
                padding: "6px 16px",
                marginBottom: 16,
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "var(--fb-navy)", textTransform: "uppercase" }}>
                For Organizations
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 900,
                color: "var(--fb-navy)",
                margin: "0 0 20px",
                letterSpacing: "-0.02em",
              }}
            >
              Zero Risk.
              <br />
              Real Revenue.
            </h2>
            <p style={{ color: "var(--fb-text-secondary)", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
              Your organization receives a custom campaign page. Promote it to your community. Supporters
              place pre-orders. You receive $5 for every band sold. No inventory. No upfront investment.
              No fulfillment burden. No financial risk.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              {[
                "Custom campaign page for your organization",
                "$5 per wristband sold goes to your cause",
                "No inventory or upfront investment required",
                "We handle production and fulfillment",
                "Campaigns close when threshold is met",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "var(--fb-navy)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l3 3 5-6" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ color: "var(--fb-text)", fontSize: 15, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#start-fundraiser"
              style={{
                display: "inline-block",
                background: "var(--fb-navy)",
                color: "#FFFFFF",
                padding: "16px 32px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 800,
                fontSize: 15,
                letterSpacing: "0.02em",
              }}
            >
              Apply to Partner
            </a>
          </div>

          <div>
            <h3
              style={{
                fontWeight: 700,
                fontSize: 14,
                color: "var(--fb-text-muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Eligible Organizations
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {partnerTypes.map((type) => (
                <div
                  key={type.label}
                  style={{
                    background: "var(--fb-off-white)",
                    border: "1px solid var(--fb-border)",
                    borderRadius: 12,
                    padding: "18px 20px",
                    fontWeight: 600,
                    fontSize: 14,
                    color: "var(--fb-navy)",
                  }}
                >
                  {type.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .partners-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Section 6: Featured Campaigns ─────────────────────────────────────────
function CampaignsSection() {
  const progress = 12; // placeholder %

  return (
    <section id="fundraising" style={{ background: "var(--fb-off-white)", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "inline-block",
              background: "#FFFFFF",
              border: "1px solid var(--fb-border)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "var(--fb-navy)", textTransform: "uppercase" }}>
              Active Campaigns
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              color: "var(--fb-navy)",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}
          >
            Support a Campaign
          </h2>
          <p style={{ color: "var(--fb-text-secondary)", fontSize: 17, maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
            Every pre-order supports production and contributes to a community cause.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 28,
          }}
        >
          {/* USA Launch Campaign */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 20,
              border: "1px solid var(--fb-border)",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                background: "var(--fb-navy)",
                padding: "28px 28px 24px",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                {["#C8102E", "#FFFFFF", "#002868"].map((c, i) => (
                  <div key={i} style={{ flex: 1, height: 8, background: c, borderRadius: i === 0 ? "4px 0 0 4px" : i === 2 ? "0 4px 4px 0" : 0 }} />
                ))}
              </div>
              <h3 style={{ color: "#FFFFFF", fontWeight: 800, fontSize: 20, margin: "0 0 6px" }}>
                USA Flag Band - Launch Campaign
              </h3>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, margin: 0 }}>
                The founding design. Pre-order to launch production.
              </p>
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  background: "var(--fb-red)",
                  color: "#FFFFFF",
                  borderRadius: 8,
                  padding: "4px 10px",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                LIVE
              </div>
            </div>

            <div style={{ padding: "24px 28px 28px" }}>
              {/* Progress */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--fb-text-secondary)" }}>
                    Pre-orders toward launch
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "var(--fb-navy)" }}>
                    {progress} / 50 minimum
                  </span>
                </div>
                <div style={{ height: 8, background: "var(--fb-off-white)", borderRadius: 100 }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${(progress / 50) * 100}%`,
                      background: "var(--fb-navy)",
                      borderRadius: 100,
                      transition: "width 0.4s ease",
                    }}
                  />
                </div>
                <p style={{ fontSize: 12, color: "var(--fb-text-muted)", marginTop: 8 }}>
                  {50 - progress} more orders needed before production begins
                </p>
              </div>

              {/* Details */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 16,
                  marginBottom: 24,
                  padding: "16px 0",
                  borderTop: "1px solid var(--fb-border)",
                  borderBottom: "1px solid var(--fb-border)",
                }}
              >
                {[
                  { label: "Price", value: "$30" },
                  { label: "To Community", value: "$5" },
                  { label: "Ships", value: "Est. Q3 2026" },
                ].map((d) => (
                  <div key={d.label} style={{ textAlign: "center" }}>
                    <div style={{ fontWeight: 800, fontSize: 16, color: "var(--fb-navy)" }}>{d.value}</div>
                    <div style={{ fontSize: 12, color: "var(--fb-text-muted)", marginTop: 4 }}>{d.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="#shop-usa"
                style={{
                  display: "block",
                  background: "var(--fb-navy)",
                  color: "#FFFFFF",
                  padding: "14px 24px",
                  borderRadius: 10,
                  textDecoration: "none",
                  fontWeight: 800,
                  fontSize: 15,
                  textAlign: "center",
                  letterSpacing: "0.02em",
                }}
              >
                Pre-Order USA Flag Band - $30
              </a>
            </div>
          </div>

          {/* Start your own */}
          <div
            style={{
              background: "var(--fb-navy)",
              borderRadius: 20,
              padding: 40,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                background: "rgba(255,255,255,0.1)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 3v16M3 11h16" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 style={{ color: "#FFFFFF", fontWeight: 800, fontSize: 22, margin: "0 0 12px", letterSpacing: "-0.01em" }}>
              Start Your Own Campaign
            </h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.6, margin: "0 0 32px" }}>
              Any eligible organization can launch a Flag Bands fundraising campaign.
              Your flag. Your community. Your cause.
            </p>
            <a
              href="#start-fundraiser"
              style={{
                background: "#FFFFFF",
                color: "var(--fb-navy)",
                padding: "14px 28px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: 800,
                fontSize: 14,
                letterSpacing: "0.03em",
              }}
            >
              Apply to Fundraise
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 7: Start a Fundraiser CTA ─────────────────────────────────────
function FundraiserCTASection() {
  return (
    <section id="start-fundraiser" style={{ background: "var(--fb-navy)", padding: "96px 0" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
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
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", fontWeight: 500, letterSpacing: "0.05em" }}>
            FOR ORGANIZATIONS
          </span>
        </div>

        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 60px)",
            fontWeight: 900,
            color: "#FFFFFF",
            margin: "0 0 24px",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Your Organization.
          <br />
          <span style={{ color: "rgba(255,255,255,0.5)" }}>Our Platform.</span>
          <br />
          Community Funded.
        </h2>

        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 18, lineHeight: 1.7, marginBottom: 48, maxWidth: 600, margin: "0 auto 48px" }}>
          Launch a custom Flag Bands fundraising campaign for your nonprofit, school,
          cultural organization, or community group. Zero risk. $5 per band back to you.
        </p>

        {/* Application teaser */}
        <div
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 20,
            padding: "40px 48px",
            marginBottom: 40,
            textAlign: "left",
          }}
        >
          <h3 style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 16, margin: "0 0 24px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            To get started, tell us about your organization
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 16,
            }}
            className="form-grid"
          >
            {["Organization Name", "Organization Type", "Your Name", "Email Address"].map((field) => (
              <div
                key={field}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 10,
                  padding: "14px 18px",
                  color: "rgba(255,255,255,0.35)",
                  fontSize: 14,
                }}
              >
                {field}
              </div>
            ))}
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 10,
              padding: "14px 18px",
              marginBottom: 24,
              color: "rgba(255,255,255,0.35)",
              fontSize: 14,
            }}
          >
            Which flag would you like to represent your campaign?
          </div>
          <button
            style={{
              background: "#FFFFFF",
              color: "var(--fb-navy)",
              padding: "16px 36px",
              borderRadius: 10,
              border: "none",
              fontWeight: 800,
              fontSize: 15,
              cursor: "pointer",
              fontFamily: "inherit",
              letterSpacing: "0.02em",
              width: "100%",
            }}
          >
            Submit Application
          </button>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginTop: 12, textAlign: "center" }}>
            Applications reviewed within 48 hours. No commitment required.
          </p>
        </div>

        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
          Questions?{" "}
          <a href="mailto:hello@flagbands.com" style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>
            hello@flagbands.com
          </a>
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        background: "#0A1628",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "48px 0 32px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 40,
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 280 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span
                style={{
                  width: 24,
                  height: 18,
                  background: "linear-gradient(180deg, #C8102E 33%, #FFFFFF 33% 66%, #002868 66%)",
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.2)",
                  flexShrink: 0,
                }}
              />
              <span style={{ color: "#FFFFFF", fontWeight: 800, fontSize: 16, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Flag Bands
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
              Wearable identity and community fundraising. Wear Your Flag. Find Your People.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            <div>
              <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
                Shop
              </div>
              {["USA Flag Band", "Coming Soon", "Gift Ideas"].map((l) => (
                <a key={l} href="#" style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "none", marginBottom: 10 }}>
                  {l}
                </a>
              ))}
            </div>
            <div>
              <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
                Organization
              </div>
              {["Start a Fundraiser", "Partner Program", "Apply"].map((l) => (
                <a key={l} href="#" style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "none", marginBottom: 10 }}>
                  {l}
                </a>
              ))}
            </div>
            <div>
              <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
                Contact
              </div>
              {["hello@flagbands.com"].map((l) => (
                <a key={l} href={`mailto:${l}`} style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "none", marginBottom: 10 }}>
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 13, margin: 0 }}>
            &copy; {new Date().getFullYear()} Flag Bands. A LESARUSS brand.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy", "Terms"].map((l) => (
              <a key={l} href="#" style={{ color: "rgba(255,255,255,0.25)", fontSize: 13, textDecoration: "none" }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Export ────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <BrowseSection />
        <HowItWorksSection />
        <ImpactSection />
        <PartnersSection />
        <CampaignsSection />
        <FundraiserCTASection />
      </main>
      <Footer />
    </>
  );
}
