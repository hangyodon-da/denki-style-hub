import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Zap, Lightbulb, Power, Home } from "lucide-react";

const PricingSection = () => {
  const navigate = useNavigate();
  const pricingData = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "照明工事",
      items: [
        { name: "LED照明取付", price: "¥3,000〜" },
        { name: "シーリングライト交換", price: "¥5,000〜" },
        { name: "ダウンライト設置", price: "¥8,000〜" },
        { name: "間接照明工事", price: "¥15,000〜" }
      ]
    },
    {
      icon: <Power className="w-6 h-6" />,
      title: "コンセント工事",
      items: [
        { name: "コンセント増設", price: "¥12,000〜" },
        { name: "専用回路工事", price: "¥25,000〜" },
        { name: "USB付きコンセント", price: "¥8,000〜" },
        { name: "防水コンセント", price: "¥15,000〜" }
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "分電盤工事",
      items: [
        { name: "ブレーカー交換", price: "¥8,000〜" },
        { name: "分電盤交換", price: "¥80,000〜" },
        { name: "漏電ブレーカー設置", price: "¥15,000〜" },
        { name: "回路増設", price: "¥20,000〜" }
      ]
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "その他工事",
      items: [
        { name: "換気扇交換", price: "¥12,000〜" },
        { name: "エアコン専用回路", price: "¥18,000〜" },
        { name: "インターホン工事", price: "¥25,000〜" },
        { name: "アンテナ工事", price: "¥15,000〜" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">料金目安</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            明確な<span className="text-primary">料金体系</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            事前にお見積もりをご提示。追加料金は一切ありません。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((category, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-electric transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-electric rounded-full mx-auto mb-4 shadow-glow">
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                    <span className="text-sm font-medium text-foreground">{item.name}</span>
                    <span className="text-sm font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ※出張費・材料費込みの目安価格です。詳細はお見積もりにてご確認ください。
          </p>
          <div className="space-y-4">
            <Badge variant="outline" className="border-accent text-accent">
              見積もり無料・相談無料
            </Badge>
            <div>
              <Button
                onClick={() => navigate("/contact")}
                className="bg-gradient-electric text-white shadow-glow hover:shadow-electric transition-all duration-300"
                size="lg"
              >
                お問い合わせはこちら
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;