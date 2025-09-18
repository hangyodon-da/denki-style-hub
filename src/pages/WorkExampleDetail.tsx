import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, User, Star, ArrowLeft, Clock, Wrench, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import workImage from "@/assets/work-examples.jpg";
import Header from "@/components/Header";

const WorkExampleDetail = () => {
  const { id } = useParams();

  // 仮のデータ - 実際のデータは後で置き換え
  const exampleDetails = {
    "0": {
      title: "一戸建て全館LED化工事",
      location: "静岡市葵区",
      date: "2024年3月",
      customer: "K様",
      description: "古い蛍光灯から最新LED照明への全面交換。省エネ効果で電気代が40%削減されました。",
      tags: ["LED工事", "省エネ", "一戸建て"],
      rating: 5,
      duration: "2日間",
      budget: "250,000円",
      beforeAfter: {
        before: "築20年の住宅で、蛍光灯による照明が主体。電気代が高く、明るさも不十分でした。",
        after: "全室LED照明に交換後、明るさが向上し、電気代も40%削減されました。"
      },
      workProcess: [
        "現地調査・見積もり",
        "既存照明器具の撤去",
        "LED照明器具の取り付け",
        "動作確認・お客様立会い"
      ],
      customerVoice: "工事も丁寧で、仕上がりにとても満足しています。電気代の削減効果も期待以上でした。"
    },
    "1": {
      title: "オフィス分電盤増設工事",
      location: "静岡市駿河区",
      date: "2024年2月",
      customer: "株式会社A様",
      description: "オフィス拡張に伴う電気容量アップ工事。安全性を重視した最新設備を導入しました。",
      tags: ["分電盤", "オフィス", "容量アップ"],
      rating: 5,
      duration: "1日間",
      budget: "180,000円",
      beforeAfter: {
        before: "オフィス拡張により電気容量が不足。ブレーカーが頻繁に落ちる状況でした。",
        after: "分電盤を増設し、十分な電気容量を確保。業務効率が大幅に改善されました。"
      },
      workProcess: [
        "電気容量の計算・設計",
        "分電盤の設置工事",
        "配線工事・接続",
        "安全点検・動作確認"
      ],
      customerVoice: "迅速な対応と丁寧な工事で、業務に支障なく完了していただきました。"
    },
    "2": {
      title: "キッチンコンセント増設",
      location: "藤枝市",
      date: "2024年1月",
      customer: "M様",
      description: "調理家電の増加に対応したコンセント増設工事。使い勝手が大幅に向上しました。",
      tags: ["コンセント", "キッチン", "増設"],
      rating: 5,
      duration: "半日",
      budget: "45,000円",
      beforeAfter: {
        before: "キッチンのコンセントが不足し、延長コードを多用する不便な状況でした。",
        after: "必要な箇所にコンセントを増設し、快適なキッチン環境を実現しました。"
      },
      workProcess: [
        "キッチンレイアウトの確認",
        "配線ルートの設計",
        "コンセント増設工事",
        "動作確認・清掃"
      ],
      customerVoice: "キッチンがとても使いやすくなりました。工事も綺麗に仕上げていただき感謝です。"
    }
  };

  const example = exampleDetails[id as keyof typeof exampleDetails];

  if (!example) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">工事事例が見つかりません</h1>
          <Link to="/">
            <Button>トップページに戻る</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/#work-examples">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              工事事例一覧に戻る
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image */}
          <div>
            <img 
              src={workImage} 
              alt={example.title}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Basic Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-primary text-primary-foreground">完工済み</Badge>
              <div className="flex items-center gap-1">
                {[...Array(example.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            <h1 className="text-3xl font-bold text-foreground mb-6">
              {example.title}
            </h1>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span className="text-foreground">{example.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <span className="text-foreground">{example.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-muted-foreground" />
                <span className="text-foreground">{example.customer}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span className="text-foreground">工期: {example.duration}</span>
              </div>
              <div className="flex items-center gap-3">
                <Wrench className="w-5 h-5 text-muted-foreground" />
                <span className="text-foreground">予算: {example.budget}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {example.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="border-primary text-primary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Before & After */}
          <Card className="bg-white border border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">施工前後の変化</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">施工前</h4>
                  <p className="text-gray-700">{example.beforeAfter.before}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">施工後</h4>
                  <p className="text-gray-700">{example.beforeAfter.after}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Process */}
          <Card className="bg-white border border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">工事の流れ</h3>
              <div className="space-y-3">
                {example.workProcess.map((process, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{process}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Customer Voice */}
        <Card className="bg-white border border-gray-200 mb-12">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-bold text-foreground">お客様の声</h3>
            </div>
            <blockquote className="text-gray-700 text-lg italic border-l-4 border-primary pl-4">
              "{example.customerVoice}"
            </blockquote>
            <p className="text-right text-muted-foreground mt-4">- {example.customer}</p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            同様の工事をご検討中ですか？
          </h3>
          <p className="text-gray-700 mb-6">
            お気軽にご相談ください。無料でお見積もりいたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                お問い合わせ
              </Button>
            </Link>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:0548-87-2378">
                今すぐ電話で相談
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkExampleDetail;