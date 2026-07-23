import type { Metadata } from "next";
import "./globals.css";
import { FloatingBadge } from "@/components/ui/floating-badge";
import { AIAssistant } from "@/components/ui/ai-assistant";

export const metadata: Metadata = {
  title: "BuzzleMax Luxury Real Estate | NYC&apos;s Premier Property Advisory",
  description:
    "Experience NYC&apos;s most refined property discovery. AI-powered search, white-glove advisory, and an exclusive portfolio of luxury residences.",
  metadataBase: new URL("https://buzzlemax.com"),
  openGraph: {
    title: "BuzzleMax Luxury Real Estate",
    description:
      "Premier luxury real estate advisory with AI-powered property discovery.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BuzzleMax Luxury Real Estate"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BuzzleMax Luxury Real Estate",
    description:
      "Discover exceptional residences through a premium advisory experience."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FloatingBadge />
        <AIAssistant />
        {children}
      </body>
    </html>
  );
}
