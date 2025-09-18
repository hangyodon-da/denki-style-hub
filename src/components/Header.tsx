import { Zap, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="bg-background shadow-card sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full shadow-glow">
              <Zap className="w-6 h-6 text-accent-foreground animate-pulse-glow" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">中央電工有限会社</h1>
              <p className="text-muted-foreground text-sm">確かな技術で安心をお届け</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('tel:0548-87-2378', '_self')}
            >
              <Phone className="w-4 h-4 mr-2" />
              お電話
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              className="bg-accent hover:bg-accent-light text-accent-foreground shadow-glow"
              onClick={() => navigate('/contact')}
            >
              <Mail className="w-4 h-4 mr-2" />
              お問い合わせ
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;