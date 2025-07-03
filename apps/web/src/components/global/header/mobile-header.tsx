import { BrandLogo } from "@/components/shared/brand-logo";
import { Button } from "@/components/ui/button";
import { ArrowRight as GoIcon } from "lucide-react";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";

export function MobileHeader() {
  return (
    <nav className="relative flex h-16 items-center justify-between p-4 lg:hidden">
      <div className="flex h-full items-center gap-4">
        <MobileMenu />
        <BrandLogo />
      </div>
      <div>
        <Button asChild variant="default" size="sm">
          <Link href="#contact">
            <span>Get in touch</span>
            <GoIcon className="text-muted-foreground" />
          </Link>
        </Button>
      </div>
    </nav>
  );
}
