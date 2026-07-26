import Link from "next/link";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { COUNTRY_STORIES, getCountryStory } from "../../../lib/country-stories";
import { getProduct } from "../../../lib/products";
import NavBar from "../../../components/NavBar";
import SiteFooter from "../../../components/SiteFooter";
import CountrySelector from "./CountrySelector";

export function generateStaticParams() {
  return COUNTRY_STORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const country = getCountryStory(slug);
  if (!country || country.comingSoon) return {};
  return {
    title: `${country.name}: Country Story | Flag Bands`,
    description: country.tagline,
  };
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2
      style={{
        fontSize: 12,
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: "var(--fb-text-muted)",
        margin: "0 0 16px",
      }}
    >
      {children}
    </h2>
  );
}

export default async function CountryStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const country = getCountryStory(slug);
  if (!country) notFound();

  const product = getProduct(slug);

  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <NavBar />

      <main style={{ maxWidth: 780, margin: "0 auto", padding: "32px 24px 96px" }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: 24 }}>
          <ol
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 6,
              listStyle: "none",
              margin: 0,
              padding: 0,
              fontSize: 13,
              color: "var(--fb-text-muted)",
            }}
          >
            <li>
              <Link href="/account" style={{ color: "var(--fb-text-muted)", textDecoration: "none", fontWeight: 600 }}>
                Account
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>Country Stories</li>
            <li aria-hidden="true">/</li>
            <li style={{ color: "var(--fb-navy)", fontWeight: 700 }}>{country.name}</li>
          </ol>
        </nav>

        {/* Country switcher */}
        <div style={{ marginBottom: 32 }}>
          <CountrySelector currentSlug={country.slug} />
        </div>

        {country.comingSoon ? (
          <div
            style={{
              background: "var(--fb-off-white)",
              border: "1px solid var(--fb-border)",
              borderRadius: 16,
              padding: "40px 32px",
              textAlign: "center",
            }}
          >
            <h1 style={{ fontSize: 26, fontWeight: 900, color: "var(--fb-navy)", margin: "0 0 12px" }}>
              {country.name}&apos;s story is coming soon
            </h1>
            <p style={{ fontSize: 15, color: "var(--fb-text-secondary)", lineHeight: 1.6, margin: "0 0 24px" }}>
              We&apos;re researching the flag history, culture, and national symbols for {country.name}. Jamaica&apos;s
              profile is live now, more countries are added regularly.
            </p>
            <Link
              href="/stories/jamaica"
              style={{
                display: "inline-block",
                background: "var(--fb-navy)",
                color: "#FFFFFF",
                borderRadius: 10,
                padding: "12px 28px",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Read Jamaica&apos;s Story
            </Link>
          </div>
        ) : (
          <>
            {/* Hero */}
            <div
              style={{
                display: "inline-block",
                background: country.accentColor,
                color: "#FFFFFF",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "5px 12px",
                borderRadius: 999,
                marginBottom: 14,
              }}
            >
              Country Story
            </div>
            <h1
              style={{
                fontSize: 40,
                fontWeight: 900,
                color: "var(--fb-navy)",
                margin: "0 0 12px",
                letterSpacing: "-0.01em",
                lineHeight: 1.05,
              }}
            >
              {country.name}
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "var(--fb-text-secondary)",
                lineHeight: 1.6,
                maxWidth: 640,
                margin: "0 0 40px",
              }}
            >
              {country.tagline}
            </p>

            {/* Flag Story */}
            <section style={{ marginBottom: 48 }}>
              <SectionLabel>{country.flagStory.heading}</SectionLabel>
              {country.flagStory.paragraphs.map((p, i) => (
                <p key={i} style={{ fontSize: 16, lineHeight: 1.75, color: "var(--fb-text)", margin: "0 0 16px" }}>
                  {p}
                </p>
              ))}
            </section>

            {/* Known For */}
            <section style={{ marginBottom: 48 }}>
              <SectionLabel>Known For</SectionLabel>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {country.knownFor.map((item) => (
                  <span
                    key={item}
                    style={{
                      background: "var(--fb-off-white)",
                      border: "1px solid var(--fb-border)",
                      borderRadius: 999,
                      padding: "8px 16px",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--fb-navy)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            {/* Pop Culture */}
            <section style={{ marginBottom: 48 }}>
              <SectionLabel>{country.popCulture.heading}</SectionLabel>
              {country.popCulture.paragraphs.map((p, i) => (
                <p key={i} style={{ fontSize: 16, lineHeight: 1.75, color: "var(--fb-text)", margin: "0 0 16px" }}>
                  {p}
                </p>
              ))}
            </section>

            {/* National Dish */}
            <section style={{ marginBottom: 48 }}>
              <SectionLabel>National Dish</SectionLabel>
              <div
                style={{
                  background: "#FFFFFF",
                  border: `2px solid ${country.accentColor}`,
                  borderRadius: 14,
                  padding: 24,
                }}
              >
                <h3 style={{ fontSize: 18, fontWeight: 900, color: "var(--fb-navy)", margin: "0 0 8px" }}>
                  {country.nationalDish.name}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--fb-text-secondary)", margin: 0 }}>
                  {country.nationalDish.description}
                </p>
              </div>
            </section>

            {/* Leadership Today */}
            <section style={{ marginBottom: 48 }}>
              <SectionLabel>Leadership Today</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {country.leadershipToday.map((role) => (
                  <div
                    key={role.role}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      flexWrap: "wrap",
                      gap: 8,
                      borderBottom: "1px solid var(--fb-border)",
                      paddingBottom: 12,
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 800, color: "var(--fb-navy)" }}>{role.name}</div>
                      {role.note && (
                        <div style={{ fontSize: 13, color: "var(--fb-text-muted)", marginTop: 2 }}>{role.note}</div>
                      )}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "var(--fb-text-muted)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {role.role}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tidbits */}
            <section style={{ marginBottom: 48 }}>
              <SectionLabel>Did You Know?</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {country.tidbits.map((t, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--fb-off-white)",
                      borderRadius: 12,
                      padding: "16px 20px",
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: "var(--fb-text)",
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </section>

            {/* Cross-sell */}
            {product && (
              <div
                style={{
                  borderTop: "1px solid var(--fb-border)",
                  paddingTop: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 16,
                }}
              >
                <p style={{ fontSize: 15, color: "var(--fb-text-secondary)", margin: 0 }}>
                  Wear {country.name}&apos;s story on your wrist.
                </p>
                <Link
                  href={`/products/${product.slug}`}
                  style={{
                    background: "var(--fb-navy)",
                    color: "#FFFFFF",
                    borderRadius: 10,
                    padding: "12px 24px",
                    fontSize: 14,
                    fontWeight: 700,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  Shop the {product.label} Band
                </Link>
              </div>
            )}
          </>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
