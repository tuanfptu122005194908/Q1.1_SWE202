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

      {/* Hero Banner - Professional */}
      <div className="hero-section relative h-96 md:h-[32rem] lg:h-[40rem] overflow-hidden">
        <img
          src={animeBanner}
          alt="Anime student studying AI"
          className="w-full h-full object-cover scale-110 animate-float"
          width={1920}
          height={640}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-purple-600/30 to-transparent" />

        {/* Enhanced floating particles */}
        <div className="absolute top-12 left-[8%] w-6 h-6 rounded-full sakura-float animate-bounce-gentle" style={{ animationDelay: "0s", background: "radial-gradient(circle, hsl(280 100% 75%), transparent)" }} />
        <div className="absolute top-20 left-[25%] w-4 h-4 rounded-full sakura-float" style={{ animationDelay: "1.2s", background: "radial-gradient(circle, hsl(340 100% 75%), transparent)" }} />
        <div className="absolute top-16 right-[15%] w-7 h-7 rounded-full sakura-float" style={{ animationDelay: "2.4s", background: "radial-gradient(circle, hsl(200 100% 65%), transparent)" }} />
        <div className="absolute top-32 right-[30%] w-5 h-5 rounded-full sakura-float" style={{ animationDelay: "0.8s", background: "radial-gradient(circle, hsl(160 100% 65%), transparent)" }} />
        <div className="absolute top-24 left-[50%] w-6 h-6 rounded-full sakura-float" style={{ animationDelay: "3s", background: "radial-gradient(circle, hsl(20 100% 75%), transparent)" }} />
        <div className="absolute top-8 right-[45%] w-4 h-4 rounded-full sakura-float" style={{ animationDelay: "1.8s", background: "radial-gradient(circle, hsl(280 100% 80%), transparent)" }} />
        <div className="absolute top-40 left-[15%] w-8 h-8 rounded-full sakura-float" style={{ animationDelay: "4s", background: "radial-gradient(circle, hsl(340 100% 70%), transparent)" }} />
        <div className="absolute top-28 right-[25%] w-5 h-5 rounded-full sakura-float" style={{ animationDelay: "2.2s", background: "radial-gradient(circle, hsl(200 100% 75%), transparent)" }} />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 relative z-20">
          <div className="mb-6 animate-bounce-gentle">
            <span className="text-6xl md:text-8xl animate-float">🚀</span>
          </div>
          <h1 className="gradient-text-hero mb-6 animate-fade-in-up text-shadow-glow">
            Prompt Engineering Lab
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-white/90 animate-fade-in-up max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: "0.3s" }}>
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-3">🎯 Advanced Learning Platform</span>
            <br />
            <span className="text-lg md:text-xl">Học lý thuyết • Luyện tập 30 bài • AI chấm điểm tự động</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="glass-card px-4 py-2 rounded-full">
              <span className="text-white font-semibold">⚡ Real-time AI</span>
            </div>
            <div className="glass-card px-4 py-2 rounded-full">
              <span className="text-white font-semibold">📊 Analytics</span>
            </div>
            <div className="glass-card px-4 py-2 rounded-full">
              <span className="text-white font-semibold">🎨 Beautiful UI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Author Info - Professional */}
      <div className="gradient-bg py-8 relative overflow-hidden">
        <div className="absolute inset-0 animate-shimmer opacity-60" />
        {/* Enhanced glow orbs */}
        <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full opacity-40 animate-float" style={{ background: "radial-gradient(circle, hsl(280 100% 75%), transparent)" }} />
        <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full opacity-35 animate-float" style={{ animationDelay: "1s", background: "radial-gradient(circle, hsl(340 100% 75%), transparent)" }} />
        <div className="absolute top-4 left-1/4 w-16 h-16 rounded-full opacity-30 animate-float" style={{ animationDelay: "2s", background: "radial-gradient(circle, hsl(200 100% 65%), transparent)" }} />
        
        <div className="container max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 px-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-button flex items-center justify-center animate-bounce-gentle">
              <span className="text-2xl">👨‍💻</span>
            </div>
            <div>
              <h3 className="font-bold text-2xl text-white mb-1 text-shadow-glow">Tuấn và Quân</h3>
              <p className="text-white/80 font-medium">Full Stack Developers & AI Enthusiasts</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/tuanvaquan"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-3 font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 hover:translate-y-1 border border-white/30 group"
            >
              <Facebook className="w-5 h-5 text-white group-hover:text-blue-300 transition-colors" />
              <span className="text-white">Facebook</span>
            </a>
            <a
              href="https://www.youtube.com/@tuanvaquanfptu"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-3 font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 hover:translate-y-1 border border-white/30 group"
            >
              <Youtube className="w-5 h-5 text-white group-hover:text-red-300 transition-colors" />
              <span className="text-white">YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main content - Professional */}
      <div className="container max-w-6xl py-12 px-6">
        <div className="glass-card rounded-2xl p-8 mb-8 animate-fade-in-up">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              <Button
                variant={tab === "theory" ? "default" : "outline"}
                onClick={() => setTab("theory")}
                className={`transition-all duration-300 ${tab === "theory" ? "gradient-button text-white shadow-lg transform scale-105" : "glass-card hover:scale-105 border-white/30 text-white"}`}
                size="lg"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                <span className="font-semibold">Lý thuyết</span>
              </Button>
              <Button
                variant={tab === "quiz" || tab === "results" ? "default" : "outline"}
                onClick={startQuiz}
                className={`transition-all duration-300 ${tab === "quiz" || tab === "results" ? "gradient-accent-bg text-white shadow-lg transform scale-105" : "glass-card hover:scale-105 border-white/30 text-white"}`}
                size="lg"
              >
                <PenTool className="w-5 h-5 mr-2" />
                <span className="font-semibold">Thi thử</span>
              </Button>
              <Button
                variant={tab === "guide" ? "default" : "outline"}
                onClick={() => setTab("guide")}
                className={`transition-all duration-300 ${tab === "guide" ? "gradient-button text-white shadow-lg transform scale-105" : "glass-card hover:scale-105 border-white/30 text-white"}`}
                size="lg"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">Hướng Dẫn API</span>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="lg"
              onClick={() => setShowApiModal(true)}
              className="glass-card hover:scale-105 border-white/30 text-white font-medium"
            >
              <KeyRound className="w-4 h-4 mr-2" />
              {apiKey ? "Ðoi API Key" : "Cài API Key"}
            </Button>
          </div>
        </div>

        <div className="mt-8">
          {tab === "theory" && <TheoryView />}
          {tab === "quiz" && <QuizView apiKey={apiKey} onFinish={handleFinish} />}
          {tab === "results" && results && <ResultsView results={results} onRetry={handleRetry} />}
          {tab === "guide" && <ApiKeyGuide />}
        </div>
      </div>

      {/* Footer - Professional */}
      <footer className="gradient-bg border-t border-white/20 py-8 mt-12">
        <div className="container max-w-6xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-white font-semibold text-lg mb-2 text-shadow-glow">
                Made with \ud83d\udc96 by Tuán và Quân
              </p>
              <p className="text-white/80 font-medium">
                Prompt Engineering Lab \u2022 Advanced AI Learning Platform
              </p>
            </div>
            <div className="flex gap-4">
              <div className="glass-card px-4 py-2 rounded-full">
                <span className="text-white font-medium text-sm">React + TypeScript</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-full">
                <span className="text-white font-medium text-sm">Tailwind CSS</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-full">
                <span className="text-white font-medium text-sm">AI Powered</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-white/20">
            <p className="text-white/60 text-sm">
              \u00a9 2024 Prompt Engineering Lab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
