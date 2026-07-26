import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { supabaseServer } from "../../../../lib/supabase-server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
  const signature = req.headers.get("stripe-signature");
  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature as string,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err) {
    console.error("Webhook signature verification failed", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabase = supabaseServer();

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const orderId = session.metadata?.order_id;

    if (orderId) {
      const { data: order } = await supabase
        .from("flagbands_orders")
        .select("*")
        .eq("id", orderId)
        .maybeSingle();

      if (order && order.status !== "paid") {
        // Stripe has moved shipping details between a couple of different
        // fields across API versions - check both defensively rather than
        // assuming one shape and crashing the webhook if it's wrong.
        const sessionAny = session as unknown as Record<string, any>;
        const shippingAddress =
          sessionAny.collected_information?.shipping_details?.address ??
          sessionAny.shipping_details?.address ??
          sessionAny.customer_details?.address ??
          null;

        await supabase
          .from("flagbands_orders")
          .update({
            status: "paid",
            paid_at: new Date().toISOString(),
            customer_email: session.customer_details?.email ?? null,
            customer_name: session.customer_details?.name ?? null,
            shipping_address: shippingAddress,
          })
          .eq("id", orderId);

        // Decrement inventory for every line item that was NOT a pre-order.
        const lineItems = (order.line_items ?? []) as Array<{
          flagSlug: string;
          materialId: string;
          qty: number;
          preorder: boolean;
        }>;

        for (const item of lineItems) {
          if (item.preorder) continue;
          const { data: invRow } = await supabase
            .from("flagbands_inventory")
            .select("quantity")
            .eq("flag_slug", item.flagSlug)
            .eq("material_id", item.materialId)
            .maybeSingle();

          const newQty = Math.max(0, (invRow?.quantity ?? 0) - item.qty);
          await supabase
            .from("flagbands_inventory")
            .update({ quantity: newQty, updated_at: new Date().toISOString() })
            .eq("flag_slug", item.flagSlug)
            .eq("material_id", item.materialId);
        }

        await supabase.from("stream_events").insert({
          owner: "Logan",
          station: "flagbands",
          task_id: `order-${orderId}`,
          summary: `Flag Bands order paid: ${lineItems.length} line item(s), $${(
            (order.subtotal_cents ?? 0) / 100
          ).toFixed(2)} subtotal. ${session.customer_details?.email ?? "no email captured"}.`,
          status: "completed",
          context_link: `https://dashboard.stripe.com/${event.livemode ? "" : "test/"}payments`,
        });
      }
    }
  }

  return NextResponse.json({ received: true });
}
