import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description:
    "Mohammad Safiul Alam is a Performance Marketing Strategist specialising in Meta Ads, Google Ads, TikTok Ads, conversion tracking, and marketing automation. Helping businesses acquire customers and scale profitably.",
  keywords: [
    "Performance Marketing Strategist",
    "Meta Ads",
    "Google Ads",
    "TikTok Ads",
    "LinkedIn Ads",
    "Paid Media",
    "Conversion Tracking",
    "Marketing Automation",
    "Funnel Optimisation",
    "Digital Marketing Consultant",
    "Mohammad Safiul Alam",
  ],
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: `${siteConfig.fullName} — ${siteConfig.title}`,
    title: `${siteConfig.fullName} — ${siteConfig.title}`,
    description:
      "Performance Marketing Strategist specialising in Meta Ads, Google Ads, TikTok Ads, conversion tracking, and marketing automation.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} — ${siteConfig.title}`,
    description:
      "Performance Marketing Strategist | Meta, Google & TikTok Ads | $500K+ Managed Spend | 300+ Projects",
    creator: "@safiuldigital",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.fullName,
      jobTitle: siteConfig.title,
      description:
        "Performance Marketing Strategist with 2.5+ years of experience managing $500K+ in advertising spend across Meta, Google, TikTok, and LinkedIn Ads.",
      url: siteConfig.url,
      sameAs: [
        siteConfig.social.facebook,
        siteConfig.social.linkedin,
        siteConfig.social.youtube,
      ],
      knowsAbout: [
        "Meta Ads",
        "Google Ads",
        "TikTok Ads",
        "LinkedIn Ads",
        "Conversion Tracking",
        "Google Analytics 4",
        "Marketing Automation",
        "Performance Marketing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: `${siteConfig.fullName} — ${siteConfig.title}`,
      description: siteConfig.description,
      author: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#service`,
      name: `${siteConfig.fullName} — Performance Marketing`,
      description:
        "Strategic performance marketing services including Meta Ads, Google Ads, TikTok Ads, conversion tracking, and marketing automation.",
      url: siteConfig.url,
      provider: { "@id": `${siteConfig.url}/#person` },
      serviceType: "Performance Marketing",
      areaServed: "Worldwide",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ background: "var(--bg)", color: "var(--text)" }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
          style={{ background: "var(--accent)", color: "var(--bg)" }}
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
