"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "../../components/NavBar";
import SiteFooter from "../../components/SiteFooter";
import { supabaseBrowser } from "../../lib/supabase-browser";
import { useCart } from "../../lib/cart-context";
import { getProduct } from "../../lib/products";

type OrderLineItem = {
  flagSlug: string;
  materialId: string;
  flagName: string;
  materialName: string;
  unitPriceCents: number;
  qty: number;
  preorder: boolean;
};

type Order = {
  id: string;
  stripe_session_id: string | null;
  status: string;
  subtotal_cents: number;
  line_items: OrderLineItem[];
  created_at: string;
  paid_at: string | null;
};

function money(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

function statusLabel(status: string, hasPreorder: boolean) {
  if (status === "paid" && hasPreorder) return "Paid · pre-order, ships in 2-4 weeks";
  if (status === "paid") return "Paid";
  if (status === "fulfilled") return "Shipped";
  if (status === "cancelled") return "Cancelled";
  return "Pending";
}

export default function AccountPage() {
  const router = useRouter();
  const { addItem } = useCart();

  const [checkingSession, setCheckingSession] = useState(true);
  const [email, setEmail] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginSent, setLoginSent] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const [orders, setOrders] = useState<Order[] | null>(null);
  const [ordersError, setOrdersError] = useState<string | null>(null);
  const [reorderedId, setReorderedId] = useState<string | null>(null);

  useEffect(() => {
    const supabase = supabaseBrowser();

    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setEmail(data.session.user.email ?? null);
        setAccessToken(data.session.access_token);
      }
      setCheckingSession(false);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setEmail(session?.user.email ?? null);
      setAccessToken(session?.access_token ?? null);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!accessToken) return;
    setOrdersError(null);
    fetch("/api/account/orders", { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setOrdersError(data.error);
          return;
        }
        setOrders(data.orders ?? []);
      })
      .catch(() => setOrdersError("Could not load your orders. Try refreshing."));
  }, [accessToken]);

  const handleSendLink = async () => {
    setLoginError(null);
    setLoginLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/brand-auth-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ brand: "flagbands", mode: "login", email: loginEmail }),
        }
      );
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || "Could not send sign-in link");
      setLoginSent(true);
    } catch (e) {
      setLoginError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabaseBrowser().auth.signOut();
    setEmail(null);
    setAccessToken(null);
    setOrders(null);
  };

  const handleReorder = (order: Order) => {
    order.line_items.forEach((item) => {
      const product = getProduct(item.flagSlug);
      addItem(
        {
          flagSlug: item.flagSlug,
          materialId: item.materialId,
          flagName: item.flagName,
          materialName: item.materialName,
          unitPriceCents: item.unitPriceCents,
          image: product?.studioPhoto ?? "",
          preorder: item.preorder,
        },
        item.qty
      );
    });
    setReorderedId(order.id);
    window.setTimeout(() => router.push("/cart"), 600);
  };

  const hasPaidOrder = !!orders?.some((o) => o.status === "paid" || o.status === "fulfilled");

  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <NavBar />

      <main style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px 96px" }}>
        <h1
          style={{
            fontSize: 32,
            fontWeight: 900,
            color: "var(--fb-navy)",
            margin: "0 0 8px",
            letterSpacing: "-0.01em",
          }}
        >
          Your Account
        </h1>

        {checkingSession ? (
          <p style={{ color: "var(--fb-text-muted)", fontSize: 14 }}>Loading&hellip;</p>
        ) : !email ? (
          <div style={{ maxWidth: 420 }}>
            <p style={{ color: "var(--fb-text-secondary)", fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>
              Enter the email you used at checkout and we&apos;ll send you a one-click sign-in
              link. No password to remember.
            </p>
            {loginSent ? (
              <div
                style={{
                  background: "#EAF7EE",
                  border: "1px solid #B7E4C7",
                  borderRadius: 12,
                  padding: "16px 20px",
                  color: "#1B5E20",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                Check your email for a sign-in link. It'll get you straight into your dashboard.
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="you@example.com"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 10,
                    border: "1px solid var(--fb-border)",
                    fontSize: 15,
                    marginBottom: 12,
                    boxSizing: "border-box",
                  }}
                />
                <button
                  onClick={handleSendLink}
                  disabled={loginLoading || !loginEmail}
                  style={{
                    background: "var(--fb-navy)",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: 10,
                    padding: "12px 28px",
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: loginLoading ? "default" : "pointer",
                    opacity: loginLoading || !loginEmail ? 0.6 : 1,
                  }}
                >
                  {loginLoading ? "Sending…" : "Email Me a Sign-In Link"}
                </button>
                {loginError && (
                  <p style={{ color: "#B3261E", fontSize: 13, marginTop: 12 }}>{loginError}</p>
                )}
              </>
            )}
          </div>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 32,
              }}
            >
              <p style={{ color: "var(--fb-text-muted)", fontSize: 14, margin: 0 }}>
                Signed in as <strong style={{ color: "var(--fb-text)" }}>{email}</strong>
              </p>
              <button
                onClick={handleSignOut}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--fb-text-muted)",
                  fontSize: 13,
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Sign out
              </button>
            </div>

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
              Your Orders
            </h2>

            {ordersError && <p style={{ color: "#B3261E", fontSize: 14 }}>{ordersError}</p>}

            {orders === null && !ordersError ? (
              <p style={{ color: "var(--fb-text-muted)", fontSize: 14 }}>Loading your orders&hellip;</p>
            ) : orders && orders.length === 0 ? (
              <p style={{ color: "var(--fb-text-secondary)", fontSize: 15 }}>
                No orders yet on this email.
              </p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
                {orders!.map((order) => {
                  const hasPreorder = order.line_items.some((i) => i.preorder);
                  return (
                    <div
                      key={order.id}
                      style={{
                        border: "1px solid var(--fb-border)",
                        borderRadius: 12,
                        padding: 20,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: 12,
                        }}
                      >
                        <div>
                          <div style={{ fontSize: 13, color: "var(--fb-text-muted)" }}>
                            {new Date(order.created_at).toLocaleDateString(undefined, {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--fb-navy)", marginTop: 2 }}>
                            {statusLabel(order.status, hasPreorder)}
                          </div>
                        </div>
                        <div style={{ fontSize: 18, fontWeight: 900, color: "var(--fb-text)" }}>
                          {money(order.subtotal_cents)}
                        </div>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
                        {order.line_items.map((item, i) => (
                          <div key={i} style={{ fontSize: 14, color: "var(--fb-text-secondary)" }}>
                            {item.qty}&times; {item.flagName} Flag Band &mdash; {item.materialName}
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => handleReorder(order)}
                        style={{
                          background: reorderedId === order.id ? "#1B5E20" : "var(--fb-navy)",
                          color: "#FFFFFF",
                          border: "none",
                          borderRadius: 8,
                          padding: "10px 20px",
                          fontSize: 13,
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        {reorderedId === order.id ? "Added to cart ✓" : "Reorder"}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            {hasPaidOrder && (
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
                  Unlocked For You
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: 16,
                  }}
                >
                  {[
                    {
                      title: "Country Stories",
                      body: "The history and culture behind the flag on your wrist.",
                    },
                    {
                      title: "Nonprofit Spotlights",
                      body: "Real organizations doing real work in the communities each flag represents.",
                    },
                    {
                      title: "Become an Advocate",
                      body: "Help us bring Flag Bands fundraisers to organizations in your community.",
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      style={{
                        background: "var(--fb-off-white)",
                        borderRadius: 14,
                        padding: 20,
                      }}
                    >
                      <div style={{ fontWeight: 800, color: "var(--fb-navy)", fontSize: 15, marginBottom: 8 }}>
                        {card.title}
                      </div>
                      <p style={{ fontSize: 13, color: "var(--fb-text-secondary)", margin: "0 0 12px", lineHeight: 1.5 }}>
                        {card.body}
                      </p>
                      <span
                        style={{
                          display: "inline-block",
                          background: "var(--fb-border)",
                          color: "var(--fb-text-muted)",
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          padding: "4px 10px",
                          borderRadius: 999,
                        }}
                      >
                        Coming soon
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
