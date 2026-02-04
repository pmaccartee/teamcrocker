import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ContactDialogProps {
  children: React.ReactNode;
}

export function ContactDialog({ children }: ContactDialogProps) {
  // Simple obfuscation to prevent basic scrapers from grabbing the email/phone from source
  const [emailHref, setEmailHref] = useState<string | undefined>(undefined);
  const [phoneHref, setPhoneHref] = useState<string | undefined>(undefined);

  const user = "teamcrocker";
  const domain = "grubbco.com";
  const phoneDigits = "5108594895";

  const handleReveal = () => {
    setEmailHref(`mailto:${user}@${domain}`);
    setPhoneHref(`tel:${phoneDigits}`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild onMouseEnter={handleReveal} onFocus={handleReveal} onClick={handleReveal}>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get in touch</DialogTitle>
          <DialogDescription>
            Reach out to the Crocker Highlands Team directly.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            size="lg"
            className="w-full justify-start gap-3 text-lg h-14"
            asChild
            onMouseEnter={handleReveal}
            onFocus={handleReveal}
          >
            {/* Href is generated on interaction */}
            <a href={emailHref}>
              <Mail className="size-5" />
              Email the Team
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full justify-start gap-3 text-lg h-14"
            asChild
            onMouseEnter={handleReveal}
            onFocus={handleReveal}
          >
            <a href={phoneHref}>
              <Phone className="size-5" />
              Call 510.859.4895
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
