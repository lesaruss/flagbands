"use client";

import { useEffect, useMemo, useState } from "react";
import { PRODUCTS } from "../../../lib/products";

// Internal QA tool, not linked from any public nav. Pulls directly from the
// same lib/products.ts the live site uses, so it never drifts from reality.
// All review state (keep / needs update / notes / which variant is "the
// standard" for a flag) is saved to localStorage in the browser, so it
// persists across visits without needing a database table for what is
// fundamentally a one-person working checklist.

type ImgKind = "studio" | "wrist" | "hero";

interface ReviewEntry {
  keep: boolean;
  needsUpdate: boolean;
  note: string;
}

const STORAGE_KEY = "fb-image-audit-v1";
const STANDARD_KEY = "fb-image-audit-standard-v1";

function loadJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

const KIND_LABELS: Record<ImgKind, string> = {
  studio: "Studio / Flat-Lay",
  wrist: "Wrist",
  hero: "Hero / Circular Detail",
};

function ImageCard({
  src,
  label,
  reviewKey,
  entry,
  onChange,
}: {
  src: string;
  label: string;
  reviewKey: string;
  entry: ReviewEntry;
  onChange: (key: string, next: ReviewEntry) => void;
}) {
  const [broken, setBroken] = useState(false);

  return (
    <div
      style={{
        border: entry.needsUpdate ? "2px solid #C8102E" : entry.keep ? "2px solid #1a7a3c" : "1px solid #E0E0E0",
        borderRadius: 12,
        padding: 12,
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: 220,
      }}
    >
      <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "#767676" }}>
        {label}
      </div>
      <div
        style={{
          aspectRatio: "1/1",
          borderRadius: 8,
          overflow: "hidden",
          background: "#F5F5F5",
          border: "1px solid #EEE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {broken ? (
          <div style={{ color: "#C8102E", fontSize: 12, fontWeight: 700, textAlign: "center", padding: 8 }}>
            FAILED TO LOAD
            <div style={{ fontWeight: 400, fontSize: 10, marginTop: 4, wordBreak: "break-all", color: "#999" }}>
              {src}
            </div>
          </div>
        ) : (
          <img
            src={src}
            alt={label}
            loading="lazy"
            onError={() => setBroken(true)}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        )}
      </div>

      <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={entry.keep}
          onChange={(e) => onChange(reviewKey, { ...entry, keep: e.target.checked, needsUpdate: e.target.checked ? false : entry.needsUpdate })}
        />
        Keep as-is
      </label>
      <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={entry.needsUpdate}
          onChange={(e) => onChange(reviewKey, { ...entry, needsUpdate: e.target.checked, keep: e.target.checked ? false : entry.keep })}
        />
        Needs update
      </label>
      <textarea
        placeholder="What needs to change?"
        value={entry.note}
        onChange={(e) => onChange(reviewKey, { ...entry, note: e.target.value })}
        rows={2}
        style={{
          fontSize: 12,
          fontFamily: "inherit",
          padding: 6,
          borderRadius: 6,
          border: "1px solid #DDD",
          resize: "vertical",
        }}
      />
      <a href={src} target="_blank" rel="noreferrer" style={{ fontSize: 11, color: "#767676" }}>
        Open full size ↗
      </a>
    </div>
  );
}

export default function ImageAuditPage() {
  const [reviews, setReviews] = useState<Record<string, ReviewEntry>>({});
  const [standard, setStandard] = useState<Record<string, string>>({});
  const [onlyFlagged, setOnlyFlagged] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setReviews(loadJSON(STORAGE_KEY, {}));
    setStandard(loadJSON(STANDARD_KEY, {}));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) saveJSON(STORAGE_KEY, reviews);
  }, [reviews, loaded]);

  useEffect(() => {
    if (loaded) saveJSON(STANDARD_KEY, standard);
  }, [standard, loaded]);

  function getEntry(key: string): ReviewEntry {
    return reviews[key] ?? { keep: false, needsUpdate: false, note: "" };
  }

  function setEntry(key: string, next: ReviewEntry) {
    setReviews((prev) => ({ ...prev, [key]: next }));
  }

  const stats = useMemo(() => {
    const values = Object.values(reviews);
    return {
      keep: values.filter((v) => v.keep).length,
      needsUpdate: values.filter((v) => v.needsUpdate).length,
      total: PRODUCTS.length * (2 + PRODUCTS[0].variants!.length * 3),
    };
  }, [reviews]);

  function copyFlagged() {
    const lines: string[] = [];
    for (const product of PRODUCTS) {
      const flagLines: string[] = [];

      const shopEntry = getEntry(`${product.slug}:shop-tile`);
      if (shopEntry.needsUpdate) {
        flagLines.push(`- Shop/Homepage Tile: ${shopEntry.note || "(no note)"}  [${product.heroPhoto}]`);
      }
      const cutoutEntry = getEntry(`${product.slug}:cutout`);
      if (cutoutEntry.needsUpdate) {
        flagLines.push(`- Cutout Photo (currently unused on site): ${cutoutEntry.note || "(no note)"}  [${product.cutoutPhoto}]`);
      }
      for (const v of product.variants ?? []) {
        for (const kind of ["studio", "wrist", "hero"] as ImgKind[]) {
          const key = `${product.slug}:${v.id}:${kind}`;
          const e = getEntry(key);
          if (e.needsUpdate) {
            const url = kind === "studio" ? v.studioPhoto : kind === "wrist" ? v.wristPhoto : v.heroPhoto;
            flagLines.push(`- ${v.name} / ${KIND_LABELS[kind]}: ${e.note || "(no note)"}  [${url}]`);
          }
        }
      }

      if (flagLines.length > 0) {
        lines.push(`## ${product.name} (${product.slug})`);
        lines.push(...flagLines);
        lines.push("");
      }
    }

    const text = lines.length > 0 ? lines.join("\n") : "No images currently flagged as Needs Update.";
    navigator.clipboard?.writeText(text);
    alert(lines.length > 0 ? "Copied flagged items to clipboard." : "Nothing is flagged yet.");
  }

  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA", padding: "32px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: "#1a1a1a", margin: "0 0 8px" }}>
          Flag Bands — Image Inventory &amp; QA Checklist
        </h1>
        <p style={{ fontSize: 14, color: "#555", lineHeight: 1.6, maxWidth: 760, margin: "0 0 20px" }}>
          Every image currently wired into the live site, pulled straight from lib/products.ts, so this list can
          never drift from what&apos;s actually deployed. For each flag: the Shop/Homepage tile, the (currently
          unused) cutout photo, and all 3 photos for each of the 4 stone options. Check <strong>Keep</strong> or{" "}
          <strong>Needs update</strong> per image, add a note on what should change, and pick which stone is the
          &quot;standard&quot; example for that flag. Everything saves automatically in this browser.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            background: "#FFF",
            border: "1px solid #E0E0E0",
            borderRadius: 12,
            padding: "14px 18px",
            marginBottom: 24,
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 700, color: "#1a7a3c" }}>{stats.keep} kept</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#C8102E" }}>{stats.needsUpdate} flagged for update</div>
          <div style={{ fontSize: 13, color: "#767676" }}>{stats.total} total images across 9 flags</div>
          <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, marginLeft: "auto" }}>
            <input type="checkbox" checked={onlyFlagged} onChange={(e) => setOnlyFlagged(e.target.checked)} />
            Show only flags with a "Needs update" checked
          </label>
          <button
            onClick={copyFlagged}
            style={{
              background: "#5C3E94",
              color: "#FFF",
              border: "none",
              borderRadius: 8,
              padding: "10px 18px",
              fontWeight: 700,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Copy flagged items
          </button>
        </div>

        <nav style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {PRODUCTS.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: p.accentColor,
                background: "#FFF",
                border: `1px solid ${p.accentColor}33`,
                borderRadius: 999,
                padding: "6px 12px",
                textDecoration: "none",
              }}
            >
              {p.label}
            </a>
          ))}
        </nav>

        {PRODUCTS.map((product) => {
          const defaultVariant = product.variants?.[0];
          const mismatch = defaultVariant && defaultVariant.heroPhoto !== product.heroPhoto;
          const flagHasFlagged = [
            `${product.slug}:shop-tile`,
            `${product.slug}:cutout`,
            ...(product.variants ?? []).flatMap((v) => [
              `${product.slug}:${v.id}:studio`,
              `${product.slug}:${v.id}:wrist`,
              `${product.slug}:${v.id}:hero`,
            ]),
          ].some((k) => getEntry(k).needsUpdate);

          if (onlyFlagged && !flagHasFlagged) return null;

          return (
            <section
              key={product.slug}
              id={product.slug}
              style={{
                background: "#FFF",
                border: "1px solid #E0E0E0",
                borderRadius: 16,
                padding: 24,
                marginBottom: 32,
                scrollMarginTop: 24,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ width: 14, height: 14, borderRadius: 4, background: product.accentColor }} />
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a", margin: 0 }}>{product.name}</h2>
                <span style={{ fontSize: 12, color: "#999" }}>/{product.slug}</span>
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 20 }}>
                <ImageCard
                  src={product.heroPhoto}
                  label="Shop / Homepage Tile"
                  reviewKey={`${product.slug}:shop-tile`}
                  entry={getEntry(`${product.slug}:shop-tile`)}
                  onChange={setEntry}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <ImageCard
                    src={product.cutoutPhoto}
                    label="Cutout Photo (unused on live site)"
                    reviewKey={`${product.slug}:cutout`}
                    entry={getEntry(`${product.slug}:cutout`)}
                    onChange={setEntry}
                  />
                </div>
                {mismatch && (
                  <div
                    style={{
                      alignSelf: "flex-start",
                      background: "#FFF4E5",
                      border: "1px solid #E8A33D",
                      borderRadius: 10,
                      padding: "10px 14px",
                      fontSize: 12,
                      color: "#8A5A00",
                      maxWidth: 260,
                    }}
                  >
                    <strong>Auto-detected mismatch:</strong> the Shop/Homepage tile doesn&apos;t match{" "}
                    {defaultVariant?.name}&apos;s hero photo (the default stone shown on the product page).
                  </div>
                )}
              </div>

              <h3 style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#767676", margin: "0 0 12px" }}>
                Stone Variants
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {(product.variants ?? []).map((variant) => (
                  <div key={variant.id}>
                    <label style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, cursor: "pointer" }}>
                      <input
                        type="radio"
                        name={`standard-${product.slug}`}
                        checked={standard[product.slug] === variant.id}
                        onChange={() => setStandard((prev) => ({ ...prev, [product.slug]: variant.id }))}
                      />
                      <span style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a" }}>{variant.name}</span>
                      {standard[product.slug] === variant.id && (
                        <span
                          style={{
                            fontSize: 10,
                            fontWeight: 800,
                            background: "#5C3E94",
                            color: "#FFF",
                            borderRadius: 999,
                            padding: "2px 8px",
                            letterSpacing: "0.04em",
                          }}
                        >
                          STANDARD FOR THIS FLAG
                        </span>
                      )}
                    </label>
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                      <ImageCard
                        src={variant.studioPhoto}
                        label={KIND_LABELS.studio}
                        reviewKey={`${product.slug}:${variant.id}:studio`}
                        entry={getEntry(`${product.slug}:${variant.id}:studio`)}
                        onChange={setEntry}
                      />
                      <ImageCard
                        src={variant.wristPhoto}
                        label={KIND_LABELS.wrist}
                        reviewKey={`${product.slug}:${variant.id}:wrist`}
                        entry={getEntry(`${product.slug}:${variant.id}:wrist`)}
                        onChange={setEntry}
                      />
                      <ImageCard
                        src={variant.heroPhoto}
                        label={KIND_LABELS.hero}
                        reviewKey={`${product.slug}:${variant.id}:hero`}
                        entry={getEntry(`${product.slug}:${variant.id}:hero`)}
                        onChange={setEntry}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
