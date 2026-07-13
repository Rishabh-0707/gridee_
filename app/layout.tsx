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
    description: "Gridee is building the operating system for smart parking across universities, apartments, businesses and cities.",
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
      description: "The operating system for smart parking. Just arrive. Park. Go.",
      images: [{ url: `${origin}/og.png`, width: 1729, height: 910, alt: "Gridee — Parking. Simplified" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Gridee — Parking. Simplified",
      description: "The operating system for smart parking. Just arrive. Park. Go.",
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
