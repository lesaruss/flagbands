import NavBar from "../../components/NavBar";
import SiteFooter from "../../components/SiteFooter";

const STEPS = [
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

export default function HowItWorksPage() {
  return (
    <>
      <NavBar />

      <div style={{ width: "100%", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px 96px" }}>
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
            <h1
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 900,
                color: "var(--fb-navy)",
                margin: "0 0 14px",
                letterSpacing: "-0.02em",
              }}
            >
              Simple. Personal. Purposeful.
            </h1>
            <p style={{ color: "var(--fb-text-secondary)", fontSize: 17, maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
              From flag to wrist in three steps.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 }} className="steps-grid">
            {STEPS.map((step) => (
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

      <SiteFooter />
    </>
  );
}
