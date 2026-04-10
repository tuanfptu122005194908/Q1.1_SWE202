import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  KeyRound, 
  ExternalLink, 
  CheckCircle, 
  AlertCircle, 
  Shield, 
  Copy,
  Eye,
  EyeOff
} from "lucide-react";

const ApiKeyGuide = () => {
  const [showApiKey, setShowApiKey] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const steps = [
    {
      title: "B1: Truy Crawl Console",
      description: "Vào trang web chính xác",
      content: "https://console.groq.com/",
      action: "Truy Crawl"
    },
    {
      title: "B2: Tài Kho",
      description: "Sign up/Sign in",
      content: "Dùng Google, GitHub, email",
      action: "Tài Kho"
    },
    {
      title: "B3: Keys",
      description: "Menu bên trái",
      content: "https://console.groq.com/keys",
      action: "Keys"
    },
    {
      title: "B4: Create Key",
      description: "Nút xanh",
      content: "Tên key: 'Prompt Pal'",
      action: "Create"
    },
    {
      title: "B5: Copy Key",
      description: "CHI 1 LÂN!",
      content: "gsk_xxxxxxxxxxxxx...",
      action: "Copy"
    }
  ];

  const commonErrors = [
    {
      error: "Invalid API Key",
      solution: "Kiêm tra copy full key (có gsk_)"
    },
    {
      error: "Rate Limit", 
      solution: "Chua 1-2 phút (limit 30 req/phút)"
    },
    {
      error: "Key Expired",
      solution: "Tao key moi"
    }
  ];

  const securityTips = [
    "KHÔNG chia se key",
    "KHÔNG commit vao git", 
    "KHÔNG dua vao frontend",
    "Dùng .env file",
    "Thay key nghi leak"
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="gradient-card">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-xl gradient-button flex items-center justify-center">
              <KeyRound className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl font-heading font-bold text-foreground">
            Huong Dan Lay Groq API Key
          </CardTitle>
          <p className="text-muted-foreground">
            De AI cham bai tu dong trong Prompt Pal
          </p>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            5 Buoc Nhanh
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-button flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  <p className="text-xs text-ocean mt-1">{step.content}</p>
                </div>
                {step.action === "Truy Crawl" && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open("https://console.groq.com/", "_blank")}
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Mo Console
                  </Button>
                )}
                {step.action === "Keys" && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open("https://console.groq.com/keys", "_blank")}
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Mo Keys
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              Loi Thuong Gap
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {commonErrors.map((item, index) => (
                <div key={index} className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                  <p className="font-medium text-sm text-yellow-800 dark:text-yellow-200">
                    {item.error}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-500" />
            Bao Mat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {securityTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Chi Tiet Tham Khao</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="format">
              <AccordionTrigger>Dinh Dang API Key</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Key co dinh dang: <code className="bg-muted px-2 py-1 rounded text-xs">gsk_xxxxxxxxxxxxx...</code>
                  </p>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="flex items-center gap-2"
                    >
                      {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      {showApiKey ? "An" : "Hien"} Vi Du
                    </Button>
                    {showApiKey && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard("gsk_example123456789abcdef")}
                        className="flex items-center gap-2"
                      >
                        <Copy className="w-4 h-4" />
                        Copy
                      </Button>
                    )}
                  </div>
                  {showApiKey && (
                    <div className="p-3 bg-muted rounded-lg">
                      <code className="text-xs">gsk_example123456789abcdef</code>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="environment">
              <AccordionTrigger>Environment Variables</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Cho developer, tao file <code className="bg-muted px-2 py-1 rounded text-xs">.env</code>:
                  </p>
                  <div className="p-3 bg-muted rounded-lg">
                    <code className="text-xs">VITE_GROQ_API_KEY=gsk_your_key_here</code>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Trong code: <code className="bg-muted px-2 py-1 rounded text-xs">import.meta.env.VITE_GROQ_API_KEY</code>
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support">
              <AccordionTrigger>Ho Tro</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open("https://console.groq.com/docs", "_blank")}
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Documentation
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Email: support@groq.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Discord: https://discord.gg/groq
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card className="gradient-card">
        <CardContent className="text-center p-6">
          <p className="text-sm text-muted-foreground">
            Sau khi co API key, quay lai Prompt Pal va paste vao o nhap key
          </p>
          <Button 
            className="mt-4 gradient-button"
            onClick={() => window.location.reload()}
          >
            Da Co Key - Bat Dau Su Dung
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApiKeyGuide;
