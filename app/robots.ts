import type { MetadataRoute } from "next";

const SITE = "https://flagbands.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/account", "/cart"],
    },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
