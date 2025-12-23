import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ruspees.com"),
  title: {
    default: "Ruspee's - Le Goût de la Qualité | Poulet Frit Algérie",
    template: "%s | Ruspee's",
  },
  description:
    "Découvrez Ruspee's, le meilleur poulet frit d'Algérie. Un goût moderne, accessible à tous. Qualité, fraîcheur et convivialité à Alger.",
  keywords: [
    "poulet frit",
    "restaurant Alger",
    "fast food Algérie",
    "Ruspee's",
    "fried chicken",
    "restaurant halal",
    "meilleur poulet frit",
    "livraison poulet",
  ],
  authors: [{ name: "Ruspee's Algérie" }],
  creator: "Ruspee's",
  publisher: "Ruspee's Algérie",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "fr_DZ",
    url: "https://ruspees.com",
    siteName: "Ruspee's",
    title: "Ruspee's - Le Goût de la Qualité | Poulet Frit Algérie",
    description:
      "Découvrez Ruspee's, le meilleur poulet frit d'Algérie. Un goût moderne, accessible à tous.",
    images: [
      {
        url: "/Frame 28.png",
        width: 1200,
        height: 630,
        alt: "Ruspee's - Le meilleur poulet frit d'Algérie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruspee's - Le Goût de la Qualité",
    description:
      "Découvrez Ruspee's, le meilleur poulet frit d'Algérie. Un goût moderne, accessible à tous.",
    images: ["/Frame 28.png"],
  },
  alternates: {
    canonical: "https://ruspees.com",
  },
  category: "restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
