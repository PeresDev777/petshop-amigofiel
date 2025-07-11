
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const pets = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&crop=face",
      alt: "Gato laranja e branco fofo",
      type: "cat"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop&crop=face",
      alt: "Gatinho cinza adorável",
      type: "cat"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop&crop=face",
      alt: "Cachorro golden retriever sorrindo",
      type: "dog"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop&crop=face",
      alt: "Labrador fofo com língua de fora",
      type: "dog"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=400&fit=crop&crop=face",
      alt: "Gato persa branco elegante",
      type: "cat"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=400&h=400&fit=crop&crop=face",
      alt: "Husky siberiano com olhos azuis",
      type: "dog"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=face",
      alt: "Gatinho malhado brincalhão",
      type: "cat"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=400&h=400&fit=crop&crop=face",
      alt: "Beagle adorável no jardim",
      type: "dog"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossos Amigos Especiais
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos clientes mais fofos e especiais que cuidamos com todo carinho
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pets.map((pet) => (
            <Card key={pet.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={pet.src}
                    alt={pet.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden max-w-sm mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {pets.map((pet) => (
                <CarouselItem key={pet.id} className="basis-4/5">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={pet.src}
                          alt={pet.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Decorative Elements */}
        <div className="text-center mt-12">
          <div className="flex justify-center space-x-4 text-4xl">
            <span className="animate-bounce">🐕</span>
            <span className="animate-bounce delay-100">❤️</span>
            <span className="animate-bounce delay-200">🐱</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
