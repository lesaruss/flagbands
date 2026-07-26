import Link from "next/link";
import { PRODUCTS } from "../lib/products";
import NavBar from "../components/NavBar";
import SiteFooter from "../components/SiteFooter";

export default function Home() {
  return (
    <>
      <NavBar />

      <div
        style={{
          width: "100%",
          background: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
          paddingTop: 64,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle at 15% 50%, rgba(200,16,46,0.06) 0%, transparent 55%),
                              radial-gradient(circle at 85% 20%, rgba(212,160,23,0.05) 0%, transparent 45%)`,
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "64px 24px 96px",
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
                background: "rgba(92,62,148,0.08)",
                border: "1px solid rgba(92,62,148,0.18)",
                borderRadius: 100,
                padding: "6px 14px",
                marginBottom: 28,
              }}
            >
              <span style={{ fontSize: 13, color: "var(--fb-navy)", fontWeight: 600, letterSpacing: "0.05em" }}>
                9 FLAGS NOW AVAILABLE
              </span>
            </div>

            <h1
              style={{
                color: "var(--fb-navy)",
                fontSize: "clamp(36px, 5vw, 68px)",
                fontWeight: 900,
                lineHeight: 1.08,
                margin: "0 0 24px",
                letterSpacing: "-0.02em",
              }}
            >
              Wear Your Flag.
              <br />
              <span style={{ color: "var(--fb-navy-mid)" }}>Find Your People.</span>
            </h1>

            <p
              style={{
                color: "var(--fb-text-secondary)",
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
              <Link
                href="/shop"
                style={{
                  background: "var(--fb-navy)",
                  color: "#FFFFFF",
                  padding: "16px 32px",
                  borderRadius: 10,
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 800,
                  fontSize: 15,
                  letterSpacing: "0.03em",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Shop All Flags
              </Link>
            </div>

            <div style={{ display: "flex", gap: 36, marginTop: 48, flexWrap: "wrap" }}>
              {[
                { num: "$35", label: "Per Band" },
                { num: "9", label: "Flags Available" },
                { num: "$5", label: "Community Contribution" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ color: "var(--fb-navy)", fontWeight: 800, fontSize: 22, lineHeight: 1 }}>{stat.num}</div>
                  <div style={{ color: "var(--fb-text-muted)", fontSize: 12, fontWeight: 500, marginTop: 4, letterSpacing: "0.04em" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flag mosaic - each icon links straight to its product page */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="hero-product">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 8,
                width: "100%",
                maxWidth: 420,
              }}
            >
              {PRODUCTS.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  style={{
                    aspectRatio: "1/1",
                    borderRadius: 8,
                    overflow: "hidden",
                    border: "2px solid rgba(92,62,148,0.25)",
                    background: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12%",
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    src={p.heroPhoto}
                    alt={`${p.name} flag band`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      transform: p.slug === "jamaica" ? "rotate(180deg)" : p.slug === "peru" ? "scale(1.22)" : "none",
                    }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
            .hero-product { margin-top: 8px; }
          }
        `}</style>
      </div>

      <SiteFooter />
    </>
  );
}
