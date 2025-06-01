import { MobileMenu } from "./mobile-menu";
import { MobileMenuButton } from "./mobile-menu-button";
import { BrandLogo } from "@/components/shared/brand-logo";
import { LinkButton } from "@/components/ui/link-button";

export function MobileHeader() {
  return (
    <nav className="relative flex h-16 items-center justify-between p-4 md:hidden">
      <div className="flex h-full items-center gap-2">
        <MobileMenuButton />
        <BrandLogo />
      </div>
      <div>
        <LinkButton href="#contact" variant="primary" size="medium">
          Get in touch
        </LinkButton>
      </div>
      <MobileMenu />
    </nav>
  );
}
