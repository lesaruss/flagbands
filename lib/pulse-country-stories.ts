// lib/pulse-country-stories.ts
//
// Country Stories now live in Pulse Studio (public.briefings, type =
// 'content_pulse_article', brand_slug = 'flagbands') as the canonical
// source, migrated 2026-07-28. This file reads them back out through the
// anon-safe pulse_content_public view (the same view Pulse Studio itself
// serves from) and reshapes metadata.structured back into the CountryStory
// shape this app already renders. lib/country-stories.ts still owns the
// CountryStory/LeadershipRole type definitions - only the data source
// changed, not the shape.
//
// Do not add new countries by editing a local array anymore: add/update
// the row in Pulse Studio (briefings, brand_slug='flagbands') and it flows
// here automatically. Order is preserved by created_at (insertion order),
// matching the original hardcoded array order.

import { supabaseServer } from "./supabase-server";
import type { CountryStory } from "./country-stories";

export async function getAllCountryStories(): Promise<CountryStory[]> {
  const sb = supabaseServer();
  const { data, error } = await sb
    .from("pulse_content_public")
    .select("metadata, created_at")
    .eq("brand_slug", "flagbands")
    .order("created_at", { ascending: true });

  if (error || !data) {
    console.error("getAllCountryStories: failed to load Pulse Studio content", error);
    return [];
  }

  return data
    .map((row) => (row.metadata as { structured?: CountryStory } | null)?.structured)
    .filter((s): s is CountryStory => Boolean(s));
}

export async function getCountryStory(slug: string): Promise<CountryStory | undefined> {
  const stories = await getAllCountryStories();
  return stories.find((c) => c.slug === slug);
}
