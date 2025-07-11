
import { Heart } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-40 animate-bounce delay-500"></div>
      
      <div className="text-center px-4 max-w-4xl mx-auto relative z-10">
        <div className="flex justify-center mb-6">
          <div className="bg-white p-4 rounded-full shadow-lg">
            <Heart className="w-12 h-12 text-pink-500" fill="currentColor" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
          <span className="text-blue-600">Amigo</span>{" "}
          <span className="text-pink-500">Fiel</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium leading-relaxed animate-fade-in delay-300">
          Cuidando do seu melhor amigo com carinho e qualidade
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
          <button 
            onClick={scrollToServices}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Conheça Nossos Serviços
          </button>
          <button 
            onClick={scrollToContact}
            className="bg-white hover:bg-gray-50 text-blue-500 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-blue-500 cursor-pointer"
          >
            Entre em Contato
          </button>
        </div>
      </div>
      
      {/* Floating pet silhouettes */}
      <div className="absolute bottom-10 left-5 text-6xl animate-bounce">🐕</div>
      <div className="absolute top-32 right-5 text-5xl animate-bounce delay-700">🐱</div>
      <div className="absolute bottom-32 right-1/4 text-4xl animate-bounce delay-1000">🐾</div>
    </section>
  );
};

export default Hero;
