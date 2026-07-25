"use client";

import { useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "../../lib/products";

const SUPABASE_URL = "https://fwbhwfxpncrsfhttimna.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3Ymh3ZnhwbmNyc2ZodHRpbW5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2NjAxMzksImV4cCI6MjA5MDIzNjEzOX0.9mxjK0bn5WATCbNLWrHPakD6yHUDtHFHrOaklPnWkOA";

const ORG_TYPES = ["School", "Nonprofit", "Cultural Organization", "Team / Club", "Other"];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 8,
  border: "1px solid var(--fb-border)",
  fontSize: 15,
  fontFamily: "inherit",
  color: "var(--fb-text)",
  background: "#FFFFFF",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 700,
  color: "var(--fb-text)",
  marginBottom: 6,
};

export default function FundraiserPage() {
  const [orgName, setOrgName] = useState("");
  const [orgType, setOrgType] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [selectedFlags, setSelectedFlags] = useState<string[]>([]);
  const [estimatedOrders, setEstimatedOrders] = useState("");
  const [windowStart, setWindowStart] = useState("");
  const [windowEnd, setWindowEnd] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function toggleFlag(slug: string) {
    setSelectedFlags((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/flagbands-fundraiser-intake`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          apikey: SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({
          orgName,
          orgType,
          contactName,
          contactEmail,
          contactPhone,
          website,
          selectedFlags,
          estimatedOrders,
          windowStart,
          windowEnd,
          message,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
        <SiteNav />
        <main style={{ maxWidth: 640, margin: "0 auto", padding: "96px 24px", textAlign: "center" }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "var(--fb-navy)", marginBottom: 16 }}>
            Application received
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fb-text-secondary)" }}>
            Thanks for applying to run a Flag Bands fundraiser. We&apos;ll review your application and
            follow up by email.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              marginTop: 24,
              color: "var(--fb-navy)",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            ← Back to Flag Bands
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <SiteNav />

      <main style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 96px" }}>
        <h1
          style={{
            fontSize: 36,
            fontWeight: 800,
            color: "var(--fb-navy)",
            marginBottom: 12,
            letterSpacing: "-0.01em",
          }}
        >
          Run a Flag Band Fundraiser
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fb-text-secondary)", marginBottom: 32 }}>
          Schools, nonprofits, cultural organizations, and teams can run a pre-order fundraiser with
          Flag Bands. Tell us about your organization below.
        </p>

        <div
          style={{
            background: "var(--fb-off-white)",
            borderRadius: 14,
            padding: 24,
            marginBottom: 40,
          }}
        >
          <h2
            style={{
              fontSize: 12,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--fb-text-muted)",
              marginBottom: 14,
            }}
          >
            How It Works
          </h2>
          <ol style={{ margin: 0, paddingLeft: 20, color: "var(--fb-text-secondary)", fontSize: 15, lineHeight: 1.8 }}>
            <li>We build your organization a branded landing page featuring the flag band(s) you choose.</li>
            <li>Your supporters pre-order wristbands through that page.</li>
            <li>Your organization keeps $5 for every wristband sold through your page.</li>
            <li>
              Your organization is responsible for fulfilling and shipping every order. Orders must
              ship within 30 days of your pre-order window closing.
            </li>
          </ol>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>Organization name *</label>
              <input
                required
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Organization type</label>
              <select value={orgType} onChange={(e) => setOrgType(e.target.value)} style={inputStyle}>
                <option value="">Select one</option>
                {ORG_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>Contact name *</label>
              <input
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Contact email *</label>
              <input
                required
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>Phone (optional)</label>
              <input value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Website (optional)</label>
              <input value={website} onChange={(e) => setWebsite(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Which flag(s) do you want featured?</label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 10 }}>
              {PRODUCTS.map((p) => (
                <label
                  key={p.slug}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 10px",
                    borderRadius: 8,
                    border: `1px solid ${selectedFlags.includes(p.slug) ? "var(--fb-navy)" : "var(--fb-border)"}`,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedFlags.includes(p.slug)}
                    onChange={() => toggleFlag(p.slug)}
                  />
                  {p.name}
                </label>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Estimated number of pre-orders (optional)</label>
            <input
              value={estimatedOrders}
              onChange={(e) => setEstimatedOrders(e.target.value)}
              placeholder="e.g. 50-100"
              style={inputStyle}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>Planned pre-order window start (optional)</label>
              <input
                type="date"
                value={windowStart}
                onChange={(e) => setWindowStart(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Planned pre-order window end (optional)</label>
              <input
                type="date"
                value={windowEnd}
                onChange={(e) => setWindowEnd(e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ marginBottom: 28 }}>
            <label style={labelStyle}>Anything else we should know? (optional)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          {status === "error" && (
            <p style={{ color: "var(--fb-red)", fontSize: 14, marginBottom: 16 }}>{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            style={{
              background: "var(--fb-navy)",
              color: "#FFFFFF",
              border: "none",
              borderRadius: 10,
              padding: "14px 28px",
              fontSize: 15,
              fontWeight: 700,
              cursor: status === "submitting" ? "default" : "pointer",
              opacity: status === "submitting" ? 0.7 : 1,
            }}
          >
            {status === "submitting" ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </main>

      <SiteFooter />
    </div>
  );
}

function SiteNav() {
  return (
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
        <Link href="/" style={{ color: "var(--fb-navy)", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
          ← Back to Flag Bands
        </Link>
      </div>
    </nav>
  );
}

function SiteFooter() {
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
          <img src="/logo.svg" alt="Flag Bands" style={{ height: 32, width: "auto" }} />
          <p style={{ color: "var(--fb-text-muted)", fontSize: 13, marginTop: 8, maxWidth: 320, lineHeight: 1.5 }}>
            Handcrafted wristbands. Real flags. Real causes.
          </p>
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {["Contact", "Fundraising", "Returns", "FAQ"].map((link) => (
            <a key={link} href="/#" style={{ color: "var(--fb-text-muted)", fontSize: 13, textDecoration: "none", fontWeight: 500 }}>
              {link}
            </a>
          ))}
        </div>
        <div style={{ color: "var(--fb-text-muted)", fontSize: 12 }}>2026 Flag Bands. All rights reserved.</div>
      </div>
    </footer>
  );
}
