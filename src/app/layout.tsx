import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "LUMINA SKIN | Your Most Radiant Self, Revealed.",
  description: "Science-backed skincare formulated to nourish your complexion and unlock a luminous, healthy glow from within.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${manrope.variable} ${notoSerif.variable}`}
    >
      <body className="font-body-md text-on-surface bg-background">{children}</body>
    </html>
  );
}
