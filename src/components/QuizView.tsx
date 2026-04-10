import { useState } from "react";
import { quizQuestions } from "@/data/quizData";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, XCircle, ArrowRight, ArrowLeft, Send, Loader2, Lightbulb } from "lucide-react";

export interface QuizResult {
  questionId: number;
  userAnswer: string;
  score: number;
  feedback: string;
}

const categoryColors: Record<string, string> = {
  A: "bg-sakura/20 text-primary",
  B: "bg-ocean/20 text-ocean",
  C: "bg-mint/20 text-accent",
  D: "bg-lavender/20 text-secondary",
};

interface GradedAnswer {
  score: number;
  feedback: string;
}

const QuizView = ({ apiKey, onFinish }: { apiKey: string; onFinish: (results: QuizResult[]) => void }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [graded, setGraded] = useState<Record<number, GradedAnswer>>({});
  const [grading, setGrading] = useState<number | null>(null);

  const q = quizQuestions[currentQ];
  const progress = ((currentQ + 1) / quizQuestions.length) * 100;
  const isCurrentGraded = !!graded[q.id];
  const currentAnswer = answers[q.id] || "";

  const gradeOne = async (qId: number) => {
    const qq = quizQuestions.find((x) => x.id === qId)!;
    const userAnswer = answers[qId] || "";
    setGrading(qId);
    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "system", content: `You are an exam grader for Prompt Engineering. Grade the student's answer from 0-10. Compare with the sample answer. Be fair but strict. Reply ONLY in this JSON format: {"score": <number>, "feedback": "<brief feedback in Vietnamese>"}` },
            { role: "user", content: `Question: ${qq.question}\n${qq.code ? `Code:\n${qq.code}\n` : ""}\nSample Answer: ${qq.sampleAnswer}\n\nStudent's Answer: ${userAnswer}` },
          ],
          temperature: 0.3,
          max_tokens: 300,
        }),
      });
      if (!res.ok) {
        setGraded((p) => ({ ...p, [qId]: { score: 0, feedback: `Lỗi API (${res.status}). Kiểm tra API key.` } }));
      } else {
        const data = await res.json();
        const content = data.choices?.[0]?.message?.content || "";
        try {
          const parsed = JSON.parse(content);
          setGraded((p) => ({ ...p, [qId]: { score: parsed.score ?? 0, feedback: parsed.feedback ?? "Không có nhận xét." } }));
        } catch {
          setGraded((p) => ({ ...p, [qId]: { score: 0, feedback: content || "Không thể phân tích." } }));
        }
      }
    } catch {
      setGraded((p) => ({ ...p, [qId]: { score: 0, feedback: "Lỗi kết nối." } }));
    }
    setGrading(null);
  };

  const allGraded = quizQuestions.every((qq) => graded[qq.id]);

  const finishAll = () => {
    const results: QuizResult[] = quizQuestions.map((qq) => ({
      questionId: qq.id,
      userAnswer: answers[qq.id] || "",
      score: graded[qq.id]?.score ?? 0,
      feedback: graded[qq.id]?.feedback ?? "",
    }));
    onFinish(results);
  };

  return (
    <div className="animate-fade-in-up">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Câu {currentQ + 1} / {quizQuestions.length}</span>
          <span>{Object.keys(graded).length} đã chấm</span>
        </div>
        <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
          <div className="h-full rounded-full gradient-button transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Question card */}
      <div className="glass-card rounded-2xl p-6 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[q.category] || ""}`}>
            {q.categoryLabel}
          </span>
          <span className="text-sm text-muted-foreground font-medium">Bài {q.id}</span>
          {isCurrentGraded && (
            <span className={`ml-auto text-lg font-bold ${graded[q.id].score >= 7 ? "text-accent" : "text-destructive"}`}>
              {graded[q.id].score}/10
            </span>
          )}
        </div>

        <p className="text-foreground font-medium whitespace-pre-line mb-4">{q.question}</p>

        {q.code && (
          <pre className="bg-foreground/5 rounded-xl p-4 text-sm font-mono text-foreground/80 overflow-x-auto mb-4 border border-border">
            {q.code}
          </pre>
        )}

        <Textarea
          value={currentAnswer}
          onChange={(e) => setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
          placeholder="Nhập câu trả lời của bạn..."
          rows={5}
          disabled={isCurrentGraded}
          className="bg-muted/30 border-border focus:ring-primary resize-none"
        />

        {/* Submit this question */}
        {!isCurrentGraded && (
          <Button
            onClick={() => gradeOne(q.id)}
            disabled={!currentAnswer.trim() || grading === q.id}
            className="mt-3 gradient-accent-bg text-accent-foreground hover:opacity-90"
          >
            {grading === q.id ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Đang chấm...</>
            ) : (
              <><Send className="w-4 h-4 mr-2" /> Nộp & Chấm câu này</>
            )}
          </Button>
        )}
      </div>

      {/* Graded result for this question */}
      {isCurrentGraded && (
        <div className="space-y-3 mb-6 animate-fade-in-up">
          <div className="glass-card rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              {graded[q.id].score >= 7 ? (
                <CheckCircle className="w-5 h-5 text-accent" />
              ) : (
                <XCircle className="w-5 h-5 text-destructive" />
              )}
              <span className="font-heading font-bold text-foreground">AI nhận xét</span>
            </div>
            <p className="text-sm text-foreground/80">{graded[q.id].feedback}</p>
          </div>

          <div className="bg-primary/10 rounded-2xl p-4 border border-primary/20">
            <p className="text-xs text-primary font-semibold mb-1">📝 Đáp án mẫu:</p>
            <p className="text-sm text-foreground/80 whitespace-pre-line">{q.sampleAnswer}</p>
          </div>

          <div className="flex items-start gap-2 bg-peach/20 rounded-2xl p-4 border border-peach/20">
            <Lightbulb className="w-4 h-4 text-peach flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-foreground/70 mb-0.5">💡 Mẹo:</p>
              <p className="text-sm text-foreground/80">{q.tip}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4">
        <Button
          variant="outline"
          onClick={() => setCurrentQ((p) => Math.max(0, p - 1))}
          disabled={currentQ === 0}
          className="border-border"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Trước
        </Button>

        <div className="flex gap-2">
          {currentQ < quizQuestions.length - 1 && (
            <Button onClick={() => setCurrentQ((p) => p + 1)} className="gradient-button text-primary-foreground hover:opacity-90">
              Tiếp <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
          {allGraded && (
            <Button onClick={finishAll} className="gradient-accent-bg text-accent-foreground hover:opacity-90">
              📊 Xem tổng kết
            </Button>
          )}
        </div>
      </div>

      {/* Quick nav dots */}
      <div className="flex flex-wrap gap-2 mt-6 justify-center">
        {quizQuestions.map((qq, i) => (
          <button
            key={qq.id}
            onClick={() => setCurrentQ(i)}
            className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all ${
              i === currentQ
                ? "gradient-button text-primary-foreground scale-110"
                : graded[qq.id]
                ? graded[qq.id].score >= 7
                  ? "bg-accent/20 text-accent ring-1 ring-accent/30"
                  : "bg-destructive/15 text-destructive ring-1 ring-destructive/20"
                : answers[qq.id]?.trim()
                ? "bg-sakura/15 text-primary"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {qq.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizView;
