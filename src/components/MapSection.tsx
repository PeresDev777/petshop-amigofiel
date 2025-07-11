
import { MapPin, Clock, Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Coordinates for R. dos Andradas, 1001 - Centro Histórico, Porto Alegre - RS
    const lat = -30.0277;
    const lng = -51.2287;

    // Initialize map
    const map = L.map(mapRef.current).setView([lat, lng], 16);
    mapInstanceRef.current = map;

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add marker
    const marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(`
      <div style="font-family: Arial, sans-serif;">
        <h3 style="margin: 0 0 8px 0; color: #1f2937;">Amigo Fiel Pet Shop</h3>
        <p style="margin: 0; color: #6b7280; font-size: 14px;">
          R. dos Andradas, 1001<br>
          Centro Histórico<br>
          Porto Alegre - RS, 90020-015
        </p>
      </div>
    `).openPopup();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nossa Localização
          </h2>
          <p className="text-xl text-gray-600">
            Venha nos visitar! Estamos sempre prontos para receber você e seu pet
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Endereço</h3>
                <p className="text-gray-600">
                  R. dos Andradas, 1001<br />
                  Centro Histórico<br />
                  Porto Alegre - RS - CEP: 90020-015
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Horário de Funcionamento</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábados: 8h às 16h</p>
                  <p>Domingos: 9h às 14h</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Contato</h3>
                <p className="text-gray-600">
                  (51) 99182-8651<br />
                  contato@amigofiel.com.br
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl h-80">
              <div 
                ref={mapRef} 
                className="w-full h-full"
                style={{ minHeight: '320px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
