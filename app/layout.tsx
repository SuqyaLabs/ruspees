import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ruspee's - Le Goût de la Qualité",
  description: "Un goût moderne, accessible à tous. Découvrez l'expérience Ruspee's - le meilleur poulet frit d'Algérie.",
  keywords: ["poulet frit", "restaurant", "Alger", "fast food", "Ruspee's"],
  openGraph: {
    title: "Ruspee's - Le Goût de la Qualité",
    description: "Un goût moderne, accessible à tous. Découvrez l'expérience Ruspee's.",
    type: "website",
    locale: "fr_DZ",
  },
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
