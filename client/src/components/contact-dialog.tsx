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
  const email = "teamcrocker@grubbco.com";
  const phone = "510.339.0400"; // The Grubb Company main office
  const phoneLink = "5103390400";

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
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
          >
            <a href={`mailto:${email}`}>
              <Mail className="size-5" />
              Email the Team
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full justify-start gap-3 text-lg h-14"
            asChild
          >
            <a href={`tel:${phoneLink}`}>
              <Phone className="size-5" />
              Call {phone}
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
