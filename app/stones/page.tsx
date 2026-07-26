import Link from "next/link";

export const metadata = {
  title: "Stone Meanings | Flag Bands",
  description:
    "What each bead material in a Flag Bands wristband is said to represent, from the four stones we use most to the wider world of crystal meanings.",
};

interface Stone {
  name: string;
  meaning: string;
  usedInFlagBands?: boolean;
}

const FEATURED: Stone[] = [
  {
    name: "Tiger's Eye",
    meaning: "Blocks envy and jealousy; amplifies leadership skills and courage.",
    usedInFlagBands: true,
  },
  {
    name: "Lava Stone",
    meaning:
      "Protection and new beginnings, symbolizing how lava cools and creates new land.",
    usedInFlagBands: true,
  },
  {
    name: "Hematite",
    meaning:
      "Grounding and focus. Often described as the heaviest stone, worn to help you stay rooted like a tree and let go of people trying to push your buttons.",
    usedInFlagBands: true,
  },
  {
    name: "White Agate",
    meaning:
      "Balance and stability. A calming, grounding stone associated with emotional healing and inner strength.",
    usedInFlagBands: true,
  },
];

const OTHER_STONES: Stone[] = [
  {
    name: "Black Tourmaline",
    meaning:
      "Top-tier protection in all forms; purifies negative thought patterns into positive energy.",
  },
  {
    name: "Amethyst",
    meaning: "Connects you to your angels and spirit guides; used for intuition and divine guidance.",
  },
  {
    name: "Rose Quartz",
    meaning: "The stone of love, inner peace, and harmony; attracts loving people to your circle.",
  },
  {
    name: "Carnelian",
    meaning: "Stimulates creativity and passion; attracts new opportunities based on your skills.",
  },
  {
    name: "Chalcedony",
    meaning: "For spiritual guidance.",
  },
  {
    name: "Aventurine",
    meaning: "Linked to the heart chakra; used for wealth, abundance, and financial success.",
  },
  {
    name: "Calcite",
    meaning: "Helps with emotional balance and intellectual skills.",
  },
  {
    name: "Obsidian",
    meaning: "Protection and cutting ties; aids in discipline and sharpness of mind.",
  },
  {
    name: "Onyx",
    meaning: "Enhances personal balance and power; balances yin and yang energy.",
  },
  {
    name: "Jade",
    meaning: "For wealth, wisdom, and understanding your dreams.",
  },
  {
    name: "Red Jasper",
    meaning: "Decreases stress, overthinking, and anxiety; enhances visualization and meditation.",
  },
];

function StoneCard({ stone, featured }: { stone: Stone; featured?: boolean }) {
  return (
    <div
      style={{
        background: featured ? "#FFFFFF" : "var(--fb-off-white)",
        border: featured ? "2px solid var(--fb-navy)" : "1px solid var(--fb-border)",
        borderRadius: 14,
        padding: 20,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8, gap: 8 }}>
        <h3 style={{ fontSize: 16, fontWeight: 800, color: "var(--fb-navy)", margin: 0 }}>{stone.name}</h3>
        {stone.usedInFlagBands ? (
          <span
            style={{
              background: "var(--fb-navy)",
              color: "#FFFFFF",
              fontSize: 10,
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: 999,
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}
          >
            IN FLAG BANDS
          </span>
        ) : null}
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--fb-text-secondary)", margin: 0 }}>{stone.meaning}</p>
    </div>
  );
}

export default function StoneMeaningsPage() {
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

      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "48px 24px 96px" }}>
        <h1
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: "var(--fb-navy)",
            margin: "0 0 16px",
            letterSpacing: "-0.01em",
          }}
        >
          Stone Meanings
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fb-text-secondary)", maxWidth: 640, marginBottom: 40 }}>
          Every Flag Band is strung with genuine gemstone beads, and every stone carries its own traditional meaning.
          These are folklore and crystal-healing traditions passed down through generations, not scientific or medical
          claims. Here&apos;s what each one is said to represent, starting with the four stones we use most.
        </p>

        <section style={{ marginBottom: 56 }}>
          <h2
            style={{
              fontSize: 12,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--fb-text-muted)",
              marginBottom: 16,
            }}
          >
            The Four Stones We Use
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            {FEATURED.map((stone) => (
              <StoneCard key={stone.name} stone={stone} featured />
            ))}
          </div>
        </section>

        <section>
          <h2
            style={{
              fontSize: 12,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--fb-text-muted)",
              marginBottom: 16,
            }}
          >
            More Stone Meanings
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            {OTHER_STONES.map((stone) => (
              <StoneCard key={stone.name} stone={stone} />
            ))}
          </div>
        </section>
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
    </div>
  );
}
