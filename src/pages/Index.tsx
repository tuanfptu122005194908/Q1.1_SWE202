import { useState } from "react";
import animeBanner from "@/assets/anime-banner.jpg";
import ApiKeyModal from "@/components/ApiKeyModal";
import TheoryView from "@/components/TheoryView";
import QuizView, { type QuizResult } from "@/components/QuizView";
import ResultsView from "@/components/ResultsView";
import ApiKeyGuide from "@/components/ApiKeyGuide";
import { BookOpen, PenTool, Facebook, Youtube, KeyRound, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type Tab = "theory" | "quiz" | "results" | "guide";

const Index = () => {
  const [apiKey, setApiKey] = useState("");
  const [showApiModal, setShowApiModal] = useState(false);
  const [tab, setTab] = useState<Tab>("theory");
  const [results, setResults] = useState<QuizResult[] | null>(null);

  const startQuiz = () => {
    if (!apiKey) {
      setShowApiModal(true);
    } else {
      setTab("quiz");
    }
  };

  const handleApiSubmit = (key: string) => {
    setApiKey(key);
    setShowApiModal(false);
    setTab("quiz");
  };

  const handleFinish = (r: QuizResult[]) => {
    setResults(r);
    setTab("results");
  };

  const handleRetry = () => {
    setResults(null);
    setTab("quiz");
  };

  return (
    <div className="min-h-screen bg-background">
      {showApiModal && <ApiKeyModal onSubmit={handleApiSubmit} />}

      {/* Hero Banner */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img
          src={animeBanner}
          alt="Anime student studying AI"
          className="w-full h-full object-cover"
          width={1920}
          height={640}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(180,100,200,0.25) 50%, hsl(270 30% 97%))" }} />

        {/* Floating sakura petals - bigger & more colorful */}
        <div className="absolute top-8 left-[8%] w-4 h-4 rounded-full sakura-float" style={{ animationDelay: "0s", background: "radial-gradient(circle, hsl(330 80% 75%), transparent)" }} />
        <div className="absolute top-24 left-[25%] w-3 h-3 rounded-full sakura-float" style={{ animationDelay: "1.2s", background: "radial-gradient(circle, hsl(270 60% 75%), transparent)" }} />
        <div className="absolute top-12 right-[15%] w-5 h-5 rounded-full sakura-float" style={{ animationDelay: "2.4s", background: "radial-gradient(circle, hsl(200 70% 65%), transparent)" }} />
        <div className="absolute top-32 right-[30%] w-3 h-3 rounded-full sakura-float" style={{ animationDelay: "0.8s", background: "radial-gradient(circle, hsl(160 50% 65%), transparent)" }} />
        <div className="absolute top-14 left-[50%] w-4 h-4 rounded-full sakura-float" style={{ animationDelay: "3s", background: "radial-gradient(circle, hsl(20 80% 75%), transparent)" }} />
        <div className="absolute top-6 right-[45%] w-3 h-3 rounded-full sakura-float" style={{ animationDelay: "1.8s", background: "radial-gradient(circle, hsl(330 70% 80%), transparent)" }} />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1
            className="text-4xl md:text-6xl font-heading font-bold mb-4 animate-fade-in-up"
            style={{
              background: "linear-gradient(135deg, #fff 0%, #ffd6e8 30%, #d4b8ff 60%, #7dd3fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 2px 15px rgba(0,0,0,0.5))",
            }}
          >
            ✨ Prompt Engineering Lab
          </h1>
          <p
            className="text-lg md:text-xl font-semibold animate-fade-in-up max-w-2xl tracking-wide"
            style={{
              animationDelay: "0.2s",
              background: "linear-gradient(90deg, #ffd6e8, #ffffff, #c4b5fd, #7dd3fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.4))",
            }}
          >
            Học lý thuyết • Luyện tập 30 bài • AI chấm điểm tự động
          </p>
        </div>
      </div>

      {/* Author Info - Nổi bật */}
      <div className="py-5 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(330 70% 60%), hsl(270 60% 55%), hsl(200 70% 50%))" }}>
        <div className="absolute inset-0 animate-shimmer opacity-40" />
        {/* Glow orbs */}
        <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-30" style={{ background: "radial-gradient(circle, hsl(330 80% 75%), transparent)" }} />
        <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full opacity-25" style={{ background: "radial-gradient(circle, hsl(200 80% 65%), transparent)" }} />
        <div className="container max-w-4xl flex flex-wrap items-center justify-center gap-6 relative z-10" style={{ color: "white" }}>
          <span className="font-heading font-bold text-xl tracking-wide" style={{ textShadow: "0 0 20px rgba(255,255,255,0.4), 0 2px 8px rgba(0,0,0,0.3)" }}>
            🌟 Author: Tuấn và Quân
          </span>
          <a
            href="https://www.facebook.com/tuanvaquan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-bold px-5 py-2 rounded-full backdrop-blur-sm transition-all hover:scale-110 border border-primary-foreground/30"
            style={{ background: "rgba(255,255,255,0.2)", textShadow: "0 1px 4px rgba(0,0,0,0.2)" }}
          >
            <Facebook className="w-5 h-5" /> Facebook
          </a>
          <a
            href="https://www.youtube.com/@tuanvaquanfptu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-bold px-5 py-2 rounded-full backdrop-blur-sm transition-all hover:scale-110 border border-primary-foreground/30"
            style={{ background: "rgba(255,255,255,0.2)", textShadow: "0 1px 4px rgba(0,0,0,0.2)" }}
          >
            <Youtube className="w-4 h-4" /> YouTube
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="container max-w-4xl py-8 px-4">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="flex gap-2">
            <Button
              variant={tab === "theory" ? "default" : "outline"}
              onClick={() => setTab("theory")}
              className={tab === "theory" ? "gradient-button text-primary-foreground" : "border-border"}
            >
              <BookOpen className="w-4 h-4 mr-2" /> Lý thuyết
            </Button>
            <Button
              variant={tab === "quiz" || tab === "results" ? "default" : "outline"}
              onClick={startQuiz}
              className={tab === "quiz" || tab === "results" ? "gradient-accent-bg text-accent-foreground" : "border-border"}
            >
              <PenTool className="w-4 h-4 mr-2" /> Thi thử
            </Button>
            <Button
              variant={tab === "guide" ? "default" : "outline"}
              onClick={() => setTab("guide")}
              className={tab === "guide" ? "gradient-button text-primary-foreground" : "border-border"}
            >
              <HelpCircle className="w-4 h-4 mr-2" /> Hướng Dẫn API
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowApiModal(true)}
            className="text-muted-foreground text-xs"
          >
            <KeyRound className="w-3 h-3 mr-1" />
            {apiKey ? "Đổi API Key" : "Cài API Key"}
          </Button>
        </div>

        {tab === "theory" && <TheoryView />}
        {tab === "quiz" && <QuizView apiKey={apiKey} onFinish={handleFinish} />}
        {tab === "results" && results && <ResultsView results={results} onRetry={handleRetry} />}
        {tab === "guide" && <ApiKeyGuide />}
      </div>

      <footer className="text-center py-6 text-xs text-muted-foreground border-t border-border">
        Made with 💖 by Tuấn và Quân — Prompt Engineering Lab
      </footer>
    </div>
  );
};

export default Index;
