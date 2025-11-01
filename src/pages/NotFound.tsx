import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-wood">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-gold mb-8">
          <Crown className="w-12 h-12 text-primary-foreground" />
        </div>
        <h1 className="mb-4 text-6xl font-bold text-primary-foreground">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Oops! Esta página não existe na Corte Royal
        </p>
        <Link to="/">
          <Button variant="hero" size="lg">
            Voltar para Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
