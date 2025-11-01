import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Mail, Phone, Calendar, Crown } from "lucide-react";
import { toast } from "sonner";

const Perfil = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nome: "João Silva",
    email: "joao.silva@email.com",
    telefone: "(11) 98765-4321",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSave = () => {
    // TODO: Implement save logic
    toast.success("Perfil atualizado com sucesso!");
    setIsEditing(false);
  };

  const appointmentHistory = [
    {
      id: 1,
      service: "Corte + Barba",
      barber: "Pedro Santos",
      date: "10/12/2024",
      status: "concluído",
    },
    {
      id: 2,
      service: "Corte Masculino",
      barber: "João Silva",
      date: "25/11/2024",
      status: "concluído",
    },
    {
      id: 3,
      service: "Barba",
      barber: "Pedro Santos",
      date: "15/11/2024",
      status: "concluído",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated userType="cliente" />

      <main className="container mx-auto px-4 pt-28 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Meu Perfil</h1>
            <p className="text-muted-foreground">Gerencie suas informações pessoais</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Profile Card */}
            <Card className="border-2 border-primary/20 md:col-span-1">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-24 h-24 border-4 border-primary">
                    <AvatarFallback className="bg-gradient-gold text-primary-foreground text-2xl font-bold">
                      JS
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle>{formData.nome}</CardTitle>
                <CardDescription className="flex items-center justify-center gap-1">
                  <Crown className="w-4 h-4 text-primary" />
                  Cliente Premium
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Membro desde Jan 2024</span>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Atendimentos</p>
                    <p className="text-2xl font-bold text-primary">{appointmentHistory.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="border-2 border-primary/20 md:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Informações Pessoais</CardTitle>
                    <CardDescription>Atualize seus dados cadastrais</CardDescription>
                  </div>
                  <Button
                    variant={isEditing ? "outline" : "hero"}
                    onClick={() => (isEditing ? setIsEditing(false) : setIsEditing(true))}
                  >
                    {isEditing ? "Cancelar" : "Editar"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nome Completo
                  </Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Telefone
                  </Label>
                  <Input
                    id="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                {isEditing && (
                  <Button variant="hero" className="w-full" onClick={handleSave}>
                    Salvar Alterações
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* History */}
          <Card className="border-2 border-primary/20 mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Histórico de Atendimentos
              </CardTitle>
              <CardDescription>Seus últimos agendamentos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {appointmentHistory.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center justify-between p-4 rounded-lg border-2 border-border hover:border-primary transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-foreground">{appointment.service}</p>
                      <p className="text-sm text-muted-foreground">
                        Barbeiro: {appointment.barber}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{appointment.date}</p>
                      <span className="inline-block mt-1 text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                        {appointment.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Perfil;
