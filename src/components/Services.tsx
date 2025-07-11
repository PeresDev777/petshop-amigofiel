
import { Bath, Shield, ShoppingBag, Stethoscope, Shirt, Brain } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bath,
      title: "Banho e Tosa",
      description: "Deixamos seu pet limpinho e cheiroso com todo carinho"
    },
    {
      icon: Shield,
      title: "Vacinação",
      description: "Mantemos a saúde em dia com vacinas e cuidados preventivos"
    },
    {
      icon: ShoppingBag,
      title: "Pet Shop",
      description: "Produtos de qualidade para alimentação e cuidados diários"
    },
    {
      icon: Stethoscope,
      title: "Veterinário",
      description: "Consultas e tratamentos com profissionais especializados"
    },
    {
      icon: Brain,
      title: "Consulta comportamental",
      description: "Atendimento com especialistas em comportamento animal para ajudar seu pet a viver com mais equilíbrio e bem-estar"
    },
    {
      icon: Shirt,
      title: "Acessórios",
      description: "Coleiras, brinquedos e acessórios para seu melhor amigo"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos tudo que seu pet precisa com amor e profissionalismo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                <div className="bg-white p-4 rounded-full w-fit mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
