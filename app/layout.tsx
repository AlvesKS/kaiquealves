import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/content";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: `${site.fullName} | ${site.role}`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  metadataBase: new URL(site.url),
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
    <html lang="en" className={sans.variable}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
