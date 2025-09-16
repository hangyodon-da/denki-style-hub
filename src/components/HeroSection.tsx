import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-electric.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-accent">電気の</span>お困りごと<br />
              <span className="text-accent">プロ</span>が解決します
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              静岡県で20年の実績。コンセント増設から大型工事まで、<br />
              どんな電気工事もお任せください。
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-scale-in">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-light text-accent-foreground text-lg px-8 py-6 shadow-electric animate-pulse-glow"
            >
              <Zap className="w-5 h-5 mr-2" />
              無料見積もり依頼
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/50 text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              工事事例を見る
            </Button>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            <div className="flex items-center space-x-3 text-white">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">安心保証</h3>
                <p className="text-primary-foreground/80 text-sm">工事後も安心のアフターサポート</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">迅速対応</h3>
                <p className="text-primary-foreground/80 text-sm">お急ぎの工事もスピード対応</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">技術力</h3>
                <p className="text-primary-foreground/80 text-sm">国家資格者による確かな技術</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;