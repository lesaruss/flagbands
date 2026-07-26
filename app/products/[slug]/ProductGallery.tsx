"use client";

import { useEffect, useState } from "react";
import type { ProductContent } from "../../../lib/products";
import { useCart } from "../../../lib/cart-context";

export default function ProductGallery({
  product,
  materialsDescription,
  inventory,
}: {
  product: ProductContent;
  materialsDescription: string;
  /** quantity in stock per material id, e.g. { "tigers-eye": 2, "hematite": 0 } */
  inventory: Record<string, number>;
}) {
  const variants = product.variants;
  const [selectedId, setSelectedId] = useState<string | undefined>(variants?.[0]?.id);
  const selected = variants?.find((v) => v.id === selectedId) ?? variants?.[0];
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const studioPhoto = selected?.studioPhoto ?? product.studioPhoto;
  const wristPhoto = selected?.wristPhoto ?? product.wristPhoto;
  const heroPhoto = selected?.heroPhoto ?? product.heroPhoto;

  const heroTransform =
    product.slug === "jamaica" ? "rotate(180deg)" : product.slug === "peru" ? "scale(1.22)" : "none";

  // Three gallery images in their default order: flat-lay (main), wrist, circular detail.
  // "order" holds indices into this fixed list - order[0] is always the current main image.
  const galleryImages = [
    { key: "studio", src: studioPhoto, alt: `${product.name} flag band, studio product shot`, fit: "cover" as const, transform: "none" },
    { key: "wrist", src: wristPhoto, alt: `${product.name} flag band worn on the wrist`, fit: "cover" as const, transform: "none" },
    { key: "hero", src: heroPhoto, alt: `${product.name} flag band, circular detail`, fit: "contain" as const, transform: heroTransform },
  ];

  const [order, setOrder] = useState([0, 1, 2]);

  // Reset back to the default order whenever the selected stone changes, so switching
  // materials doesn't carry over a swap made on a different variant's photo set.
  useEffect(() => {
    setOrder([0, 1, 2]);
    setAdded(false);
  }, [selectedId]);

  const promote = (position: number) => {
    if (position === 0) return;
    setOrder((prev) => {
      const next = [...prev];
      [next[0], next[position]] = [next[position], next[0]];
      return next;
    });
  };

  const main = galleryImages[order[0]];
  const thumb1 = galleryImages[order[1]];
  const thumb2 = galleryImages[order[2]];

  const selectedMaterialId = selected?.id ?? "tigers-eye";
  const stockQty = inventory[selectedMaterialId] ?? 0;
  const isPreorder = stockQty <= 0;

  const unitPriceCents = Math.round(parseFloat(product.price.replace(/[^0-9.]/g, "")) * 100) || 3500;

  const handleAddToCart = () => {
    addItem({
      flagSlug: product.slug,
      materialId: selectedMaterialId,
      flagName: product.name,
      materialName: selected?.name ?? "Tiger's Eye",
      unitPriceCents,
      image: studioPhoto,
      preorder: isPreorder,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: main.fit === "contain" ? "10%" : 0,
            boxSizing: "border-box",
          }}
        >
          <img
            key={main.src}
            src={main.src}
            alt={main.alt}
            style={{ width: "100%", height: "100%", objectFit: main.fit, transform: main.transform }}
          />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[thumb1, thumb2].map((img, i) => {
            const position = i + 1; // thumb1 is order[1], thumb2 is order[2]
            return (
              <button
                key={img.key}
                type="button"
                onClick={() => promote(position)}
                aria-label={`Show ${img.alt} as the main image`}
                style={{
                  aspectRatio: "1/1",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid var(--fb-border)",
                  background: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: img.fit === "contain" ? "10%" : 0,
                  boxSizing: "border-box",
                  cursor: "pointer",
                  transition: "border-color 0.15s ease, transform 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--fb-navy)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--fb-border)";
                }}
              >
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  style={{ width: "100%", height: "100%", objectFit: img.fit, transform: img.transform }}
                />
              </button>
            );
          })}
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
        <div style={{ fontSize: 28, fontWeight: 900, color: "var(--fb-text)", marginBottom: 4 }}>
          {product.price}
        </div>
        <div style={{ fontSize: 13, color: "var(--fb-text-muted)", marginBottom: 20 }}>
          Free shipping included.
        </div>

        <button
          onClick={handleAddToCart}
          style={{
            background: isPreorder ? "var(--fb-text)" : "var(--fb-navy)",
            color: "#FFFFFF",
            border: "none",
            borderRadius: 10,
            padding: "14px 28px",
            fontSize: 15,
            fontWeight: 700,
            cursor: "pointer",
            marginBottom: 8,
          }}
        >
          {added ? "Added ✓" : isPreorder ? "Pre-Order Now" : "Add to Cart"}
        </button>
        <div
          style={{
            fontSize: 13,
            color: isPreorder ? "#8A6D00" : "var(--fb-text-muted)",
            marginBottom: variants && variants.length > 1 ? 24 : 32,
          }}
        >
          {isPreorder
            ? "Currently a pre-order for this stone — ships in 2-4 weeks."
            : stockQty <= 2
            ? `Only ${stockQty} left in stock.`
            : "In stock, ships within a few days."}
        </div>

        {variants && variants.length > 1 ? (
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
              Choose Your Stone
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {variants.map((v) => {
                const isSelected = v.id === selected?.id;
                const outOfStock = (inventory[v.id] ?? 0) <= 0;
                return (
                  <button
                    key={v.id}
                    onClick={() => setSelectedId(v.id)}
                    style={{
                      padding: "10px 16px",
                      borderRadius: 999,
                      fontSize: 13,
                      fontWeight: 700,
                      cursor: "pointer",
                      border: isSelected ? `2px solid ${product.accentColor}` : "2px solid var(--fb-border)",
                      background: isSelected ? product.accentColor : "#FFFFFF",
                      color: isSelected ? "#FFFFFF" : "var(--fb-navy)",
                      transition: "border-color 0.15s ease, background 0.15s ease, color 0.15s ease",
                      position: "relative",
                    }}
                  >
                    {v.name}
                    {outOfStock ? (
                      <span style={{ marginLeft: 6, fontSize: 10, opacity: 0.75, fontWeight: 600 }}>
                        (Pre-Order)
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </section>
        ) : null}

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
            {materialsDescription} The flag plate on this band is printed with {product.flagDescription}.
            {selected ? (
              <>
                {" "}
                This one is strung with genuine <strong>{selected.name}</strong> beads.
              </>
            ) : null}
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
  );
}
