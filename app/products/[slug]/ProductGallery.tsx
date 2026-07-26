"use client";

import { useState } from "react";
import type { ProductContent } from "../../../lib/products";

export default function ProductGallery({
  product,
  materialsDescription,
}: {
  product: ProductContent;
  materialsDescription: string;
}) {
  const variants = product.variants;
  const [selectedId, setSelectedId] = useState<string | undefined>(variants?.[0]?.id);
  const selected = variants?.find((v) => v.id === selectedId) ?? variants?.[0];

  const studioPhoto = selected?.studioPhoto ?? product.studioPhoto;
  const wristPhoto = selected?.wristPhoto ?? product.wristPhoto;
  const heroPhoto = selected?.heroPhoto ?? product.heroPhoto;

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
          }}
        >
          <img
            key={studioPhoto}
            src={studioPhoto}
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
              key={wristPhoto}
              src={wristPhoto}
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
              padding: "10%",
              boxSizing: "border-box",
            }}
          >
            <img
              key={heroPhoto}
              src={heroPhoto}
              alt={`${product.name} flag band, flat-lay detail`}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
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
            marginBottom: variants && variants.length > 1 ? 32 : 40,
          }}
        >
          Add to Cart
        </button>

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
                    }}
                  >
                    {v.name}
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
