import Link from "next/link";
import { COUNTRY_STORIES } from "../../lib/country-stories";
import { getProduct } from "../../lib/products";
import NavBar from "../../components/NavBar";
import SiteFooter from "../../components/SiteFooter";

export const metadata = {
  title: "Pulse | Flag Bands",
  description:
    "Country Stories unlocked for Flag Bands customers - the culture, history, and facts behind every flag we carry.",
};

export default function PulsePage() {
  const stories = COUNTRY_STORIES.filter((c) => !c.comingSoon);

  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <NavBar />

      <div style={{ width: "100%", background: "#F8F7F4" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 80px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
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
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "var(--fb-navy)",
                  textTransform: "uppercase",
                }}
              >
                Pulse
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(26px, 3.5vw, 44px)",
                fontWeight: 900,
                color: "var(--fb-navy)",
                margin: "0 0 12px",
                letterSpacing: "-0.02em",
              }}
            >
              Country Stories
            </h1>
            <p
              style={{
                color: "var(--fb-text-secondary)",
                fontSize: 16,
                maxWidth: 560,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Every flag we carry has a story: the culture, the history, the food, the icons.
              These deep-dive articles are unlocked for anyone who has purchased that flag&apos;s band.
              Already own one?{" "}
              <Link href="/account" style={{ color: "var(--fb-navy)", fontWeight: 700 }}>
                Find it in your account
              </Link>
              . Don&apos;t own one yet?{" "}
              <Link href="/shop" style={{ color: "var(--fb-navy)", fontWeight: 700 }}>
                Shop the collection
              </Link>
              .
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {stories.map((story) => {
              const product = getProduct(story.slug);
              return (
                <Link
                  key={story.slug}
                  href={`/stories/${story.slug}`}
                  style={{
                    display: "block",
                    background: "#FFFFFF",
                    borderRadius: 14,
                    border: "2px solid transparent",
                    overflow: "hidden",
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "4 / 3",
                      background: story.accentColor,
                      overflow: "hidden",
                    }}
                  >
                    {product?.heroPhoto && (
                      <img
                        src={product.heroPhoto}
                        alt={`${story.name} flag band`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    )}
                    <div
                      style={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        background: "rgba(255,255,255,0.92)",
                        borderRadius: 100,
                        padding: "4px 10px",
                        fontSize: 11,
                        fontWeight: 800,
                        color: story.accentColor,
                        letterSpacing: "0.04em",
                      }}
                    >
                      UNLOCKED WITH PURCHASE
                    </div>
                  </div>
                  <div style={{ padding: "16px 18px 20px" }}>
                    <h2
                      style={{
                        fontSize: 17,
                        fontWeight: 800,
                        color: "var(--fb-text)",
                        margin: "0 0 6px",
                      }}
                    >
                      {story.name}
                    </h2>
                    <p
                      style={{
                        fontSize: 13,
                        color: "var(--fb-text-secondary)",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {story.tagline}
                    </p>
                    <span
                      style={{
                        display: "inline-block",
                        marginTop: 12,
                        fontSize: 13,
                        fontWeight: 700,
                        color: "var(--fb-navy)",
                      }}
                    >
                      Read the story &rarr;
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
