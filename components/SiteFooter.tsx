import Link from "next/link";

export default function SiteFooter() {
  return (
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
          <img src="/logo-landscape.png" alt="Flag Bands" style={{ height: 24, width: "auto" }} />
          <p style={{ color: "var(--fb-text-muted)", fontSize: 13, marginTop: 8, maxWidth: 320, lineHeight: 1.5 }}>
            Handcrafted wristbands. Real flags. Real causes.
          </p>
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <Link
            href="/stones"
            style={{ color: "var(--fb-text-muted)", fontSize: 13, textDecoration: "none", fontWeight: 500 }}
          >
            Stone Meanings
          </Link>
          {[
            { label: "Contact", href: "/contact" },
            { label: "Policies", href: "/policies" },
            { label: "FAQ", href: "/faq" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{ color: "var(--fb-text-muted)", fontSize: 13, textDecoration: "none", fontWeight: 500 }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div style={{ color: "var(--fb-text-muted)", fontSize: 12 }}>2026 Flag Bands. All rights reserved.</div>
      </div>
    </footer>
  );
}
