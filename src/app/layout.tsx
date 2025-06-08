import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Revyo Software - Expert Software Consulting",
    template: "%s | Revyo Software"
  },
  description: "Professional software consulting services for startups and government clients. Custom development, system integration, and digital transformation solutions.",
  keywords: [
    "software consulting",
    "custom development", 
    "enterprise solutions",
    "government contracts",
    "digital transformation",
    "system integration",
    "web applications",
    "mobile development",
    "enterprise security",
    "cloud migration",
    "software architecture",
    "technical consulting"
  ],
  authors: [{ name: "Revyo Software" }],
  creator: "Revyo Software",
  publisher: "Revyo Software",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://revyosoftware.com",
    siteName: "Revyo Software",
    title: "Revyo Software - Expert Software Consulting",
    description: "Professional software consulting services for startups and government clients. Custom development, system integration, and digital transformation solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Revyo Software - Expert Software Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revyo Software - Expert Software Consulting",
    description: "Professional software consulting services for startups and government clients.",
    images: ["/og-image.jpg"],
    creator: "@revyosoftware",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
  classification: "Software Consulting",
  other: {
    "contact:email": "hello@revyosoftware.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://revyosoftware.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
