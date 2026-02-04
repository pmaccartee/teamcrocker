import { useState } from "react";
import { cn } from "@/lib/utils";

interface ObfuscatedContactProps {
  value: string;
  type: "email" | "phone";
  className?: string;
  label?: string;
}

export function ObfuscatedContact({ value, type, className, label }: ObfuscatedContactProps) {
  const [href, setHref] = useState<string | undefined>(undefined);

  const handleReveal = () => {
    if (type === "email") {
      setHref(`mailto:${value}`);
    } else {
      // Strip non-numeric characters for the tel: link
      const digits = value.replace(/\D/g, "");
      setHref(`tel:${digits}`);
    }
  };

  const displayLabel = label || value;

  return (
    <a
      href={href}
      className={cn("cursor-pointer transition-colors hover:text-primary", className)}
      onMouseEnter={handleReveal}
      onFocus={handleReveal}
      onClick={(e) => {
        handleReveal();
        // If it was just revealed, we might need to let the event bubble or trigger navigation
        if (!href) {
           // For mobile tap: if href wasn't set, setting it now won't trigger navigation immediately on this click event
           // But since we set generic href, let's just allow default behavior if href exists, otherwise generated
        }
      }}
    >
      {displayLabel}
    </a>
  );
}
