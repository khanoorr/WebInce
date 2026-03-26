import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://webince.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WebInce | Website Development, SEO & Digital Marketing Agency in Mumbai",
    template: "%s | WebInce",
  },
  description:
    "WebInce is a Mumbai-based digital agency specializing in website development, SEO optimization, social media marketing, and landing page design. We help businesses grow online. Call: +91 7208809892",
  keywords: [
    "web development agency Mumbai",
    "SEO agency Mumbai",
    "digital marketing Mumbai",
    "website design Mumbai",
    "social media marketing Mumbai",
    "landing page design",
    "affordable web development India",
    "WebInce",
    "website development Malad",
    "SEO optimization India",
    "online marketing agency",
    "website development company India",
  ],
  authors: [{ name: "WebInce", url: siteUrl }],
  creator: "WebInce",
  publisher: "WebInce",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "WebInce",
    title: "WebInce | Website Development, SEO & Digital Marketing Agency",
    description:
      "WebInce is a Mumbai-based digital agency specializing in website development, SEO, and social media marketing. Get your business online and grow fast.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WebInce - Digital Agency for Modern Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebInce | Website Development, SEO & Digital Marketing Agency",
    description:
      "WebInce helps businesses grow online with website development, SEO, and social media marketing. Based in Mumbai. Contact: +91 7208809892",
    images: ["/og-image.png"],
    creator: "@webince",
  },
  verification: {
    google: "v6StrFumkFjygsRrkF2zWeFlzVEPYoCo8imqRTSMC-o",
  },
  category: "technology",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WebInce",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "WebInce is a digital agency based in Mumbai, India, specializing in website development, SEO optimization, and social media marketing.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sanjay Nagar, Malad East",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400097",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7208809892",
    contactType: "customer service",
    email: "khanoorr3@gmail.com",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WebInce",
  image: `${siteUrl}/og-image.png`,
  "@id": siteUrl,
  url: siteUrl,
  telephone: "+91-7208809892",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sanjay Nagar, Malad East",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400097",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.1872,
    longitude: 72.8554,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
  servesCuisine: undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="19.1872;72.8554" />
        <meta name="ICBM" content="19.1872, 72.8554" />
      </head>
      <body className="min-h-full flex flex-col">
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}




