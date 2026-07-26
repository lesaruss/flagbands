import Link from "next/link";
import type { ReactNode } from "react";
import NavBar from "../../components/NavBar";
import SiteFooter from "../../components/SiteFooter";

export const metadata = {
  title: "FAQ | Flag Bands",
  description: "Answers to common questions about Flag Bands: materials, stones, causes, shipping, returns, and accounts.",
};

interface FaqItem {
  q: string;
  a: ReactNode;
}

const FAQS: FaqItem[] = [
  {
    q: "What is Flag Bands?",
    a: "Handcrafted beaded wristbands featuring a custom flag plate for the country or community you want to represent. Every band funds a cause.",
  },
  {
    q: "What are the bands made of?",
    a: "Each band is handcrafted with genuine lava stone beads, small color-matched accent beads in the flag's own palette, a custom-printed wood flag plate, and copper hardware. Every band is strung and finished by hand, so slight natural variation between pieces is part of the product, not a flaw.",
  },
  {
    q: "Can I choose the stone on my band?",
    a: (
      <>
        Yes, for flags with more than one material option you can pick your stone right on the product page before
        adding to cart. See what each stone is said to represent on our{" "}
        <Link href="/stones" style={{ color: "var(--fb-navy)", fontWeight: 700 }}>
          Stone Meanings
        </Link>{" "}
        page.
      </>
    ),
  },
  {
    q: "How much does a band cost?",
    a: "$35 per band. $5 of every purchase goes toward a community cause tied to that flag.",
  },
  {
    q: "Which cause does my purchase support?",
    a: "We're finalizing the specific partner organization for each flag. Check the product page for updates as we lock in each partnership.",
  },
  {
    q: "Do you ship internationally?",
    a: (
      <>
        Right now we offer free shipping within the U.S., with delivery in 3-5 business days. Ordering from outside
        the U.S.? Email{" "}
        <a href="mailto:hello@flagbands.com" style={{ color: "var(--fb-navy)", fontWeight: 700 }}>
          hello@flagbands.com
        </a>{" "}
        and we'll see what we can do.
      </>
    ),
  },
  {
    q: "What does it mean if a stone is marked \"Pre-Order\"?",
    a: "That material is currently being restocked. Pre-Order bands ship in 2-4 weeks instead of the standard 3-5 business days, and the product page always shows this before you check out.",
  },
  {
    q: "Can I return or exchange my band?",
    a: (
      <>
        All sales are final, since every band is made to order. If there's a problem with your order, email{" "}
        <a href="mailto:hello@flagbands.com" style={{ color: "var(--fb-navy)", fontWeight: 700 }}>
          hello@flagbands.com
        </a>{" "}
        and we'll help sort it out. Full details are on our{" "}
        <Link href="/policies" style={{ color: "var(--fb-navy)", fontWeight: 700 }}>
          Policies
        </Link>{" "}
        page.
      </>
    ),
  },
  {
    q: "Can I track my order?",
    a: (
      <>
        Yes. Sign in anytime at{" "}
        <Link href="/account" style={{ color: "var(--fb-navy)", fontWeight: 700 }}>
          your account
        </Link>{" "}
        to see your order history and status.
      </>
    ),
  },
  {
    q: "Can I start a fundraiser with Flag Bands?",
    a: (
      <>
        Yes. Visit our{" "}
        <Link href="/fundraiser" style={{ color: "var(--fb-navy)", fontWeight: 700 }}>
          Fundraiser
        </Link>{" "}
        page to set one up for your organization or community.
      </>
    ),
  },
  {
    q: "Is checkout secure?",
    a: "Payments are processed securely by Stripe. We never see or store your full card number.",
  },
  {
    q: "How do I get in touch?",
    a: (
      <>
        Email{" "}
        <a href="mailto:hello@flagbands.com" style={{ color: "var(--fb-navy)", fontWeight: 700 }}>
          hello@flagbands.com
        </a>{" "}
        or use our{" "}
        <Link href="/contact" style={{ color: "var(--fb-navy)", fontWeight: 700 }}>
          Contact
        </Link>{" "}
        page.
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <NavBar />

      <main style={{ maxWidth: 780, margin: "0 auto", padding: "48px 24px 96px" }}>
        <h1
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: "var(--fb-navy)",
            margin: "0 0 16px",
            letterSpacing: "-0.01em",
          }}
        >
          FAQ
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fb-text-secondary)", maxWidth: 640, marginBottom: 40 }}>
          Answers to the questions we hear most. Don&apos;t see yours?{" "}
          <Link href="/contact" style={{ color: "var(--fb-navy)", fontWeight: 700 }}>
            Get in touch
          </Link>
          .
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS.map((item, i) => (
            <details
              key={i}
              style={{
                border: "1px solid var(--fb-border)",
                borderRadius: 12,
                padding: "16px 20px",
                background: "var(--fb-off-white)",
              }}
            >
              <summary
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--fb-navy)",
                  cursor: "pointer",
                  listStyle: "none",
                }}
              >
                {item.q}
              </summary>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--fb-text-secondary)", margin: "12px 0 0" }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
