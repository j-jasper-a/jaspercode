import { MobileMenu } from "./mobile-menu";
import { BrandLogo } from "@/components/shared/brand-logo";
import { Button } from "@/components/ui/button";
import { Mail as ContactIcon } from "lucide-react";
import Link from "next/link";

export function MobileHeader() {
  return (
    <nav className="relative flex h-16 items-center justify-between p-4 md:hidden">
      <div className="flex h-full items-center gap-2">
        <MobileMenu />
        <BrandLogo />
      </div>
      <div>
        <Button asChild variant="default" size="default">
          <Link href="#contact">
            <span>Get in touch</span>
            <ContactIcon className="text-muted-foreground" />
          </Link>
        </Button>
      </div>
    </nav>
  );
}
