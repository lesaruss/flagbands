"use client";

import { useRouter } from "next/navigation";

interface CountryOption {
  slug: string;
  name: string;
  comingSoon?: boolean;
}

export default function CountrySelector({
  currentSlug,
  countries,
}: {
  currentSlug: string;
  countries: CountryOption[];
}) {
  const router = useRouter();

  return (
    <select
      value={currentSlug}
      onChange={(e) => router.push(`/stories/${e.target.value}`)}
      aria-label="Choose a country"
      style={{
        appearance: "none",
        background: "#FFFFFF",
        border: "1px solid var(--fb-border)",
        borderRadius: 10,
        padding: "10px 36px 10px 14px",
        fontSize: 14,
        fontWeight: 700,
        color: "var(--fb-navy)",
        cursor: "pointer",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%235C3E94' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 14px center",
      }}
    >
      {countries.map((c) => (
        <option key={c.slug} value={c.slug}>
          {c.name}
          {c.comingSoon ? " (coming soon)" : ""}
        </option>
      ))}
    </select>
  );
}
