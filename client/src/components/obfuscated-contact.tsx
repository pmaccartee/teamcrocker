import { useState } from "react";
import { cn } from "@/lib/utils";
import { Eye, Lock } from "lucide-react";

interface ObfuscatedContactProps {
  value: string;
  type: "email" | "phone";
  className?: string;
  label?: string;
}

export function ObfuscatedContact({ value, type, className, label }: ObfuscatedContactProps) {
  const [revealed, setRevealed] = useState(false);
  
  const handleReveal = (e: React.MouseEvent) => {
    e.preventDefault();
    setRevealed(true);
  };

  if (!revealed) {
    return (
      <button 
        onClick={handleReveal}
        className={cn(
          "inline-flex items-center gap-2 text-sm text-primary/80 hover:text-primary transition-colors font-medium border border-primary/20 rounded-md px-3 py-1 bg-primary/5 hover:bg-primary/10", 
          className
        )}
        title={`Click to reveal ${type}`}
      >
        <Lock className="size-3" />
        <span>Show {type === 'email' ? 'Email' : 'Number'}</span>
      </button>
    );
  }

  const href = type === "email" 
    ? `mailto:${value}` 
    : `tel:${value.replace(/\D/g, "")}`;

  const displayLabel = label || value;

  return (
    <a
      href={href}
      className={cn("cursor-pointer transition-colors hover:text-primary font-medium animate-in fade-in duration-300", className)}
    >
      {displayLabel}
    </a>
  );
}
