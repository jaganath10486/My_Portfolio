import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Bio } from "@/data/constants";
import { headline, positioning, site } from "@/lib/site";

import "./globals.css";

/*
 * One variable family across the whole site. The width axis is loaded
 * deliberately: hierarchy is carried by width and weight rather than by a
 * second typeface, so `wdth` is doing real work here, not decoration.
 */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

const description = `${headline} ${positioning}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    // Leads with the offer, keeps the name for branded search.
    default: `${site.title} — ${site.jobTitle}`,
    template: `%s — ${site.title}`,
  },
  description,
  applicationName: site.title,
  authors: [{ name: Bio.name, url: site.url }],
  creator: Bio.name,
  publisher: Bio.name,
  keywords: [
    "S Naga Jaganath",
    "Naga Jaganath Reddy",
    "snjnr",
    "freelance full stack developer",
    "freelance Next.js developer",
    "payment integration developer",
    "booking system developer",
    "ticketing system developer",
    "subscription billing developer",
    "webhook idempotency",
    "Node.js developer",
    "FastAPI developer",
    "LLM integration engineer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: site.url,
    siteName: site.title,
    title: `${Bio.name} — ${site.jobTitle}`,
    description,
    locale: site.locale,
    firstName: "Naga Jaganath",
    lastName: "Reddy",
  },
  twitter: {
    card: "summary_large_image",
    title: `${Bio.name} — ${site.jobTitle}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: { google: site.googleSiteVerification },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
