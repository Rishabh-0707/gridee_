import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "gridee.app";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Gridee — Parking. Simplified",
    description: "See a free space before you arrive, reserve it, and enter without the paper-ticket shuffle.",
    keywords: ["smart parking", "parking app", "ANPR parking", "QR parking", "parking management software", "Gridee"],
    authors: [{ name: "Gridee" }],
    creator: "Gridee",
    alternates: { canonical: "/" },
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      type: "website",
      url: origin,
      siteName: "Gridee",
      title: "Gridee — Parking. Simplified",
      description: "Parking should not start with a U-turn. Find a space, reserve it and get on with your day.",
      images: [{ url: `${origin}/og.png`, width: 1728, height: 910, alt: "Gridee — Skip the U-turn" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Gridee — Parking. Simplified",
      description: "Parking should not start with a U-turn. Find a space, reserve it and get on with your day.",
      images: [`${origin}/og.png`],
    },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
