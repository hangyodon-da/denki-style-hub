import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Send, Mail } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  phone: z.string().optional(),
  subject: z.string().min(1, "件名を入力してください"),
  message: z.string().min(10, "お問い合わせ内容は10文字以上で入力してください"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactFormPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // メール送信のシミュレーション
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 実際のメール送信処理はここに実装
      console.log("お問い合わせ内容:", data);
      
      toast({
        title: "お問い合わせを送信しました",
        description: "営業時間内に返信いたします。ありがとうございました。",
      });
      
      // フォームをリセット
      form.reset();
      
      // ホームページに戻る
      setTimeout(() => {
        navigate("/");
      }, 2000);
      
    } catch (error) {
      toast({
        title: "送信エラー",
        description: "申し訳ございません。もう一度お試しください。",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="mb-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            ホームに戻る
          </Button>
          <div className="text-center">
            <Badge className="mb-4 bg-primary text-primary-foreground">お問い合わせ</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              お気軽に<span className="text-primary">ご相談</span>ください
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              見積もり・相談は無料です。どんな小さなことでもお気軽にお問い合わせください。
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-electric bg-gradient-card border-border/50">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-electric rounded-full mx-auto mb-4 shadow-glow">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">
                お問い合わせフォーム
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">お名前 *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="山田太郎"
                            className="bg-background border-border focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">メールアドレス *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="example@email.com"
                            className="bg-background border-border focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">電話番号</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="090-1234-5678"
                            className="bg-background border-border focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">件名 *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="照明工事についてのお問い合わせ"
                            className="bg-background border-border focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">お問い合わせ内容 *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="ご質問やご相談内容をお書きください"
                            className="bg-background border-border focus:border-primary min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-electric text-white shadow-glow hover:shadow-electric transition-all duration-300"
                    size="lg"
                  >
                    {isSubmitting ? (
                      "送信中..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        送信する
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactFormPage;