import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageSquare, Clock, Zap } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">お問い合わせ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            お気軽に<span className="text-primary">ご相談</span>ください
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            見積もり・相談は無料です。どんな小さなことでもお気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Phone Contact */}
          <Card className="shadow-electric bg-gradient-hero text-white hover:-translate-y-2 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-full mx-auto mb-4 shadow-glow">
                <Phone className="w-8 h-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold">お電話でのお問い合わせ</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="text-3xl font-bold text-accent mb-2">
                0548-87-2378
              </div>
              <div className="space-y-2 text-primary-foreground/90">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>平日 8:00-18:00 / 土曜 8:00-17:00</span>
                </div>
                <p className="text-sm">日祝休み（緊急時対応可）</p>
              </div>
              <Button 
                className="w-full bg-accent hover:bg-accent-light text-accent-foreground shadow-glow"
                size="lg"
                onClick={() => window.open('tel:0548-87-2378', '_self')}
              >
                <Phone className="w-4 h-4 mr-2" />
                今すぐ電話する
              </Button>
            </CardContent>
          </Card>

          {/* Email Contact */}
          <Card className="shadow-card bg-gradient-card hover:-translate-y-2 transition-all duration-300 border-border/50">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-electric rounded-full mx-auto mb-4 shadow-electric">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">メールでのお問い合わせ</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="text-lg font-semibold text-primary mb-2">
                info@electric-shizuoka.jp
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>24時間受付中</p>
                <p className="text-sm">営業時間内に順次回答いたします</p>
              </div>
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                size="lg"
              >
                <Mail className="w-4 h-4 mr-2" />
                メールを送る
              </Button>
            </CardContent>
          </Card>

          {/* LINE Contact */}
          <Card className="shadow-card bg-gradient-card hover:-translate-y-2 transition-all duration-300 border-border/50">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#00B900] rounded-full mx-auto mb-4 shadow-glow">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">LINEでのお問い合わせ</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#00B900] rounded-lg flex items-center justify-center mx-auto mb-2">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-xs text-muted-foreground">QRコード</p>
                </div>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>友達追加で簡単お問い合わせ</p>
                <p className="text-sm">写真も送れて便利です</p>
              </div>
              <Button 
                className="w-full bg-[#00B900] hover:bg-[#009900] text-white"
                size="lg"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                友達追加する
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <Card className="mt-12 shadow-electric bg-gradient-hero">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full animate-pulse-glow">
                <Zap className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-white">緊急時・夜間対応</h3>
            </div>
            <p className="text-white/90 mb-6 text-lg">
              停電・漏電などの緊急時は、休業日・夜間でも対応いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-white">
                <p className="font-semibold">緊急連絡先: 0548-87-2378</p>
                <p className="text-sm text-white/80">（夜間・休日専用）</p>
              </div>
              <Button 
                variant="secondary" 
                className="bg-accent hover:bg-accent-light text-accent-foreground"
                onClick={() => window.open('tel:0548-87-2378', '_self')}
              >
                緊急時はこちら
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;