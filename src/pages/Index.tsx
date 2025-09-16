import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import WorkExamples from "@/components/WorkExamples";
import CompanyInfo from "@/components/CompanyInfo";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PricingSection />
        <WorkExamples />
        <CompanyInfo />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2024 エレクトリック静岡. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
