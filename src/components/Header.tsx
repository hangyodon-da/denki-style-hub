import { Zap, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-hero shadow-electric sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-background/20 rounded-full shadow-glow">
              <Zap className="w-6 h-6 text-accent animate-pulse-glow" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">エレクトリック静岡</h1>
              <p className="text-primary-foreground/80 text-sm">確かな技術で安心をお届け</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-background/20 hover:bg-background/30 text-white border-white/30"
            >
              <Phone className="w-4 h-4 mr-2" />
              お電話
            </Button>
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-accent hover:bg-accent-light text-accent-foreground"
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