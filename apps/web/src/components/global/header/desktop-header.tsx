import { BrandLogo } from "@/components/shared/brand-logo";
import { Button } from "@/components/ui/button";
import { navigationLinks } from "@/data/navigation-links";
import { ArrowRight as GoIcon } from "lucide-react";
import Link from "next/link";
import { NavLink } from "./nav-link";

export function DesktopHeader() {
  return (
    <nav className="mx-auto hidden h-16 max-w-[90rem] items-center justify-between p-4 lg:flex">
      <BrandLogo />
      <ul className="flex items-center gap-8">
        {navigationLinks
          .filter((link) => link.label !== "Contact")
          .map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        <li>
          <Button asChild variant="default" size="sm">
            <Link href="#contact">
              <span>Get in touch</span>
              <GoIcon className="text-muted-foreground" />
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
