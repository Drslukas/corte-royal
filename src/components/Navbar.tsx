import { Crown, Calendar, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  isAuthenticated?: boolean;
  userType?: "cliente" | "barbeiro" | null;
}

const Navbar = ({ isAuthenticated = false, userType = null }: NavbarProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate("/");
  };

  return (
    <nav className="fixed top-0 w-full bg-wood-dark/95 backdrop-blur-sm border-b border-primary/20 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <Crown className="w-8 h-8 text-primary group-hover:text-gold-light transition-colors" />
            <span className="text-2xl font-bold text-primary-foreground">
              Corte <span className="text-primary">Royal</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate("/dashboard")}
                  className="text-primary-foreground hover:text-primary"
                >
                  <Calendar className="mr-2" />
                  Dashboard
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate("/perfil")}
                  className="text-primary-foreground hover:text-primary"
                >
                  <User className="mr-2" />
                  Perfil
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="border-primary/50"
                >
                  <LogOut className="mr-2" />
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate("/login")}
                  className="text-primary-foreground hover:text-primary"
                >
                  Entrar
                </Button>
                <Button variant="hero" size="sm" onClick={() => navigate("/cadastro")}>
                  Cadastrar
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
