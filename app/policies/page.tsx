import Link from "next/link";
import NavBar from "../../components/NavBar";
import SiteFooter from "../../components/SiteFooter";

export const metadata = {
  title: "Policies | Flag Bands",
  description: "Flag Bands return policy, shipping policy, privacy policy, and terms of service.",
};

interface Policy {
  id: string;
  title: string;
  body: string[];
}

const POLICIES: Policy[] = [
  {
    id: "returns",
    title: "Return Policy",
    body: [
      "All sales are final. Because every Flag Band is handcrafted and strung to order, we don't accept returns or exchanges once an order is placed.",
      "If something's wrong on our end, your band arrives damaged, you received the wrong flag or stone, or anything else feels off, email hello@flagbands.com with your order number and we'll make it right.",
    ],
  },
  {
    id: "shipping",
    title: "Shipping Policy",
    body: [
      "Every order ships free. In-stock bands ship within 3-5 business days of purchase.",
      "If the stone you selected is marked Pre-Order on the product page, that material is being restocked and ships in 2-4 weeks instead. We'll always show that timeline before you check out, never after.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    body: [
      "We collect only what's needed to fulfill your order: your name, email, shipping address, and payment information.",
      "Payment is processed securely by Stripe, we never see or store your full card number. Order and account records are kept in our database so you can view your order history from your account dashboard.",
      "We don't sell or rent your information to third parties. If you'd like a copy of your data or want your account removed, email hello@flagbands.com.",
    ],
  },
  {
    id: "terms",
    title: "Terms of Service",
    body: [
      "By placing an order, you agree to the price and description shown at checkout.",
      "Because every band is handmade, slight natural variation in stone color and pattern from piece to piece is expected and is not a defect.",
      "We reserve the right to limit order quantities, decline orders we believe to be fraudulent, and correct pricing errors before an order ships.",
      "These terms may be updated from time to time. The version posted on this page is the one that applies to your order.",
    ],
  },
];

export default function PoliciesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <NavBar />

      <main style={{ maxWidth: 780, margin: "0 auto", padding: "48px 24px 96px" }}>
        <h1
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: "var(--fb-navy)",
            margin: "0 0 12px",
            letterSpacing: "-0.01em",
          }}
        >
          Policies
        </h1>
        <p style={{ fontSize: 15, color: "var(--fb-text-muted)", marginBottom: 16 }}>Last updated July 26, 2026.</p>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fb-text-secondary)", maxWidth: 640, marginBottom: 16 }}>
          Return, shipping, privacy, and terms of service, all in one place. Have a question this page doesn&apos;t
          answer? Reach us at{" "}
          <a href="mailto:hello@flagbands.com" style={{ color: "var(--fb-navy)", fontWeight: 700 }}>
            hello@flagbands.com
          </a>{" "}
          or visit our{" "}
          <Link href="/contact" style={{ color: "var(--fb-navy)", fontWeight: 700 }}>
            Contact
          </Link>{" "}
          page.
        </p>

        <nav aria-label="Policy sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 48 }}>
          {POLICIES.map((policy) => (
            <a
              key={policy.id}
              href={`#${policy.id}`}
              style={{
                background: "var(--fb-off-white)",
                border: "1px solid var(--fb-border)",
                borderRadius: 999,
                padding: "8px 16px",
                fontSize: 13,
                fontWeight: 700,
                color: "var(--fb-navy)",
                textDecoration: "none",
              }}
            >
              {policy.title}
            </a>
          ))}
        </nav>

        {POLICIES.map((policy, i) => (
          <section
            key={policy.id}
            id={policy.id}
            style={{
              marginBottom: i === POLICIES.length - 1 ? 0 : 48,
              paddingBottom: i === POLICIES.length - 1 ? 0 : 48,
              borderBottom: i === POLICIES.length - 1 ? "none" : "1px solid var(--fb-border)",
              scrollMarginTop: 88,
            }}
          >
            <h2
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "var(--fb-navy)",
                margin: "0 0 16px",
                letterSpacing: "-0.01em",
              }}
            >
              {policy.title}
            </h2>
            {policy.body.map((p, j) => (
              <p key={j} style={{ fontSize: 15, lineHeight: 1.7, color: "var(--fb-text-secondary)", margin: "0 0 14px" }}>
                {p}
              </p>
            ))}
          </section>
        ))}
      </main>

      <SiteFooter />
    </div>
  );
}
