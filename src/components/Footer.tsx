
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-blue-400">Amigo Fiel</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cuidando do seu melhor amigo com carinho e qualidade. 
              Sua confiança é nossa maior recompensa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-400">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">(51) 99182-8651</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">contato@amigofiel.com.br</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-400">Localização</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-red-400 mt-1" />
              <div className="text-gray-300">
                <p>R. dos Andradas, 1001</p>
                <p>Centro Histórico</p>
                <p>Porto Alegre - RS</p>
                <p>CEP: 90020-015</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Amigo Fiel Pet Shop. Todos os direitos reservados. 
            Feito com ❤️ para pets e seus donos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
