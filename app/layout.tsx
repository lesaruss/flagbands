import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Flag Bands | Wear Your Flag. Find Your People.", template: "%s | Flag Bands" },
  description: "Handcrafted wearable accessories that let you represent your nationality, culture, heritage, and community. Every purchase supports a cause.",
  openGraph: {
    title: "Flag Bands | Wear Your Flag. Find Your People.",
    description: "Handcrafted wearable accessories that let you represent your nationality, culture, heritage, and community. Every purchase supports a cause.",
    siteName: "Flag Bands",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
