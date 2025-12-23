import Header from "./components/Header";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import Philosophy from "./components/Philosophy";
import Locations from "./components/Locations";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Pillars />
      <Philosophy />
      <Locations />
      <Footer />
    </main>
  );
}
