import NavBar from "../../components/NavBar";
import SiteFooter from "../../components/SiteFooter";

export default function PartnersPage() {
  return (
    <>
      <NavBar />

      <div style={{ width: "100%", background: "#F8F7F4" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px 96px" }}>
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
            <h1
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 900,
                color: "var(--fb-navy)",
                margin: "0 0 14px",
                letterSpacing: "-0.02em",
              }}
            >
              Built on Community
            </h1>
            <p style={{ color: "var(--fb-text-secondary)", fontSize: 17, maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
              Flag Bands partners with cultural organizations, community leaders, and schools to deliver
              impact alongside every wristband.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 20 }}>
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
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
