import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/context/StoreContext";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MIMU Premium Jewellery",
  description: "Jewellery that speaks without words.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans min-h-screen bg-mimu-ivory text-mimu-text selection:bg-mimu-champagne/30">
        <StoreProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </StoreProvider>
      </body>
    </html>
  );
}
