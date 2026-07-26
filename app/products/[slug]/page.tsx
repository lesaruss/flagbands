import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, MATERIALS_DESCRIPTION, getProduct } from "../../../lib/products";
import ProductGallery from "./ProductGallery";
import NavBar from "../../../components/NavBar";
import SiteFooter from "../../../components/SiteFooter";
import { supabaseServer } from "../../../lib/supabase-server";

// Inventory changes with every purchase, so this page can't be a one-time
// static build: revalidate frequently so the "in stock" / "pre-order" badge
// and the per-variant stock never lag behind real Stripe purchases.
export const revalidate = 30;

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

async function getInventoryForFlag(slug: string): Promise<Record<string, number>> {
  try {
    const supabase = supabaseServer();
    const { data, error } = await supabase
      .from("flagbands_inventory")
      .select("material_id, quantity")
      .eq("flag_slug", slug);

    if (error || !data) return {};
    return Object.fromEntries(data.map((row) => [row.material_id, row.quantity]));
  } catch {
    // If Supabase env vars aren't configured yet, fall back to "everything in
    // stock" rather than breaking the page - better a slightly stale badge
    // than a 500 on every product page.
    return {};
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const inventory = await getInventoryForFlag(slug);

  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <NavBar />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 96px" }}>
        <ProductGallery product={product} materialsDescription={MATERIALS_DESCRIPTION} inventory={inventory} />

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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10%",
                    boxSizing: "border-box",
                    background: "#FFFFFF",
                  }}
                >
                  <img
                    src={p.heroPhoto}
                    alt={`${p.name} flag band`}
                    style={{ width: "100%", height: "100%", objectFit: "contain", transform: p.slug === "jamaica" ? "rotate(180deg)" : p.slug === "peru" ? "scale(1.22)" : "none" }}
                  />
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--fb-navy)" }}>{p.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />

      <style>{`
        @media (max-width: 720px) {
          .fb-product-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
