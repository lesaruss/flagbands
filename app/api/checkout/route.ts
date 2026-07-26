import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { supabaseServer } from "../../../lib/supabase-server";

export const runtime = "nodejs";

interface IncomingItem {
  flagSlug: string;
  materialId: string;
  flagName: string;
  materialName: string;
  unitPriceCents: number;
  qty: number;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { items?: IncomingItem[] };
    const items = body.items ?? [];

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
    const supabase = supabaseServer();

    // Look up current inventory for every line item so pre-order status is
    // decided server-side (never trust the client's word on stock).
    const resolvedItems = [];
    for (const item of items) {
      if (!item.flagSlug || !item.materialId || !item.qty || item.qty < 1) {
        return NextResponse.json({ error: "Invalid cart item" }, { status: 400 });
      }
      const { data: invRow } = await supabase
        .from("flagbands_inventory")
        .select("quantity")
        .eq("flag_slug", item.flagSlug)
        .eq("material_id", item.materialId)
        .maybeSingle();

      const available = invRow?.quantity ?? 0;
      const preorder = available < item.qty;

      resolvedItems.push({ ...item, preorder, availableAtOrderTime: available });
    }

    const subtotalCents = resolvedItems.reduce((sum, i) => sum + i.unitPriceCents * i.qty, 0);

    // Create the pending order first so we have an id to hand Stripe.
    const { data: order, error: orderError } = await supabase
      .from("flagbands_orders")
      .insert({
        line_items: resolvedItems,
        subtotal_cents: subtotalCents,
        status: "pending",
      })
      .select()
      .single();

    if (orderError || !order) {
      console.error("Failed to create pending order", orderError);
      return NextResponse.json({ error: "Could not start checkout" }, { status: 500 });
    }

    const origin = req.headers.get("origin") || "https://flagbands.com";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: resolvedItems.map((item) => ({
        price_data: {
          currency: "usd",
          unit_amount: item.unitPriceCents,
          product_data: {
            name: `${item.flagName} Flag Band — ${item.materialName}${item.preorder ? " (Pre-Order)" : ""}`,
          },
        },
        quantity: item.qty,
      })),
      shipping_address_collection: { allowed_countries: ["US"] },
      success_url: `${origin}/cart?success=1&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart?canceled=1`,
      metadata: { order_id: order.id },
    });

    await supabase
      .from("flagbands_orders")
      .update({ stripe_session_id: session.id })
      .eq("id", order.id);

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error", err);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
