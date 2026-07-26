"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import SiteFooter from "../../components/SiteFooter";

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

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again or email hello@flagbands.com directly.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Something went wrong. Please try again or email hello@flagbands.com directly.");
      setStatus("error");
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <NavBar />

      <main style={{ maxWidth: 600, margin: "0 auto", padding: "48px 24px 96px" }}>
        <h1
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: "var(--fb-navy)",
            margin: "0 0 16px",
            letterSpacing: "-0.01em",
          }}
        >
          Contact Us
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--fb-text-secondary)", marginBottom: 32 }}>
          Questions about an order, a stone, or a fundraiser? Email us directly at{" "}
          <a href="mailto:hello@flagbands.com" style={{ color: "var(--fb-navy)", fontWeight: 700 }}>
            hello@flagbands.com
          </a>{" "}
          or use the form below.
        </p>

        {status === "success" ? (
          <div
            style={{
              background: "var(--fb-off-white)",
              border: "1px solid var(--fb-border)",
              borderRadius: 12,
              padding: "32px 28px",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--fb-navy)", margin: "0 0 10px" }}>
              Message sent
            </h2>
            <p style={{ fontSize: 15, color: "var(--fb-text-secondary)", lineHeight: 1.6, margin: 0 }}>
              Thanks for reaching out, we&apos;ll get back to you at {email || "the email you provided"} soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <label style={labelStyle} htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle} htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle} htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            {status === "error" && (
              <p style={{ fontSize: 14, color: "#B3261E", margin: 0 }}>{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              style={{
                background: "var(--fb-navy)",
                color: "#FFFFFF",
                padding: "14px 28px",
                borderRadius: 10,
                border: "none",
                cursor: status === "submitting" ? "default" : "pointer",
                opacity: status === "submitting" ? 0.7 : 1,
                fontWeight: 800,
                fontSize: 15,
                letterSpacing: "0.03em",
              }}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}

        <p style={{ fontSize: 14, color: "var(--fb-text-muted)", marginTop: 32 }}>
          Looking for our return or shipping policy?{" "}
          <Link href="/policies" style={{ color: "var(--fb-navy)", fontWeight: 700 }}>
            View our Policies
          </Link>
          .
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
