import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/content";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: `${site.fullName} | ${site.role}`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  metadataBase: new URL("https://kaiquealves.netlify.app"),
  openGraph: {
    title: site.fullName,
    description: site.description,
    type: "website",
    images: ["/images/panoramic.jpg"]
  },
  icons: {
    icon: "/images/kaique-alves.jpg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
