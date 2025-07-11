
const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sobre Nós
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              No <span className="font-semibold text-blue-600">Amigo Fiel</span>, acreditamos que cada pet merece todo o amor e cuidado do mundo. Nossa equipe é formada por profissionais apaixonados por animais, dedicados a proporcionar o melhor atendimento para seu melhor amigo.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Com anos de experiência no cuidado de cães, gatos e outros pets, oferecemos um ambiente seguro, acolhedor e cheio de carinho. Aqui, seu pet não é apenas um cliente, é parte da nossa família.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white px-6 py-3 rounded-full shadow-md">
                <span className="text-blue-600 font-semibold">❤️ Amor pelos animais</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md">
                <span className="text-green-600 font-semibold">🏆 Qualidade garantida</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md">
                <span className="text-purple-600 font-semibold">👨‍⚕️ Profissionais especializados</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-200 to-pink-200 rounded-3xl p-8 shadow-xl">
                <div className="text-center">
                  <div className="text-8xl mb-4">🐕‍🦺</div>
                  <div className="flex justify-center gap-4 mb-4">
                    <span className="text-4xl">🐱</span>
                    <span className="text-4xl">🐕</span>
                    <span className="text-4xl">🐰</span>
                  </div>
                  <p className="text-gray-700 font-medium text-lg">
                    Cuidamos com amor de todos os tipos de pets!
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-blue-200 p-3 rounded-full animate-bounce">
                🐾
              </div>
              <div className="absolute -bottom-4 -left-4 bg-pink-200 p-3 rounded-full animate-bounce delay-500">
                ❤️
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
