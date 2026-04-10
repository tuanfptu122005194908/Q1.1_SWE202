import { quizQuestions } from "@/data/quizData";
import type { QuizResult } from "@/components/QuizView";
import { Trophy, CheckCircle, XCircle, Lightbulb, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResultsViewProps {
  results: QuizResult[];
  onRetry: () => void;
}

const ResultsView = ({ results, onRetry }: ResultsViewProps) => {
  const totalScore = results.reduce((sum, r) => sum + r.score, 0);
  const maxScore = results.length * 10;
  const pct = Math.round((totalScore / maxScore) * 100);

  const getGrade = () => {
    if (pct >= 90) return { label: "Xuất sắc! 🌟", color: "text-accent" };
    if (pct >= 70) return { label: "Tốt lắm! 👏", color: "text-ocean" };
    if (pct >= 50) return { label: "Khá! 💪", color: "text-primary" };
    return { label: "Cần cố gắng thêm! 📚", color: "text-destructive" };
  };

  const grade = getGrade();

  return (
    <div className="animate-fade-in-up">
      {/* Score summary */}
      <div className="glass-card rounded-2xl p-8 text-center mb-8">
        <div className="w-20 h-20 rounded-full gradient-button flex items-center justify-center mx-auto mb-4">
          <Trophy className="w-10 h-10 text-primary-foreground" />
        </div>
        <h2 className="text-3xl font-heading font-bold gradient-text mb-2">Kết quả thi thử</h2>
        <p className="text-5xl font-heading font-bold text-foreground mb-1">
          {totalScore}<span className="text-2xl text-muted-foreground">/{maxScore}</span>
        </p>
        <p className={`text-lg font-semibold ${grade.color}`}>{grade.label}</p>
        <p className="text-muted-foreground mt-1">Đạt {pct}% tổng điểm</p>

        <Button onClick={onRetry} className="mt-6 gradient-button text-primary-foreground hover:opacity-90">
          <RotateCcw className="w-4 h-4 mr-2" /> Thi lại
        </Button>
      </div>

      {/* Detailed results */}
      <div className="space-y-4">
        {results.map((r) => {
          const q = quizQuestions.find((qq) => qq.id === r.questionId)!;
          const isGood = r.score >= 7;
          return (
            <div key={r.questionId} className="glass-card rounded-2xl p-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  {isGood ? (
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                  )}
                  <span className="font-heading font-bold text-foreground">Bài {q.id} – {q.categoryLabel}</span>
                </div>
                <span className={`text-lg font-bold ${isGood ? "text-accent" : "text-destructive"}`}>
                  {r.score}/10
                </span>
              </div>

              <p className="text-sm text-foreground/70 mb-2 whitespace-pre-line line-clamp-2">{q.question}</p>

              <div className="bg-muted/50 rounded-xl p-3 mb-2">
                <p className="text-xs text-muted-foreground font-semibold mb-1">Câu trả lời của bạn:</p>
                <p className="text-sm text-foreground/80 whitespace-pre-line">{r.userAnswer}</p>
              </div>

              <div className="bg-accent/10 rounded-xl p-3 mb-2">
                <p className="text-xs text-accent font-semibold mb-1">AI nhận xét:</p>
                <p className="text-sm text-foreground/80">{r.feedback}</p>
              </div>

              <div className="bg-primary/10 rounded-xl p-3 mb-2">
                <p className="text-xs text-primary font-semibold mb-1">📝 Đáp án mẫu:</p>
                <p className="text-sm text-foreground/80 whitespace-pre-line">{q.sampleAnswer}</p>
              </div>

              <div className="flex items-start gap-2 bg-peach/20 rounded-xl p-3">
                <Lightbulb className="w-4 h-4 text-peach flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-foreground/70 mb-0.5">Mẹo:</p>
                  <p className="text-sm text-foreground/80">{q.tip}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultsView;
