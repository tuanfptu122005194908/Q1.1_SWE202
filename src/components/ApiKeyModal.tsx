import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KeyRound, ExternalLink } from "lucide-react";

interface ApiKeyModalProps {
  onSubmit: (key: string) => void;
}

const ApiKeyModal = ({ onSubmit }: ApiKeyModalProps) => {
  const [key, setKey] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm">
      <div className="glass-card rounded-2xl p-8 max-w-md w-full mx-4 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl gradient-button flex items-center justify-center">
            <KeyRound className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-foreground">Nháp Groq API Key</h2>
            <p className="text-sm text-muted-foreground">Cán ñ AI chám bài cho ban</p>
            <p className="text-xs text-green-600">Key së duwc luw lai ñ lan sau khong can nhap lai</p>
          </div>
        </div>

        <div className="space-y-4">
          <Input
            type="password"
            placeholder="gsk_xxxxxxxxxxxxx..."
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="bg-muted/50 border-border focus:ring-primary"
          />
          <a
            href="https://console.groq.com/keys"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-ocean hover:underline"
          >
            <ExternalLink className="w-4 h-4" />
            Lấy API Key tại Groq Console
          </a>
          <Button
            onClick={() => key.trim() && onSubmit(key.trim())}
            disabled={!key.trim()}
            className="w-full gradient-button text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Xác nhận & Bắt đầu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyModal;
