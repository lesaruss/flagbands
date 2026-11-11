import type { MetadataRoute } from "next";
import { PRODUCTS } from "../lib/products";
import { getAllCountryStories } from "../lib/pulse-country-stories";

// Search Console sitemap. Public pages only: account, admin, cart and API
// routes are left out, and so are Country Stories still marked Coming Soon.
const SITE = "https://flagbands.com";

export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // A failed Supabase read leaves the stories out rather than failing the
  // whole sitemap.
  const stories = await getAllCountryStories().catch(() => []);
  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/shop`, changeFrequency: "weekly", priority: 0.9 },
    ...PRODUCTS.map((p) => ({
      url: `${SITE}/products/${p.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    { url: `${SITE}/how-it-works`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/stones`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/pulse`, changeFrequency: "weekly", priority: 0.6 },
    ...stories
      .filter((s) => !s.comingSoon)
      .map((s) => ({
        url: `${SITE}/stories/${s.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    { url: `${SITE}/partners`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/fundraiser`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/faq`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE}/contact`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/policies`, changeFrequency: "yearly", priority: 0.3 },
  ];
  return pages;
}
