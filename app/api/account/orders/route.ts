export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "../../../../lib/supabase-server";

// Reads the caller's Supabase Auth session (passed as a Bearer token from the
// browser client after magic-link sign-in) and returns every flagbands_orders
// row matching that user's email. Deliberately matches by email rather than a
// stored user_id: Stripe Checkout already captures the email at purchase
// time, and the magic-link account is keyed by that same email, so joining on
// email avoids needing a backfill migration or a checkout-time signup step.
export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization") || "";
  const token = authHeader.replace(/^Bearer\s+/i, "").trim();
  if (!token) {
    return NextResponse.json({ error: "Missing session token" }, { status: 401 });
  }

  const supabase = supabaseServer();
  const { data: userData, error: userErr } = await supabase.auth.getUser(token);
  const email = userData?.user?.email;
  if (userErr || !email) {
    return NextResponse.json({ error: "Invalid or expired session" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("flagbands_orders")
    .select("id, stripe_session_id, status, subtotal_cents, line_items, shipping_address, created_at, paid_at")
    .ilike("customer_email", email)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ email, orders: data ?? [] });
}
