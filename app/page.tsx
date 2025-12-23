import Header from "./components/Header";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import Philosophy from "./components/Philosophy";
import Locations from "./components/Locations";
import Footer from "./components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Ruspee's",
  image: "https://ruspees.com/hero.png",
  "@id": "https://ruspees.com",
  url: "https://ruspees.com",
  telephone: "+213-XXX-XXX-XXX",
  servesCuisine: ["Poulet frit", "Fast food", "Américain"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Alger",
    addressLocality: "Alger",
    addressCountry: "DZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.7538,
    longitude: 3.0588,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      opens: "11:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "00:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/ruspees",
    "https://www.instagram.com/ruspees",
    "https://www.tiktok.com/@ruspees",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Pillars />
        <Philosophy />
        <Locations />
        <Footer />
      </main>
    </>
  );
}
