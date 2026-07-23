import type { Metadata } from "next";
import "./globals.css";
import { FloatingBadge } from "@/components/ui/floating-badge";

export const metadata: Metadata = {
  title: "BuzzleMax Luxury Real Estate",
  description:
    "A premium luxury real estate landing page designed for trust, speed, and elegant conversion.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "BuzzleMax Luxury Real Estate",
    description:
      "A premium luxury real estate landing page designed for trust, speed, and elegant conversion.",
    type: "website"
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
        {children}
      </body>
    </html>
  );
}
