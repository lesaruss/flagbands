// Site health (2026-11-11): Google counted about 45 MB of oversized pictures on the
// homepage alone, 2048 px PNGs of 5 to 6 MB shown at 98 px. sized() asks Next's own
// image resizer (/_next/image, hosts in next.config.ts remotePatterns) for the picture at
// the width its spot needs, as WebP. Widths must be one of Next's sizes (256, 384, 750,
// 1080 and so on); anything not from an allowed host is returned unchanged.
const HOSTS = [/\.supabase\.co$/, /^d8j0ntlcm91z4\.cloudfront\.net$/, /^drive\.google\.com$/, /^lh3\.googleusercontent\.com$/];

export function sized(src: string | null | undefined, width: 256 | 384 | 750 | 1080): string {
  if (!src) return "";
  try {
    const u = new URL(src);
    if (u.protocol !== "https:" || !HOSTS.some(h => h.test(u.hostname))) return src;
  } catch {
    return src;
  }
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;
}
