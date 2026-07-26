import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, MATERIALS_DESCRIPTION, getProduct } from "../../../lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} Flag Band`,
    description: `${product.price} handcrafted wristband featuring ${product.flagDescription}. ${product.cause.body}`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      {/* Nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
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
            <img src="/logo.svg" alt="Flag Bands" style={{ height: 32, width: "auto" }} />
          </Link>
          <Link
            href="/"
            style={{
              color: "var(--fb-navy)",
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            ← Back to Shop
          </Link>
        </div>
      </nav>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 96px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
          }}
          className="fb-product-grid"
        >
          {/* Image stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                aspectRatio: "1/1",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid var(--fb-border)",
                background: "#FFFFFF",
              }}
            >
              <img
                src={product.studioPhoto}
                alt={`${product.name} flag band, studio product shot`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div
                style={{
                  aspectRatio: "4/5",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid var(--fb-border)",
                  background: "#FFFFFF",
                }}
              >
                <img
                  src={product.wristPhoto}
                  alt={`${product.name} flag band worn on the wrist`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  aspectRatio: "4/5",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid var(--fb-border)",
                  background: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={product.heroPhoto}
                  alt={`${product.name} flag band, flat-lay detail`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            <span
              style={{
                display: "inline-block",
                background: product.accentColor,
                color: "#FFFFFF",
                fontSize: 11,
                fontWeight: 700,
                padding: "4px 10px",
                borderRadius: 4,
                letterSpacing: "0.05em",
                marginBottom: 12,
              }}
            >
              {product.label}
            </span>
            <h1
              style={{
                fontSize: 36,
                fontWeight: 800,
                color: "var(--fb-navy)",
                margin: "0 0 8px",
                letterSpacing: "-0.01em",
              }}
            >
              {product.name} Flag Band
            </h1>
            <div style={{ fontSize: 28, fontWeight: 900, color: "var(--fb-text)", marginBottom: 24 }}>
              {product.price}
            </div>

            <button
              style={{
                background: "var(--fb-navy)",
                color: "#FFFFFF",
                border: "none",
                borderRadius: 10,
                padding: "14px 28px",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                marginBottom: 40,
              }}
            >
              Add to Cart
            </button>

            <section style={{ marginBottom: 32 }}>
              <h2
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--fb-text-muted)",
                  marginBottom: 10,
                }}
              >
                What It&apos;s Made Of
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--fb-text-secondary)", margin: 0 }}>
                {MATERIALS_DESCRIPTION} The flag plate on this band is printed with {product.flagDescription}.
              </p>
            </section>

            <section
              style={{
                background: "var(--fb-off-white)",
                borderRadius: 14,
                padding: 24,
              }}
            >
              <h2
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--fb-text-muted)",
                  marginBottom: 10,
                }}
              >
                What Your Purchase Supports
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--fb-text-secondary)", margin: 0 }}>
                {product.cause.org ? (
                  <>
                    <strong style={{ color: "var(--fb-text)" }}>{product.cause.org}</strong>
                    {" — "}
                  </>
                ) : null}
                {product.cause.body}
              </p>
            </section>
          </div>
        </div>

        {/* Other flags */}
        <div style={{ marginTop: 80, borderTop: "1px solid var(--fb-border)", paddingTop: 40 }}>
          <h2
            style={{
              fontSize: 12,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--fb-text-muted)",
              marginBottom: 20,
            }}
          >
            More Flags
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              gap: 16,
            }}
          >
            {PRODUCTS.filter((p) => p.slug !== product.slug).map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    aspectRatio: "1/1",
                    borderRadius: 10,
                    overflow: "hidden",
                    border: "1px solid var(--fb-border)",
                    marginBottom: 8,
                  }}
                >
                  <img
                    src={p.heroPhoto}
                    alt={`${p.name} flag band`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--fb-navy)" }}>{p.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--fb-border)", padding: "32px 24px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <img src="/logo.svg" alt="Flag Bands" style={{ height: 32, width: "auto" }} />
            <p style={{ color: "var(--fb-text-muted)", fontSize: 13, marginTop: 8, maxWidth: 320, lineHeight: 1.5 }}>
              Handcrafted wristbands. Real flags. Real causes.
            </p>
          </div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["Contact", "Fundraising", "Returns", "FAQ"].map((link) => (
              <a
                key={link}
                href="/#"
                style={{ color: "var(--fb-text-muted)", fontSize: 13, textDecoration: "none", fontWeight: 500 }}
              >
                {link}
              </a>
            ))}
          </div>
          <div style={{ color: "var(--fb-text-muted)", fontSize: 12 }}>2026 Flag Bands. All rights reserved.</div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 720px) {
          .fb-product-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
