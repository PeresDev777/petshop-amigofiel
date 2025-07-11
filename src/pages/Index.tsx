
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Gallery from "../components/Gallery";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Hero />
      <Services />
      <About />
      <Gallery />
      <MapSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
