import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"cliente" | "barbeiro">("cliente");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Implement real authentication
    if (email && senha) {
      toast.success("Login realizado com sucesso!");
      navigate("/dashboard");
    } else {
      toast.error("Por favor, preencha todos os campos");
    }
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
          <CardDescription>Entre na sua conta para continuar</CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="cliente" className="w-full" onValueChange={(v) => setUserType(v as "cliente" | "barbeiro")}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="cliente">Cliente</TabsTrigger>
              <TabsTrigger value="barbeiro">Barbeiro</TabsTrigger>
            </TabsList>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="senha">Senha</Label>
                <Input
                  id="senha"
                  type="password"
                  placeholder="••••••••"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" variant="hero" className="w-full" size="lg">
                Entrar
              </Button>

              <div className="text-center space-y-2">
                <Button
                  type="button"
                  variant="link"
                  className="text-primary hover:text-gold-light"
                  onClick={() => toast.info("Funcionalidade em desenvolvimento")}
                >
                  Esqueci minha senha
                </Button>
                <div className="text-sm text-muted-foreground">
                  Não tem uma conta?{" "}
                  <Button
                    type="button"
                    variant="link"
                    className="text-primary hover:text-gold-light p-0 h-auto"
                    onClick={() => navigate("/cadastro")}
                  >
                    Cadastre-se
                  </Button>
                </div>
              </div>
            </form>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
