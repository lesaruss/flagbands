"use client";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

/**
 * Browser-only Supabase client for the magic-link auth flow. Uses the public
 * anon key (safe to expose client-side) and lets the SDK auto-detect the
 * access/refresh tokens Supabase appends to the URL after a magic-link
 * redirect, persisting the resulting session to localStorage.
 */
export function supabaseBrowser(): SupabaseClient {
  if (client) return client;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
  }
  client = createClient(url, anonKey, {
    auth: { persistSession: true, detectSessionInUrl: true, autoRefreshToken: true },
  });
  return client;
}
