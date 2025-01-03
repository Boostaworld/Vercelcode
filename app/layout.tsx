import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Boostaclaims | #1 Discord Shop",
  description:
    "Boostaclaims is a Discord shop that sells high-quality Discord Boosts, discord nitro (as cheap as $1.5), and more. We offer a wide range of services to help you grow your community. Boostaclaims is not affiliated or endorsed by Discord in any way.",
  icons: {
    icon: "boostapfp.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#9900ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={OutfitFont.className}>{children}</body>
    </html>
  );
}
