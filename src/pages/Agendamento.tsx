import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Scissors, Clock, Crown, User, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Agendamento = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedBarber, setSelectedBarber] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const services = [
    { id: "corte", name: "Corte Masculino", price: "R$ 50,00", duration: "45 min" },
    { id: "barba", name: "Barba", price: "R$ 35,00", duration: "30 min" },
    { id: "combo", name: "Corte + Barba", price: "R$ 75,00", duration: "1h 15min" },
    { id: "express", name: "Express", price: "R$ 40,00", duration: "30 min" },
  ];

  const barbers = [
    { id: "joao", name: "João Silva", specialty: "Cortes clássicos" },
    { id: "pedro", name: "Pedro Santos", specialty: "Barba e bigode" },
    { id: "carlos", name: "Carlos Oliveira", specialty: "Cortes modernos" },
  ];

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];

  const handleConfirm = () => {
    if (!selectedService || !selectedBarber || !selectedTime || !date) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    // TODO: Implement booking logic
    toast.success("Agendamento realizado com sucesso!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated userType="cliente" />

      <main className="container mx-auto px-4 pt-28 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Novo Agendamento</h1>
            <p className="text-muted-foreground">
              Escolha o serviço, barbeiro e horário de sua preferência
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Left Column - Selection */}
            <div className="space-y-6">
              {/* Service Selection */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scissors className="w-5 h-5 text-primary" />
                    Escolha o Serviço
                  </CardTitle>
                  <CardDescription>Selecione o serviço desejado</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        selectedService === service.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-foreground">{service.name}</p>
                          <p className="text-sm text-muted-foreground">{service.duration}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-primary">{service.price}</span>
                          {selectedService === service.id && (
                            <CheckCircle className="w-5 h-5 text-primary" />
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Barber Selection */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Escolha o Barbeiro
                  </CardTitle>
                  <CardDescription>Selecione o profissional</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3">
                  {barbers.map((barber) => (
                    <button
                      key={barber.id}
                      onClick={() => setSelectedBarber(barber.id)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        selectedBarber === barber.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-foreground">{barber.name}</p>
                          <p className="text-sm text-muted-foreground">{barber.specialty}</p>
                        </div>
                        {selectedBarber === barber.id && (
                          <CheckCircle className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Date & Time */}
            <div className="space-y-6">
              {/* Date Selection */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Crown className="w-5 h-5 text-primary" />
                    Escolha a Data
                  </CardTitle>
                  <CardDescription>Selecione o dia do atendimento</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-lg border-2 border-primary/20"
                  />
                </CardContent>
              </Card>

              {/* Time Selection */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Escolha o Horário
                  </CardTitle>
                  <CardDescription>Horários disponíveis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                          selectedTime === time
                            ? "border-primary bg-gradient-gold text-primary-foreground"
                            : "border-border hover:border-primary text-foreground"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Confirmation */}
          <Card className="border-2 border-primary/20 mt-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Resumo do Agendamento</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    {selectedService && (
                      <p>
                        Serviço:{" "}
                        <span className="text-foreground font-semibold">
                          {services.find((s) => s.id === selectedService)?.name}
                        </span>
                      </p>
                    )}
                    {selectedBarber && (
                      <p>
                        Barbeiro:{" "}
                        <span className="text-foreground font-semibold">
                          {barbers.find((b) => b.id === selectedBarber)?.name}
                        </span>
                      </p>
                    )}
                    {date && (
                      <p>
                        Data:{" "}
                        <span className="text-foreground font-semibold">
                          {date.toLocaleDateString("pt-BR")}
                        </span>
                      </p>
                    )}
                    {selectedTime && (
                      <p>
                        Horário:{" "}
                        <span className="text-foreground font-semibold">{selectedTime}</span>
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleConfirm}
                  disabled={!selectedService || !selectedBarber || !selectedTime || !date}
                >
                  Confirmar Agendamento
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Agendamento;
