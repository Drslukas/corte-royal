import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Scissors, User, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  // TODO: Get user type from auth context
  const [userType] = useState<"cliente" | "barbeiro">("cliente");

  const upcomingAppointments = [
    {
      id: 1,
      service: "Corte + Barba",
      barber: "João Silva",
      date: "15/01/2025",
      time: "14:00",
      status: "confirmado",
    },
    {
      id: 2,
      service: "Corte Masculino",
      barber: "Pedro Santos",
      date: "22/01/2025",
      time: "16:30",
      status: "pendente",
    },
  ];

  const todaySchedule = [
    {
      id: 1,
      client: "Carlos Oliveira",
      service: "Corte + Barba",
      time: "09:00",
      status: "confirmado",
    },
    {
      id: 2,
      client: "Marcelo Costa",
      service: "Barba",
      time: "10:30",
      status: "confirmado",
    },
    {
      id: 3,
      client: "Ricardo Alves",
      service: "Corte Masculino",
      time: "14:00",
      status: "pendente",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated userType={userType} />

      <main className="container mx-auto px-4 pt-28 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {userType === "cliente" ? "Meus Agendamentos" : "Agenda do Dia"}
          </h1>
          <p className="text-muted-foreground">
            {userType === "cliente"
              ? "Gerencie seus horários e serviços"
              : "Visualize e gerencie os atendimentos de hoje"}
          </p>
        </div>

        {userType === "cliente" ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Quick Actions */}
            <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-gold">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Novo Agendamento
                </CardTitle>
                <CardDescription>Agende um novo serviço</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => navigate("/agendamento")}
                >
                  Agendar Agora
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            {upcomingAppointments.map((appointment) => (
              <Card
                key={appointment.id}
                className="border-2 border-primary/20 hover:border-primary transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Scissors className="w-5 h-5 text-primary" />
                      {appointment.service}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        appointment.status === "confirmado"
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {appointment.barber}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {appointment.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {appointment.time}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Remarcar
                    </Button>
                    <Button variant="destructive" size="sm" className="flex-1">
                      Cancelar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-2 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Agendamentos Hoje
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{todaySchedule.length}</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Confirmados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">
                    {todaySchedule.filter((a) => a.status === "confirmado").length}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Pendentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-muted-foreground">
                    {todaySchedule.filter((a) => a.status === "pendente").length}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Today's Schedule */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Agenda de Hoje
                </CardTitle>
                <CardDescription>Atendimentos programados para hoje</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todaySchedule.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-center justify-between p-4 rounded-lg border-2 border-border hover:border-primary transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-gradient-gold text-primary-foreground">
                          <span className="text-xs font-medium">Horário</span>
                          <span className="text-sm font-bold">{appointment.time}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{appointment.client}</p>
                          <p className="text-sm text-muted-foreground">{appointment.service}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs px-3 py-1 rounded-full ${
                            appointment.status === "confirmado"
                              ? "bg-primary/20 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {appointment.status}
                        </span>
                        <Button variant="outline" size="sm">
                          Gerenciar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
