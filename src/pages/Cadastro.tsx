import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Cadastro = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"cliente" | "barbeiro">("cliente");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      toast.error("As senhas não coincidem");
      return;
    }

    // TODO: Implement real registration
    toast.success("Cadastro realizado com sucesso!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-wood flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-2 border-primary/20 shadow-elegant">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold">
              <Crown className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">Corte Royal</CardTitle>
          <CardDescription>Crie sua conta e comece a agendar</CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="cliente" className="w-full" onValueChange={(v) => setUserType(v as "cliente" | "barbeiro")}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="cliente">Cliente</TabsTrigger>
              <TabsTrigger value="barbeiro">Barbeiro</TabsTrigger>
            </TabsList>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome Completo</Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  id="telefone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="senha">Senha</Label>
                <Input
                  id="senha"
                  type="password"
                  placeholder="••••••••"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmarSenha">Confirmar Senha</Label>
                <Input
                  id="confirmarSenha"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" variant="hero" className="w-full" size="lg">
                Cadastrar
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Já tem uma conta?{" "}
                <Button
                  type="button"
                  variant="link"
                  className="text-primary hover:text-gold-light p-0 h-auto"
                  onClick={() => navigate("/login")}
                >
                  Entrar
                </Button>
              </div>
            </form>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cadastro;
