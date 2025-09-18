import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Calendar, Phone } from "lucide-react";

const CompanyInfo = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">会社案内</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">中央電工有限会社</span>について
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            地域密着20年の信頼と実績で、皆様の電気のお困りごとを解決します。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Company Details */}
          <Card className="shadow-card bg-card border border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                会社所在地・営業時間
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">所在地</h3>
                <p className="text-muted-foreground">
                  静岡県静岡市葵区××××<br />
                  <span className="text-sm">（詳細住所はお問い合わせ時にお伝えします）</span>
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  営業時間
                </h3>
                <div className="space-y-2">
                  <p className="text-foreground">
                    <span className="font-medium">平日：</span> 8:00 - 18:00
                  </p>
                  <p className="text-foreground">
                    <span className="font-medium">土曜：</span> 8:00 - 17:00
                  </p>
                  <p className="text-foreground">
                    <span className="font-medium text-destructive">日祝：</span> 
                    <span className="text-destructive"> 定休日</span>
                  </p>
                  <Badge variant="outline" className="border-destructive text-destructive mt-2">
                    ※緊急時は対応可能
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  休業日のお知らせ
                </h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground">• 毎週日曜日・祝日</p>
                  <p className="text-muted-foreground">• 年末年始（12/29〜1/3）</p>
                  <p className="text-muted-foreground">• お盆期間（8/13〜8/16）</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card className="shadow-card bg-card border border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                アクセスマップ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-electric opacity-10"></div>
                <div className="text-center z-10">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-foreground font-semibold mb-2">静岡県静岡市葵区</p>
                  <p className="text-muted-foreground text-sm">
                    詳細な場所はお問い合わせ時に<br />
                    ご案内いたします
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-background/50 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">交通アクセス</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• JR静岡駅から車で約15分</li>
                  <li>• 新東名静岡ICから車で約20分</li>
                  <li>• 駐車場完備（3台分）</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* News Section */}
        <Card className="shadow-electric bg-gradient-hero text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground text-sm font-bold">!</span>
              </div>
              最新のお知らせ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg">
                <Badge className="bg-accent text-accent-foreground">NEW</Badge>
                <div>
                  <p className="font-semibold mb-1">2024年4月より新サービス開始</p>
                  <p className="text-primary-foreground/80 text-sm">
                    スマートホーム機器の設置・設定サービスを開始しました。IoT機器の導入もお気軽にご相談ください。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg">
                <Badge variant="outline" className="border-white/50 text-white">更新</Badge>
                <div>
                  <p className="font-semibold mb-1">GW期間中の営業について</p>
                  <p className="text-primary-foreground/80 text-sm">
                    ゴールデンウィーク期間中（4/29〜5/5）は休業とさせていただきます。緊急時は携帯電話へご連絡ください。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg">
                <Badge variant="outline" className="border-white/50 text-white">お知らせ</Badge>
                <div>
                  <p className="font-semibold mb-1">無料点検キャンペーン実施中</p>
                  <p className="text-primary-foreground/80 text-sm">
                    築10年以上のお住まいを対象に、電気設備の無料点検を行っています。お気軽にお申し込みください。
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CompanyInfo;