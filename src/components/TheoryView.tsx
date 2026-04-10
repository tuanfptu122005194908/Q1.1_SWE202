import { theorySections } from "@/data/theoryData";
import { BookOpen } from "lucide-react";

const TheoryView = () => {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl gradient-button flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-primary-foreground" />
        </div>
        <h2 className="text-2xl font-heading font-bold gradient-text">Lý thuyết Prompt Engineering</h2>
      </div>

      {theorySections.map((section, i) => (
        <div
          key={section.id}
          className="glass-card rounded-2xl p-6 animate-fade-in-up"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <h3 className="text-lg font-heading font-bold text-foreground mb-3">{section.title}</h3>
          <div className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
            {section.content.split(/(\*\*[^*]+\*\*)/).map((part, j) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={j} className="text-primary font-semibold">{part.slice(2, -2)}</strong>;
              }
              return <span key={j}>{part}</span>;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TheoryView;
