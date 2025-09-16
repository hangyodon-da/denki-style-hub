import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, User, Star } from "lucide-react";
import workImage from "@/assets/work-examples.jpg";

const WorkExamples = () => {
  const examples = [
    {
      title: "一戸建て全館LED化工事",
      location: "静岡市葵区",
      date: "2024年3月",
      customer: "K様",
      description: "古い蛍光灯から最新LED照明への全面交換。省エネ効果で電気代が40%削減されました。",
      tags: ["LED工事", "省エネ", "一戸建て"],
      rating: 5
    },
    {
      title: "オフィス分電盤増設工事",
      location: "静岡市駿河区",
      date: "2024年2月",
      customer: "株式会社A様",
      description: "オフィス拡張に伴う電気容量アップ工事。安全性を重視した最新設備を導入しました。",
      tags: ["分電盤", "オフィス", "容量アップ"],
      rating: 5
    },
    {
      title: "キッチンコンセント増設",
      location: "藤枝市",
      date: "2024年1月",
      customer: "M様",
      description: "調理家電の増加に対応したコンセント増設工事。使い勝手が大幅に向上しました。",
      tags: ["コンセント", "キッチン", "増設"],
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">施工事例</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            確かな<span className="text-primary">実績</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            お客様の声と共に、これまでの工事実績をご紹介します。
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-electric bg-gradient-card">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={workImage} 
                  alt="電気工事の施工例" 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-primary text-primary-foreground">おすすめ</Badge>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  マンション全体の電気設備リニューアル
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>静岡市中区 - 築30年マンション</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>2024年4月完工</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>管理組合様</span>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed mb-6">
                  築30年のマンションの電気設備を最新仕様にアップデート。各部屋の分電盤交換、共用部LED化、
                  セキュリティ設備の更新など、大規模な工事を3ヶ月で完了しました。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-primary text-primary">大規模工事</Badge>
                  <Badge variant="outline" className="border-primary text-primary">マンション</Badge>
                  <Badge variant="outline" className="border-primary text-primary">設備更新</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Examples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-electric transition-all duration-300 hover:-translate-y-2 bg-gradient-card"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(example.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <Badge variant="outline" className="border-accent text-accent">完工済み</Badge>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {example.title}
                </h3>
                
                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{example.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{example.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{example.customer}</span>
                  </div>
                </div>
                
                <p className="text-foreground text-sm leading-relaxed mb-4">
                  {example.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {example.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs border-muted text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExamples;
