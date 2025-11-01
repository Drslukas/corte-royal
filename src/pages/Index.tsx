import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Crown, Clock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-barbershop.jpg";

const Index = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Scissors,
      title: "Corte Masculino",
      description: "Cortes clássicos e modernos com acabamento impecável",
      price: "R$ 50,00",
    },
    {
      icon: Star,
      title: "Barba",
      description: "Aparar e modelar com navalha tradicional",
      price: "R$ 35,00",
    },
    {
      icon: Crown,
      title: "Corte + Barba",
      description: "Combo completo para o homem moderno",
      price: "R$ 75,00",
    },
    {
      icon: Clock,
      title: "Express",
      description: "Serviço rápido sem perder a qualidade",
      price: "R$ 40,00",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-wood">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-wood-dark/95 via-wood-dark/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Tradição e Elegância em Cada Corte
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A melhor barbearia da cidade. Agende seu horário com praticidade e estilo.
            </p>
            <div className="flex gap-4">
              <Button variant="hero" size="lg" onClick={() => navigate("/cadastro")}>
                Agendar Agora
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/login")}
                className="border-2 border-primary"
              >
                Já sou cliente
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Nossos Serviços</h2>
            <p className="text-muted-foreground text-lg">
              Experiência premium em cada atendimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-gold bg-card"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <p className="text-2xl font-bold text-primary">{service.price}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" onClick={() => navigate("/cadastro")}>
              Ver Todos os Serviços
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-wood-dark">
        <div className="container mx-auto px-4 text-center">
          <Crown className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Pronto para a experiência Royal?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cadastre-se agora e agende seu horário com os melhores barbeiros da cidade
          </p>
          <Button variant="hero" size="lg" onClick={() => navigate("/cadastro")}>
            Começar Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wood-dark/50 border-t border-primary/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Corte Royal. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
